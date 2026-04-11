parser grammar FileScriptParser;
options {
	tokenVocab = FileScriptLexer;
}

// ===================== PONTO DE ENTRADA =====================
program: lista_comandos EOF;

lista_comandos: (comando LINE_END)*;

// ===================== COMANDOS =====================
comando:
	comando_atribuicao
	| escopo_codigo
	| if_stmt
	| loop
	| comando_declaracao
	| comandos_function;

// ===================== VARIÁVEIS =====================
comando_atribuicao: VARIABLE ATTR expressao;

comando_declaracao: VARIABLE_DECLARE comando_atribuicao;

// ===================== CONDICIONAIS =====================
if_stmt: IF expressao escopo_codigo elseif* else?;

elseif: ELIF expressao escopo_codigo;

else: ELSE escopo_codigo;

// ===================== LOOPS =====================
loop: while_loop | do_while_loop | for_loop;

while_loop: WHILE expressao escopo_codigo;

do_while_loop: DO escopo_codigo WHILE expressao;

for_loop:
	FOR PARENTESES_OPEN comando LINE_END expressao LINE_END comando PARENTESES_CLOSE escopo_codigo;

// ===================== FUNÇÕES =====================
comandos_function: function_decl | return_stmt | function_call;

function_decl:
	FUNCTION VARIABLE PARENTESES_OPEN lista_parametros? PARENTESES_CLOSE escopo_codigo;

lista_parametros: VARIABLE (COMMA VARIABLE)*;

return_stmt: RETURN expressao;

function_call:
	VARIABLE PARENTESES_OPEN lista_expressoes? PARENTESES_CLOSE;

// ===================== ESCOPO =====================
escopo_codigo:
	CHAVES_OPEN lista_comandos CHAVES_CLOSE
	| CHAVES_OPEN CHAVES_CLOSE;

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