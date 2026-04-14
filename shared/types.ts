export interface CompileError {
    line: number;
    column: number;
    message: string;
    type: "LEXER" | "PARSER";
}

export interface TokenInfo {
    text: string;
    type: number;
    line: number;
    column: number;
}

/** Rule invocation node (non-terminal). Root is always a rule node (`program`). */
export interface ProgramTreeRuleNode {
    id: string;
    kind: "rule";
    name: string;
    /** Outer alternative number when the grammar exposes it; may be 0 if unused. */
    alt?: number;
    children: ProgramTreeNode[];
}

/** Token leaf in the parse tree. */
export interface ProgramTreeTerminalNode {
    id: string;
    kind: "terminal";
    text: string;
    tokenName?: string;
}

export type ProgramTreeNode = ProgramTreeRuleNode | ProgramTreeTerminalNode;

export interface CompileResult {
    tokens: TokenInfo[];
    parseTree: string;
    /** Structured parse tree for UI (e.g. graph visualization). */
    programTree: ProgramTreeRuleNode;
    errors: CompileError[];
}