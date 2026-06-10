import type { CompileError, ErrorSeverity } from "../../../shared/types";
import { ASTExpressionNode } from "../abstractSyntaxTree/AstExpressionNode";
import { ArrayReassignNode, AssignmentNode, ASTNode, ProgramNode } from "../abstractSyntaxTree/AstNode";
import type { SymbolInfo } from "../SemanticAnalysis/ScopeManager";
import { ExpressionCodeGenerator } from "./ExpressionCodeGenerator";

export type CodeGeneratorEmit = (instruction: string | string[]) => number;
export type CodeGeneratorAddErrorType = (message: string, severity: ErrorSeverity, ctx: ASTNode) => void;
export class CodeGenerator {
    private code: string[] = [];
    public errors: CompileError[] = [];
    private stackPointer: number = 0;
    private instructionCounter: number = 0;

    public constructor(
        private readonly rootNode: ASTNode,
        private variablesList: SymbolInfo[]
    ) {
    }

    private addError: CodeGeneratorAddErrorType = (message, severity, ctx) => {
        this.errors.push({
            column: ctx.column,
            line: ctx.line,
            message,
            severity,
            type: "COMPILATION"
        })
    }


    private emit: CodeGeneratorEmit = (instruction: string | string[]) => {
        if (Array.isArray(instruction)) {
            this.code.push(...instruction)
        } else {
            this.code.push(instruction);
        }
        const counter = this.instructionCounter;
        this.instructionCounter++
        return counter;
    }

    private resolveDataField() {
        if (this.variablesList.length) {
            this.emit(".data")
        }
        this.variablesList.forEach(variable => {
            this.emit(`${variable.assemblyName} : ${new Array(variable.size).fill("0").join(",")}`)
            this.stackPointer += variable.size;
        })
    }

    public generate(): string {
        this.code = [];
        this.resolveDataField();
        this.emit(["", ".text"])
        this.visit(this.rootNode);
        return this.code.join("\n");
    }

    private visit(node: ASTNode) {
        if (node instanceof ProgramNode) {
            this.visitProgramNode(node);
        } else if (node instanceof AssignmentNode) {
            this.visitAssignmentNode(node);
        } else if (node instanceof ASTExpressionNode) {
            this.visitExpressionNode(node);
        }
    }

    private visitExpressionNode(node: ASTExpressionNode, assignSymbol?: SymbolInfo) {
        const expressionCodeGenerator = new ExpressionCodeGenerator(node, this.addError, this.stackPointer, this.emit, assignSymbol);
        const code = expressionCodeGenerator.generate();
        this.emit(code);
    }

    private visitProgramNode(node: ProgramNode) {
        node.instructions.forEach(instruction => {
            this.emit(`#${instruction.originalLine}`)
            this.visit(instruction.node);
            this.emit("")
        })
    }

    private visitAssignmentNode(node: AssignmentNode) {
        this.visitExpressionNode(node.expression, node.variable);
        if (node instanceof ArrayReassignNode) {
            return this.visitArrayReassignNode(node);
        } else if (node.variable.type != "array") {
            this.emit(`sto ${node.variable.assemblyName}`);
        }

    }

    private visitArrayReassignNode(node: ArrayReassignNode) {
        this.emit(`sto ${this.stackPointer}`);
        this.stackPointer++;
        this.visitExpressionNode(node.indexExpression);
        this.emit(`sto $indr`);
        this.stackPointer--;
        this.emit(`ld ${this.stackPointer}`)
        this.emit(`stov ${node.variable.assemblyName}`);
    }
}