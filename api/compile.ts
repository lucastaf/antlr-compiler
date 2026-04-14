/* eslint-disable @typescript-eslint/no-explicit-any */
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { FileScriptLexer } from "./generated/fsCompiler/FileScriptLexer";
import { FileScriptParser } from "./generated/fsCompiler/FileScriptParser";
import {
    Recognizer,
} from "antlr4ts";
import type { CompileError, CompileResult, TokenInfo } from "../shared/types";
import { serializeProgramTree } from "./serializeProgramTree";



export function compile(code: string): CompileResult {
    const input = CharStreams.fromString(code);

    const lexer = new FileScriptLexer(input);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new FileScriptParser(tokenStream);

    const errors: CompileError[] = [];

    // 🎯 Error listener
    const errorListener: any = {
        syntaxError(
            recognizer: Recognizer<any, any>,
            offendingSymbol: any,
            line: number,
            column: number,
            msg: string,
        ) {
            const isLexer = recognizer.constructor.name.includes("Lexer");

            errors.push({
                line,
                column,
                message: msg,
                type: isLexer ? "LEXER" : "PARSER",
            });
        },
    };

    // remove listeners padrão
    lexer.removeErrorListeners();
    parser.removeErrorListeners();

    lexer.addErrorListener(errorListener);
    parser.addErrorListener(errorListener);

    // 🎯 força geração dos tokens
    tokenStream.fill();

    const tokens: TokenInfo[] = tokenStream.getTokens().map((t: any) => ({
        text: t.text ?? "",
        type: t.type,
        line: t.line,
        column: t.charPositionInLine,
    }));

    // 🎯 parse
    const tree = parser.program();

    // 🎯 árvore como string
    const parseTree = tree.toStringTree(parser.ruleNames);
    const programTree = serializeProgramTree(tree, parser, lexer);

    return {
        tokens,
        parseTree,
        programTree,
        errors,
    };
}