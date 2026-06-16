import type { CompileError, ErrorSeverity } from '@antlr-compiler/shared/types'
import { ASTExpressionNode } from '../abstract-syntax-tree/AstExpressionNode'
import {
  ArrayReassignNode,
  type ASTNode,
  AssignmentNode,
  CodeScopeNode,
  DoWhileLoopNode,
  ForLoopNode,
  FunctionNode,
  IfStmtNode,
  InvalidNode,
  ProgramNode,
  ReturnNode,
  WhileLoopNode,
} from '../abstract-syntax-tree/AstNode'
import type { SymbolInfo } from '../semantic-analysis/ScopeManager'
import { ExpressionCodeGenerator } from './ExpressionCodeGenerator'

const { FunctionCodeGenerator } = await import('./FunctionCodeGenerator')

export type CodeGeneratorEmit = (instruction: string) => number
export type CodeGeneratorAddErrorType = (message: string, severity: ErrorSeverity, ctx: ASTNode) => void
export class CodeGenerator {
  private code: string[] = []
  public errors: CompileError[] = []
  protected instructionCounter: number = 0
  protected staticStackPointer: number = 0
  protected stackPointerAddr!: SymbolInfo
  protected tempVariableAddr!: SymbolInfo
  protected stackInitAddr: number = 0

  public constructor(
    protected readonly rootNode: ProgramNode,
    private variablesList: SymbolInfo[],
  ) {}

  //#region start

  public generate(): string {
    this.code = []
    this.resolveDataField()
    this.emitComment('')
    this.emitComment('.text')
    this.emitComment(`#Stack top -> ${this.stackInitAddr + 1}`)

    const notFunctionInstructions: Array<{ node: ASTNode; originalLine: string }> = []
    const functionInstructions: Array<{ node: ASTNode; originalLine: string }> = []
    for (const instruction of this.rootNode.instructions) {
      if (instruction.node instanceof FunctionNode) {
        functionInstructions.push(instruction)
      } else {
        notFunctionInstructions.push(instruction)
      }
    }
    const rootNodeNotFunctions = new ProgramNode(notFunctionInstructions, this.variablesList, this.rootNode.ctx)
    const rootNodeFunctions = new ProgramNode(functionInstructions, this.variablesList, this.rootNode.ctx)

    this.emitCode(`jmp main`)
    this.visit(rootNodeFunctions)
    this.emitComment(`main:`)
    this.visit(rootNodeNotFunctions)
    return this.code.join('\n')
  }

  private resolveDataField() {
    if (this.variablesList.length) {
      this.emitComment('.data')
    }
    this.variablesList.forEach((variable) => {
      if (variable.type === 'function') return
      this.emitComment(`${variable.assemblyName} : ${new Array(variable.size).fill('0').join(',')}`)
      this.staticStackPointer += variable.size
    })
    this.stackPointerAddr = this.variablesList.at(-2)!
    this.tempVariableAddr = this.variablesList.at(-1)!
    this.stackInitAddr = this.staticStackPointer + 3
  }
  //#endregion

  //#region stack
  private incrementStaticStack() {
    this.staticStackPointer++
    if (this.staticStackPointer >= this.stackInitAddr) {
      this.addError(
        'PANIC: STACK POINTER ESTATICO ULTRAPASSOU O STACK, CÓDIGO GERADO É IMPREVISIVEL',
        'Error',
        new InvalidNode(undefined),
      )
      console.error('ERRO NO GERADOR, STACK INIT FOI ULTRAPASSADO')
    }
  }

  private decrementStaticStack() {
    this.staticStackPointer--
  }

  //#endregion

  //#region Emits
  protected addError: CodeGeneratorAddErrorType = (message, severity, ctx) => {
    this.errors.push({
      column: ctx.column,
      line: ctx.line,
      message,
      severity,
      type: 'COMPILATION',
    })
  }

  protected emitCode: CodeGeneratorEmit = (instruction: string) => {
    this.code.push(instruction)

    const counter = this.instructionCounter

    this.instructionCounter++

    return counter
  }

  protected emitComment: CodeGeneratorEmit = (instruction: string) => {
    const parts = instruction.split('\n')
    this.code.push(parts[0])
    return this.instructionCounter
  }
  //#endregion

  //#region visits
  protected visit(node: ASTNode) {
    if (node instanceof ProgramNode) {
      this.visitProgramNode(node)
    } else if (node instanceof AssignmentNode) {
      this.visitAssignmentNode(node)
    } else if (node instanceof ASTExpressionNode) {
      this.visitExpressionNode(node)
    } else if (node instanceof CodeScopeNode) {
      this.visitCodeScopeNode(node)
    } else if (node instanceof IfStmtNode) {
      this.visitIfStmt(node)
    } else if (node instanceof WhileLoopNode) {
      this.visitWhileLoop(node)
    } else if (node instanceof DoWhileLoopNode) {
      this.visitDoWhileLoop(node)
    } else if (node instanceof ForLoopNode) {
      this.visitForLoop(node)
    } else if (node instanceof ReturnNode) {
      this.visitReturnNode(node)
    } else if (node instanceof FunctionNode) {
      this.visitFunctionNode(node)
    }
  }

