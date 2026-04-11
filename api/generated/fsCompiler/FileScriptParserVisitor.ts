// Generated from antlr\FileScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./FileScriptParser";
import { Lista_comandosContext } from "./FileScriptParser";
import { ComandoContext } from "./FileScriptParser";
import { Comando_atribuicaoContext } from "./FileScriptParser";
import { Comando_declaracaoContext } from "./FileScriptParser";
import { If_stmtContext } from "./FileScriptParser";
import { ElseifContext } from "./FileScriptParser";
import { ElseContext } from "./FileScriptParser";
import { LoopContext } from "./FileScriptParser";
import { While_loopContext } from "./FileScriptParser";
import { Do_while_loopContext } from "./FileScriptParser";
import { For_loopContext } from "./FileScriptParser";
import { Comandos_functionContext } from "./FileScriptParser";
import { Function_declContext } from "./FileScriptParser";
import { Lista_parametrosContext } from "./FileScriptParser";
import { Return_stmtContext } from "./FileScriptParser";
import { Function_callContext } from "./FileScriptParser";
import { Escopo_codigoContext } from "./FileScriptParser";
import { ExpressaoContext } from "./FileScriptParser";
import { Calculo_prioridade_1Context } from "./FileScriptParser";
import { Calculo_prioridade_2Context } from "./FileScriptParser";
import { Calculo_operador_logicoContext } from "./FileScriptParser";
import { Calculo_logico_compostoContext } from "./FileScriptParser";
import { Calculo_parentesesContext } from "./FileScriptParser";
import { Operador_prioridade_1Context } from "./FileScriptParser";
import { Operador_prioridade_2Context } from "./FileScriptParser";
import { Operador_logicoContext } from "./FileScriptParser";
import { Composto_logicoContext } from "./FileScriptParser";
import { Valor_calculoContext } from "./FileScriptParser";
import { ArrayContext } from "./FileScriptParser";
import { Lista_expressoesContext } from "./FileScriptParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FileScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FileScriptParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FileScriptParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.lista_comandos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLista_comandos?: (ctx: Lista_comandosContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.comando`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComando?: (ctx: ComandoContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.comando_atribuicao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComando_atribuicao?: (ctx: Comando_atribuicaoContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.comando_declaracao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComando_declaracao?: (ctx: Comando_declaracaoContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_stmt?: (ctx: If_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.elseif`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseif?: (ctx: ElseifContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.else`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse?: (ctx: ElseContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop?: (ctx: LoopContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.while_loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_loop?: (ctx: While_loopContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.do_while_loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDo_while_loop?: (ctx: Do_while_loopContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.for_loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_loop?: (ctx: For_loopContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.comandos_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComandos_function?: (ctx: Comandos_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.function_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_decl?: (ctx: Function_declContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.lista_parametros`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLista_parametros?: (ctx: Lista_parametrosContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.return_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_stmt?: (ctx: Return_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call?: (ctx: Function_callContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.escopo_codigo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEscopo_codigo?: (ctx: Escopo_codigoContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.expressao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressao?: (ctx: ExpressaoContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.calculo_prioridade_1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_prioridade_1?: (ctx: Calculo_prioridade_1Context) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.calculo_prioridade_2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_prioridade_2?: (ctx: Calculo_prioridade_2Context) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.calculo_operador_logico`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_operador_logico?: (ctx: Calculo_operador_logicoContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.calculo_logico_composto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_logico_composto?: (ctx: Calculo_logico_compostoContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.calculo_parenteses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_parenteses?: (ctx: Calculo_parentesesContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.operador_prioridade_1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperador_prioridade_1?: (ctx: Operador_prioridade_1Context) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.operador_prioridade_2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperador_prioridade_2?: (ctx: Operador_prioridade_2Context) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.operador_logico`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperador_logico?: (ctx: Operador_logicoContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.composto_logico`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComposto_logico?: (ctx: Composto_logicoContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.valor_calculo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValor_calculo?: (ctx: Valor_calculoContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `FileScriptParser.lista_expressoes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLista_expressoes?: (ctx: Lista_expressoesContext) => Result;
}

