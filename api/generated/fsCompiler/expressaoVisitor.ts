// Generated from antlr\expressao.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressaoContext } from "./expressao";
import { Calculo_logico_ouContext } from "./expressao";
import { Calculo_logico_eContext } from "./expressao";
import { Calculo_bitwise_ouContext } from "./expressao";
import { Calculo_bitwise_xouContext } from "./expressao";
import { Calculo_bitwise_eContext } from "./expressao";
import { Calculo_igualdadeContext } from "./expressao";
import { Calculo_relacionalContext } from "./expressao";
import { Calculo_deslocamentoContext } from "./expressao";
import { Calculo_prioridade_1Context } from "./expressao";
import { Calculo_prioridade_2Context } from "./expressao";
import { Calculo_unarioContext } from "./expressao";
import { Calculo_parentesesContext } from "./expressao";
import { Operador_prioridade_1Context } from "./expressao";
import { Operador_prioridade_2Context } from "./expressao";
import { Operador_igualdadeContext } from "./expressao";
import { Operador_relacionalContext } from "./expressao";
import { Operador_deslocamentoContext } from "./expressao";
import { Valor_calculoContext } from "./expressao";
import { Array_accessContext } from "./expressao";
import { Lista_expressoesContext } from "./expressao";
import { ArrayContext } from "./expressao";
import { Function_callContext } from "./expressao";


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
	 * Visit a parse tree produced by `expressao.calculo_logico_ou`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_logico_ou?: (ctx: Calculo_logico_ouContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.calculo_logico_e`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_logico_e?: (ctx: Calculo_logico_eContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.calculo_bitwise_ou`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_bitwise_ou?: (ctx: Calculo_bitwise_ouContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.calculo_bitwise_xou`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_bitwise_xou?: (ctx: Calculo_bitwise_xouContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.calculo_bitwise_e`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_bitwise_e?: (ctx: Calculo_bitwise_eContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.calculo_igualdade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_igualdade?: (ctx: Calculo_igualdadeContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.calculo_relacional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_relacional?: (ctx: Calculo_relacionalContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.calculo_deslocamento`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_deslocamento?: (ctx: Calculo_deslocamentoContext) => Result;

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
	 * Visit a parse tree produced by `expressao.calculo_unario`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculo_unario?: (ctx: Calculo_unarioContext) => Result;

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
	 * Visit a parse tree produced by `expressao.operador_igualdade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperador_igualdade?: (ctx: Operador_igualdadeContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.operador_relacional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperador_relacional?: (ctx: Operador_relacionalContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.operador_deslocamento`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperador_deslocamento?: (ctx: Operador_deslocamentoContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.valor_calculo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValor_calculo?: (ctx: Valor_calculoContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.array_access`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_access?: (ctx: Array_accessContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.lista_expressoes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLista_expressoes?: (ctx: Lista_expressoesContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `expressao.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call?: (ctx: Function_callContext) => Result;
}

