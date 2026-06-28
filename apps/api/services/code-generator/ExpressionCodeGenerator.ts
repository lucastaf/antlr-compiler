import {
  ArrayAccessExpression,
  ArrayExpression,
  type ASTExpressionNode,
  CharLiteral,
  FunctionCallNode,
  LogicOperation,
  MathOperation,
  type mathOperator,
  NumberLiteral,
  PrintNode,
  ReadNode,
  StringLiteral,
  SymbolNode,
  UnaryOperator,
} from '../abstract-syntax-tree/AstExpressionNode'
import type { SymbolInfo } from '../semantic-analysis/ScopeManager'
import type { CodeGenerator, CodeGeneratorAddErrorType, CodeGeneratorEmit } from './CodeGenerator'

export class ExpressionCodeGenerator {
  private code: string[] = []
  public constructor(
    protected readonly RootNode: ASTExpressionNode,
    protected readonly addError: CodeGeneratorAddErrorType,
    protected staticStackPointer: number,
    protected emitCode: CodeGeneratorEmit,
    protected emitComment: CodeGeneratorEmit,
    protected stackPointerAddr: SymbolInfo,
    protected tempVariableAddr: SymbolInfo,
    protected stackInitAddr: number,
    protected push: (assemblyName: string | number) => void,
    protected pop: CodeGenerator["pop"],
    protected assignSymbol?: SymbolInfo,
  ) { }

  public generate() {
    this.visit(this.RootNode)
    return this.code
  }

  protected visit(node: ASTExpressionNode): void {
    if (node instanceof SymbolNode) {
      this.visitSymbolNode(node)
    } else if (node instanceof NumberLiteral) {
      this.visitNumberLiteral(node)
    } else if (node instanceof ArrayExpression) {
      this.visitArrayExpression(node)
    } else if (node instanceof ArrayAccessExpression) {
      this.visitArrayAccessExpression(node)
    } else if (node instanceof UnaryOperator) {
      this.visitUnaryOperator(node)
    } else if (node instanceof MathOperation) {
      this.visitMathOperator(node)
    } else if (node instanceof ReadNode) {
      this.visitReadNode(node)
    } else if (node instanceof PrintNode) {
      this.visitPrintNode(node)
    } else if (node instanceof LogicOperation) {
      this.visitLogicOperator(node)
    } else if (node instanceof StringLiteral) {
      this.addError('Geração de string não implementada', 'Error', node)
    } else if (node instanceof CharLiteral) {
      this.addError('Geração de char não implementada', 'Error', node)
    } else if (node instanceof FunctionCallNode) {
      this.visitFunctionCallNode(node)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private visitReadNode(_node: ReadNode) {
    this.emitCode('ld $in_port')
  }

  private visitUnaryOperator(node: UnaryOperator) {
    this.visit(node.operand)
    this.emitCode(`not`)
  }

  private visitPrintNode(node: PrintNode) {
    this.visit(node.parameter)
    this.emitCode(`sto $out_port`)
  }

  private visitSymbolNode(node: SymbolNode) {
    this.emitCode(`ld ${node.symbol.assemblyName}`)
  }

  private visitNumberLiteral(node: NumberLiteral) {
    this.emitCode(`ldi ${node.value}`)
  }

  private visitLogicOperator(node: LogicOperation) {
    const lastLine = this.handleMathOperation(node.left, '-', node.right, node) //0
    const trueLine = lastLine + 4
    switch (node.operator) {
      case '>':
        this.emitCode(`bgt ${trueLine}`) //1
        break
      case '<':
        this.emitCode(`blt ${trueLine}`)
        break
      case '<=':
        this.emitCode(`ble ${trueLine}`)
        break
      case '>=':
        this.emitCode(`bge ${trueLine}`)
        break
      case '==':
        this.emitCode(`beq ${trueLine}`)
        break
      case '!=':
        this.emitCode(`bne ${trueLine}`)
        break
      case '&&':
        this.addError('Operação AND não suportada', 'Error', node)
        break
      case '||':
        this.addError('Operação OR não suportada', 'Error', node)
        break
    }
    const continueLine = lastLine + 5
    this.emitCode('ldi 0') //2
    this.emitCode(`jmp ${continueLine}`) //3
    this.emitCode('ldi 1') //4
  }

  private visitMathOperator(node: MathOperation) {
    this.handleMathOperation(node.left, node.operator, node.right, node)
  }

  private handleMathOperation(
    left: ASTExpressionNode,
    operation: mathOperator,
    right: ASTExpressionNode,
    node: ASTExpressionNode,
  ): number {
    this.visit(left)
    this.emitCode(`sto ${this.staticStackPointer}`)
    this.staticStackPointer++
    this.visit(right)
    this.emitCode(`sto ${this.staticStackPointer}`)
    this.staticStackPointer--
    this.emitCode(`ld ${this.staticStackPointer}`)
    switch (operation) {
      case '+':
        return this.emitCode(`add ${this.staticStackPointer + 1}`)
      case '-':
        return this.emitCode(`sub ${this.staticStackPointer + 1}`)
      case '*':
        this.addError('Operação não suportada - *', 'Error', node)
        break
      case '/':
        this.addError('Operação não suportada - /', 'Error', node)
        return 0
      case '%':
        this.addError('Operação não suportada - %', 'Error', node)
        return 0
      case '<<':
        return this.emitCode(`sll ${this.staticStackPointer + 1}`)
      case '>>':
        return this.emitCode(`srl ${this.staticStackPointer + 1}`)
      case '&':
        return this.emitCode(`and ${this.staticStackPointer + 1}`)
      case '|':
        return this.emitCode(`or ${this.staticStackPointer + 1}`)
      case '^':
        return this.emitCode(`xor ${this.staticStackPointer + 1}`)
    }
    return 0
  }

  private visitArrayExpression(node: ArrayExpression) {
    node.expressions.forEach((expression, index) => {
      if (!this.assignSymbol) {
        this.addError('Variavel de atribuição não identificada', 'Error', node)
        return
      }
      this.emitCode(`ldi ${index}`)
      this.emitCode(`sto $indr`)
      this.visit(expression)
      this.emitCode(`stov ${this.assignSymbol.assemblyName}`)
    })
  }

  private visitArrayAccessExpression(node: ArrayAccessExpression) {
    this.visit(node.indexExpression)
    this.emitCode(`sto $indr`)
    this.emitCode(`ldv ${node.symbol.assemblyName}`)
  }

  protected visitFunctionCallNode(node: FunctionCallNode) {
    node.parameters.forEach((parameter) => {
      this.visit(parameter)
      this.emitCode(`sto ${this.tempVariableAddr.assemblyName}`)
      this.push(this.tempVariableAddr.assemblyName)
    })

    this.emitCode(`call func_${node.functionInfo.assemblyName}`)
  }
}
