// Generated from antlr\expressao.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	 * Enter a parse tree produced by `expressao.calculo_logico_ou`.
	 * @param ctx the parse tree
	 */
	enterCalculo_logico_ou?: (ctx: Calculo_logico_ouContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_logico_ou`.
	 * @param ctx the parse tree
	 */
	exitCalculo_logico_ou?: (ctx: Calculo_logico_ouContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.calculo_logico_e`.
	 * @param ctx the parse tree
	 */
	enterCalculo_logico_e?: (ctx: Calculo_logico_eContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_logico_e`.
	 * @param ctx the parse tree
	 */
	exitCalculo_logico_e?: (ctx: Calculo_logico_eContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.calculo_bitwise_ou`.
	 * @param ctx the parse tree
	 */
	enterCalculo_bitwise_ou?: (ctx: Calculo_bitwise_ouContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_bitwise_ou`.
	 * @param ctx the parse tree
	 */
	exitCalculo_bitwise_ou?: (ctx: Calculo_bitwise_ouContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.calculo_bitwise_xou`.
	 * @param ctx the parse tree
	 */
	enterCalculo_bitwise_xou?: (ctx: Calculo_bitwise_xouContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_bitwise_xou`.
	 * @param ctx the parse tree
	 */
	exitCalculo_bitwise_xou?: (ctx: Calculo_bitwise_xouContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.calculo_bitwise_e`.
	 * @param ctx the parse tree
	 */
	enterCalculo_bitwise_e?: (ctx: Calculo_bitwise_eContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_bitwise_e`.
	 * @param ctx the parse tree
	 */
	exitCalculo_bitwise_e?: (ctx: Calculo_bitwise_eContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.calculo_igualdade`.
	 * @param ctx the parse tree
	 */
	enterCalculo_igualdade?: (ctx: Calculo_igualdadeContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_igualdade`.
	 * @param ctx the parse tree
	 */
	exitCalculo_igualdade?: (ctx: Calculo_igualdadeContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.calculo_relacional`.
	 * @param ctx the parse tree
	 */
	enterCalculo_relacional?: (ctx: Calculo_relacionalContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_relacional`.
	 * @param ctx the parse tree
	 */
	exitCalculo_relacional?: (ctx: Calculo_relacionalContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.calculo_deslocamento`.
	 * @param ctx the parse tree
	 */
	enterCalculo_deslocamento?: (ctx: Calculo_deslocamentoContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_deslocamento`.
	 * @param ctx the parse tree
	 */
	exitCalculo_deslocamento?: (ctx: Calculo_deslocamentoContext) => void;

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
	 * Enter a parse tree produced by `expressao.calculo_unario`.
	 * @param ctx the parse tree
	 */
	enterCalculo_unario?: (ctx: Calculo_unarioContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.calculo_unario`.
	 * @param ctx the parse tree
	 */
	exitCalculo_unario?: (ctx: Calculo_unarioContext) => void;

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
	 * Enter a parse tree produced by `expressao.operador_igualdade`.
	 * @param ctx the parse tree
	 */
	enterOperador_igualdade?: (ctx: Operador_igualdadeContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.operador_igualdade`.
	 * @param ctx the parse tree
	 */
	exitOperador_igualdade?: (ctx: Operador_igualdadeContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.operador_relacional`.
	 * @param ctx the parse tree
	 */
	enterOperador_relacional?: (ctx: Operador_relacionalContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.operador_relacional`.
	 * @param ctx the parse tree
	 */
	exitOperador_relacional?: (ctx: Operador_relacionalContext) => void;

	/**
	 * Enter a parse tree produced by `expressao.operador_deslocamento`.
	 * @param ctx the parse tree
	 */
	enterOperador_deslocamento?: (ctx: Operador_deslocamentoContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.operador_deslocamento`.
	 * @param ctx the parse tree
	 */
	exitOperador_deslocamento?: (ctx: Operador_deslocamentoContext) => void;

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
	 * Enter a parse tree produced by `expressao.array_access`.
	 * @param ctx the parse tree
	 */
	enterArray_access?: (ctx: Array_accessContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.array_access`.
	 * @param ctx the parse tree
	 */
	exitArray_access?: (ctx: Array_accessContext) => void;

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
	 * Enter a parse tree produced by `expressao.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `expressao.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;
}

