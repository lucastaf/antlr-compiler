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

export class CodeScopeNode extends ASTNode {
    constructor(public instructions: Array<{ node: ASTNode, originalLine: string }>, ctx: ParserRuleContext) {
        super(ctx)
    }
}

export class ProgramNode extends CodeScopeNode {
    constructor(instructions: Array<{ node: ASTNode, originalLine: string }>, ctx: ParserRuleContext) {
        super(instructions, ctx)
    }
}



export class AssignmentNode extends ASTNode {
    constructor(public variable: SymbolInfo,
        public expression: ASTExpressionNode, ctx: ParserRuleContext) {
        super(ctx);
    }
}

export class ArrayReassignNode extends AssignmentNode {
    constructor(variable: SymbolInfo, expression: ASTExpressionNode, public indexExpression: ASTExpressionNode, ctx: ParserRuleContext) {
        super(variable, expression, ctx);
    }
}

//#region 
export class IfStmtNode extends ASTNode {
    constructor(public expression: ASTExpressionNode,
        public codeScope: CodeScopeNode,
        public elseScope: CodeScopeNode | undefined,
        public label: string, ctx: ParserRuleContext) {
        super(ctx);
    }
}

//#endregion