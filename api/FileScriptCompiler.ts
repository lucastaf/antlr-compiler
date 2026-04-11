import { CharStreams, CommonTokenStream } from "antlr4ts";
import { FileScriptLexer } from "./generated/fsCompiler/FileScriptLexer";
import { FileScriptParser } from "./generated/fsCompiler/FileScriptParser";

export function CompileFileScriptCode(input: string) {
    // 1. Input → stream
    const inputStream = CharStreams.fromString(input);

    // 2. Lexer
    const lexer = new FileScriptLexer(inputStream);

    // 3. Tokens
    const tokenStream = new CommonTokenStream(lexer);

    // 4. Parser
    const parser = new FileScriptParser(tokenStream);

    // 5. Parse (regra inicial)
    const tree = parser.program();

    return tree;
}