import { CharStreams, CommonTokenStream } from "antlr4ts";
import { FileScriptLexer } from "./generated/fsCompiler/FileScriptLexer";
import { FileScriptParser } from "./generated/fsCompiler/FileScriptParser";
import {
    Recognizer,
} from "antlr4ts";
import type { CompileError, CompileResult, TokenInfo } from "../shared/types"
import { SemanticAnalyser } from "./lib/semanticAnalysis/SemanticAnalysis"
import { CodeGenerator } from "./lib/codeGenerator/CodeGenerator";


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
                severity: "Error"
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

    console.log("INICIANDO ANALISE SEMANTICA")
    const semantic = new SemanticAnalyser();
    let ASMcode = "";
    try {
        const ast = semantic.visit(tree);
        const variableList = semantic.GetVariablesList()
        const codeGenerator = new CodeGenerator(ast, variableList);
        ASMcode = codeGenerator.generate();
        errors.push(...codeGenerator.errors);
    } catch (error) {
        const message = error instanceof Error ? error.message : "Falha inesperada na análise semântica";

        errors.push({
            line: 1,
            column: 0,
            message,
            type: "SEMANTIC",
            severity: "Error"
        });
    }

    console.log("ERRORS: ")
    console.log(semantic.errors);
    errors.push(...semantic.errors);

    // 🎯 árvore como string
    const parseTree = tree.toStringTree(parser.ruleNames);

    return {
        tokens,
        parseTree,
        errors,
        ASMcode,
        variables: semantic.GetVariablesList().map(item => ({
            end: item.end,
            isConst: item.isConst,
            name: item.name,
            start: item.start,
            type: item.type
        }))
    };
}