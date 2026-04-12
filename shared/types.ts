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

export interface CompileResult {
    tokens: TokenInfo[];
    parseTree: string;
    errors: CompileError[];
}