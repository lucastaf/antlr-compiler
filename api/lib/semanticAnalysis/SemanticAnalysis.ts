import type { ParserRuleContext } from "antlr4ts";
import { Interval } from "antlr4ts/misc/Interval";
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import type { CompileError, ErrorSeverity } from "../../../shared/types";
import { Do_while_loopContext, ElseifContext, If_stmtContext, While_loopContext, type Comando_atribuicao_arrayContext, type Comando_atribuicaoContext, type Comando_declaracaoContext, type Escopo_codigoContext, type ExpressaoContext, type For_loopContext, type Function_declContext, type ProgramContext, type Return_stmtContext } from "../../generated/fsCompiler/FileScriptParser";
import type { FileScriptParserVisitor } from "../../generated/fsCompiler/FileScriptParserVisitor";
import { ASTExpressionNode, UnknownExpressionNode } from "../abstractSyntaxTree/AstExpressionNode";
import { ArrayReassignNode, AssignmentNode, CodeScopeNode, DoWhileLoopNode, IfStmtNode, InvalidNode, ProgramNode, WhileLoopNode, type ASTNode } from "../abstractSyntaxTree/AstNode";
import { ExpressionTypeVisitor } from "./ExpressionSemanticAnalysis";
import { ScopeManager, type SymbolInfo } from "./ScopeManager";
export class SemanticAnalyser extends AbstractParseTreeVisitor<ASTNode> implements FileScriptParserVisitor<ASTNode> {
    private scopeManager: ScopeManager;

    public errors: CompileError[] = [];


    public constructor() {
        super();

        this.scopeManager = new ScopeManager(this.addError);
    }

    public GetVariablesList() {
        return this.scopeManager.GetVariablesList();
    }

    visitExpressao(ctx: ExpressaoContext) {
        const expressionVisitor = new ExpressionTypeVisitor(this.scopeManager, this.addError);
        return expressionVisitor.visit(ctx);
    };

    visitProgram(ctx: ProgramContext) {
        this.scopeManager.beginScope();
        const nodes = ctx.lista_comandos()?.comando()?.map(ctx => {
            const start = ctx.start.startIndex;
            const stop = ctx!.stop!.stopIndex;
            const originalText = ctx.start.inputStream!.getText(new Interval(start, stop));
            const node = this.visitChildren(ctx);
            return {
                node,
                originalLine: originalText
            }
        });
        this.scopeManager.endScope(ctx);
        return new ProgramNode(nodes, ctx);
    };

    private addError = (ctx: ParserRuleContext, message: string, severity: ErrorSeverity) => {
        console.log("ADICIONADO ERROR", message)
        this.errors.push({
            line: ctx.start.line,
            column: ctx.start.charPositionInLine,
            message: message,
            severity: severity,
            type: "SEMANTIC"
        })
    }

    protected defaultResult() {
        return new InvalidNode(undefined);
    }


    private parseVariableAttr(ctx: Comando_atribuicaoContext, isDeclaration: boolean = false) {
        const varName = ctx.VARIABLE().text;
        let varSymbol: SymbolInfo | undefined = undefined;
        if (!isDeclaration) {
            varSymbol = this.scopeManager.resolve(varName, ctx);
        }

        const expressionVisitor = new ExpressionTypeVisitor(this.scopeManager, this.addError);

        const expression = ctx.expressao();
        const expressionNode: ASTExpressionNode = expression ? expressionVisitor.visit(expression) : new UnknownExpressionNode(ctx);

        return {
            varSymbol,
            varName,
            expressionNode
        }
    }

    //#region Declaração de atribuição de variaveis

    visitComando_declaracao(ctx: Comando_declaracaoContext) {
        const isConst = ctx.VARIABLE_DECLARE().text == "const";

        const { expressionNode, varName } = this.parseVariableAttr(ctx.comando_atribuicao(), true);
        const varSymbol = this.scopeManager.define(varName, expressionNode.type, isConst, ctx, expressionNode.size ?? 1);


        if (!varSymbol) {
            return new InvalidNode(ctx);
        }
        const node = this.visitChildren(ctx);
        return node;
    }

