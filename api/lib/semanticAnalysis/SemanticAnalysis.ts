import type { ParserRuleContext } from "antlr4ts";
import { Interval } from "antlr4ts/misc/Interval";
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import type { CompileError, ErrorSeverity } from "../../../shared/types";
import type { Comando_atribuicaoContext, Comando_declaracaoContext, Escopo_codigoContext, ExpressaoContext, For_loopContext, Function_declContext, ProgramContext, Return_stmtContext } from "../../generated/fsCompiler/FileScriptParser";
import type { FileScriptParserVisitor } from "../../generated/fsCompiler/FileScriptParserVisitor";
import { ArrayExpression, ASTExpressionNode, UnknownExpressionNode } from "../abstractSyntaxTree/AstExpressionNode";
import { AssignmentNode, InvalidNode, ProgramNode, type ASTNode } from "../abstractSyntaxTree/AstNode";
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


    private parseVariableAttr(ctx: Comando_atribuicaoContext, isDeclaration: boolean = false, isConst: boolean = false) {
        const varName = ctx.VARIABLE().text;
        let varSymbol: SymbolInfo | undefined = undefined;
        if (!isDeclaration) {
            varSymbol = this.scopeManager.resolve(varName, ctx);
        }

        const expressionVisitor = new ExpressionTypeVisitor(this.scopeManager, this.addError);

        const expression = ctx.expressao();
        const array = ctx.array();



        let expressionNode: ASTExpressionNode = new UnknownExpressionNode(ctx);
        if (expression) {
            expressionNode = expressionVisitor.visit(expression);
            if (isDeclaration) {
                varSymbol = this.scopeManager.define(varName, expressionNode.type, isConst, ctx, 1);
            }
        }
        if (array) {
            const expressions =
                array.lista_expressoes()?.expressao().map(expression =>
                    expressionVisitor.visit(expression)
                ) ?? [];

            if (isDeclaration) {
                varSymbol = this.scopeManager.define(varName, "array", isConst, ctx, array.lista_expressoes()?.expressao()?.length);
            }
            expressionNode = new ArrayExpression(expressions, varSymbol!, ctx);


        }



        return {
            varSymbol,
            varName,
            expressionNode
        }
    }

    //#region Declaração de atribuição de variaveis

    visitComando_declaracao(ctx: Comando_declaracaoContext) {
        const isConst = ctx.VARIABLE_DECLARE().text == "const";

        const { varSymbol } = this.parseVariableAttr(ctx.comando_atribuicao(), true, isConst);


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