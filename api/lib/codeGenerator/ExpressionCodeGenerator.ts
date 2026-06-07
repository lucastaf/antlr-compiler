import { ArrayLiteral, ASTExpressionNode, CharLiteral, LogicExpression, MathOperator, NumberLiteral, PrintNode, ReadNode, StringLiteral, SymbolNode, UnaryOperator, UnknownExpressionNode } from "../abstractSyntaxTree/AstExpressionNode";
import { InvalidNode } from "../abstractSyntaxTree/AstNode";
import type { CodeGeneratorAddErrorType, CodeGeneratorEmit } from "./CodeGenerator";

export class ExpressionCodeGenerator {
    private code: string[] = [];
    public constructor(private readonly RootNode: ASTExpressionNode,
        private readonly addError: CodeGeneratorAddErrorType,
        private stackPointer: number
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
        } else if (node instanceof StringLiteral) {
            this.addError("Geração de string não implementada", "Error", node);
        } else if (node instanceof CharLiteral) {
            this.addError("Geração de char não implementada", "Error", node);
        } else if (node instanceof ArrayLiteral) {
            this.addError("Geração de array não implementada", "Error", node);
        } else if (node instanceof UnaryOperator) {
            this.visitUnaryOperator(node);
        } else if (node instanceof MathOperator) {
            this.visitMathOperator(node);
        } else if (node instanceof LogicExpression) {
            return;
        } else if (node instanceof ReadNode) {
            this.visitReadNode(node);
        } else if (node instanceof PrintNode) {
            this.visitPrintNode(node);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private visitReadNode(_node: ReadNode) {
        this.emit("ld $in_port")
    }

    private visitUnaryOperator(node: UnaryOperator){
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

    private visitMathOperator(node: MathOperator) {
        this.visit(node.left);
        this.emit(`sto ${this.stackPointer}`);
        this.stackPointer++;
        this.visit(node.right);
        this.emit(`sto ${this.stackPointer}`);
        this.stackPointer--;
        this.emit(`ld ${this.stackPointer}`)
        switch (node.operator) {
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
}