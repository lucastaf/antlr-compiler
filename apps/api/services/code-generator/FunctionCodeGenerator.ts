import type { ASTExpressionNode, FunctionCallNode } from '../abstract-syntax-tree/AstExpressionNode'
import { type CodeScopeNode, ReturnNode } from '../abstract-syntax-tree/AstNode'
import type { SymbolInfo } from '../semantic-analysis/ScopeManager'
import { CodeGenerator, type CodeGeneratorAddErrorType, type CodeGeneratorEmit } from './CodeGenerator'
import { ExpressionCodeGenerator } from './ExpressionCodeGenerator'

export class FunctionCodeGenerator extends CodeGenerator {
  constructor(
    addError: CodeGeneratorAddErrorType,
    emitCode: CodeGeneratorEmit,
    emitComment: CodeGeneratorEmit,
    private parameters: SymbolInfo[],
    private variablesInScope: SymbolInfo[],
    instructionCounter: number = 0,
    staticStackPointer: number,
    stackPointerAddr: SymbolInfo,
    tempVariableAddr: SymbolInfo,
    stackInitAddr: number = 0,
    rootNode: CodeScopeNode,
    variablesList: SymbolInfo[],
  ) {
    super(rootNode, variablesList)
    this.addError = addError
    this.emitCode = emitCode
    this.emitComment = emitComment
    this.instructionCounter = instructionCounter
    this.staticStackPointer = staticStackPointer
    this.stackPointerAddr = stackPointerAddr
    this.tempVariableAddr = tempVariableAddr
    this.stackInitAddr = stackInitAddr
  }

  public GenerateFunction() {
    this.parameters.toReversed().forEach((parameter) => {
      this.pop(parameter.assemblyName);
    })

    this.visit(this.rootNode)

    if (!(this.rootNode as CodeScopeNode).instructions.some((instruction) => instruction instanceof ReturnNode)) {
      this.emitCode(`ldi 0`)
      this.emitCode(`return`)
    }
  }

  protected override visitExpressionNode(node: ASTExpressionNode, assignSymbol?: SymbolInfo) {
    const expressionCodeGenerator = new InFunctionExpressionCodeGenerator(
      node,
      this.addError,
      this.staticStackPointer,
      this.emitCode,
      this.emitComment,
      this.stackPointerAddr,
      this.tempVariableAddr,
      this.stackInitAddr,
      this.push,
      this.pop,
      assignSymbol,
      this.variablesInScope,
    )
    expressionCodeGenerator.generate()
  }

  protected override visitReturnNode(node: ReturnNode) {
    this.visit(node.returnValue)
    this.emitCode(`return`)
  }
}

class InFunctionExpressionCodeGenerator extends ExpressionCodeGenerator {
  constructor(
    RootNode: ASTExpressionNode,
    addError: CodeGeneratorAddErrorType,
    stackPointer: number,
    emitCode: CodeGeneratorEmit,
    emitComment: CodeGeneratorEmit,
    stackPointerAddr: SymbolInfo,
    tempVariableAddr: SymbolInfo,
    stackInitAddr: number,
    push: (assemblyName: string | number) => void,
    pop: CodeGenerator["pop"],
    assignSymbol: SymbolInfo | undefined,
    private variablesInScope: SymbolInfo[],
  ) {
    super(
      RootNode,
      addError,
      stackPointer,
      emitCode,
      emitComment,
      stackPointerAddr,
      tempVariableAddr,
      stackInitAddr,
      push,
      pop,
      assignSymbol,
    )
  }

  protected visitFunctionCallNode(node: FunctionCallNode) {
    this.variablesInScope.forEach((variable) => {
      this.push(variable.assemblyName)
    })

    this.push(this.stackInitAddr - 3 + " #stackInit - 3");
    this.push(this.stackInitAddr - 2 + " #stackInit - 2");
    this.push(this.stackInitAddr - 1 + " #stackInit - 1");
    node.parameters.forEach((parameter) => {
      this.visit(parameter)
      this.emitCode(`sto ${this.tempVariableAddr.assemblyName}`)
      this.push(this.tempVariableAddr.assemblyName)
    })

    this.emitCode(`call func_${node.functionInfo.assemblyName}`)


    this.pop(this.stackInitAddr - 1 + " #stackInit - 1", true);
    this.pop(this.stackInitAddr - 2 + " #stackInit - 2");
    this.pop(this.stackInitAddr - 3 + " #stackInit - 3");
    this.variablesInScope.toReversed().forEach((variable) => {
      this.pop(variable.assemblyName)
    })
  }
}
