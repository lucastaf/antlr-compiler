parser grammar expressao;
options {
	tokenVocab = FileScriptLexer;
}

// ===================== EXPRESSÕES (SEM RECURSÃO À ESQUERDA) =====================
// Precedência crescente de cima para baixo.
expressao: calculo_logico_ou;

// Nível 1 (menor precedência): ||
calculo_logico_ou:
	calculo_logico_e (LOGIC_OR calculo_logico_e)*;

// Nível 2: &&
calculo_logico_e:
	calculo_bitwise_ou (LOGIC_AND calculo_bitwise_ou)*;

// Nível 3: | (bitwise OR)
calculo_bitwise_ou:
	calculo_bitwise_xou (BITWISE_OR calculo_bitwise_xou)*;

// Nível 4: ^ (bitwise XOR)
calculo_bitwise_xou:
	calculo_bitwise_e (BITWISE_XOR calculo_bitwise_e)*;

// Nível 5: & (bitwise AND)
calculo_bitwise_e:
	calculo_igualdade (BITWISE_AND calculo_igualdade)*;

// Nível 6: ==, !=
calculo_igualdade:
	calculo_relacional (operador_igualdade calculo_relacional)*;

// Nível 7: <, <=, >, >=
calculo_relacional:
	calculo_deslocamento (operador_relacional calculo_deslocamento)*;

// Nível 8: <<, >>
calculo_deslocamento:
	calculo_prioridade_1 (operador_deslocamento calculo_prioridade_1)*;

// Nível 9: +, -
calculo_prioridade_1:
	calculo_prioridade_2 (operador_prioridade_1 calculo_prioridade_2)*;

// Nível 10: *, /, %
calculo_prioridade_2:
	calculo_unario (operador_prioridade_2 calculo_unario)*;

// Nível 11: ~ (bitwise NOT unário)
calculo_unario:
	BITWISE_NOT calculo_unario
	| calculo_parenteses;

// Nível 12 (maior precedência): parênteses e valores atômicos
calculo_parenteses:
	PARENTESES_OPEN expressao PARENTESES_CLOSE
	| valor_calculo;

// ===================== OPERADORES =====================
operador_prioridade_1: SUM | SUB;
operador_prioridade_2: MULT | DIV | MOD;
operador_igualdade:    EQUALS | NOT_EQUALS;
operador_relacional:   GREATER | GREATER_EQUALS | LESS | LESS_EQUALS;
operador_deslocamento: RIGHT_SHIFT | LEFT_SHIFT;

// ===================== VALORES =====================
valor_calculo: NUMERICO | VARIABLE | STRING | CHAR | array;

// ===================== ARRAY =====================
array: COLCHETES_OPEN lista_expressoes? COLCHETES_CLOSE;

lista_expressoes: expressao (COMMA expressao)*;
