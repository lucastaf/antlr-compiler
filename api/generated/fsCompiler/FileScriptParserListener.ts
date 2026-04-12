// Generated from antlr\FileScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./FileScriptParser";
import { Lista_comandosContext } from "./FileScriptParser";
import { ComandoContext } from "./FileScriptParser";
import { Escopo_codigoContext } from "./FileScriptParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `FileScriptParser`.
 */
export interface FileScriptParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FileScriptParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.lista_comandos`.
	 * @param ctx the parse tree
	 */
	enterLista_comandos?: (ctx: Lista_comandosContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.lista_comandos`.
	 * @param ctx the parse tree
	 */
	exitLista_comandos?: (ctx: Lista_comandosContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.comando`.
	 * @param ctx the parse tree
	 */
	enterComando?: (ctx: ComandoContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.comando`.
	 * @param ctx the parse tree
	 */
	exitComando?: (ctx: ComandoContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.escopo_codigo`.
	 * @param ctx the parse tree
	 */
	enterEscopo_codigo?: (ctx: Escopo_codigoContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.escopo_codigo`.
	 * @param ctx the parse tree
	 */
	exitEscopo_codigo?: (ctx: Escopo_codigoContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.comando_atribuicao`.
	 * @param ctx the parse tree
	 */
	enterComando_atribuicao?: (ctx: Comando_atribuicaoContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.comando_atribuicao`.
	 * @param ctx the parse tree
	 */
	exitComando_atribuicao?: (ctx: Comando_atribuicaoContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.comando_declaracao`.
	 * @param ctx the parse tree
	 */
	enterComando_declaracao?: (ctx: Comando_declaracaoContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.comando_declaracao`.
	 * @param ctx the parse tree
	 */
	exitComando_declaracao?: (ctx: Comando_declaracaoContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_stmt?: (ctx: If_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.elseif`.
	 * @param ctx the parse tree
	 */
	enterElseif?: (ctx: ElseifContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.elseif`.
	 * @param ctx the parse tree
	 */
	exitElseif?: (ctx: ElseifContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.else`.
	 * @param ctx the parse tree
	 */
	enterElse?: (ctx: ElseContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.else`.
	 * @param ctx the parse tree
	 */
	exitElse?: (ctx: ElseContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.loop`.
	 * @param ctx the parse tree
	 */
	enterLoop?: (ctx: LoopContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.loop`.
	 * @param ctx the parse tree
	 */
	exitLoop?: (ctx: LoopContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.while_loop`.
	 * @param ctx the parse tree
	 */
	enterWhile_loop?: (ctx: While_loopContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.while_loop`.
	 * @param ctx the parse tree
	 */
	exitWhile_loop?: (ctx: While_loopContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.do_while_loop`.
	 * @param ctx the parse tree
	 */
	enterDo_while_loop?: (ctx: Do_while_loopContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.do_while_loop`.
	 * @param ctx the parse tree
	 */
	exitDo_while_loop?: (ctx: Do_while_loopContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.for_loop`.
	 * @param ctx the parse tree
	 */
	enterFor_loop?: (ctx: For_loopContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.for_loop`.
	 * @param ctx the parse tree
	 */
	exitFor_loop?: (ctx: For_loopContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.comandos_function`.
	 * @param ctx the parse tree
	 */
	enterComandos_function?: (ctx: Comandos_functionContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.comandos_function`.
	 * @param ctx the parse tree
	 */
	exitComandos_function?: (ctx: Comandos_functionContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.function_decl`.
	 * @param ctx the parse tree
	 */
	enterFunction_decl?: (ctx: Function_declContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.function_decl`.
	 * @param ctx the parse tree
	 */
	exitFunction_decl?: (ctx: Function_declContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.lista_parametros`.
	 * @param ctx the parse tree
	 */
	enterLista_parametros?: (ctx: Lista_parametrosContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.lista_parametros`.
	 * @param ctx the parse tree
	 */
	exitLista_parametros?: (ctx: Lista_parametrosContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.return_stmt`.
	 * @param ctx the parse tree
	 */
	enterReturn_stmt?: (ctx: Return_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.return_stmt`.
	 * @param ctx the parse tree
	 */
	exitReturn_stmt?: (ctx: Return_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.expressao`.
	 * @param ctx the parse tree
	 */
	enterExpressao?: (ctx: ExpressaoContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.expressao`.
	 * @param ctx the parse tree
	 */
	exitExpressao?: (ctx: ExpressaoContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.calculo_prioridade_1`.
	 * @param ctx the parse tree
	 */
	enterCalculo_prioridade_1?: (ctx: Calculo_prioridade_1Context) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.calculo_prioridade_1`.
	 * @param ctx the parse tree
	 */
	exitCalculo_prioridade_1?: (ctx: Calculo_prioridade_1Context) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.calculo_prioridade_2`.
	 * @param ctx the parse tree
	 */
	enterCalculo_prioridade_2?: (ctx: Calculo_prioridade_2Context) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.calculo_prioridade_2`.
	 * @param ctx the parse tree
	 */
	exitCalculo_prioridade_2?: (ctx: Calculo_prioridade_2Context) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.calculo_operador_logico`.
	 * @param ctx the parse tree
	 */
	enterCalculo_operador_logico?: (ctx: Calculo_operador_logicoContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.calculo_operador_logico`.
	 * @param ctx the parse tree
	 */
	exitCalculo_operador_logico?: (ctx: Calculo_operador_logicoContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.calculo_logico_composto`.
	 * @param ctx the parse tree
	 */
	enterCalculo_logico_composto?: (ctx: Calculo_logico_compostoContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.calculo_logico_composto`.
	 * @param ctx the parse tree
	 */
	exitCalculo_logico_composto?: (ctx: Calculo_logico_compostoContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.calculo_parenteses`.
	 * @param ctx the parse tree
	 */
	enterCalculo_parenteses?: (ctx: Calculo_parentesesContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.calculo_parenteses`.
	 * @param ctx the parse tree
	 */
	exitCalculo_parenteses?: (ctx: Calculo_parentesesContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.operador_prioridade_1`.
	 * @param ctx the parse tree
	 */
	enterOperador_prioridade_1?: (ctx: Operador_prioridade_1Context) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.operador_prioridade_1`.
	 * @param ctx the parse tree
	 */
	exitOperador_prioridade_1?: (ctx: Operador_prioridade_1Context) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.operador_prioridade_2`.
	 * @param ctx the parse tree
	 */
	enterOperador_prioridade_2?: (ctx: Operador_prioridade_2Context) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.operador_prioridade_2`.
	 * @param ctx the parse tree
	 */
	exitOperador_prioridade_2?: (ctx: Operador_prioridade_2Context) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.operador_logico`.
	 * @param ctx the parse tree
	 */
	enterOperador_logico?: (ctx: Operador_logicoContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.operador_logico`.
	 * @param ctx the parse tree
	 */
	exitOperador_logico?: (ctx: Operador_logicoContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.composto_logico`.
	 * @param ctx the parse tree
	 */
	enterComposto_logico?: (ctx: Composto_logicoContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.composto_logico`.
	 * @param ctx the parse tree
	 */
	exitComposto_logico?: (ctx: Composto_logicoContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.valor_calculo`.
	 * @param ctx the parse tree
	 */
	enterValor_calculo?: (ctx: Valor_calculoContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.valor_calculo`.
	 * @param ctx the parse tree
	 */
	exitValor_calculo?: (ctx: Valor_calculoContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `FileScriptParser.lista_expressoes`.
	 * @param ctx the parse tree
	 */
	enterLista_expressoes?: (ctx: Lista_expressoesContext) => void;
	/**
	 * Exit a parse tree produced by `FileScriptParser.lista_expressoes`.
	 * @param ctx the parse tree
	 */
	exitLista_expressoes?: (ctx: Lista_expressoesContext) => void;
}

