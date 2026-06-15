import type { ParserRuleContext } from "antlr4ts";
import type { ErrorSeverity } from "../../../shared/types";
import type { VarType } from "../abstractSyntaxTree/AstExpressionNode";

export type SymbolInfo = {
    name: string,
    type: VarType,
    isConst: boolean,
    useCount: number,
    assignCount: number,
    declareCtx: ParserRuleContext;
    assemblyName: string;
    size: number;
    scopeName: string;
    parametersCount: number
}
export class ScopeManager {
    private scopes: { name: string, scope: Map<string, SymbolInfo> }[] = [];
    private addError: (ctx: ParserRuleContext, message: string, severity: ErrorSeverity) => void;
    private variablesList: Array<SymbolInfo & { start: number, end: number }> = [];
    private labelCounter: number = 0;
    private scopeCount : number = 0;

    constructor(addError: (ctx: ParserRuleContext, message: string, severity: ErrorSeverity) => void) {
        this.addError = addError;
    }

    private getNextScopeName(){
        this.scopeCount ++;
        return `ESCOPO_${this.scopeCount}`
    }

    public GetVariablesList() {
        return this.variablesList;
    }

    public getNextLabel(): string {
        const label = `L${this.labelCounter}`;
        this.labelCounter++;
        return label;
    }

    beginScope() {
        console.log("Iniciando escopo de código")
        this.scopes.push({ scope: new Map(), name: this.getNextScopeName() });
    }

    endScope(ctx: ParserRuleContext) {
        console.log("Encerrando escopo de código")
        const lastScope = this.scopes.at(-1);
        if (lastScope) {
            const variables = Array.from(lastScope.scope.values());
            variables.forEach(variable => {
                if (variable.useCount == 1) {
                    this.addError(variable.declareCtx, "Variavel declarada, mas nunca usada - " + variable.name, "Warning")
                };

                this.variablesList.push({
                    ...variable,
                    start: variable.declareCtx?._start?.line,
                    end: ctx!._stop!.line!
                })
            });
        }
        const poppedScope = this.scopes.pop();
        if (!poppedScope) return undefined;
        return Array.from(poppedScope.scope.values());
    }

    define(variable: string, type: VarType, isConst: boolean, ctx: ParserRuleContext, options: { size?: number, parametersCount?: number } = {}): SymbolInfo | undefined {
        const { parametersCount = 0, size = 1 } = options;
        console.log("Declarando", variable, type);
        const currentScope = this.scopes[this.scopes.length - 1];

        if (currentScope?.scope.has(variable)) {
            this.addError(ctx, "Variavel já declarada - " + variable, "Error")
            console.log("VARIAVEL JA DECLARADA - ", variable)
            return undefined;
        }

        const assemblyName = this.getAssemblyNameForVariable(variable);

        const symbolInfo: SymbolInfo = {
            name: variable,
            type: type,
            isConst,
            useCount: 0,
            assignCount: 0,
            declareCtx: ctx,
            assemblyName,
            parametersCount,
            scopeName: currentScope.name,
            size
        }

        currentScope?.scope.set(variable, symbolInfo);

        return symbolInfo;
    }

    assign(symbol: SymbolInfo | undefined, type: VarType, ctx: ParserRuleContext) {

        if (symbol) {

            if (symbol?.type != type && symbol?.type != "any") {
                const msg = "Não é possivel associar o tipo " + type + " em uma variavel do tipo " + symbol?.type + " - " + symbol.name
                console.log(msg)
                this.addError(ctx, msg, "Error")
            }

            if (symbol?.isConst && symbol.assignCount > 0) {
                this.addError(ctx, "Variavel não pode ser reatribuida pois é const - " + symbol.name, "Error");
            }

            symbol.assignCount += 1;
        }
    }

    resolve(name: string, ctx: ParserRuleContext, sumUseCount: boolean = true): SymbolInfo | undefined {
        for (let i = this.scopes.length - 1; i >= 0; i--) {

            const scope = this.scopes[i];
            const symbol = scope.scope.get(name);

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

    private getAssemblyNameForVariable(originalName: string): string {

        while (this.assemblyNameDeclared(originalName)) {
            const match = originalName.match(/^(.*)_(\d+)$/);

            if (match) {
                const [, base, number] = match;
                originalName = `${base}_${Number(number) + 1}`;
            } else {
                originalName = `${originalName}_1`;
            }
        };

        return originalName;
    }

    private assemblyNameDeclared(assemblyName: string): boolean {
        return this.scopes.some(scope => {
            return [...scope.scope.values()].some(variable => variable.assemblyName == assemblyName);
        })
    }
}