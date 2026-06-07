import type { ParserRuleContext } from "antlr4ts";
import type { ErrorSeverity } from "../../../shared/types";
import type { VarType } from "./AstNode";

export type SymbolInfo = {
    name: string,
    type: VarType,
    isConst: boolean,
    useCount: number,
    assignCount: number,
    declareCtx: ParserRuleContext;
    assemblyName: string
}
export class ScopeManager {
    private scopes: Map<string, SymbolInfo>[] = [];
    private addError: (ctx: ParserRuleContext, message: string, severity: ErrorSeverity) => void;
    private variablesList: Array<SymbolInfo & { start: number, end: number }> = [];

    constructor(addError: (ctx: ParserRuleContext, message: string, severity: ErrorSeverity) => void) {
        this.addError = addError;
    }

    public GetVariablesList() {
        return this.variablesList;
    }

    beginScope() {
        console.log("Iniciando escopo de código")
        this.scopes.push(new Map());
    }

    endScope(ctx: ParserRuleContext) {
        console.log("Encerrando escopo de código")
        const lastScope = this.scopes.at(-1);
        if (lastScope) {
            const variables = Array.from(lastScope.values());
            variables.forEach(variable => {
                if (variable.useCount == 0) {
                    this.addError(variable.declareCtx, "Variavel declarada, mas nunca usada - " + variable.name, "Warning")
                };

                this.variablesList.push({
                    ...variable,
                    start: variable.declareCtx?._start?.line,
                    end: ctx!._stop!.line!
                })
            });
        }
        this.scopes.pop();
    }

    define(variable: string, type: VarType, isConst: boolean, ctx: ParserRuleContext) {
        console.log("Declarando", variable, type);
        const currentScope = this.scopes[this.scopes.length - 1];

        if (currentScope?.has(variable)) {
            this.addError(ctx, "Variavel já declarada - " + variable, "Error")
            console.log("VARIAVEL JA DECLARADA - ", variable)
            return false;
        }

        let assemblyName = variable;

        while (this.variablesList.some(item => item.assemblyName == assemblyName)) {
            assemblyName = assemblyName + "_1";
        };

        currentScope?.set(variable, {
            name: variable,
            type: type,
            isConst,
            useCount: 0,
            assignCount: 0,
            declareCtx: ctx,
            assemblyName
        });

        return true
    }

    assign(varName: string, type: VarType, ctx: ParserRuleContext) {
        const symbol = this.resolve(varName, ctx, false);

        if (symbol) {

            if (symbol?.type != type && symbol?.type != "any") {
                const msg = "Não é possivel associar o tipo " + type + " em uma variavel do tipo " + symbol?.type + " - " + varName
                console.log(msg)
                this.addError(ctx, msg, "Error")
            }

            if (symbol?.isConst) {
                console.log("VARIAVEL NAO PODE SER REDECLARADA POIS É CONST", varName)
                this.addError(ctx, "Variavel não pode ser reatribuida pois é const - " + varName, "Error");
            }

            symbol.assignCount += 1;
        }
    }

    resolve(name: string, ctx: ParserRuleContext, sumUseCount: boolean = true): SymbolInfo | undefined {
        for (let i = this.scopes.length - 1; i >= 0; i--) {

            const scope = this.scopes[i];
            const symbol = scope.get(name);

            if (symbol) {
                if (sumUseCount) {
                    symbol.useCount += 1;
                }
                return symbol;
            }
        }

        this.addError(ctx, "Simbolo não declarado - " + name, "Warning")
        return undefined;
    }
}