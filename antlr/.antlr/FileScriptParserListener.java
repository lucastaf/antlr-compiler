// Generated from c:/Users/Lucas/Documents/GitHub/antlr-compiler/antlr/FileScriptParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link FileScriptParser}.
 */
public interface FileScriptParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(FileScriptParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(FileScriptParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#lista_comandos}.
	 * @param ctx the parse tree
	 */
	void enterLista_comandos(FileScriptParser.Lista_comandosContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#lista_comandos}.
	 * @param ctx the parse tree
	 */
	void exitLista_comandos(FileScriptParser.Lista_comandosContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#comando}.
	 * @param ctx the parse tree
	 */
	void enterComando(FileScriptParser.ComandoContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#comando}.
	 * @param ctx the parse tree
	 */
	void exitComando(FileScriptParser.ComandoContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#escopo_codigo}.
	 * @param ctx the parse tree
	 */
	void enterEscopo_codigo(FileScriptParser.Escopo_codigoContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#escopo_codigo}.
	 * @param ctx the parse tree
	 */
	void exitEscopo_codigo(FileScriptParser.Escopo_codigoContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#comando_atribuicao}.
	 * @param ctx the parse tree
	 */
	void enterComando_atribuicao(FileScriptParser.Comando_atribuicaoContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#comando_atribuicao}.
	 * @param ctx the parse tree
	 */
	void exitComando_atribuicao(FileScriptParser.Comando_atribuicaoContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#comando_declaracao}.
	 * @param ctx the parse tree
	 */
	void enterComando_declaracao(FileScriptParser.Comando_declaracaoContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#comando_declaracao}.
	 * @param ctx the parse tree
	 */
	void exitComando_declaracao(FileScriptParser.Comando_declaracaoContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#if_stmt}.
	 * @param ctx the parse tree
	 */
	void enterIf_stmt(FileScriptParser.If_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#if_stmt}.
	 * @param ctx the parse tree
	 */
	void exitIf_stmt(FileScriptParser.If_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#elseif}.
	 * @param ctx the parse tree
	 */
	void enterElseif(FileScriptParser.ElseifContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#elseif}.
	 * @param ctx the parse tree
	 */
	void exitElseif(FileScriptParser.ElseifContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#else}.
	 * @param ctx the parse tree
	 */
	void enterElse(FileScriptParser.ElseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#else}.
	 * @param ctx the parse tree
	 */
	void exitElse(FileScriptParser.ElseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#loop}.
	 * @param ctx the parse tree
	 */
	void enterLoop(FileScriptParser.LoopContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#loop}.
	 * @param ctx the parse tree
	 */
	void exitLoop(FileScriptParser.LoopContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#while_loop}.
	 * @param ctx the parse tree
	 */
	void enterWhile_loop(FileScriptParser.While_loopContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#while_loop}.
	 * @param ctx the parse tree
	 */
	void exitWhile_loop(FileScriptParser.While_loopContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#do_while_loop}.
	 * @param ctx the parse tree
	 */
	void enterDo_while_loop(FileScriptParser.Do_while_loopContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#do_while_loop}.
	 * @param ctx the parse tree
	 */
	void exitDo_while_loop(FileScriptParser.Do_while_loopContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#for_loop}.
	 * @param ctx the parse tree
	 */
	void enterFor_loop(FileScriptParser.For_loopContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#for_loop}.
	 * @param ctx the parse tree
	 */
	void exitFor_loop(FileScriptParser.For_loopContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#comandos_function}.
	 * @param ctx the parse tree
	 */
	void enterComandos_function(FileScriptParser.Comandos_functionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#comandos_function}.
	 * @param ctx the parse tree
	 */
	void exitComandos_function(FileScriptParser.Comandos_functionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#function_decl}.
	 * @param ctx the parse tree
	 */
	void enterFunction_decl(FileScriptParser.Function_declContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#function_decl}.
	 * @param ctx the parse tree
	 */
	void exitFunction_decl(FileScriptParser.Function_declContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#lista_parametros}.
	 * @param ctx the parse tree
	 */
	void enterLista_parametros(FileScriptParser.Lista_parametrosContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#lista_parametros}.
	 * @param ctx the parse tree
	 */
	void exitLista_parametros(FileScriptParser.Lista_parametrosContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#return_stmt}.
	 * @param ctx the parse tree
	 */
	void enterReturn_stmt(FileScriptParser.Return_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#return_stmt}.
	 * @param ctx the parse tree
	 */
	void exitReturn_stmt(FileScriptParser.Return_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#expressao}.
	 * @param ctx the parse tree
	 */
	void enterExpressao(FileScriptParser.ExpressaoContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#expressao}.
	 * @param ctx the parse tree
	 */
	void exitExpressao(FileScriptParser.ExpressaoContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#calculo_logico_ou}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_logico_ou(FileScriptParser.Calculo_logico_ouContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#calculo_logico_ou}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_logico_ou(FileScriptParser.Calculo_logico_ouContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#calculo_logico_e}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_logico_e(FileScriptParser.Calculo_logico_eContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#calculo_logico_e}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_logico_e(FileScriptParser.Calculo_logico_eContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#calculo_bitwise_ou}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_bitwise_ou(FileScriptParser.Calculo_bitwise_ouContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#calculo_bitwise_ou}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_bitwise_ou(FileScriptParser.Calculo_bitwise_ouContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#calculo_bitwise_xou}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_bitwise_xou(FileScriptParser.Calculo_bitwise_xouContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#calculo_bitwise_xou}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_bitwise_xou(FileScriptParser.Calculo_bitwise_xouContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#calculo_bitwise_e}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_bitwise_e(FileScriptParser.Calculo_bitwise_eContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#calculo_bitwise_e}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_bitwise_e(FileScriptParser.Calculo_bitwise_eContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#calculo_igualdade}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_igualdade(FileScriptParser.Calculo_igualdadeContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#calculo_igualdade}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_igualdade(FileScriptParser.Calculo_igualdadeContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#calculo_relacional}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_relacional(FileScriptParser.Calculo_relacionalContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#calculo_relacional}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_relacional(FileScriptParser.Calculo_relacionalContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#calculo_deslocamento}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_deslocamento(FileScriptParser.Calculo_deslocamentoContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#calculo_deslocamento}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_deslocamento(FileScriptParser.Calculo_deslocamentoContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#calculo_prioridade_1}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_prioridade_1(FileScriptParser.Calculo_prioridade_1Context ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#calculo_prioridade_1}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_prioridade_1(FileScriptParser.Calculo_prioridade_1Context ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#calculo_prioridade_2}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_prioridade_2(FileScriptParser.Calculo_prioridade_2Context ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#calculo_prioridade_2}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_prioridade_2(FileScriptParser.Calculo_prioridade_2Context ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#calculo_unario}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_unario(FileScriptParser.Calculo_unarioContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#calculo_unario}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_unario(FileScriptParser.Calculo_unarioContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#calculo_parenteses}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_parenteses(FileScriptParser.Calculo_parentesesContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#calculo_parenteses}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_parenteses(FileScriptParser.Calculo_parentesesContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#operador_prioridade_1}.
	 * @param ctx the parse tree
	 */
	void enterOperador_prioridade_1(FileScriptParser.Operador_prioridade_1Context ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#operador_prioridade_1}.
	 * @param ctx the parse tree
	 */
	void exitOperador_prioridade_1(FileScriptParser.Operador_prioridade_1Context ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#operador_prioridade_2}.
	 * @param ctx the parse tree
	 */
	void enterOperador_prioridade_2(FileScriptParser.Operador_prioridade_2Context ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#operador_prioridade_2}.
	 * @param ctx the parse tree
	 */
	void exitOperador_prioridade_2(FileScriptParser.Operador_prioridade_2Context ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#operador_igualdade}.
	 * @param ctx the parse tree
	 */
	void enterOperador_igualdade(FileScriptParser.Operador_igualdadeContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#operador_igualdade}.
	 * @param ctx the parse tree
	 */
	void exitOperador_igualdade(FileScriptParser.Operador_igualdadeContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#operador_relacional}.
	 * @param ctx the parse tree
	 */
	void enterOperador_relacional(FileScriptParser.Operador_relacionalContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#operador_relacional}.
	 * @param ctx the parse tree
	 */
	void exitOperador_relacional(FileScriptParser.Operador_relacionalContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#operador_deslocamento}.
	 * @param ctx the parse tree
	 */
	void enterOperador_deslocamento(FileScriptParser.Operador_deslocamentoContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#operador_deslocamento}.
	 * @param ctx the parse tree
	 */
	void exitOperador_deslocamento(FileScriptParser.Operador_deslocamentoContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#valor_calculo}.
	 * @param ctx the parse tree
	 */
	void enterValor_calculo(FileScriptParser.Valor_calculoContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#valor_calculo}.
	 * @param ctx the parse tree
	 */
	void exitValor_calculo(FileScriptParser.Valor_calculoContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#array}.
	 * @param ctx the parse tree
	 */
	void enterArray(FileScriptParser.ArrayContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#array}.
	 * @param ctx the parse tree
	 */
	void exitArray(FileScriptParser.ArrayContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#lista_expressoes}.
	 * @param ctx the parse tree
	 */
	void enterLista_expressoes(FileScriptParser.Lista_expressoesContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#lista_expressoes}.
	 * @param ctx the parse tree
	 */
	void exitLista_expressoes(FileScriptParser.Lista_expressoesContext ctx);
	/**
	 * Enter a parse tree produced by {@link FileScriptParser#function_call}.
	 * @param ctx the parse tree
	 */
	void enterFunction_call(FileScriptParser.Function_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link FileScriptParser#function_call}.
	 * @param ctx the parse tree
	 */
	void exitFunction_call(FileScriptParser.Function_callContext ctx);
}