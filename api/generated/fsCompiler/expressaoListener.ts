// Generated from antlr\expressao.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `expressao`.
 */
export interface expressaoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `expressao.expressao`.
	 * @param ctx the parse tree
	 */
	enterExpressao?: (ctx: ExpressaoContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.expressao`.
	 * @param ctx the parse tree
	 */
	exitExpressao?: (ctx: ExpressaoContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.calculo_prioridade_1`.
	 * @param ctx the parse tree
	 */
	enterCalculo_prioridade_1?: (ctx: Calculo_prioridade_1Context) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_prioridade_1`.
	 * @param ctx the parse tree
	 */
	exitCalculo_prioridade_1?: (ctx: Calculo_prioridade_1Context) => void;

	/**
	 * Enter a parse tree produced by `expressao.calculo_prioridade_2`.
	 * @param ctx the parse tree
	 */
	enterCalculo_prioridade_2?: (ctx: Calculo_prioridade_2Context) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_prioridade_2`.
	 * @param ctx the parse tree
	 */
	exitCalculo_prioridade_2?: (ctx: Calculo_prioridade_2Context) => void;

	/**
	 * Enter a parse tree produced by `expressao.calculo_operador_logico`.
	 * @param ctx the parse tree
	 */
	enterCalculo_operador_logico?: (ctx: Calculo_operador_logicoContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_operador_logico`.
	 * @param ctx the parse tree
	 */
	exitCalculo_operador_logico?: (ctx: Calculo_operador_logicoContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.calculo_logico_composto`.
	 * @param ctx the parse tree
	 */
	enterCalculo_logico_composto?: (ctx: Calculo_logico_compostoContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_logico_composto`.
	 * @param ctx the parse tree
	 */
	exitCalculo_logico_composto?: (ctx: Calculo_logico_compostoContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.calculo_parenteses`.
	 * @param ctx the parse tree
	 */
	enterCalculo_parenteses?: (ctx: Calculo_parentesesContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_parenteses`.
	 * @param ctx the parse tree
	 */
	exitCalculo_parenteses?: (ctx: Calculo_parentesesContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.operador_prioridade_1`.
	 * @param ctx the parse tree
	 */
	enterOperador_prioridade_1?: (ctx: Operador_prioridade_1Context) => void;
	/**
	 * Exit a parse tree produced by `expressao.operador_prioridade_1`.
	 * @param ctx the parse tree
	 */
	exitOperador_prioridade_1?: (ctx: Operador_prioridade_1Context) => void;

	/**
	 * Enter a parse tree produced by `expressao.operador_prioridade_2`.
	 * @param ctx the parse tree
	 */
	enterOperador_prioridade_2?: (ctx: Operador_prioridade_2Context) => void;
	/**
	 * Exit a parse tree produced by `expressao.operador_prioridade_2`.
	 * @param ctx the parse tree
	 */
	exitOperador_prioridade_2?: (ctx: Operador_prioridade_2Context) => void;

	/**
	 * Enter a parse tree produced by `expressao.operador_logico`.
	 * @param ctx the parse tree
	 */
	enterOperador_logico?: (ctx: Operador_logicoContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.operador_logico`.
	 * @param ctx the parse tree
	 */
	exitOperador_logico?: (ctx: Operador_logicoContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.composto_logico`.
	 * @param ctx the parse tree
	 */
	enterComposto_logico?: (ctx: Composto_logicoContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.composto_logico`.
	 * @param ctx the parse tree
	 */
	exitComposto_logico?: (ctx: Composto_logicoContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.valor_calculo`.
	 * @param ctx the parse tree
	 */
	enterValor_calculo?: (ctx: Valor_calculoContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.valor_calculo`.
	 * @param ctx the parse tree
	 */
	exitValor_calculo?: (ctx: Valor_calculoContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.lista_expressoes`.
	 * @param ctx the parse tree
	 */
	enterLista_expressoes?: (ctx: Lista_expressoesContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.lista_expressoes`.
	 * @param ctx the parse tree
	 */
	exitLista_expressoes?: (ctx: Lista_expressoesContext) => void;
}

