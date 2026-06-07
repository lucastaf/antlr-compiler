// Generated from c:/Users/Lucas/Documents/GitHub/antlr-compiler/antlr/expressao.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link expressao}.
 */
public interface expressaoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link expressao#expressao}.
	 * @param ctx the parse tree
	 */
	void enterExpressao(expressao.ExpressaoContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#expressao}.
	 * @param ctx the parse tree
	 */
	void exitExpressao(expressao.ExpressaoContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#calculo_logico_ou}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_logico_ou(expressao.Calculo_logico_ouContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#calculo_logico_ou}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_logico_ou(expressao.Calculo_logico_ouContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#calculo_logico_e}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_logico_e(expressao.Calculo_logico_eContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#calculo_logico_e}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_logico_e(expressao.Calculo_logico_eContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#calculo_bitwise_ou}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_bitwise_ou(expressao.Calculo_bitwise_ouContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#calculo_bitwise_ou}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_bitwise_ou(expressao.Calculo_bitwise_ouContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#calculo_bitwise_xou}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_bitwise_xou(expressao.Calculo_bitwise_xouContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#calculo_bitwise_xou}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_bitwise_xou(expressao.Calculo_bitwise_xouContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#calculo_bitwise_e}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_bitwise_e(expressao.Calculo_bitwise_eContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#calculo_bitwise_e}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_bitwise_e(expressao.Calculo_bitwise_eContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#calculo_igualdade}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_igualdade(expressao.Calculo_igualdadeContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#calculo_igualdade}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_igualdade(expressao.Calculo_igualdadeContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#calculo_relacional}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_relacional(expressao.Calculo_relacionalContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#calculo_relacional}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_relacional(expressao.Calculo_relacionalContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#calculo_deslocamento}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_deslocamento(expressao.Calculo_deslocamentoContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#calculo_deslocamento}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_deslocamento(expressao.Calculo_deslocamentoContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#calculo_prioridade_1}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_prioridade_1(expressao.Calculo_prioridade_1Context ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#calculo_prioridade_1}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_prioridade_1(expressao.Calculo_prioridade_1Context ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#calculo_prioridade_2}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_prioridade_2(expressao.Calculo_prioridade_2Context ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#calculo_prioridade_2}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_prioridade_2(expressao.Calculo_prioridade_2Context ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#calculo_unario}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_unario(expressao.Calculo_unarioContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#calculo_unario}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_unario(expressao.Calculo_unarioContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#calculo_parenteses}.
	 * @param ctx the parse tree
	 */
	void enterCalculo_parenteses(expressao.Calculo_parentesesContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#calculo_parenteses}.
	 * @param ctx the parse tree
	 */
	void exitCalculo_parenteses(expressao.Calculo_parentesesContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#operador_prioridade_1}.
	 * @param ctx the parse tree
	 */
	void enterOperador_prioridade_1(expressao.Operador_prioridade_1Context ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#operador_prioridade_1}.
	 * @param ctx the parse tree
	 */
	void exitOperador_prioridade_1(expressao.Operador_prioridade_1Context ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#operador_prioridade_2}.
	 * @param ctx the parse tree
	 */
	void enterOperador_prioridade_2(expressao.Operador_prioridade_2Context ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#operador_prioridade_2}.
	 * @param ctx the parse tree
	 */
	void exitOperador_prioridade_2(expressao.Operador_prioridade_2Context ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#operador_igualdade}.
	 * @param ctx the parse tree
	 */
	void enterOperador_igualdade(expressao.Operador_igualdadeContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#operador_igualdade}.
	 * @param ctx the parse tree
	 */
	void exitOperador_igualdade(expressao.Operador_igualdadeContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#operador_relacional}.
	 * @param ctx the parse tree
	 */
	void enterOperador_relacional(expressao.Operador_relacionalContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#operador_relacional}.
	 * @param ctx the parse tree
	 */
	void exitOperador_relacional(expressao.Operador_relacionalContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#operador_deslocamento}.
	 * @param ctx the parse tree
	 */
	void enterOperador_deslocamento(expressao.Operador_deslocamentoContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#operador_deslocamento}.
	 * @param ctx the parse tree
	 */
	void exitOperador_deslocamento(expressao.Operador_deslocamentoContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#valor_calculo}.
	 * @param ctx the parse tree
	 */
	void enterValor_calculo(expressao.Valor_calculoContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#valor_calculo}.
	 * @param ctx the parse tree
	 */
	void exitValor_calculo(expressao.Valor_calculoContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#array}.
	 * @param ctx the parse tree
	 */
	void enterArray(expressao.ArrayContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#array}.
	 * @param ctx the parse tree
	 */
	void exitArray(expressao.ArrayContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#lista_expressoes}.
	 * @param ctx the parse tree
	 */
	void enterLista_expressoes(expressao.Lista_expressoesContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#lista_expressoes}.
	 * @param ctx the parse tree
	 */
	void exitLista_expressoes(expressao.Lista_expressoesContext ctx);
	/**
	 * Enter a parse tree produced by {@link expressao#function_call}.
	 * @param ctx the parse tree
	 */
	void enterFunction_call(expressao.Function_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link expressao#function_call}.
	 * @param ctx the parse tree
	 */
	void exitFunction_call(expressao.Function_callContext ctx);
}