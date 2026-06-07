import type { CompileError, ErrorSeverity } from "../../../shared/types";
import { ReadNode } from "../abstractSyntaxTree/AstExpressionNode";
import { ASTNode, PrintNode, ProgramNode } from "../abstractSyntaxTree/AstNode";
import { AssignmentNode } from "../abstractSyntaxTree/AstNode";
import type { SymbolInfo } from "../SemanticAnalysis/ScopeManager";
import { ExpressionCodeGenerator } from "./ExpressionCodeGenerator";

export type CodeGeneratorEmit = (instruction: string | string[]) => void;
export type CodeGeneratorAddErrorType = (message: string, severity: ErrorSeverity, ctx: ASTNode) => void;
export class CodeGenerator {
    private code: string[] = [];
    public errors: CompileError[] = [];
    private stackPointer: number = 0;

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
    }
    
    private resolveDataField(){
        this.emit(".data")
        this.variablesList.forEach(variable => {
            this.emit(`${variable.assemblyName} : 0`)
        })
        this.stackPointer = this.variablesList.length;
    }

    public generate(): string {
        this.code = [];
        this.resolveDataField();
        this.emit(["",".text"])
        this.visit(this.rootNode);
        return this.code.join("\n");
    }

    private visit(node: ASTNode) {
        if (node instanceof ProgramNode) {
            this.visitProgramNode(node);
        } else if (node instanceof AssignmentNode) {
            this.visitAssignmentNode(node);


        } else if (node instanceof PrintNode) {
            this.visitPrintNode(node);

        } else if (node instanceof ReadNode) {
            console.log("READ")

        }
    }

    private visitPrintNode(node : PrintNode){
        const expressionCodeGenerator = new ExpressionCodeGenerator(node.parameter, this.addError, this.stackPointer);
        const code = expressionCodeGenerator.generate();
        this.emit(code);
        this.emit(`sto $out_port`)
    }

    private visitProgramNode(node: ProgramNode){
        node.instructions.forEach(instruction => {
            this.emit(`#${instruction.originalLine}`)
            this.visit(instruction.node);
            this.emit("")
        })
    }

    private visitAssignmentNode(node: AssignmentNode){
        const expressionCodeGenerator = new ExpressionCodeGenerator(node.expression, this.addError, this.stackPointer);
        const code = expressionCodeGenerator.generate();
        this.emit(code);
        this.emit(`sto ${node.variable.assemblyName}`);
    }
}