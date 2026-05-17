import type { VarType } from "./ExpressionHandler";

export type SymbolInfo = {
    name: string,
    type: VarType,
    isConst: boolean
}
export class ScopeManager {
    private scopes: Map<string, SymbolInfo>[] = [];

    constructor() {

    }

    beginScope() {
        console.log("Iniciando escopo de código")
        this.scopes.push(new Map());
    }

    endScope() {
        console.log("Encerrando escopo de código")
        this.scopes.pop();
    }

    define(variable: string, type: VarType, isConst: boolean) {
        console.log("Declarando", variable, type);
        const currentScope = this.scopes[this.scopes.length - 1];

        if (currentScope?.has(variable)) {
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

    assign(varName: string, type: VarType) {
        const symbol = this.resolve(varName);

        if (symbol?.type != type) {
            console.log("VARIAVEL REDECLARADA COM TIPO INCORRETO", varName)
        }

        if (symbol?.isConst) {
            console.log("VARIAVEL NAO PODE SER REDECLARADA POIS É CONST", varName)
        }
    }

    resolve(name: string): SymbolInfo | undefined {
        for (let i = this.scopes.length - 1; i >= 0; i--) {

            const scope = this.scopes[i];

            const symbol = scope.get(name);

            if (symbol) {
                return symbol;
            }
        }

        return undefined;
    }
}