// Generated from antlr\FileScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FileScriptParserListener } from "./FileScriptParserListener";
import { FileScriptParserVisitor } from "./FileScriptParserVisitor";


export class FileScriptParser extends Parser {
	public static readonly WS = 1;
	public static readonly MULTI_LINE_COMMENT = 2;
	public static readonly SINGLE_LINE_COMMENT = 3;
	public static readonly STRING = 4;
	public static readonly CHAR = 5;
	public static readonly PARENTESES_OPEN = 6;
	public static readonly PARENTESES_CLOSE = 7;
	public static readonly CHAVES_OPEN = 8;
	public static readonly CHAVES_CLOSE = 9;
	public static readonly COLCHETES_OPEN = 10;
	public static readonly COLCHETES_CLOSE = 11;
	public static readonly LINE_END = 12;
	public static readonly COLON = 13;
	public static readonly COMMA = 14;
	public static readonly IF = 15;
	public static readonly ELSE = 16;
	public static readonly ELIF = 17;
	public static readonly FOR = 18;
	public static readonly WHILE = 19;
	public static readonly DO = 20;
	public static readonly FUNCTION = 21;
	public static readonly RETURN = 22;
	public static readonly VARIABLE_DECLARE = 23;
	public static readonly ATTR = 24;
	public static readonly SUM = 25;
	public static readonly SUB = 26;
	public static readonly MULT = 27;
	public static readonly DIV = 28;
	public static readonly MOD = 29;
	public static readonly EQUALS = 30;
	public static readonly NOT_EQUALS = 31;
	public static readonly GREATER = 32;
	public static readonly GREATER_EQUALS = 33;
	public static readonly LESS = 34;
	public static readonly LESS_EQUALS = 35;
	public static readonly LOGIC_AND = 36;
	public static readonly LOGIC_OR = 37;
	public static readonly RIGHT_SHIFT = 38;
	public static readonly LEFT_SHIFT = 39;
	public static readonly BITWISE_AND = 40;
	public static readonly BITWISE_OR = 41;
	public static readonly BITWISE_NOT = 42;
	public static readonly BITWISE_XOR = 43;
	public static readonly NUMERICO = 44;
	public static readonly VARIABLE = 45;
	public static readonly RULE_program = 0;
	public static readonly RULE_lista_comandos = 1;
	public static readonly RULE_comando = 2;
	public static readonly RULE_escopo_codigo = 3;
	public static readonly RULE_comando_atribuicao = 4;
	public static readonly RULE_comando_declaracao = 5;
	public static readonly RULE_if_stmt = 6;
	public static readonly RULE_elseif = 7;
	public static readonly RULE_else = 8;
	public static readonly RULE_loop = 9;
	public static readonly RULE_while_loop = 10;
	public static readonly RULE_do_while_loop = 11;
	public static readonly RULE_for_loop = 12;
	public static readonly RULE_comandos_function = 13;
	public static readonly RULE_function_decl = 14;
	public static readonly RULE_lista_parametros = 15;
	public static readonly RULE_return_stmt = 16;
	public static readonly RULE_function_call = 17;
	public static readonly RULE_expressao = 18;
	public static readonly RULE_calculo_prioridade_1 = 19;
	public static readonly RULE_calculo_prioridade_2 = 20;
	public static readonly RULE_calculo_operador_logico = 21;
	public static readonly RULE_calculo_logico_composto = 22;
	public static readonly RULE_calculo_parenteses = 23;
	public static readonly RULE_operador_prioridade_1 = 24;
	public static readonly RULE_operador_prioridade_2 = 25;
	public static readonly RULE_operador_logico = 26;
	public static readonly RULE_composto_logico = 27;
	public static readonly RULE_valor_calculo = 28;
	public static readonly RULE_array = 29;
	public static readonly RULE_lista_expressoes = 30;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "lista_comandos", "comando", "escopo_codigo", "comando_atribuicao", 
		"comando_declaracao", "if_stmt", "elseif", "else", "loop", "while_loop", 
		"do_while_loop", "for_loop", "comandos_function", "function_decl", "lista_parametros", 
		"return_stmt", "function_call", "expressao", "calculo_prioridade_1", "calculo_prioridade_2", 
		"calculo_operador_logico", "calculo_logico_composto", "calculo_parenteses", 
		"operador_prioridade_1", "operador_prioridade_2", "operador_logico", "composto_logico", 
		"valor_calculo", "array", "lista_expressoes",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "'('", 
		"')'", "'{'", "'}'", "'['", "']'", "';'", "':'", "','", "'if'", "'else'", 
		"'elif'", "'for'", "'while'", "'do'", "'function'", "'return'", undefined, 
		"'='", "'+'", "'-'", "'*'", "'/'", "'%'", "'=='", "'!='", "'>'", "'>='", 
		"'<'", "'<='", "'&&'", "'||'", "'>>'", "'<<'", "'&'", "'|'", "'~'", "'^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "MULTI_LINE_COMMENT", "SINGLE_LINE_COMMENT", "STRING", 
		"CHAR", "PARENTESES_OPEN", "PARENTESES_CLOSE", "CHAVES_OPEN", "CHAVES_CLOSE", 
		"COLCHETES_OPEN", "COLCHETES_CLOSE", "LINE_END", "COLON", "COMMA", "IF", 
		"ELSE", "ELIF", "FOR", "WHILE", "DO", "FUNCTION", "RETURN", "VARIABLE_DECLARE", 
		"ATTR", "SUM", "SUB", "MULT", "DIV", "MOD", "EQUALS", "NOT_EQUALS", "GREATER", 
		"GREATER_EQUALS", "LESS", "LESS_EQUALS", "LOGIC_AND", "LOGIC_OR", "RIGHT_SHIFT", 
		"LEFT_SHIFT", "BITWISE_AND", "BITWISE_OR", "BITWISE_NOT", "BITWISE_XOR", 
		"NUMERICO", "VARIABLE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FileScriptParser._LITERAL_NAMES, FileScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FileScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FileScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return FileScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FileScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FileScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FileScriptParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.lista_comandos();
			this.state = 63;
			this.match(FileScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lista_comandos(): Lista_comandosContext {
		let _localctx: Lista_comandosContext = new Lista_comandosContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FileScriptParser.RULE_lista_comandos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileScriptParser.PARENTESES_CLOSE) | (1 << FileScriptParser.CHAVES_OPEN) | (1 << FileScriptParser.LINE_END) | (1 << FileScriptParser.IF) | (1 << FileScriptParser.FOR) | (1 << FileScriptParser.WHILE) | (1 << FileScriptParser.DO) | (1 << FileScriptParser.FUNCTION) | (1 << FileScriptParser.RETURN) | (1 << FileScriptParser.VARIABLE_DECLARE))) !== 0) || _la === FileScriptParser.VARIABLE) {
				{
				{
				this.state = 65;
				this.comando();
				this.state = 66;
				this.match(FileScriptParser.LINE_END);
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comando(): ComandoContext {
		let _localctx: ComandoContext = new ComandoContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FileScriptParser.RULE_comando);
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				this.comando_atribuicao();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 74;
				this.escopo_codigo();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 75;
				this.if_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 76;
				this.loop();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 77;
				this.comando_declaracao();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 78;
				this.comandos_function();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public escopo_codigo(): Escopo_codigoContext {
		let _localctx: Escopo_codigoContext = new Escopo_codigoContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FileScriptParser.RULE_escopo_codigo);
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.match(FileScriptParser.CHAVES_OPEN);
				this.state = 83;
				this.lista_comandos();
				this.state = 84;
				this.match(FileScriptParser.CHAVES_CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.match(FileScriptParser.CHAVES_OPEN);
				this.state = 87;
				this.match(FileScriptParser.CHAVES_CLOSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comando_atribuicao(): Comando_atribuicaoContext {
		let _localctx: Comando_atribuicaoContext = new Comando_atribuicaoContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FileScriptParser.RULE_comando_atribuicao);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(FileScriptParser.VARIABLE);
			this.state = 91;
			this.match(FileScriptParser.ATTR);
			this.state = 92;
			this.expressao();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comando_declaracao(): Comando_declaracaoContext {
		let _localctx: Comando_declaracaoContext = new Comando_declaracaoContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FileScriptParser.RULE_comando_declaracao);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(FileScriptParser.VARIABLE_DECLARE);
			this.state = 95;
			this.comando_atribuicao();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FileScriptParser.RULE_if_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(FileScriptParser.IF);
			this.state = 98;
			this.expressao();
			this.state = 99;
			this.escopo_codigo();
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.ELIF) {
				{
				{
				this.state = 100;
				this.elseif();
				}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FileScriptParser.ELSE) {
				{
				this.state = 106;
				this.else();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseif(): ElseifContext {
		let _localctx: ElseifContext = new ElseifContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FileScriptParser.RULE_elseif);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(FileScriptParser.ELIF);
			this.state = 110;
			this.expressao();
			this.state = 111;
			this.escopo_codigo();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public else(): ElseContext {
		let _localctx: ElseContext = new ElseContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FileScriptParser.RULE_else);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(FileScriptParser.ELSE);
			this.state = 114;
			this.escopo_codigo();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loop(): LoopContext {
		let _localctx: LoopContext = new LoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FileScriptParser.RULE_loop);
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FileScriptParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				this.while_loop();
				}
				break;
			case FileScriptParser.DO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this.do_while_loop();
				}
				break;
			case FileScriptParser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 118;
				this.for_loop();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public while_loop(): While_loopContext {
		let _localctx: While_loopContext = new While_loopContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FileScriptParser.RULE_while_loop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(FileScriptParser.WHILE);
			this.state = 122;
			this.expressao();
			this.state = 123;
			this.escopo_codigo();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public do_while_loop(): Do_while_loopContext {
		let _localctx: Do_while_loopContext = new Do_while_loopContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FileScriptParser.RULE_do_while_loop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(FileScriptParser.DO);
			this.state = 126;
			this.escopo_codigo();
			this.state = 127;
			this.match(FileScriptParser.WHILE);
			this.state = 128;
			this.expressao();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_loop(): For_loopContext {
		let _localctx: For_loopContext = new For_loopContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FileScriptParser.RULE_for_loop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(FileScriptParser.FOR);
			this.state = 131;
			this.match(FileScriptParser.PARENTESES_OPEN);
			this.state = 132;
			this.comando();
			this.state = 133;
			this.match(FileScriptParser.LINE_END);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileScriptParser.STRING) | (1 << FileScriptParser.CHAR) | (1 << FileScriptParser.PARENTESES_OPEN) | (1 << FileScriptParser.COLCHETES_OPEN))) !== 0) || _la === FileScriptParser.NUMERICO || _la === FileScriptParser.VARIABLE) {
				{
				this.state = 134;
				this.expressao();
				}
			}

			this.state = 137;
			this.match(FileScriptParser.LINE_END);
			this.state = 138;
			this.comando();
			this.state = 139;
			this.match(FileScriptParser.PARENTESES_CLOSE);
			this.state = 140;
			this.escopo_codigo();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comandos_function(): Comandos_functionContext {
		let _localctx: Comandos_functionContext = new Comandos_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FileScriptParser.RULE_comandos_function);
		try {
			this.state = 145;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FileScriptParser.FUNCTION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 142;
				this.function_decl();
				}
				break;
			case FileScriptParser.RETURN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 143;
				this.return_stmt();
				}
				break;
			case FileScriptParser.VARIABLE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 144;
				this.function_call();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_decl(): Function_declContext {
		let _localctx: Function_declContext = new Function_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FileScriptParser.RULE_function_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(FileScriptParser.FUNCTION);
			this.state = 148;
			this.match(FileScriptParser.VARIABLE);
			this.state = 149;
			this.match(FileScriptParser.PARENTESES_OPEN);
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FileScriptParser.VARIABLE) {
				{
				this.state = 150;
				this.lista_parametros();
				}
			}

			this.state = 153;
			this.match(FileScriptParser.PARENTESES_CLOSE);
			this.state = 154;
			this.escopo_codigo();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lista_parametros(): Lista_parametrosContext {
		let _localctx: Lista_parametrosContext = new Lista_parametrosContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FileScriptParser.RULE_lista_parametros);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(FileScriptParser.VARIABLE);
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.COMMA) {
				{
				{
				this.state = 157;
				this.match(FileScriptParser.COMMA);
				this.state = 158;
				this.match(FileScriptParser.VARIABLE);
				}
				}
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_stmt(): Return_stmtContext {
		let _localctx: Return_stmtContext = new Return_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FileScriptParser.RULE_return_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(FileScriptParser.RETURN);
			this.state = 165;
			this.expressao();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_call(): Function_callContext {
		let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FileScriptParser.RULE_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(FileScriptParser.VARIABLE);
			this.state = 168;
			this.match(FileScriptParser.PARENTESES_OPEN);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileScriptParser.STRING) | (1 << FileScriptParser.CHAR) | (1 << FileScriptParser.COLCHETES_OPEN))) !== 0) || _la === FileScriptParser.NUMERICO || _la === FileScriptParser.VARIABLE) {
				{
				this.state = 169;
				this.lista_expressoes();
				}
			}

			this.state = 172;
			this.match(FileScriptParser.PARENTESES_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressao(): ExpressaoContext {
		let _localctx: ExpressaoContext = new ExpressaoContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FileScriptParser.RULE_expressao);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.calculo_prioridade_1();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calculo_prioridade_1(): Calculo_prioridade_1Context {
		let _localctx: Calculo_prioridade_1Context = new Calculo_prioridade_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 38, FileScriptParser.RULE_calculo_prioridade_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.calculo_prioridade_2();
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.SUM || _la === FileScriptParser.SUB) {
				{
				{
				this.state = 177;
				this.operador_prioridade_1();
				this.state = 178;
				this.calculo_prioridade_2();
				}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calculo_prioridade_2(): Calculo_prioridade_2Context {
		let _localctx: Calculo_prioridade_2Context = new Calculo_prioridade_2Context(this._ctx, this.state);
		this.enterRule(_localctx, 40, FileScriptParser.RULE_calculo_prioridade_2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.calculo_operador_logico();
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileScriptParser.MULT) | (1 << FileScriptParser.DIV) | (1 << FileScriptParser.MOD))) !== 0)) {
				{
				{
				this.state = 186;
				this.operador_prioridade_2();
				this.state = 187;
				this.calculo_operador_logico();
				}
				}
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calculo_operador_logico(): Calculo_operador_logicoContext {
		let _localctx: Calculo_operador_logicoContext = new Calculo_operador_logicoContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FileScriptParser.RULE_calculo_operador_logico);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.calculo_logico_composto();
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (FileScriptParser.EQUALS - 30)) | (1 << (FileScriptParser.NOT_EQUALS - 30)) | (1 << (FileScriptParser.GREATER - 30)) | (1 << (FileScriptParser.GREATER_EQUALS - 30)) | (1 << (FileScriptParser.LESS - 30)) | (1 << (FileScriptParser.LESS_EQUALS - 30)))) !== 0)) {
				{
				{
				this.state = 195;
				this.operador_logico();
				this.state = 196;
				this.calculo_logico_composto();
				}
				}
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calculo_logico_composto(): Calculo_logico_compostoContext {
		let _localctx: Calculo_logico_compostoContext = new Calculo_logico_compostoContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FileScriptParser.RULE_calculo_logico_composto);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.calculo_parenteses();
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.LOGIC_AND || _la === FileScriptParser.LOGIC_OR) {
				{
				{
				this.state = 204;
				this.composto_logico();
				this.state = 205;
				this.calculo_parenteses();
				}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calculo_parenteses(): Calculo_parentesesContext {
		let _localctx: Calculo_parentesesContext = new Calculo_parentesesContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, FileScriptParser.RULE_calculo_parenteses);
		try {
			this.state = 217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FileScriptParser.PARENTESES_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 212;
				this.match(FileScriptParser.PARENTESES_OPEN);
				this.state = 213;
				this.calculo_prioridade_1();
				this.state = 214;
				this.match(FileScriptParser.PARENTESES_CLOSE);
				}
				break;
			case FileScriptParser.STRING:
			case FileScriptParser.CHAR:
			case FileScriptParser.COLCHETES_OPEN:
			case FileScriptParser.NUMERICO:
			case FileScriptParser.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 216;
				this.valor_calculo();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operador_prioridade_1(): Operador_prioridade_1Context {
		let _localctx: Operador_prioridade_1Context = new Operador_prioridade_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 48, FileScriptParser.RULE_operador_prioridade_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			_la = this._input.LA(1);
			if (!(_la === FileScriptParser.SUM || _la === FileScriptParser.SUB)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operador_prioridade_2(): Operador_prioridade_2Context {
		let _localctx: Operador_prioridade_2Context = new Operador_prioridade_2Context(this._ctx, this.state);
		this.enterRule(_localctx, 50, FileScriptParser.RULE_operador_prioridade_2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileScriptParser.MULT) | (1 << FileScriptParser.DIV) | (1 << FileScriptParser.MOD))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operador_logico(): Operador_logicoContext {
		let _localctx: Operador_logicoContext = new Operador_logicoContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FileScriptParser.RULE_operador_logico);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (FileScriptParser.EQUALS - 30)) | (1 << (FileScriptParser.NOT_EQUALS - 30)) | (1 << (FileScriptParser.GREATER - 30)) | (1 << (FileScriptParser.GREATER_EQUALS - 30)) | (1 << (FileScriptParser.LESS - 30)) | (1 << (FileScriptParser.LESS_EQUALS - 30)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public composto_logico(): Composto_logicoContext {
		let _localctx: Composto_logicoContext = new Composto_logicoContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, FileScriptParser.RULE_composto_logico);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			_la = this._input.LA(1);
			if (!(_la === FileScriptParser.LOGIC_AND || _la === FileScriptParser.LOGIC_OR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valor_calculo(): Valor_calculoContext {
		let _localctx: Valor_calculoContext = new Valor_calculoContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, FileScriptParser.RULE_valor_calculo);
		try {
			this.state = 232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FileScriptParser.NUMERICO:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 227;
				this.match(FileScriptParser.NUMERICO);
				}
				break;
			case FileScriptParser.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 228;
				this.match(FileScriptParser.VARIABLE);
				}
				break;
			case FileScriptParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 229;
				this.match(FileScriptParser.STRING);
				}
				break;
			case FileScriptParser.CHAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 230;
				this.match(FileScriptParser.CHAR);
				}
				break;
			case FileScriptParser.COLCHETES_OPEN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 231;
				this.array();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, FileScriptParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(FileScriptParser.COLCHETES_OPEN);
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileScriptParser.STRING) | (1 << FileScriptParser.CHAR) | (1 << FileScriptParser.COLCHETES_OPEN))) !== 0) || _la === FileScriptParser.NUMERICO || _la === FileScriptParser.VARIABLE) {
				{
				this.state = 235;
				this.lista_expressoes();
				}
			}

			this.state = 238;
			this.match(FileScriptParser.COLCHETES_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lista_expressoes(): Lista_expressoesContext {
		let _localctx: Lista_expressoesContext = new Lista_expressoesContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, FileScriptParser.RULE_lista_expressoes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.valor_calculo();
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.COMMA) {
				{
				{
				this.state = 241;
				this.match(FileScriptParser.COMMA);
				this.state = 242;
				this.valor_calculo();
				}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\xFB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x07\x03G\n\x03\f\x03\x0E\x03J\v\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04S\n\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05[\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\bh\n" +
		"\b\f\b\x0E\bk\v\b\x03\b\x05\bn\n\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n" +
		"\x03\n\x03\v\x03\v\x03\v\x05\vz\n\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x8A" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\x94\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\x9A\n\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\xA2\n\x11\f\x11\x0E" +
		"\x11\xA5\v\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\xAD\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x07\x15\xB7\n\x15\f\x15\x0E\x15\xBA\v\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x07\x16\xC0\n\x16\f\x16\x0E\x16\xC3\v\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x07\x17\xC9\n\x17\f\x17\x0E\x17\xCC\v\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x07\x18\xD2\n\x18\f\x18\x0E\x18\xD5\v\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x05\x19\xDC\n\x19\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x05\x1E\xEB\n\x1E\x03\x1F\x03\x1F\x05\x1F\xEF\n\x1F\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x07 \xF6\n \f \x0E \xF9\v \x03 \x02\x02\x02!\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02\x02\x06\x03\x02\x1B\x1C" +
		"\x03\x02\x1D\x1F\x03\x02 %\x03\x02&\'\x02\xF8\x02@\x03\x02\x02\x02\x04" +
		"H\x03\x02\x02\x02\x06R\x03\x02\x02\x02\bZ\x03\x02\x02\x02\n\\\x03\x02" +
		"\x02\x02\f`\x03\x02\x02\x02\x0Ec\x03\x02\x02\x02\x10o\x03\x02\x02\x02" +
		"\x12s\x03\x02\x02\x02\x14y\x03\x02\x02\x02\x16{\x03\x02\x02\x02\x18\x7F" +
		"\x03\x02\x02\x02\x1A\x84\x03\x02\x02\x02\x1C\x93\x03\x02\x02\x02\x1E\x95" +
		"\x03\x02\x02\x02 \x9E\x03\x02\x02\x02\"\xA6\x03\x02\x02\x02$\xA9\x03\x02" +
		"\x02\x02&\xB0\x03\x02\x02\x02(\xB2\x03\x02\x02\x02*\xBB\x03\x02\x02\x02" +
		",\xC4\x03\x02\x02\x02.\xCD\x03\x02\x02\x020\xDB\x03\x02\x02\x022\xDD\x03" +
		"\x02\x02\x024\xDF\x03\x02\x02\x026\xE1\x03\x02\x02\x028\xE3\x03\x02\x02" +
		"\x02:\xEA\x03\x02\x02\x02<\xEC\x03\x02\x02\x02>\xF2\x03\x02\x02\x02@A" +
		"\x05\x04\x03\x02AB\x07\x02\x02\x03B\x03\x03\x02\x02\x02CD\x05\x06\x04" +
		"\x02DE\x07\x0E\x02\x02EG\x03\x02\x02\x02FC\x03\x02\x02\x02GJ\x03\x02\x02" +
		"\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02I\x05\x03\x02\x02\x02JH\x03\x02" +
		"\x02\x02KS\x05\n\x06\x02LS\x05\b\x05\x02MS\x05\x0E\b\x02NS\x05\x14\v\x02" +
		"OS\x05\f\x07\x02PS\x05\x1C\x0F\x02QS\x03\x02\x02\x02RK\x03\x02\x02\x02" +
		"RL\x03\x02\x02\x02RM\x03\x02\x02\x02RN\x03\x02\x02\x02RO\x03\x02\x02\x02" +
		"RP\x03\x02\x02\x02RQ\x03\x02\x02\x02S\x07\x03\x02\x02\x02TU\x07\n\x02" +
		"\x02UV\x05\x04\x03\x02VW\x07\v\x02\x02W[\x03\x02\x02\x02XY\x07\n\x02\x02" +
		"Y[\x07\v\x02\x02ZT\x03\x02\x02\x02ZX\x03\x02\x02\x02[\t\x03\x02\x02\x02" +
		"\\]\x07/\x02\x02]^\x07\x1A\x02\x02^_\x05&\x14\x02_\v\x03\x02\x02\x02`" +
		"a\x07\x19\x02\x02ab\x05\n\x06\x02b\r\x03\x02\x02\x02cd\x07\x11\x02\x02" +
		"de\x05&\x14\x02ei\x05\b\x05\x02fh\x05\x10\t\x02gf\x03\x02\x02\x02hk\x03" +
		"\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02jm\x03\x02\x02\x02ki\x03" +
		"\x02\x02\x02ln\x05\x12\n\x02ml\x03\x02\x02\x02mn\x03\x02\x02\x02n\x0F" +
		"\x03\x02\x02\x02op\x07\x13\x02\x02pq\x05&\x14\x02qr\x05\b\x05\x02r\x11" +
		"\x03\x02\x02\x02st\x07\x12\x02\x02tu\x05\b\x05\x02u\x13\x03\x02\x02\x02" +
		"vz\x05\x16\f\x02wz\x05\x18\r\x02xz\x05\x1A\x0E\x02yv\x03\x02\x02\x02y" +
		"w\x03\x02\x02\x02yx\x03\x02\x02\x02z\x15\x03\x02\x02\x02{|\x07\x15\x02" +
		"\x02|}\x05&\x14\x02}~\x05\b\x05\x02~\x17\x03\x02\x02\x02\x7F\x80\x07\x16" +
		"\x02\x02\x80\x81\x05\b\x05\x02\x81\x82\x07\x15\x02\x02\x82\x83\x05&\x14" +
		"\x02\x83\x19\x03\x02\x02\x02\x84\x85\x07\x14\x02\x02\x85\x86\x07\b\x02" +
		"\x02\x86\x87\x05\x06\x04\x02\x87\x89\x07\x0E\x02\x02\x88\x8A\x05&\x14" +
		"\x02\x89\x88\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x03\x02\x02" +
		"\x02\x8B\x8C\x07\x0E\x02\x02\x8C\x8D\x05\x06\x04\x02\x8D\x8E\x07\t\x02" +
		"\x02\x8E\x8F\x05\b\x05\x02\x8F\x1B\x03\x02\x02\x02\x90\x94\x05\x1E\x10" +
		"\x02\x91\x94\x05\"\x12\x02\x92\x94\x05$\x13\x02\x93\x90\x03\x02\x02\x02" +
		"\x93\x91\x03\x02\x02\x02\x93\x92\x03\x02\x02\x02\x94\x1D\x03\x02\x02\x02" +
		"\x95\x96\x07\x17\x02\x02\x96\x97\x07/\x02\x02\x97\x99\x07\b\x02\x02\x98" +
		"\x9A\x05 \x11\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A" +
		"\x9B\x03\x02\x02\x02\x9B\x9C\x07\t\x02\x02\x9C\x9D\x05\b\x05\x02\x9D\x1F" +
		"\x03\x02\x02\x02\x9E\xA3\x07/\x02\x02\x9F\xA0\x07\x10\x02\x02\xA0\xA2" +
		"\x07/\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1" +
		"\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4!\x03\x02\x02\x02\xA5\xA3" +
		"\x03\x02\x02\x02\xA6\xA7\x07\x18\x02\x02\xA7\xA8\x05&\x14\x02\xA8#\x03" +
		"\x02\x02\x02\xA9\xAA\x07/\x02\x02\xAA\xAC\x07\b\x02\x02\xAB\xAD\x05> " +
		"\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x03\x02\x02" +
		"\x02\xAE\xAF\x07\t\x02\x02\xAF%\x03\x02\x02\x02\xB0\xB1\x05(\x15\x02\xB1" +
		"\'\x03\x02\x02\x02\xB2\xB8\x05*\x16\x02\xB3\xB4\x052\x1A\x02\xB4\xB5\x05" +
		"*\x16\x02\xB5\xB7\x03\x02\x02\x02\xB6\xB3\x03\x02\x02\x02\xB7\xBA\x03" +
		"\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9)\x03" +
		"\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xC1\x05,\x17\x02\xBC\xBD\x05" +
		"4\x1B\x02\xBD\xBE\x05,\x17\x02\xBE\xC0\x03\x02\x02\x02\xBF\xBC\x03\x02" +
		"\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02" +
		"\x02\x02\xC2+\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xCA\x05.\x18" +
		"\x02\xC5\xC6\x056\x1C\x02\xC6\xC7\x05.\x18\x02\xC7\xC9\x03\x02\x02\x02" +
		"\xC8\xC5\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02" +
		"\xCA\xCB\x03\x02\x02\x02\xCB-\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02" +
		"\xCD\xD3\x050\x19\x02\xCE\xCF\x058\x1D\x02\xCF\xD0\x050\x19\x02\xD0\xD2" +
		"\x03\x02\x02\x02\xD1\xCE\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1" +
		"\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4/\x03\x02\x02\x02\xD5\xD3" +
		"\x03\x02\x02\x02\xD6\xD7\x07\b\x02\x02\xD7\xD8\x05(\x15\x02\xD8\xD9\x07" +
		"\t\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xDC\x05:\x1E\x02\xDB\xD6\x03\x02" +
		"\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC1\x03\x02\x02\x02\xDD\xDE\t\x02\x02" +
		"\x02\xDE3\x03\x02\x02\x02\xDF\xE0\t\x03\x02\x02\xE05\x03\x02\x02\x02\xE1" +
		"\xE2\t\x04\x02\x02\xE27\x03\x02\x02\x02\xE3\xE4\t\x05\x02\x02\xE49\x03" +
		"\x02\x02\x02\xE5\xEB\x07.\x02\x02\xE6\xEB\x07/\x02\x02\xE7\xEB\x07\x06" +
		"\x02\x02\xE8\xEB\x07\x07\x02\x02\xE9\xEB\x05<\x1F\x02\xEA\xE5\x03\x02" +
		"\x02\x02\xEA\xE6\x03\x02\x02\x02\xEA\xE7\x03\x02\x02\x02\xEA\xE8\x03\x02" +
		"\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB;\x03\x02\x02\x02\xEC\xEE\x07\f\x02" +
		"\x02\xED\xEF\x05> \x02\xEE\xED\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02" +
		"\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x07\r\x02\x02\xF1=\x03\x02\x02\x02\xF2" +
		"\xF7\x05:\x1E\x02\xF3\xF4\x07\x10\x02\x02\xF4\xF6\x05:\x1E\x02\xF5\xF3" +
		"\x03\x02\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8" +
		"\x03\x02\x02\x02\xF8?\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\x15HRZi" +
		"my\x89\x93\x99\xA3\xAC\xB8\xC1\xCA\xD3\xDB\xEA\xEE\xF7";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FileScriptParser.__ATN) {
			FileScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FileScriptParser._serializedATN));
		}

		return FileScriptParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public lista_comandos(): Lista_comandosContext {
		return this.getRuleContext(0, Lista_comandosContext);
	}
	public EOF(): TerminalNode { return this.getToken(FileScriptParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_program; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lista_comandosContext extends ParserRuleContext {
	public comando(): ComandoContext[];
	public comando(i: number): ComandoContext;
	public comando(i?: number): ComandoContext | ComandoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComandoContext);
		} else {
			return this.getRuleContext(i, ComandoContext);
		}
	}
	public LINE_END(): TerminalNode[];
	public LINE_END(i: number): TerminalNode;
	public LINE_END(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FileScriptParser.LINE_END);
		} else {
			return this.getToken(FileScriptParser.LINE_END, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_lista_comandos; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterLista_comandos) {
			listener.enterLista_comandos(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitLista_comandos) {
			listener.exitLista_comandos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitLista_comandos) {
			return visitor.visitLista_comandos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComandoContext extends ParserRuleContext {
	public comando_atribuicao(): Comando_atribuicaoContext | undefined {
		return this.tryGetRuleContext(0, Comando_atribuicaoContext);
	}
	public escopo_codigo(): Escopo_codigoContext | undefined {
		return this.tryGetRuleContext(0, Escopo_codigoContext);
	}
	public if_stmt(): If_stmtContext | undefined {
		return this.tryGetRuleContext(0, If_stmtContext);
	}
	public loop(): LoopContext | undefined {
		return this.tryGetRuleContext(0, LoopContext);
	}
	public comando_declaracao(): Comando_declaracaoContext | undefined {
		return this.tryGetRuleContext(0, Comando_declaracaoContext);
	}
	public comandos_function(): Comandos_functionContext | undefined {
		return this.tryGetRuleContext(0, Comandos_functionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_comando; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterComando) {
			listener.enterComando(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitComando) {
			listener.exitComando(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitComando) {
			return visitor.visitComando(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Escopo_codigoContext extends ParserRuleContext {
	public CHAVES_OPEN(): TerminalNode { return this.getToken(FileScriptParser.CHAVES_OPEN, 0); }
	public lista_comandos(): Lista_comandosContext | undefined {
		return this.tryGetRuleContext(0, Lista_comandosContext);
	}
	public CHAVES_CLOSE(): TerminalNode { return this.getToken(FileScriptParser.CHAVES_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_escopo_codigo; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterEscopo_codigo) {
			listener.enterEscopo_codigo(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitEscopo_codigo) {
			listener.exitEscopo_codigo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitEscopo_codigo) {
			return visitor.visitEscopo_codigo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comando_atribuicaoContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(FileScriptParser.VARIABLE, 0); }
	public ATTR(): TerminalNode { return this.getToken(FileScriptParser.ATTR, 0); }
	public expressao(): ExpressaoContext {
		return this.getRuleContext(0, ExpressaoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_comando_atribuicao; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterComando_atribuicao) {
			listener.enterComando_atribuicao(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitComando_atribuicao) {
			listener.exitComando_atribuicao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitComando_atribuicao) {
			return visitor.visitComando_atribuicao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comando_declaracaoContext extends ParserRuleContext {
	public VARIABLE_DECLARE(): TerminalNode { return this.getToken(FileScriptParser.VARIABLE_DECLARE, 0); }
	public comando_atribuicao(): Comando_atribuicaoContext {
		return this.getRuleContext(0, Comando_atribuicaoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_comando_declaracao; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterComando_declaracao) {
			listener.enterComando_declaracao(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitComando_declaracao) {
			listener.exitComando_declaracao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitComando_declaracao) {
			return visitor.visitComando_declaracao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_stmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(FileScriptParser.IF, 0); }
	public expressao(): ExpressaoContext {
		return this.getRuleContext(0, ExpressaoContext);
	}
	public escopo_codigo(): Escopo_codigoContext {
		return this.getRuleContext(0, Escopo_codigoContext);
	}
	public elseif(): ElseifContext[];
	public elseif(i: number): ElseifContext;
	public elseif(i?: number): ElseifContext | ElseifContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseifContext);
		} else {
			return this.getRuleContext(i, ElseifContext);
		}
	}
	public else(): ElseContext | undefined {
		return this.tryGetRuleContext(0, ElseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_if_stmt; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterIf_stmt) {
			listener.enterIf_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitIf_stmt) {
			listener.exitIf_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitIf_stmt) {
			return visitor.visitIf_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseifContext extends ParserRuleContext {
	public ELIF(): TerminalNode { return this.getToken(FileScriptParser.ELIF, 0); }
	public expressao(): ExpressaoContext {
		return this.getRuleContext(0, ExpressaoContext);
	}
	public escopo_codigo(): Escopo_codigoContext {
		return this.getRuleContext(0, Escopo_codigoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_elseif; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterElseif) {
			listener.enterElseif(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitElseif) {
			listener.exitElseif(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitElseif) {
			return visitor.visitElseif(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(FileScriptParser.ELSE, 0); }
	public escopo_codigo(): Escopo_codigoContext {
		return this.getRuleContext(0, Escopo_codigoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_else; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterElse) {
			listener.enterElse(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitElse) {
			listener.exitElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitElse) {
			return visitor.visitElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopContext extends ParserRuleContext {
	public while_loop(): While_loopContext | undefined {
		return this.tryGetRuleContext(0, While_loopContext);
	}
	public do_while_loop(): Do_while_loopContext | undefined {
		return this.tryGetRuleContext(0, Do_while_loopContext);
	}
	public for_loop(): For_loopContext | undefined {
		return this.tryGetRuleContext(0, For_loopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_loop; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterLoop) {
			listener.enterLoop(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitLoop) {
			listener.exitLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitLoop) {
			return visitor.visitLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_loopContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(FileScriptParser.WHILE, 0); }
	public expressao(): ExpressaoContext {
		return this.getRuleContext(0, ExpressaoContext);
	}
	public escopo_codigo(): Escopo_codigoContext {
		return this.getRuleContext(0, Escopo_codigoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_while_loop; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterWhile_loop) {
			listener.enterWhile_loop(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitWhile_loop) {
			listener.exitWhile_loop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitWhile_loop) {
			return visitor.visitWhile_loop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Do_while_loopContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(FileScriptParser.DO, 0); }
	public escopo_codigo(): Escopo_codigoContext {
		return this.getRuleContext(0, Escopo_codigoContext);
	}
	public WHILE(): TerminalNode { return this.getToken(FileScriptParser.WHILE, 0); }
	public expressao(): ExpressaoContext {
		return this.getRuleContext(0, ExpressaoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_do_while_loop; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterDo_while_loop) {
			listener.enterDo_while_loop(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitDo_while_loop) {
			listener.exitDo_while_loop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitDo_while_loop) {
			return visitor.visitDo_while_loop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_loopContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(FileScriptParser.FOR, 0); }
	public PARENTESES_OPEN(): TerminalNode { return this.getToken(FileScriptParser.PARENTESES_OPEN, 0); }
	public comando(): ComandoContext[];
	public comando(i: number): ComandoContext;
	public comando(i?: number): ComandoContext | ComandoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComandoContext);
		} else {
			return this.getRuleContext(i, ComandoContext);
		}
	}
	public LINE_END(): TerminalNode[];
	public LINE_END(i: number): TerminalNode;
	public LINE_END(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FileScriptParser.LINE_END);
		} else {
			return this.getToken(FileScriptParser.LINE_END, i);
		}
	}
	public PARENTESES_CLOSE(): TerminalNode { return this.getToken(FileScriptParser.PARENTESES_CLOSE, 0); }
	public escopo_codigo(): Escopo_codigoContext {
		return this.getRuleContext(0, Escopo_codigoContext);
	}
	public expressao(): ExpressaoContext | undefined {
		return this.tryGetRuleContext(0, ExpressaoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_for_loop; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterFor_loop) {
			listener.enterFor_loop(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitFor_loop) {
			listener.exitFor_loop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitFor_loop) {
			return visitor.visitFor_loop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comandos_functionContext extends ParserRuleContext {
	public function_decl(): Function_declContext | undefined {
		return this.tryGetRuleContext(0, Function_declContext);
	}
	public return_stmt(): Return_stmtContext | undefined {
		return this.tryGetRuleContext(0, Return_stmtContext);
	}
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_comandos_function; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterComandos_function) {
			listener.enterComandos_function(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitComandos_function) {
			listener.exitComandos_function(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitComandos_function) {
			return visitor.visitComandos_function(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_declContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(FileScriptParser.FUNCTION, 0); }
	public VARIABLE(): TerminalNode { return this.getToken(FileScriptParser.VARIABLE, 0); }
	public PARENTESES_OPEN(): TerminalNode { return this.getToken(FileScriptParser.PARENTESES_OPEN, 0); }
	public PARENTESES_CLOSE(): TerminalNode { return this.getToken(FileScriptParser.PARENTESES_CLOSE, 0); }
	public escopo_codigo(): Escopo_codigoContext {
		return this.getRuleContext(0, Escopo_codigoContext);
	}
	public lista_parametros(): Lista_parametrosContext | undefined {
		return this.tryGetRuleContext(0, Lista_parametrosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_function_decl; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterFunction_decl) {
			listener.enterFunction_decl(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitFunction_decl) {
			listener.exitFunction_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitFunction_decl) {
			return visitor.visitFunction_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lista_parametrosContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FileScriptParser.VARIABLE);
		} else {
			return this.getToken(FileScriptParser.VARIABLE, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FileScriptParser.COMMA);
		} else {
			return this.getToken(FileScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_lista_parametros; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterLista_parametros) {
			listener.enterLista_parametros(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitLista_parametros) {
			listener.exitLista_parametros(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitLista_parametros) {
			return visitor.visitLista_parametros(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_stmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(FileScriptParser.RETURN, 0); }
	public expressao(): ExpressaoContext {
		return this.getRuleContext(0, ExpressaoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_return_stmt; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterReturn_stmt) {
			listener.enterReturn_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitReturn_stmt) {
			listener.exitReturn_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitReturn_stmt) {
			return visitor.visitReturn_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(FileScriptParser.VARIABLE, 0); }
	public PARENTESES_OPEN(): TerminalNode { return this.getToken(FileScriptParser.PARENTESES_OPEN, 0); }
	public PARENTESES_CLOSE(): TerminalNode { return this.getToken(FileScriptParser.PARENTESES_CLOSE, 0); }
	public lista_expressoes(): Lista_expressoesContext | undefined {
		return this.tryGetRuleContext(0, Lista_expressoesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_function_call; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterFunction_call) {
			listener.enterFunction_call(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitFunction_call) {
			listener.exitFunction_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitFunction_call) {
			return visitor.visitFunction_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressaoContext extends ParserRuleContext {
	public calculo_prioridade_1(): Calculo_prioridade_1Context {
		return this.getRuleContext(0, Calculo_prioridade_1Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_expressao; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterExpressao) {
			listener.enterExpressao(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitExpressao) {
			listener.exitExpressao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressao) {
			return visitor.visitExpressao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_prioridade_1Context extends ParserRuleContext {
	public calculo_prioridade_2(): Calculo_prioridade_2Context[];
	public calculo_prioridade_2(i: number): Calculo_prioridade_2Context;
	public calculo_prioridade_2(i?: number): Calculo_prioridade_2Context | Calculo_prioridade_2Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_prioridade_2Context);
		} else {
			return this.getRuleContext(i, Calculo_prioridade_2Context);
		}
	}
	public operador_prioridade_1(): Operador_prioridade_1Context[];
	public operador_prioridade_1(i: number): Operador_prioridade_1Context;
	public operador_prioridade_1(i?: number): Operador_prioridade_1Context | Operador_prioridade_1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Operador_prioridade_1Context);
		} else {
			return this.getRuleContext(i, Operador_prioridade_1Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_prioridade_1; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_prioridade_1) {
			listener.enterCalculo_prioridade_1(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_prioridade_1) {
			listener.exitCalculo_prioridade_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_prioridade_1) {
			return visitor.visitCalculo_prioridade_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_prioridade_2Context extends ParserRuleContext {
	public calculo_operador_logico(): Calculo_operador_logicoContext[];
	public calculo_operador_logico(i: number): Calculo_operador_logicoContext;
	public calculo_operador_logico(i?: number): Calculo_operador_logicoContext | Calculo_operador_logicoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_operador_logicoContext);
		} else {
			return this.getRuleContext(i, Calculo_operador_logicoContext);
		}
	}
	public operador_prioridade_2(): Operador_prioridade_2Context[];
	public operador_prioridade_2(i: number): Operador_prioridade_2Context;
	public operador_prioridade_2(i?: number): Operador_prioridade_2Context | Operador_prioridade_2Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Operador_prioridade_2Context);
		} else {
			return this.getRuleContext(i, Operador_prioridade_2Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_prioridade_2; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_prioridade_2) {
			listener.enterCalculo_prioridade_2(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_prioridade_2) {
			listener.exitCalculo_prioridade_2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_prioridade_2) {
			return visitor.visitCalculo_prioridade_2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_operador_logicoContext extends ParserRuleContext {
	public calculo_logico_composto(): Calculo_logico_compostoContext[];
	public calculo_logico_composto(i: number): Calculo_logico_compostoContext;
	public calculo_logico_composto(i?: number): Calculo_logico_compostoContext | Calculo_logico_compostoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_logico_compostoContext);
		} else {
			return this.getRuleContext(i, Calculo_logico_compostoContext);
		}
	}
	public operador_logico(): Operador_logicoContext[];
	public operador_logico(i: number): Operador_logicoContext;
	public operador_logico(i?: number): Operador_logicoContext | Operador_logicoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Operador_logicoContext);
		} else {
			return this.getRuleContext(i, Operador_logicoContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_operador_logico; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_operador_logico) {
			listener.enterCalculo_operador_logico(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_operador_logico) {
			listener.exitCalculo_operador_logico(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_operador_logico) {
			return visitor.visitCalculo_operador_logico(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_logico_compostoContext extends ParserRuleContext {
	public calculo_parenteses(): Calculo_parentesesContext[];
	public calculo_parenteses(i: number): Calculo_parentesesContext;
	public calculo_parenteses(i?: number): Calculo_parentesesContext | Calculo_parentesesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_parentesesContext);
		} else {
			return this.getRuleContext(i, Calculo_parentesesContext);
		}
	}
	public composto_logico(): Composto_logicoContext[];
	public composto_logico(i: number): Composto_logicoContext;
	public composto_logico(i?: number): Composto_logicoContext | Composto_logicoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Composto_logicoContext);
		} else {
			return this.getRuleContext(i, Composto_logicoContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_logico_composto; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_logico_composto) {
			listener.enterCalculo_logico_composto(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_logico_composto) {
			listener.exitCalculo_logico_composto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_logico_composto) {
			return visitor.visitCalculo_logico_composto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_parentesesContext extends ParserRuleContext {
	public PARENTESES_OPEN(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.PARENTESES_OPEN, 0); }
	public calculo_prioridade_1(): Calculo_prioridade_1Context | undefined {
		return this.tryGetRuleContext(0, Calculo_prioridade_1Context);
	}
	public PARENTESES_CLOSE(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.PARENTESES_CLOSE, 0); }
	public valor_calculo(): Valor_calculoContext | undefined {
		return this.tryGetRuleContext(0, Valor_calculoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_parenteses; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_parenteses) {
			listener.enterCalculo_parenteses(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_parenteses) {
			listener.exitCalculo_parenteses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_parenteses) {
			return visitor.visitCalculo_parenteses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operador_prioridade_1Context extends ParserRuleContext {
	public SUM(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.SUM, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_operador_prioridade_1; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterOperador_prioridade_1) {
			listener.enterOperador_prioridade_1(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitOperador_prioridade_1) {
			listener.exitOperador_prioridade_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitOperador_prioridade_1) {
			return visitor.visitOperador_prioridade_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operador_prioridade_2Context extends ParserRuleContext {
	public MULT(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.MOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_operador_prioridade_2; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterOperador_prioridade_2) {
			listener.enterOperador_prioridade_2(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitOperador_prioridade_2) {
			listener.exitOperador_prioridade_2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitOperador_prioridade_2) {
			return visitor.visitOperador_prioridade_2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operador_logicoContext extends ParserRuleContext {
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.EQUALS, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.NOT_EQUALS, 0); }
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.GREATER, 0); }
	public GREATER_EQUALS(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.GREATER_EQUALS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.LESS, 0); }
	public LESS_EQUALS(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.LESS_EQUALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_operador_logico; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterOperador_logico) {
			listener.enterOperador_logico(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitOperador_logico) {
			listener.exitOperador_logico(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitOperador_logico) {
			return visitor.visitOperador_logico(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Composto_logicoContext extends ParserRuleContext {
	public LOGIC_AND(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.LOGIC_AND, 0); }
	public LOGIC_OR(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.LOGIC_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_composto_logico; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterComposto_logico) {
			listener.enterComposto_logico(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitComposto_logico) {
			listener.exitComposto_logico(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitComposto_logico) {
			return visitor.visitComposto_logico(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Valor_calculoContext extends ParserRuleContext {
	public NUMERICO(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.NUMERICO, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.VARIABLE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.STRING, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.CHAR, 0); }
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_valor_calculo; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterValor_calculo) {
			listener.enterValor_calculo(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitValor_calculo) {
			listener.exitValor_calculo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitValor_calculo) {
			return visitor.visitValor_calculo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public COLCHETES_OPEN(): TerminalNode { return this.getToken(FileScriptParser.COLCHETES_OPEN, 0); }
	public COLCHETES_CLOSE(): TerminalNode { return this.getToken(FileScriptParser.COLCHETES_CLOSE, 0); }
	public lista_expressoes(): Lista_expressoesContext | undefined {
		return this.tryGetRuleContext(0, Lista_expressoesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_array; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lista_expressoesContext extends ParserRuleContext {
	public valor_calculo(): Valor_calculoContext[];
	public valor_calculo(i: number): Valor_calculoContext;
	public valor_calculo(i?: number): Valor_calculoContext | Valor_calculoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Valor_calculoContext);
		} else {
			return this.getRuleContext(i, Valor_calculoContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FileScriptParser.COMMA);
		} else {
			return this.getToken(FileScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_lista_expressoes; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterLista_expressoes) {
			listener.enterLista_expressoes(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitLista_expressoes) {
			listener.exitLista_expressoes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitLista_expressoes) {
			return visitor.visitLista_expressoes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