    visitComando_atribuicao(ctx: Comando_atribuicaoContext) {
        const { varSymbol, expressionNode } = this.parseVariableAttr(ctx);

        this.scopeManager.assign(varSymbol, expressionNode.type, ctx);

        if (!varSymbol) {
            return new InvalidNode(ctx);
        }

        return new AssignmentNode(varSymbol, expressionNode, ctx);
    };

    visitComando_atribuicao_array(ctx: Comando_atribuicao_arrayContext) {
        const variableName = ctx.array_access().VARIABLE().text;
        const symbol = this.scopeManager.resolve(variableName, ctx);
        if (!symbol) return new InvalidNode(ctx);

        if (symbol?.type != "array") {
            this.addError(ctx, `Variável não é uma array - ${symbol?.name}`, "Error");
        }
        const expressionVisitor = new ExpressionTypeVisitor(this.scopeManager, this.addError);
        const expression = expressionVisitor.visit(ctx.expressao());
        const expressionIndex = expressionVisitor.visit(ctx.array_access().expressao());

        return new ArrayReassignNode(symbol, expression, expressionIndex, ctx);
    };


    //#endregion

    visitEscopo_codigo(ctx: Escopo_codigoContext) {

        this.scopeManager.beginScope();

        const nodes = ctx.lista_comandos()?.comando()?.map(ctx => {
            const start = ctx.start.startIndex;
            const stop = ctx!.stop!.stopIndex;
            const originalText = ctx.start.inputStream!.getText(new Interval(start, stop));
            const node = this.visitChildren(ctx);
            return {
                node,
                originalLine: originalText
            }
        });

        const codeScopeNode = new CodeScopeNode(nodes ?? [], ctx);
        this.scopeManager.endScope(ctx);

        return codeScopeNode;

    };

    //#region branches

    visitIf_stmt(ctx: If_stmtContext) {
        const expressao = this.visitExpressao(ctx.expressao());
        const ifScope = this.visitEscopo_codigo(ctx.escopo_codigo())

        const elseScopeRaw = ctx.elseif() ?? ctx.else();
        const elseScope = elseScopeRaw ? this.visit(elseScopeRaw) : undefined;

        return new IfStmtNode(expressao, ifScope, elseScope, this.scopeManager.getNextLabel(), ctx);
    };

    visitElseif(ctx: ElseifContext) {
        const expressao = this.visitExpressao(ctx.expressao());
        const ifScope = this.visitEscopo_codigo(ctx.escopo_codigo())

        const elseScopeRaw = ctx.elseif() ?? ctx.else();
        const elseScope = elseScopeRaw ? this.visit(elseScopeRaw) : undefined;

        return new IfStmtNode(expressao, ifScope, elseScope, this.scopeManager.getNextLabel(), ctx);
    };

    visitWhile_loop(ctx: While_loopContext) {
        const expression = this.visitExpressao(ctx.expressao());
        const codeScope = this.visitEscopo_codigo(ctx.escopo_codigo());

        return new WhileLoopNode(expression, codeScope, this.scopeManager.getNextLabel(), ctx);
    };

    visitDo_while_loop(ctx: Do_while_loopContext) {
        const expression = this.visitExpressao(ctx.expressao());
        const codeScope = this.visitEscopo_codigo(ctx.escopo_codigo());

        return new DoWhileLoopNode(expression, codeScope, this.scopeManager.getNextLabel(), ctx);

    };

    visitFor_loop(ctx: For_loopContext) {
        this.scopeManager.beginScope();
        this.visitChildren(ctx);
        this.scopeManager.endScope(ctx);

        return new InvalidNode(ctx);
    };

    //#endregion

    //#region Funções
    visitFunction_decl(ctx: Function_declContext) {
        const funcName = ctx.VARIABLE().text;
        this.scopeManager.define(funcName, "function", true, ctx);
        this.scopeManager.resolve(funcName, ctx);
        this.scopeManager.beginScope();
        ctx.lista_parametros()?.VARIABLE()?.map(exp => {
            this.scopeManager.define(exp.text, "any", false, ctx);
        })

        this.visitChildren(ctx);

        this.scopeManager.endScope(ctx);

        return new InvalidNode(ctx);
    };

    visitReturn_stmt(ctx: Return_stmtContext) {
        const expressionVisitor = new ExpressionTypeVisitor(this.scopeManager, this.addError);
        expressionVisitor.visit(ctx.expressao());

        return new InvalidNode(ctx);
    };

    //#endregion
}