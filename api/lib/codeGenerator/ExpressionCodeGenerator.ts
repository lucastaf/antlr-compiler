import { ArrayAccessExpression, ArrayExpression, ASTExpressionNode, CharLiteral, LogicOperation, MathOperation, NumberLiteral, PrintNode, ReadNode, StringLiteral, SymbolNode, UnaryOperator, type mathOperator } from "../abstractSyntaxTree/AstExpressionNode";
import type { SymbolInfo } from "../SemanticAnalysis/ScopeManager";
import type { CodeGeneratorAddErrorType, CodeGeneratorEmit } from "./CodeGenerator";

export class ExpressionCodeGenerator {
    private code: string[] = [];
    public constructor(private readonly RootNode: ASTExpressionNode,
        private readonly addError: CodeGeneratorAddErrorType,
        private stackPointer: number,
        private assignSymbol?: SymbolInfo
    ) { }

    private readonly emit: CodeGeneratorEmit = (instruction) => {
        if (Array.isArray(instruction)) {
            this.code.push(...instruction)
        } else {
            this.code.push(instruction);
        }
    }
    public generate() {
        this.visit(this.RootNode);
        return this.code;
    }

    private visit(node: ASTExpressionNode): void {
        if (node instanceof SymbolNode) {
            this.visitSymbolNode(node);
        } else if (node instanceof NumberLiteral) {
            this.visitNumberLiteral(node);
        } else if (node instanceof ArrayExpression) {
            this.visitArrayExpression(node);
        }
        else if (node instanceof ArrayAccessExpression) {
            this.visitArrayAccessExpression(node);
        } else if (node instanceof UnaryOperator) {
            this.visitUnaryOperator(node);
        } else if (node instanceof MathOperation) {
            this.visitMathOperator(node);
        } else if (node instanceof ReadNode) {
            this.visitReadNode(node);
        } else if (node instanceof PrintNode) {
            this.visitPrintNode(node);
        } else if (node instanceof LogicOperation) {
            this.visitLogicOperator(node);
        } else if (node instanceof StringLiteral) {
            this.addError("Geração de string não implementada", "Error", node);
        } else if (node instanceof CharLiteral) {
            this.addError("Geração de char não implementada", "Error", node);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private visitReadNode(_node: ReadNode) {
        this.emit("ld $in_port")
    }

    private visitUnaryOperator(node: UnaryOperator) {
        this.visit(node.operand);
        this.emit(`not`);
    }

    private visitPrintNode(node: PrintNode) {
        this.visit(node.parameter);
        this.emit(`sto $out_port`)
    }

    private visitSymbolNode(node: SymbolNode) {
        this.emit(`ld ${node.symbol.assemblyName}`);
    }

    private visitNumberLiteral(node: NumberLiteral) {
        this.emit(`ldi ${node.value}`);
    }

    private visitLogicOperator(node: LogicOperation) {
        this.handleMathOperation(node.left, "-", node.right, node);
        switch (node.operator) {
            case ">":
                this.emit(`bgt ${node.label}_true`)
                break;
            case "<":
                this.emit(`blt ${node.label}_true`)
                break;
            case "<=":
                this.emit(`ble ${node.label}_true`)
                break;
            case ">=":
                this.emit(`bge ${node.label}_true`)
                break;
            case "==":
                this.emit(`beq ${node.label}_true`)
                break;
            case "!=":
                this.emit(`bne ${node.label}_true`)
                break;
            case "&&":
                this.addError("Operação AND não suportada", "Error", node);
                break;
            case "||":
                this.addError("Operação OR não suportada", "Error", node);
                break;
        }
        this.emit("ldi 0");
        this.emit(`jmp ${node.label}_CONTINUE`)
        this.emit(`${node.label}_TRUE:`)
        this.emit("ldi 1")
        this.emit(`${node.label}_CONTINUE:`)
    }

    private visitMathOperator(node: MathOperation) {
        this.handleMathOperation(node.left, node.operator, node.right, node);
    }

    private handleMathOperation(left: ASTExpressionNode, operation: mathOperator, right: ASTExpressionNode, node: ASTExpressionNode) {
        this.visit(left);
        this.emit(`sto ${this.stackPointer}`);
        this.stackPointer++;
        this.visit(right);
        this.emit(`sto ${this.stackPointer}`);
        this.stackPointer--;
        this.emit(`ld ${this.stackPointer}`)
        switch (operation) {
            case "+":
                this.emit(`add ${this.stackPointer + 1}`)
                break;
            case "-":
                this.emit(`sub ${this.stackPointer + 1}`)
                break;
            case "*":
                this.addError("Operação não suportada - *", "Error", node);
                break;
            case "/":
                this.addError("Operação não suportada - /", "Error", node);
                break;
            case "%":
                this.addError("Operação não suportada - %", "Error", node);
                break;
            case "<<":
                this.emit(`sll ${this.stackPointer + 1}`)
                break;
            case ">>":
                this.emit(`srl ${this.stackPointer + 1}`)
                break;
            case "&":
                this.emit(`and ${this.stackPointer + 1}`)
                break;
            case "|":
                this.emit(`or ${this.stackPointer + 1}`)
                break;
            case "^":
                this.emit(`xor ${this.stackPointer + 1}`)
                break;
        }
    }

    private visitArrayExpression(node: ArrayExpression) {
        node.expressions.forEach((expression, index) => {
            if (!this.assignSymbol) {
                this.addError("Variavel de atribuição não identificada", "Error", node);
                return;

            }
            this.emit(`ldi ${index}`)
            this.emit(`sto $indr`)
            this.visit(expression);
            this.emit(`stov ${this.assignSymbol.assemblyName}`)
        })
    }

    private visitArrayAccessExpression(node: ArrayAccessExpression) {
        this.visit(node.indexExpression);
        this.emit(`sto $indr`)
        this.emit(`ldv ${node.symbol.assemblyName}`);
    }
}