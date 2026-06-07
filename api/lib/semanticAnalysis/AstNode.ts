import type { SymbolInfo } from "./ScopeManager";

export type VarType =
    | "number"
    | "string"
    | "char"
    | "boolean"
    | "array"
    | "function"
    | "unknown"
    | "any";

export abstract class ASTExpressionNode {
    type?: VarType;
}

export class UnknownExpressionNode extends ASTExpressionNode {
    constructor() {
        super();
        this.type = "unknown";
    }
}




export class SymbolNode extends ASTExpressionNode {
    constructor(public symbol: SymbolInfo) {
        super();
        this.type = symbol.type;
    }
}

//#region Literals
export class NumberLiteral extends ASTExpressionNode {
    constructor(public value: number) {
        super();
        this.type = "number";
    }
}

export class StringLiteral extends ASTExpressionNode {
    constructor(public value: string) {
        super();
        this.type = "string";
    }
}

export class CharLiteral extends ASTExpressionNode {
    constructor(public value: string) {
        super();
        this.type = "char";
    }
}

export class ArrayLiteral extends ASTExpressionNode {
    constructor(public elements: ASTExpressionNode[]) {
        super();
        this.type = "array";
    }
}
//#endregion

//#region operators
export class UnaryOperator extends ASTExpressionNode {
    constructor(public operator: string, public operand: ASTExpressionNode, type: VarType = "unknown") {
        super();
        this.type = type;
    }
}

type mathOperator = "+" | "-" | "*" | "/" | "%"
export class MathOperator extends ASTExpressionNode {
    constructor(public left: ASTExpressionNode, public operator: mathOperator, public right: ASTExpressionNode) {
        super();
        this.type = "number";
    }
}

export class BinaryOperator extends ASTExpressionNode {
    constructor(
        public left: ASTExpressionNode,
        public operator: string,
        public right: ASTExpressionNode,
        type: VarType = "unknown"
    ) {
        super();
        this.type = type;
    }
}

//#endregion

//#region Expressions

export class LogicExpression extends ASTExpressionNode {
    constructor(public left: ASTExpressionNode, public operator: "or" | "and", public right: ASTExpressionNode) {
        super();
        this.type = "boolean";
    }
}

//#endregion