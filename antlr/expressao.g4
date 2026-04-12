parser grammar expressao;
options {
	tokenVocab = FileScriptLexer;
}

// ===================== EXPRESSÕES (SEM RECURSÃO À ESQUERDA) =====================
expressao: calculo_prioridade_1;

calculo_prioridade_1:
	calculo_prioridade_2 (
		operador_prioridade_1 calculo_prioridade_2
	)*;

calculo_prioridade_2:
	calculo_operador_logico (
		operador_prioridade_2 calculo_operador_logico
	)*;

calculo_operador_logico:
	calculo_logico_composto (
		operador_logico calculo_logico_composto
	)*;

calculo_logico_composto:
	calculo_parenteses (composto_logico calculo_parenteses)*;

calculo_parenteses:
	PARENTESES_OPEN calculo_prioridade_1 PARENTESES_CLOSE
	| valor_calculo;

operador_prioridade_1: SUM | SUB;

operador_prioridade_2: MULT | DIV | MOD;

operador_logico:
	EQUALS
	| NOT_EQUALS
	| GREATER
	| GREATER_EQUALS
	| LESS
	| LESS_EQUALS;

composto_logico: LOGIC_AND | LOGIC_OR;

// ===================== VALORES =====================
valor_calculo: NUMERICO | VARIABLE | STRING | CHAR | array;

// ===================== ARRAY =====================
array: COLCHETES_OPEN lista_expressoes? COLCHETES_CLOSE;

lista_expressoes: valor_calculo (COMMA valor_calculo)*;