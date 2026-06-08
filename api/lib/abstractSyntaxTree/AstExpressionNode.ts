import type { ParserRuleContext } from "antlr4ts";
import type { SymbolInfo } from "../SemanticAnalysis/ScopeManager";
import { ASTNode } from "./AstNode";

export type VarType =
    | "number"
    | "string"
    | "char"
    | "boolean"
    | "array"
    | "function"
    | "unknown"
    | "any";

export abstract class ASTExpressionNode extends ASTNode {
    type: VarType = "unknown";
    size?: number;
}

export class UnknownExpressionNode extends ASTExpressionNode {
    constructor(ctx: ParserRuleContext | undefined) {
        super(ctx);
        this.type = "unknown";
    }
}




export class SymbolNode extends ASTExpressionNode {
    constructor(public symbol: SymbolInfo, ctx: ParserRuleContext) {
        super(ctx);
        this.type = symbol.type;
    }
}

//#region Literals
export class NumberLiteral extends ASTExpressionNode {
    constructor(public value: number, ctx: ParserRuleContext) {
        super(ctx);
        this.type = "number";
    }
}

export class StringLiteral extends ASTExpressionNode {
    constructor(public value: string, ctx: ParserRuleContext) {
        super(ctx);
        this.type = "string";
    }
}

export class CharLiteral extends ASTExpressionNode {
    constructor(public value: string, ctx: ParserRuleContext) {
        super(ctx);
        this.type = "char";
    }
}

export class ReadNode extends ASTExpressionNode {
    constructor(ctx: ParserRuleContext) {
        super(ctx);
        this.type = "number"
    }
}

export class PrintNode extends ASTExpressionNode {
    constructor(public parameter: ASTExpressionNode, ctx: ParserRuleContext) {
        super(ctx)
        this.type = "unknown";
    }
}
//#endregion

type unaryOperators = "~"
//#region operators
export class UnaryOperator extends ASTExpressionNode {
    constructor(public operator: unaryOperators, public operand: ASTExpressionNode, type: VarType = "unknown", ctx: ParserRuleContext) {
        super(ctx);
        this.type = type;
    }
}

type mathOperator = "+" | "-" | "*" | "/" | "%" | "<<" | ">>" | "&" | "|" | "^"
export class MathOperator extends ASTExpressionNode {
    constructor(public left: ASTExpressionNode, public operator: mathOperator, public right: ASTExpressionNode, ctx: ParserRuleContext) {
        super(ctx);
        this.type = "number";
    }
}

//#endregion

//#region Expressions

export class LogicExpression extends ASTExpressionNode {
    constructor(public left: ASTExpressionNode, public operator: "or" | "and", public right: ASTExpressionNode, ctx: ParserRuleContext) {
        super(ctx);
        this.type = "boolean";
    }
}

//#endregion

//#region Vetores
export class ArrayExpression extends ASTExpressionNode {
    public readonly size: number;
    constructor(public expressions: Array<ASTExpressionNode>, public symbol: SymbolInfo, ctx: ParserRuleContext) {
        super(ctx);
        this.size = expressions.length;
        this.type = "array";
    }
}

export class ArrayAccessExpression extends ASTExpressionNode {
    constructor(public symbol: SymbolInfo, public indexExpression: ASTExpressionNode, ctx: ParserRuleContext) {
        super(ctx);
        this.type = "number";
    }
}

//#endregion