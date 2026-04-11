lexer grammar FileScriptLexer;
// ===================== WHITESPACE =====================
WS: [ \t\r\n]+ -> skip;

// ===================== COMENTÁRIOS =====================
MULTI_LINE_COMMENT: '/*' .*? '*/' -> skip;
SINGLE_LINE_COMMENT: '//' ~[\r\n]* -> skip;

// ===================== STRINGS =====================
STRING: '"' .*? '"';
CHAR: '\'' . '\'';

// ===================== SÍMBOLOS =====================
PARENTESES_OPEN: '(';
PARENTESES_CLOSE: ')';
CHAVES_OPEN: '{';
CHAVES_CLOSE: '}';
COLCHETES_OPEN: '[';
COLCHETES_CLOSE: ']';
LINE_END: ';';
COLON: ':';
COMMA: ',';

// ===================== KEYWORDS =====================
IF: 'if';
ELSE: 'else';
ELIF: 'elif'; // melhor assim
FOR: 'for';
WHILE: 'while';
DO: 'do';

FUNCTION: 'function';
RETURN: 'return';

VARIABLE_DECLARE: 'const' | 'let' | 'var';

// ===================== OPERADORES =====================
ATTR: '=';
SUM: '+';
SUB: '-';
MULT: '*';
DIV: '/';
MOD: '%';

// ===================== COMPARAÇÃO =====================
EQUALS: '==';
NOT_EQUALS: '!=';
GREATER: '>';
GREATER_EQUALS: '>=';
LESS: '<';
LESS_EQUALS: '<=';

LOGIC_AND: '&&';
LOGIC_OR: '||';

// ===================== BITWISE =====================
RIGHT_SHIFT: '>>';
LEFT_SHIFT: '<<';
BITWISE_AND: '&';
BITWISE_OR: '|';
BITWISE_NOT: '~';
BITWISE_XOR: '^';

// ===================== BÁSICO =====================
NUMERICO: [0-9]+ ('.' [0-9]+)?;

VARIABLE: [a-zA-Z_][a-zA-Z0-9_]*;