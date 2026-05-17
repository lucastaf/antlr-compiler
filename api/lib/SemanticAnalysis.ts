import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import type { Comando_atribuicaoContext, Comando_declaracaoContext, Escopo_codigoContext } from "../generated/fsCompiler/FileScriptParser";
import type { FileScriptParserVisitor } from "../generated/fsCompiler/FileScriptParserVisitor";
import { ExpressionTypeVisitor } from "./ExpressionHandler";
import { ScopeManager } from "./ScopeManager";

export class SemanticAnalyser extends AbstractParseTreeVisitor<any> implements FileScriptParserVisitor<any> {
    private scopeManager = new ScopeManager();

    public errors: string[] = [];

    protected defaultResult() {
        return null;
    }

    private parseVariableAttr(ctx: Comando_atribuicaoContext) {
        const varName = ctx.VARIABLE().text;
        //@ts-expect-error Typescript enchendo o saco com tipagem
        const expressionVisitor = new ExpressionTypeVisitor(this.scopeManager);

        const type = expressionVisitor.visit(ctx.expressao());

        return {
            name: varName,
            type
        }
    }

    visitComando_declaracao(ctx: Comando_declaracaoContext) {
        const isConst = ctx.VARIABLE_DECLARE().text == "const";

        const { name, type } = this.parseVariableAttr(ctx.comando_atribuicao());

        this.scopeManager.define(name, type, isConst);
    }

    visitComando_atribuicao(ctx: Comando_atribuicaoContext) {
        const { name, type } = this.parseVariableAttr(ctx);

        this.scopeManager.assign(name, type);
    };

    visitEscopo_codigo(ctx: Escopo_codigoContext) {

        this.scopeManager.beginScope();

        this.visitChildren(ctx)

        this.scopeManager.endScope();
    };
}