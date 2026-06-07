import type { ParserRuleContext } from "antlr4ts";
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import type { CompileError, ErrorSeverity } from "../../../shared/types";
import type { Comando_atribuicaoContext, Comando_declaracaoContext, Escopo_codigoContext, ExpressaoContext, For_loopContext, Function_callContext, Function_declContext, ProgramContext, Return_stmtContext } from "../../generated/fsCompiler/FileScriptParser";
import type { FileScriptParserVisitor } from "../../generated/fsCompiler/FileScriptParserVisitor";
import { ExpressionTypeVisitor } from "./ExpressionHandler";
import { ScopeManager, type SymbolInfo } from "./ScopeManager";
import { AssignmentNode, InvalidNode, PrintNode, ProgramNode, type ASTNode } from "../abstractSyntaxTree/AstNode";
import { ReadNode, UnknownExpressionNode } from "../abstractSyntaxTree/AstExpressionNode";
import { Interval } from "antlr4ts/misc/Interval";
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
            return {
                node: this.visitChildren(ctx),
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

        const expression = expressionVisitor.visit(ctx.expressao());
        const expressionNode = expression ?? new UnknownExpressionNode(ctx);

        return {
            varSymbol,
            varName,
            expressionNode
        }
    }

    //#region Declaração de atribuição de variaveis

    visitComando_declaracao(ctx: Comando_declaracaoContext) {
        const isConst = ctx.VARIABLE_DECLARE().text == "const";

        const { varName, expressionNode } = this.parseVariableAttr(ctx.comando_atribuicao(), true);

        const symbol = this.scopeManager.define(varName, expressionNode.type, isConst, ctx);

        if (!symbol) {
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

    //#endregion

    visitEscopo_codigo(ctx: Escopo_codigoContext) {

        this.scopeManager.beginScope();

        this.visitChildren(ctx)

        this.scopeManager.endScope(ctx);

        return new InvalidNode(ctx);
    };

    //#region loops

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
        this.scopeManager.beginScope();
        ctx.lista_parametros()?.VARIABLE()?.map(exp => {
            this.scopeManager.define(exp.text, "any", false, ctx);
        })

        this.visitChildren(ctx);

        this.scopeManager.endScope(ctx);

        return new InvalidNode(ctx);
    };

    visitFunction_call(ctx: Function_callContext) {
        const funcName = ctx.VARIABLE().text;
        const expressionVisitor = new ExpressionTypeVisitor(this.scopeManager, this.addError);
        const firstParameter = ctx.lista_expressoes?.()?.expressao()?.at(0);
        if (!firstParameter) {
            return new InvalidNode(ctx);
        }

        if (funcName == "read") {
            return new ReadNode(ctx);
        }
        if (funcName == "print") {
            return new PrintNode(expressionVisitor.visit(firstParameter), ctx);
        }
        const symbol = this.scopeManager.resolve(funcName, ctx);
        if (symbol?.type != "function") this.addError(ctx, `${funcName} não é uma função`, "Warning")
        ctx.lista_expressoes()?.expressao()?.map(ex => {
            expressionVisitor.visit(ex);
        })

        return new InvalidNode(ctx);
    };

    visitReturn_stmt(ctx: Return_stmtContext) {
        const expressionVisitor = new ExpressionTypeVisitor(this.scopeManager, this.addError);
        expressionVisitor.visit(ctx.expressao());

        return new InvalidNode(ctx);
    };

    //#endregion
}