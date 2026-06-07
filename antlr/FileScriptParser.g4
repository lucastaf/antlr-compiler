parser grammar FileScriptParser;
options {
	tokenVocab = FileScriptLexer;
}
import expressao;

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
	| comandos_function
	| expressao
	|;

// ===================== ESCOPO =====================
escopo_codigo:
	CHAVES_OPEN lista_comandos CHAVES_CLOSE
	| CHAVES_OPEN CHAVES_CLOSE;

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
	FOR PARENTESES_OPEN comando LINE_END expressao? LINE_END comando PARENTESES_CLOSE escopo_codigo;

// ===================== FUNÇÕES =====================
comandos_function: function_decl | return_stmt;

function_decl:
	FUNCTION VARIABLE PARENTESES_OPEN lista_parametros? PARENTESES_CLOSE escopo_codigo;

lista_parametros: VARIABLE (COMMA VARIABLE)*;

return_stmt: RETURN expressao;