import type { ParserRuleContext } from "antlr4ts";
import type { SymbolInfo } from "../semanticAnalysis/ScopeManager";
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

//#region branches
export class IfStmtNode extends ASTNode {
    constructor(public expression: ASTExpressionNode,
        public codeScope: CodeScopeNode,
        public elseScope: ASTNode | undefined,
        public label: string, ctx: ParserRuleContext) {
        super(ctx);
    }
}

export class WhileLoopNode extends ASTNode {
    constructor(public expression: ASTExpressionNode,
        public codeScope: CodeScopeNode,
        public label: string,
        ctx: ParserRuleContext) {
        super(ctx);
    }
}

export class DoWhileLoopNode extends ASTNode {
    constructor(public expression: ASTExpressionNode,
        public codeScope: CodeScopeNode,
        public label: string,
        ctx: ParserRuleContext) {
        super(ctx);
    }
}

export class ForLoopNode extends ASTNode {
    constructor(
        public firstExecutionNode : ASTNode,
        public expression: ASTExpressionNode,
        public perIterationNode : ASTNode,
        public codeScope: CodeScopeNode,
        public label: string,
        ctx: ParserRuleContext
    ){
        super(ctx);
    }
}

//#endregion