  protected visitExpressionNode(node: ASTExpressionNode, assignSymbol?: SymbolInfo) {
    const expressionCodeGenerator = new ExpressionCodeGenerator(
      node,
      this.addError,
      this.staticStackPointer,
      this.emitCode,
      this.emitComment,
      this.stackPointerAddr,
      this.tempVariableAddr,
      this.stackInitAddr,
      assignSymbol,
    )
    expressionCodeGenerator.generate()
  }

  protected visitAssignmentNode(node: AssignmentNode) {
    this.visitExpressionNode(node.expression, node.variable)
    if (node instanceof ArrayReassignNode) {
      return this.visitArrayReassignNode(node)
    } else if (node.variable.type !== 'array') {
      this.emitCode(`sto ${node.variable.assemblyName}`)
    }
  }

  protected visitArrayReassignNode(node: ArrayReassignNode) {
    this.emitCode(`sto ${this.staticStackPointer}`)
    this.incrementStaticStack()
    this.visitExpressionNode(node.indexExpression)
    this.emitCode(`sto $indr`)
    this.decrementStaticStack()
    this.emitCode(`ld ${this.staticStackPointer}`)
    this.emitCode(`stov ${node.variable.assemblyName}`)
  }

  //#endregion

  //#region codeScopes
  protected visitProgramNode(node: ProgramNode) {
    this.codeScopeHandler(node)
    this.emitCode('hlt')
  }

  protected visitCodeScopeNode(node: CodeScopeNode) {
    this.codeScopeHandler(node)
  }

  protected codeScopeHandler(node: CodeScopeNode) {
    node.instructions.forEach((instruction) => {
      if (!(instruction.node instanceof CodeScopeNode)) {
        this.emitComment(`#${instruction.originalLine}`)
      } else {
        this.emitComment('#{')
      }
      this.visit(instruction.node)
      if (!(instruction.node instanceof CodeScopeNode)) {
        this.emitComment('')
      } else {
        this.emitComment('#}')
        this.emitComment('')
      }
    })
  }

  //#endregion

  //#region branches
  protected visitIfStmt(node: IfStmtNode) {
    this.visit(node.expression)
    this.emitCode('ori  0')
    this.emitCode(`beq ${node.label}_false`)
    this.visit(node.codeScope)
    this.emitCode(`jmp ${node.label}_continue`)
    this.emitComment(`${node.label}_false:`)
    if (node.elseScope) {
      this.visit(node.elseScope)
    }
    this.emitComment(`${node.label}_continue:`)
  }

  protected visitWhileLoop(node: WhileLoopNode) {
    this.emitComment(`${node.label}_START:`)
    this.visit(node.expression)
    this.emitCode('ori  0')
    this.emitCode(`beq ${node.label}_CONTINUE`)
    this.visit(node.codeScope)
    this.emitCode(`jmp ${node.label}_START`)
    this.emitComment(`${node.label}_CONTINUE:`)
  }

  protected visitDoWhileLoop(node: DoWhileLoopNode) {
    this.emitComment(`${node.label}_START:`)
    this.visit(node.codeScope)
    this.visit(node.expression)
    this.emitCode('ori  0')
    this.emitCode(`bne ${node.label}_START`)
  }

  protected visitForLoop(node: ForLoopNode) {
    this.visit(node.firstExecutionNode)
    this.emitComment(`${node.label}_START:`)
    this.visit(node.expression)
    this.emitCode('ori  0')
    this.emitCode(`beq ${node.label}_CONTINUE`)

    this.visit(node.codeScope)
    this.visit(node.perIterationNode)
    this.emitCode(`jmp ${node.label}_START`)
    this.emitComment(`${node.label}_CONTINUE:`)
  }

  //#endregion

  //#region Functions
  protected visitFunctionNode(node: FunctionNode) {
    const codeGenerator = new FunctionCodeGenerator(
      this.addError,
      this.emitCode,
      this.emitComment,
      node.parameters ?? [],
      node.variablesInScope ?? [],
      this.instructionCounter,
      this.staticStackPointer,
      this.stackPointerAddr,
      this.tempVariableAddr,
      this.stackInitAddr,
      node.codeScope,
      this.variablesList,
    )
    this.emitComment(`func_${node.symbol.assemblyName}:`)
    codeGenerator.GenerateFunction()
  }

  protected visitReturnNode(node: ReturnNode) {
    this.addError('Return fora de escopo de função', 'Error', node)
    this.emitComment('#Return inválido - fora de escopo de função')
  }

  //#endregion
}
