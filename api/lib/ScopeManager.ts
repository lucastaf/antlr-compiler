import type { ParserRuleContext } from "antlr4ts";
import type { VarType } from "./ExpressionHandler";
import type { ErrorSeverity } from "../../shared/types";

export type SymbolInfo = {
    name: string,
    type: VarType,
    isConst: boolean
}
export class ScopeManager {
    private scopes: Map<string, SymbolInfo>[] = [];
    private addError: (ctx: ParserRuleContext, message: string, severity: ErrorSeverity) => void;

    constructor(addError: (ctx: ParserRuleContext, message: string, severity: ErrorSeverity) => void) {
        this.addError = addError;
    }

    beginScope() {
        console.log("Iniciando escopo de código")
        this.scopes.push(new Map());
    }

    endScope() {
        console.log("Encerrando escopo de código")
        this.scopes.pop();
    }

    define(variable: string, type: VarType, isConst: boolean, ctx: ParserRuleContext) {
        console.log("Declarando", variable, type);
        const currentScope = this.scopes[this.scopes.length - 1];

        if (currentScope?.has(variable)) {
            this.addError(ctx, "VARIAVEL JA DECLARAD", "Error")
            console.log("VARIAVEL JA DECLARADA - ", variable)
            return false;
        }

        currentScope?.set(variable, {
            name: variable,
            type: type,
            isConst
        });

        return true
    }

    assign(varName: string, type: VarType, ctx: ParserRuleContext) {
        const symbol = this.resolve(varName, ctx);

        if (symbol?.type != type) {
            const msg = "Não é possivel declarar o tipo " + type + " em uma variavel do tipo " + symbol?.type
            console.log(msg)
            this.addError(ctx, msg, "Error")
        }

        if (symbol?.isConst) {
            console.log("VARIAVEL NAO PODE SER REDECLARADA POIS É CONST", varName)
            this.addError(ctx, "Variavel não pode ser reatribuida pois é const", "Error");
        }
    }

    resolve(name: string, ctx: ParserRuleContext): SymbolInfo | undefined {
        for (let i = this.scopes.length - 1; i >= 0; i--) {

            const scope = this.scopes[i];
            const symbol = scope.get(name);

            if (symbol) {
                return symbol;
            }
        }

        this.addError(ctx, "Simbolo não declarado", "Warning")
        return undefined;
    }
}