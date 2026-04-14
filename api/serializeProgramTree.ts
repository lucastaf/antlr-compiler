import type { ParseTree } from "antlr4ts/tree/ParseTree";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import type { FileScriptLexer } from "./generated/fsCompiler/FileScriptLexer";
import type { FileScriptParser } from "./generated/fsCompiler/FileScriptParser";
import type { ProgramTreeNode, ProgramTreeRuleNode } from "../shared/types";

function tokenDisplayName(
    lexer: FileScriptLexer,
    type: number,
): string | undefined {
    const v = lexer.vocabulary;
    const sym = v.getSymbolicName(type);
    if (sym) return sym;
    const lit = v.getLiteralName(type);
    if (lit) return lit;
    return undefined;
}

function serializeNode(
    node: ParseTree,
    parser: FileScriptParser,
    lexer: FileScriptLexer,
    path: string,
): ProgramTreeNode {
    if (node instanceof TerminalNode) {
        const sym = node.symbol;
        const text = sym.text ?? "";
        const tokenName = tokenDisplayName(lexer, sym.type);
        return {
            id: path,
            kind: "terminal",
            text,
            tokenName,
        };
    }

    const ctx = node as ParserRuleContext;
    const name = parser.ruleNames[ctx.ruleIndex] ?? `rule_${ctx.ruleIndex}`;
    const children: ProgramTreeNode[] = [];
    for (let i = 0; i < ctx.childCount; i++) {
        children.push(
            serializeNode(ctx.getChild(i), parser, lexer, `${path}/${i}`),
        );
    }
    const alt = ctx.altNumber;
    const ruleNode: ProgramTreeRuleNode = {
        id: path,
        kind: "rule",
        name,
        children,
    };
    if (alt !== 0) {
        ruleNode.alt = alt;
    }
    return ruleNode;
}

/**
 * Builds a JSON-serializable parse tree from the ANTLR root context.
 */
export function serializeProgramTree(
    root: ParserRuleContext,
    parser: FileScriptParser,
    lexer: FileScriptLexer,
): ProgramTreeRuleNode {
    const node = serializeNode(root, parser, lexer, "0") as ProgramTreeRuleNode;
    return node;
}
