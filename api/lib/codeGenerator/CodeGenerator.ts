import type { CompileError, ErrorSeverity } from "../../../shared/types";
import { ASTExpressionNode } from "../abstractSyntaxTree/AstExpressionNode";
import { ArrayReassignNode, AssignmentNode, ASTNode, CodeScopeNode, DoWhileLoopNode, IfStmtNode, ProgramNode, WhileLoopNode } from "../abstractSyntaxTree/AstNode";
import type { SymbolInfo } from "../semanticAnalysis/ScopeManager";
import { ExpressionCodeGenerator } from "./ExpressionCodeGenerator";

export type CodeGeneratorEmit = (instruction: string) => number;
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


    private emitCode: CodeGeneratorEmit = (instruction: string) => {
        this.code.push(instruction);

        const counter = this.instructionCounter;

        this.instructionCounter++

        return counter;
    }

    private emitComment: CodeGeneratorEmit = (instruction: string) => {
        const parts = instruction.split("\n");
        this.code.push(parts[0]);
        return this.instructionCounter;
    }
    private resolveDataField() {
        if (this.variablesList.length) {
            this.emitComment(".data")
        }
        this.variablesList.forEach(variable => {
            this.emitComment(`${variable.assemblyName} : ${new Array(variable.size).fill("0").join(",")}`)
            this.stackPointer += variable.size;
        })
    }

    public generate(): string {
        this.code = [];
        this.resolveDataField();
        this.emitComment("")
        this.emitComment(".text")
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
        } else if (node instanceof CodeScopeNode) {
            this.visitCodeScopeNode(node);
        } else if (node instanceof IfStmtNode) {
            this.visitIfStmt(node);
        } else if (node instanceof WhileLoopNode) {
            this.visitWhileLoop(node);
        } else if (node instanceof DoWhileLoopNode) {
            this.visitDoWhileLoop(node);
        }
    }

    private visitExpressionNode(node: ASTExpressionNode, assignSymbol?: SymbolInfo) {
        const expressionCodeGenerator = new ExpressionCodeGenerator(node, this.addError, this.stackPointer, this.emitCode, this.emitComment, assignSymbol);
        expressionCodeGenerator.generate();
    }



    private visitAssignmentNode(node: AssignmentNode) {
        this.visitExpressionNode(node.expression, node.variable);
        if (node instanceof ArrayReassignNode) {
            return this.visitArrayReassignNode(node);
        } else if (node.variable.type != "array") {
            this.emitCode(`sto ${node.variable.assemblyName}`);
        }

    }

    private visitArrayReassignNode(node: ArrayReassignNode) {
        this.emitCode(`sto ${this.stackPointer}`);
        this.stackPointer++;
        this.visitExpressionNode(node.indexExpression);
        this.emitCode(`sto $indr`);
        this.stackPointer--;
        this.emitCode(`ld ${this.stackPointer}`)
        this.emitCode(`stov ${node.variable.assemblyName}`);
    }

    //#region codeScopes
    private visitProgramNode(node: ProgramNode) {
        this.codeScopeHandler(node);
        this.emitCode("hlt")
    }

    private visitCodeScopeNode(node: CodeScopeNode) {
        this.codeScopeHandler(node);
    }

    private codeScopeHandler(node: CodeScopeNode) {
        node.instructions.forEach(instruction => {
            if (!(instruction.node instanceof CodeScopeNode)) {
                this.emitComment(`#${instruction.originalLine}`)
            } else {
                this.emitComment("#{")
            }
            this.visit(instruction.node);
            if (!(instruction.node instanceof CodeScopeNode)) {
                this.emitComment("")
            } else {
                this.emitComment("#}")
                this.emitComment("")
            }
        })
    }

    //#endregion

    //#region branches
    private visitIfStmt(node: IfStmtNode) {
        this.visit(node.expression);
        this.emitCode("ori  0")
        this.emitCode(`beq ${node.label}_false`)
        this.visit(node.codeScope);
        this.emitCode(`jmp ${node.label}_continue`)
        this.emitComment(`${node.label}_false:`)
        if (node.elseScope) {
            this.visit(node.elseScope);
        }
        this.emitComment(`${node.label}_continue:`)

    }

    private visitWhileLoop(node: WhileLoopNode) {
        this.emitComment(`${node.label}_START:`)
        this.visit(node.expression);
        this.emitCode("ori  0")
        this.emitCode(`beq ${node.label}_CONTINUE`)
        this.visit(node.codeScope);
        this.emitCode(`jmp ${node.label}_START`)
        this.emitComment(`${node.label}_CONTINUE:`)

    }

    private visitDoWhileLoop(node: DoWhileLoopNode) {
        this.emitComment(`${node.label}_START:`)
        this.visit(node.codeScope);
        this.visit(node.expression);
        this.emitCode("ori  0")
        this.emitCode(`bne ${node.label}_START`)
    }

    //#endregion

}