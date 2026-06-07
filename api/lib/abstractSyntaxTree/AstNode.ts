import type { ParserRuleContext } from "antlr4ts";
import type { SymbolInfo } from "../SemanticAnalysis/ScopeManager";
import { ASTExpressionNode } from "./AstExpressionNode"

export abstract class ASTNode {
    line: number = 0;
    column: number = 0;
    constructor(ctx: ParserRuleContext | undefined) {
        if (ctx) {
            this.line = ctx.start.line;
            this.column = ctx.start.charPositionInLine;
        }
    }
}

export class InvalidNode extends ASTNode {

}


export class ProgramNode extends ASTNode {
    constructor(public instructions: Array<{ node: ASTNode, originalLine: string }>, ctx: ParserRuleContext) {
        super(ctx)
    }
}

export class AssignmentNode extends ASTNode {
    constructor(public variable: SymbolInfo,
        public expression: ASTExpressionNode, ctx: ParserRuleContext) {
        super(ctx);
    }
}