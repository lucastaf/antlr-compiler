// Generated from antlr\expressao.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressaoContext } from "./expressao";
import { Calculo_prioridade_1Context } from "./expressao";
import { Calculo_prioridade_2Context } from "./expressao";
import { Calculo_operador_logicoContext } from "./expressao";
import { Calculo_logico_compostoContext } from "./expressao";
import { Calculo_parentesesContext } from "./expressao";
import { Operador_prioridade_1Context } from "./expressao";
import { Operador_prioridade_2Context } from "./expressao";
import { Operador_logicoContext } from "./expressao";
import { Composto_logicoContext } from "./expressao";
import { Valor_calculoContext } from "./expressao";
import { ArrayContext } from "./expressao";
import { Lista_expressoesContext } from "./expressao";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `expressao`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface expressaoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `expressao.expressao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressao?: (ctx: ExpressaoContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.calculo_prioridade_1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_prioridade_1?: (ctx: Calculo_prioridade_1Context) => Result;

	/**
	 * Visit a parse tree produced by `expressao.calculo_prioridade_2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_prioridade_2?: (ctx: Calculo_prioridade_2Context) => Result;

	/**
	 * Visit a parse tree produced by `expressao.calculo_operador_logico`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_operador_logico?: (ctx: Calculo_operador_logicoContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.calculo_logico_composto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_logico_composto?: (ctx: Calculo_logico_compostoContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.calculo_parenteses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_parenteses?: (ctx: Calculo_parentesesContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.operador_prioridade_1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperador_prioridade_1?: (ctx: Operador_prioridade_1Context) => Result;

	/**
	 * Visit a parse tree produced by `expressao.operador_prioridade_2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperador_prioridade_2?: (ctx: Operador_prioridade_2Context) => Result;

	/**
	 * Visit a parse tree produced by `expressao.operador_logico`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperador_logico?: (ctx: Operador_logicoContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.composto_logico`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComposto_logico?: (ctx: Composto_logicoContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.valor_calculo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValor_calculo?: (ctx: Valor_calculoContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.lista_expressoes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLista_expressoes?: (ctx: Lista_expressoesContext) => Result;
}

