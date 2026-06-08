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
	public static readonly RULE_expressao = 17;
	public static readonly RULE_calculo_logico_ou = 18;
	public static readonly RULE_calculo_logico_e = 19;
	public static readonly RULE_calculo_bitwise_ou = 20;
	public static readonly RULE_calculo_bitwise_xou = 21;
	public static readonly RULE_calculo_bitwise_e = 22;
	public static readonly RULE_calculo_igualdade = 23;
	public static readonly RULE_calculo_relacional = 24;
	public static readonly RULE_calculo_deslocamento = 25;
	public static readonly RULE_calculo_prioridade_1 = 26;
	public static readonly RULE_calculo_prioridade_2 = 27;
	public static readonly RULE_calculo_unario = 28;
	public static readonly RULE_calculo_parenteses = 29;
	public static readonly RULE_operador_prioridade_1 = 30;
	public static readonly RULE_operador_prioridade_2 = 31;
	public static readonly RULE_operador_igualdade = 32;
	public static readonly RULE_operador_relacional = 33;
	public static readonly RULE_operador_deslocamento = 34;
	public static readonly RULE_valor_calculo = 35;
	public static readonly RULE_array = 36;
	public static readonly RULE_array_access = 37;
	public static readonly RULE_lista_expressoes = 38;
	public static readonly RULE_function_call = 39;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "lista_comandos", "comando", "escopo_codigo", "comando_atribuicao", 
		"comando_declaracao", "if_stmt", "elseif", "else", "loop", "while_loop", 
		"do_while_loop", "for_loop", "comandos_function", "function_decl", "lista_parametros", 
		"return_stmt", "expressao", "calculo_logico_ou", "calculo_logico_e", "calculo_bitwise_ou", 
		"calculo_bitwise_xou", "calculo_bitwise_e", "calculo_igualdade", "calculo_relacional", 
		"calculo_deslocamento", "calculo_prioridade_1", "calculo_prioridade_2", 
		"calculo_unario", "calculo_parenteses", "operador_prioridade_1", "operador_prioridade_2", 
		"operador_igualdade", "operador_relacional", "operador_deslocamento", 
		"valor_calculo", "array", "array_access", "lista_expressoes", "function_call",
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
			this.state = 80;
			this.lista_comandos();
			this.state = 81;
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
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileScriptParser.STRING) | (1 << FileScriptParser.CHAR) | (1 << FileScriptParser.PARENTESES_OPEN) | (1 << FileScriptParser.PARENTESES_CLOSE) | (1 << FileScriptParser.CHAVES_OPEN) | (1 << FileScriptParser.COLCHETES_OPEN) | (1 << FileScriptParser.LINE_END) | (1 << FileScriptParser.IF) | (1 << FileScriptParser.FOR) | (1 << FileScriptParser.WHILE) | (1 << FileScriptParser.DO) | (1 << FileScriptParser.FUNCTION) | (1 << FileScriptParser.RETURN) | (1 << FileScriptParser.VARIABLE_DECLARE))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (FileScriptParser.BITWISE_NOT - 42)) | (1 << (FileScriptParser.NUMERICO - 42)) | (1 << (FileScriptParser.VARIABLE - 42)))) !== 0)) {
				{
				{
				this.state = 83;
				this.comando();
				this.state = 84;
				this.match(FileScriptParser.LINE_END);
				}
				}
				this.state = 90;
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
			this.state = 99;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 91;
				this.comando_atribuicao();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this.escopo_codigo();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 93;
				this.if_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 94;
				this.loop();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 95;
				this.comando_declaracao();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 96;
				this.comandos_function();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 97;
				this.expressao();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
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
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 101;
				this.match(FileScriptParser.CHAVES_OPEN);
				this.state = 102;
				this.lista_comandos();
				this.state = 103;
				this.match(FileScriptParser.CHAVES_CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 105;
				this.match(FileScriptParser.CHAVES_OPEN);
				this.state = 106;
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
			this.state = 109;
			this.match(FileScriptParser.VARIABLE);
			this.state = 110;
			this.match(FileScriptParser.ATTR);
			this.state = 111;
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
			this.state = 113;
			this.match(FileScriptParser.VARIABLE_DECLARE);
			this.state = 114;
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
			this.state = 116;
			this.match(FileScriptParser.IF);
			this.state = 117;
			this.expressao();
			this.state = 118;
			this.escopo_codigo();
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.ELIF) {
				{
				{
				this.state = 119;
				this.elseif();
				}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FileScriptParser.ELSE) {
				{
				this.state = 125;
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
			this.state = 128;
			this.match(FileScriptParser.ELIF);
			this.state = 129;
			this.expressao();
			this.state = 130;
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
			this.state = 132;
			this.match(FileScriptParser.ELSE);
			this.state = 133;
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
			this.state = 138;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FileScriptParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 135;
				this.while_loop();
				}
				break;
			case FileScriptParser.DO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
				this.do_while_loop();
				}
				break;
			case FileScriptParser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 137;
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
			this.state = 140;
			this.match(FileScriptParser.WHILE);
			this.state = 141;
			this.expressao();
			this.state = 142;
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
			this.state = 144;
			this.match(FileScriptParser.DO);
			this.state = 145;
			this.escopo_codigo();
			this.state = 146;
			this.match(FileScriptParser.WHILE);
			this.state = 147;
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
			this.state = 149;
			this.match(FileScriptParser.FOR);
			this.state = 150;
			this.match(FileScriptParser.PARENTESES_OPEN);
			this.state = 151;
			this.comando();
			this.state = 152;
			this.match(FileScriptParser.LINE_END);
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileScriptParser.STRING) | (1 << FileScriptParser.CHAR) | (1 << FileScriptParser.PARENTESES_OPEN) | (1 << FileScriptParser.COLCHETES_OPEN))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (FileScriptParser.BITWISE_NOT - 42)) | (1 << (FileScriptParser.NUMERICO - 42)) | (1 << (FileScriptParser.VARIABLE - 42)))) !== 0)) {
				{
				this.state = 153;
				this.expressao();
				}
			}

			this.state = 156;
			this.match(FileScriptParser.LINE_END);
			this.state = 157;
			this.comando();
			this.state = 158;
			this.match(FileScriptParser.PARENTESES_CLOSE);
			this.state = 159;
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
			this.state = 163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FileScriptParser.FUNCTION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 161;
				this.function_decl();
				}
				break;
			case FileScriptParser.RETURN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 162;
				this.return_stmt();
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
			this.state = 165;
			this.match(FileScriptParser.FUNCTION);
			this.state = 166;
			this.match(FileScriptParser.VARIABLE);
			this.state = 167;
			this.match(FileScriptParser.PARENTESES_OPEN);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FileScriptParser.VARIABLE) {
				{
				this.state = 168;
				this.lista_parametros();
				}
			}

			this.state = 171;
			this.match(FileScriptParser.PARENTESES_CLOSE);
			this.state = 172;
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
			this.state = 174;
			this.match(FileScriptParser.VARIABLE);
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.COMMA) {
				{
				{
				this.state = 175;
				this.match(FileScriptParser.COMMA);
				this.state = 176;
				this.match(FileScriptParser.VARIABLE);
				}
				}
				this.state = 181;
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
			this.state = 182;
			this.match(FileScriptParser.RETURN);
			this.state = 183;
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
	public expressao(): ExpressaoContext {
		let _localctx: ExpressaoContext = new ExpressaoContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FileScriptParser.RULE_expressao);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.calculo_logico_ou();
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
	public calculo_logico_ou(): Calculo_logico_ouContext {
		let _localctx: Calculo_logico_ouContext = new Calculo_logico_ouContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FileScriptParser.RULE_calculo_logico_ou);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.calculo_logico_e();
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.LOGIC_OR) {
				{
				{
				this.state = 188;
				this.match(FileScriptParser.LOGIC_OR);
				this.state = 189;
				this.calculo_logico_e();
				}
				}
				this.state = 194;
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
	public calculo_logico_e(): Calculo_logico_eContext {
		let _localctx: Calculo_logico_eContext = new Calculo_logico_eContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FileScriptParser.RULE_calculo_logico_e);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.calculo_bitwise_ou();
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.LOGIC_AND) {
				{
				{
				this.state = 196;
				this.match(FileScriptParser.LOGIC_AND);
				this.state = 197;
				this.calculo_bitwise_ou();
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
	public calculo_bitwise_ou(): Calculo_bitwise_ouContext {
		let _localctx: Calculo_bitwise_ouContext = new Calculo_bitwise_ouContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FileScriptParser.RULE_calculo_bitwise_ou);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.calculo_bitwise_xou();
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.BITWISE_OR) {
				{
				{
				this.state = 204;
				this.match(FileScriptParser.BITWISE_OR);
				this.state = 205;
				this.calculo_bitwise_xou();
				}
				}
				this.state = 210;
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
	public calculo_bitwise_xou(): Calculo_bitwise_xouContext {
		let _localctx: Calculo_bitwise_xouContext = new Calculo_bitwise_xouContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FileScriptParser.RULE_calculo_bitwise_xou);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.calculo_bitwise_e();
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.BITWISE_XOR) {
				{
				{
				this.state = 212;
				this.match(FileScriptParser.BITWISE_XOR);
				this.state = 213;
				this.calculo_bitwise_e();
				}
				}
				this.state = 218;
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
	public calculo_bitwise_e(): Calculo_bitwise_eContext {
		let _localctx: Calculo_bitwise_eContext = new Calculo_bitwise_eContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FileScriptParser.RULE_calculo_bitwise_e);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.calculo_igualdade();
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.BITWISE_AND) {
				{
				{
				this.state = 220;
				this.match(FileScriptParser.BITWISE_AND);
				this.state = 221;
				this.calculo_igualdade();
				}
				}
				this.state = 226;
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
	public calculo_igualdade(): Calculo_igualdadeContext {
		let _localctx: Calculo_igualdadeContext = new Calculo_igualdadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, FileScriptParser.RULE_calculo_igualdade);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.calculo_relacional();
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.EQUALS || _la === FileScriptParser.NOT_EQUALS) {
				{
				{
				this.state = 228;
				this.operador_igualdade();
				this.state = 229;
				this.calculo_relacional();
				}
				}
				this.state = 235;
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
	public calculo_relacional(): Calculo_relacionalContext {
		let _localctx: Calculo_relacionalContext = new Calculo_relacionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, FileScriptParser.RULE_calculo_relacional);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.calculo_deslocamento();
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FileScriptParser.GREATER - 32)) | (1 << (FileScriptParser.GREATER_EQUALS - 32)) | (1 << (FileScriptParser.LESS - 32)) | (1 << (FileScriptParser.LESS_EQUALS - 32)))) !== 0)) {
				{
				{
				this.state = 237;
				this.operador_relacional();
				this.state = 238;
				this.calculo_deslocamento();
				}
				}
				this.state = 244;
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
	public calculo_deslocamento(): Calculo_deslocamentoContext {
		let _localctx: Calculo_deslocamentoContext = new Calculo_deslocamentoContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FileScriptParser.RULE_calculo_deslocamento);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.calculo_prioridade_1();
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.RIGHT_SHIFT || _la === FileScriptParser.LEFT_SHIFT) {
				{
				{
				this.state = 246;
				this.operador_deslocamento();
				this.state = 247;
				this.calculo_prioridade_1();
				}
				}
				this.state = 253;
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
	public calculo_prioridade_1(): Calculo_prioridade_1Context {
		let _localctx: Calculo_prioridade_1Context = new Calculo_prioridade_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 52, FileScriptParser.RULE_calculo_prioridade_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.calculo_prioridade_2();
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.SUM || _la === FileScriptParser.SUB) {
				{
				{
				this.state = 255;
				this.operador_prioridade_1();
				this.state = 256;
				this.calculo_prioridade_2();
				}
				}
				this.state = 262;
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
		this.enterRule(_localctx, 54, FileScriptParser.RULE_calculo_prioridade_2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.calculo_unario();
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileScriptParser.MULT) | (1 << FileScriptParser.DIV) | (1 << FileScriptParser.MOD))) !== 0)) {
				{
				{
				this.state = 264;
				this.operador_prioridade_2();
				this.state = 265;
				this.calculo_unario();
				}
				}
				this.state = 271;
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
	public calculo_unario(): Calculo_unarioContext {
		let _localctx: Calculo_unarioContext = new Calculo_unarioContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, FileScriptParser.RULE_calculo_unario);
		try {
			this.state = 275;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FileScriptParser.BITWISE_NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 272;
				this.match(FileScriptParser.BITWISE_NOT);
				this.state = 273;
				this.calculo_unario();
				}
				break;
			case FileScriptParser.STRING:
			case FileScriptParser.CHAR:
			case FileScriptParser.PARENTESES_OPEN:
			case FileScriptParser.COLCHETES_OPEN:
			case FileScriptParser.NUMERICO:
			case FileScriptParser.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 274;
				this.calculo_parenteses();
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
	public calculo_parenteses(): Calculo_parentesesContext {
		let _localctx: Calculo_parentesesContext = new Calculo_parentesesContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, FileScriptParser.RULE_calculo_parenteses);
		try {
			this.state = 282;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FileScriptParser.PARENTESES_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 277;
				this.match(FileScriptParser.PARENTESES_OPEN);
				this.state = 278;
				this.expressao();
				this.state = 279;
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
				this.state = 281;
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
		this.enterRule(_localctx, 60, FileScriptParser.RULE_operador_prioridade_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
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
		this.enterRule(_localctx, 62, FileScriptParser.RULE_operador_prioridade_2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
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
	public operador_igualdade(): Operador_igualdadeContext {
		let _localctx: Operador_igualdadeContext = new Operador_igualdadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, FileScriptParser.RULE_operador_igualdade);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			_la = this._input.LA(1);
			if (!(_la === FileScriptParser.EQUALS || _la === FileScriptParser.NOT_EQUALS)) {
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
	public operador_relacional(): Operador_relacionalContext {
		let _localctx: Operador_relacionalContext = new Operador_relacionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, FileScriptParser.RULE_operador_relacional);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			_la = this._input.LA(1);
			if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FileScriptParser.GREATER - 32)) | (1 << (FileScriptParser.GREATER_EQUALS - 32)) | (1 << (FileScriptParser.LESS - 32)) | (1 << (FileScriptParser.LESS_EQUALS - 32)))) !== 0))) {
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
	public operador_deslocamento(): Operador_deslocamentoContext {
		let _localctx: Operador_deslocamentoContext = new Operador_deslocamentoContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, FileScriptParser.RULE_operador_deslocamento);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			_la = this._input.LA(1);
			if (!(_la === FileScriptParser.RIGHT_SHIFT || _la === FileScriptParser.LEFT_SHIFT)) {
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
		this.enterRule(_localctx, 70, FileScriptParser.RULE_valor_calculo);
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 294;
				this.match(FileScriptParser.NUMERICO);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 295;
				this.match(FileScriptParser.VARIABLE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 296;
				this.match(FileScriptParser.STRING);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 297;
				this.match(FileScriptParser.CHAR);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 298;
				this.array();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 299;
				this.function_call();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 300;
				this.array_access();
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
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, FileScriptParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.match(FileScriptParser.COLCHETES_OPEN);
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileScriptParser.STRING) | (1 << FileScriptParser.CHAR) | (1 << FileScriptParser.PARENTESES_OPEN) | (1 << FileScriptParser.COLCHETES_OPEN))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (FileScriptParser.BITWISE_NOT - 42)) | (1 << (FileScriptParser.NUMERICO - 42)) | (1 << (FileScriptParser.VARIABLE - 42)))) !== 0)) {
				{
				this.state = 304;
				this.lista_expressoes();
				}
			}

			this.state = 307;
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
	public array_access(): Array_accessContext {
		let _localctx: Array_accessContext = new Array_accessContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, FileScriptParser.RULE_array_access);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.match(FileScriptParser.VARIABLE);
			this.state = 310;
			this.match(FileScriptParser.COLCHETES_OPEN);
			this.state = 311;
			this.expressao();
			this.state = 312;
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
		this.enterRule(_localctx, 76, FileScriptParser.RULE_lista_expressoes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.expressao();
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileScriptParser.COMMA) {
				{
				{
				this.state = 315;
				this.match(FileScriptParser.COMMA);
				this.state = 316;
				this.expressao();
				}
				}
				this.state = 321;
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
	public function_call(): Function_callContext {
		let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, FileScriptParser.RULE_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this.match(FileScriptParser.VARIABLE);
			this.state = 323;
			this.match(FileScriptParser.PARENTESES_OPEN);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileScriptParser.STRING) | (1 << FileScriptParser.CHAR) | (1 << FileScriptParser.PARENTESES_OPEN) | (1 << FileScriptParser.COLCHETES_OPEN))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (FileScriptParser.BITWISE_NOT - 42)) | (1 << (FileScriptParser.NUMERICO - 42)) | (1 << (FileScriptParser.VARIABLE - 42)))) !== 0)) {
				{
				this.state = 324;
				this.lista_expressoes();
				}
			}

			this.state = 327;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\u014C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03Y\n\x03\f\x03\x0E\x03\\\v\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"f\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05n\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x07\b{\n\b\f\b\x0E\b~\v\b\x03\b\x05\b\x81\n\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x05\v\x8D\n\v\x03\f\x03\f" +
		"\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\x9D\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x05\x0F\xA6\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\xAC\n\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\xB4\n\x11\f\x11\x0E\x11\xB7\v\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x07\x14\xC1\n\x14\f\x14\x0E\x14\xC4\v\x14" +
		"\x03\x15\x03\x15\x03\x15\x07\x15\xC9\n\x15\f\x15\x0E\x15\xCC\v\x15\x03" +
		"\x16\x03\x16\x03\x16\x07\x16\xD1\n\x16\f\x16\x0E\x16\xD4\v\x16\x03\x17" +
		"\x03\x17\x03\x17\x07\x17\xD9\n\x17\f\x17\x0E\x17\xDC\v\x17\x03\x18\x03" +
		"\x18\x03\x18\x07\x18\xE1\n\x18\f\x18\x0E\x18\xE4\v\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x07\x19\xEA\n\x19\f\x19\x0E\x19\xED\v\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x07\x1A\xF3\n\x1A\f\x1A\x0E\x1A\xF6\v\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x07\x1B\xFC\n\x1B\f\x1B\x0E\x1B\xFF\v\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0105\n\x1C\f\x1C\x0E\x1C\u0108\v" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u010E\n\x1D\f\x1D\x0E\x1D" +
		"\u0111\v\x1D\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0116\n\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u011D\n\x1F\x03 \x03 \x03!\x03!\x03\"" +
		"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u0130" +
		"\n%\x03&\x03&\x05&\u0134\n&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"(\x03(\x03(\x07(\u0140\n(\f(\x0E(\u0143\v(\x03)\x03)\x03)\x05)\u0148\n" +
		")\x03)\x03)\x03)\x02\x02\x02*\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02\x02\x07\x03\x02" +
		"\x1B\x1C\x03\x02\x1D\x1F\x03\x02 !\x03\x02\"%\x03\x02()\x02\u0149\x02" +
		"R\x03\x02\x02\x02\x04Z\x03\x02\x02\x02\x06e\x03\x02\x02\x02\bm\x03\x02" +
		"\x02\x02\no\x03\x02\x02\x02\fs\x03\x02\x02\x02\x0Ev\x03\x02\x02\x02\x10" +
		"\x82\x03\x02\x02\x02\x12\x86\x03\x02\x02\x02\x14\x8C\x03\x02\x02\x02\x16" +
		"\x8E\x03\x02\x02\x02\x18\x92\x03\x02\x02\x02\x1A\x97\x03\x02\x02\x02\x1C" +
		"\xA5\x03\x02\x02\x02\x1E\xA7\x03\x02\x02\x02 \xB0\x03\x02\x02\x02\"\xB8" +
		"\x03\x02\x02\x02$\xBB\x03\x02\x02\x02&\xBD\x03\x02\x02\x02(\xC5\x03\x02" +
		"\x02\x02*\xCD\x03\x02\x02\x02,\xD5\x03\x02\x02\x02.\xDD\x03\x02\x02\x02" +
		"0\xE5\x03\x02\x02\x022\xEE\x03\x02\x02\x024\xF7\x03\x02\x02\x026\u0100" +
		"\x03\x02\x02\x028\u0109\x03\x02\x02\x02:\u0115\x03\x02\x02\x02<\u011C" +
		"\x03\x02\x02\x02>\u011E\x03\x02\x02\x02@\u0120\x03\x02\x02\x02B\u0122" +
		"\x03\x02\x02\x02D\u0124\x03\x02\x02\x02F\u0126\x03\x02\x02\x02H\u012F" +
		"\x03\x02\x02\x02J\u0131\x03\x02\x02\x02L\u0137\x03\x02\x02\x02N\u013C" +
		"\x03\x02\x02\x02P\u0144\x03\x02\x02\x02RS\x05\x04\x03\x02ST\x07\x02\x02" +
		"\x03T\x03\x03\x02\x02\x02UV\x05\x06\x04\x02VW\x07\x0E\x02\x02WY\x03\x02" +
		"\x02\x02XU\x03\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03" +
		"\x02\x02\x02[\x05\x03\x02\x02\x02\\Z\x03\x02\x02\x02]f\x05\n\x06\x02^" +
		"f\x05\b\x05\x02_f\x05\x0E\b\x02`f\x05\x14\v\x02af\x05\f\x07\x02bf\x05" +
		"\x1C\x0F\x02cf\x05$\x13\x02df\x03\x02\x02\x02e]\x03\x02\x02\x02e^\x03" +
		"\x02\x02\x02e_\x03\x02\x02\x02e`\x03\x02\x02\x02ea\x03\x02\x02\x02eb\x03" +
		"\x02\x02\x02ec\x03\x02\x02\x02ed\x03\x02\x02\x02f\x07\x03\x02\x02\x02" +
		"gh\x07\n\x02\x02hi\x05\x04\x03\x02ij\x07\v\x02\x02jn\x03\x02\x02\x02k" +
		"l\x07\n\x02\x02ln\x07\v\x02\x02mg\x03\x02\x02\x02mk\x03\x02\x02\x02n\t" +
		"\x03\x02\x02\x02op\x07/\x02\x02pq\x07\x1A\x02\x02qr\x05$\x13\x02r\v\x03" +
		"\x02\x02\x02st\x07\x19\x02\x02tu\x05\n\x06\x02u\r\x03\x02\x02\x02vw\x07" +
		"\x11\x02\x02wx\x05$\x13\x02x|\x05\b\x05\x02y{\x05\x10\t\x02zy\x03\x02" +
		"\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x80\x03" +
		"\x02\x02\x02~|\x03\x02\x02\x02\x7F\x81\x05\x12\n\x02\x80\x7F\x03\x02\x02" +
		"\x02\x80\x81\x03\x02\x02\x02\x81\x0F\x03\x02\x02\x02\x82\x83\x07\x13\x02" +
		"\x02\x83\x84\x05$\x13\x02\x84\x85\x05\b\x05\x02\x85\x11\x03\x02\x02\x02" +
		"\x86\x87\x07\x12\x02\x02\x87\x88\x05\b\x05\x02\x88\x13\x03\x02\x02\x02" +
		"\x89\x8D\x05\x16\f\x02\x8A\x8D\x05\x18\r\x02\x8B\x8D\x05\x1A\x0E\x02\x8C" +
		"\x89\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D" +
		"\x15\x03\x02\x02\x02\x8E\x8F\x07\x15\x02\x02\x8F\x90\x05$\x13\x02\x90" +
		"\x91\x05\b\x05\x02\x91\x17\x03\x02\x02\x02\x92\x93\x07\x16\x02\x02\x93" +
		"\x94\x05\b\x05\x02\x94\x95\x07\x15\x02\x02\x95\x96\x05$\x13\x02\x96\x19" +
		"\x03\x02\x02\x02\x97\x98\x07\x14\x02\x02\x98\x99\x07\b\x02\x02\x99\x9A" +
		"\x05\x06\x04\x02\x9A\x9C\x07\x0E\x02\x02\x9B\x9D\x05$\x13\x02\x9C\x9B" +
		"\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F" +
		"\x07\x0E\x02\x02\x9F\xA0\x05\x06\x04\x02\xA0\xA1\x07\t\x02\x02\xA1\xA2" +
		"\x05\b\x05\x02\xA2\x1B\x03\x02\x02\x02\xA3\xA6\x05\x1E\x10\x02\xA4\xA6" +
		"\x05\"\x12\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\x1D" +
		"\x03\x02\x02\x02\xA7\xA8\x07\x17\x02\x02\xA8\xA9\x07/\x02\x02\xA9\xAB" +
		"\x07\b\x02\x02\xAA\xAC\x05 \x11\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03" +
		"\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x07\t\x02\x02\xAE\xAF\x05" +
		"\b\x05\x02\xAF\x1F\x03\x02\x02\x02\xB0\xB5\x07/\x02\x02\xB1\xB2\x07\x10" +
		"\x02\x02\xB2\xB4\x07/\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB7\x03\x02" +
		"\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6!\x03\x02" +
		"\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xB9\x07\x18\x02\x02\xB9\xBA\x05$" +
		"\x13\x02\xBA#\x03\x02\x02\x02\xBB\xBC\x05&\x14\x02\xBC%\x03\x02\x02\x02" +
		"\xBD\xC2\x05(\x15\x02\xBE\xBF\x07\'\x02\x02\xBF\xC1\x05(\x15\x02\xC0\xBE" +
		"\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3" +
		"\x03\x02\x02\x02\xC3\'\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xCA" +
		"\x05*\x16\x02\xC6\xC7\x07&\x02\x02\xC7\xC9\x05*\x16\x02\xC8\xC6\x03\x02" +
		"\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02" +
		"\x02\x02\xCB)\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD\xD2\x05,\x17" +
		"\x02\xCE\xCF\x07+\x02\x02\xCF\xD1\x05,\x17\x02\xD0\xCE\x03\x02\x02\x02" +
		"\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02" +
		"\xD3+\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xDA\x05.\x18\x02\xD6" +
		"\xD7\x07-\x02\x02\xD7\xD9\x05.\x18\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDC" +
		"\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB-" +
		"\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xE2\x050\x19\x02\xDE\xDF" +
		"\x07*\x02\x02\xDF\xE1\x050\x19\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE4\x03" +
		"\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3/\x03" +
		"\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xEB\x052\x1A\x02\xE6\xE7\x05" +
		"B\"\x02\xE7\xE8\x052\x1A\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE6\x03\x02\x02" +
		"\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02" +
		"\x02\xEC1\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xEE\xF4\x054\x1B\x02" +
		"\xEF\xF0\x05D#\x02\xF0\xF1\x054\x1B\x02\xF1\xF3\x03\x02\x02\x02\xF2\xEF" +
		"\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5" +
		"\x03\x02\x02\x02\xF53\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xFD" +
		"\x056\x1C\x02\xF8\xF9\x05F$\x02\xF9\xFA\x056\x1C\x02\xFA\xFC\x03\x02\x02" +
		"\x02\xFB\xF8\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02" +
		"\x02\xFD\xFE\x03\x02\x02\x02\xFE5\x03\x02\x02\x02\xFF\xFD\x03\x02\x02" +
		"\x02\u0100\u0106\x058\x1D\x02\u0101\u0102\x05> \x02\u0102\u0103\x058\x1D" +
		"\x02\u0103\u0105\x03\x02\x02\x02\u0104\u0101\x03\x02\x02\x02\u0105\u0108" +
		"\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02" +
		"\u01077\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109\u010F\x05:\x1E" +
		"\x02\u010A\u010B\x05@!\x02\u010B\u010C\x05:\x1E\x02\u010C\u010E\x03\x02" +
		"\x02\x02\u010D\u010A\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F" +
		"\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u01109\x03\x02\x02" +
		"\x02\u0111\u010F\x03\x02\x02\x02\u0112\u0113\x07,\x02\x02\u0113\u0116" +
		"\x05:\x1E\x02\u0114\u0116\x05<\x1F\x02\u0115\u0112\x03\x02\x02\x02\u0115" +
		"\u0114\x03\x02\x02\x02\u0116;\x03\x02\x02\x02\u0117\u0118\x07\b\x02\x02" +
		"\u0118\u0119\x05$\x13\x02\u0119\u011A\x07\t\x02\x02\u011A\u011D\x03\x02" +
		"\x02\x02\u011B\u011D\x05H%\x02\u011C\u0117\x03\x02\x02\x02\u011C\u011B" +
		"\x03\x02\x02\x02\u011D=\x03\x02\x02\x02\u011E\u011F\t\x02\x02\x02\u011F" +
		"?\x03\x02\x02\x02\u0120\u0121\t\x03\x02\x02\u0121A\x03\x02\x02\x02\u0122" +
		"\u0123\t\x04\x02\x02\u0123C\x03\x02\x02\x02\u0124\u0125\t\x05\x02\x02" +
		"\u0125E\x03\x02\x02\x02\u0126\u0127\t\x06\x02\x02\u0127G\x03\x02\x02\x02" +
		"\u0128\u0130\x07.\x02\x02\u0129\u0130\x07/\x02\x02\u012A\u0130\x07\x06" +
		"\x02\x02\u012B\u0130\x07\x07\x02\x02\u012C\u0130\x05J&\x02\u012D\u0130" +
		"\x05P)\x02\u012E\u0130\x05L\'\x02\u012F\u0128\x03\x02\x02\x02\u012F\u0129" +
		"\x03\x02\x02\x02\u012F\u012A\x03\x02\x02\x02\u012F\u012B\x03\x02\x02\x02" +
		"\u012F\u012C\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u012F\u012E\x03" +
		"\x02\x02\x02\u0130I\x03\x02\x02\x02\u0131\u0133\x07\f\x02\x02\u0132\u0134" +
		"\x05N(\x02\u0133\u0132\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134" +
		"\u0135\x03\x02\x02\x02\u0135\u0136\x07\r\x02\x02\u0136K\x03\x02\x02\x02" +
		"\u0137\u0138\x07/\x02\x02\u0138\u0139\x07\f\x02\x02\u0139\u013A\x05$\x13" +
		"\x02\u013A\u013B\x07\r\x02\x02\u013BM\x03\x02\x02\x02\u013C\u0141\x05" +
		"$\x13\x02\u013D\u013E\x07\x10\x02\x02\u013E\u0140\x05$\x13\x02\u013F\u013D" +
		"\x03\x02\x02\x02\u0140\u0143\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02" +
		"\u0141\u0142\x03\x02\x02\x02\u0142O\x03\x02\x02\x02\u0143\u0141\x03\x02" +
		"\x02\x02\u0144\u0145\x07/\x02\x02\u0145\u0147\x07\b\x02\x02\u0146\u0148" +
		"\x05N(\x02\u0147\u0146\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148" +
		"\u0149\x03\x02\x02\x02\u0149\u014A\x07\t\x02\x02\u014AQ\x03\x02\x02\x02" +
		"\x1CZem|\x80\x8C\x9C\xA5\xAB\xB5\xC2\xCA\xD2\xDA\xE2\xEB\xF4\xFD\u0106" +
		"\u010F\u0115\u011C\u012F\u0133\u0141\u0147";
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
	public expressao(): ExpressaoContext | undefined {
		return this.tryGetRuleContext(0, ExpressaoContext);
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


export class ExpressaoContext extends ParserRuleContext {
	public calculo_logico_ou(): Calculo_logico_ouContext {
		return this.getRuleContext(0, Calculo_logico_ouContext);
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


export class Calculo_logico_ouContext extends ParserRuleContext {
	public calculo_logico_e(): Calculo_logico_eContext[];
	public calculo_logico_e(i: number): Calculo_logico_eContext;
	public calculo_logico_e(i?: number): Calculo_logico_eContext | Calculo_logico_eContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_logico_eContext);
		} else {
			return this.getRuleContext(i, Calculo_logico_eContext);
		}
	}
	public LOGIC_OR(): TerminalNode[];
	public LOGIC_OR(i: number): TerminalNode;
	public LOGIC_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FileScriptParser.LOGIC_OR);
		} else {
			return this.getToken(FileScriptParser.LOGIC_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_logico_ou; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_logico_ou) {
			listener.enterCalculo_logico_ou(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_logico_ou) {
			listener.exitCalculo_logico_ou(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_logico_ou) {
			return visitor.visitCalculo_logico_ou(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_logico_eContext extends ParserRuleContext {
	public calculo_bitwise_ou(): Calculo_bitwise_ouContext[];
	public calculo_bitwise_ou(i: number): Calculo_bitwise_ouContext;
	public calculo_bitwise_ou(i?: number): Calculo_bitwise_ouContext | Calculo_bitwise_ouContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_bitwise_ouContext);
		} else {
			return this.getRuleContext(i, Calculo_bitwise_ouContext);
		}
	}
	public LOGIC_AND(): TerminalNode[];
	public LOGIC_AND(i: number): TerminalNode;
	public LOGIC_AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FileScriptParser.LOGIC_AND);
		} else {
			return this.getToken(FileScriptParser.LOGIC_AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_logico_e; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_logico_e) {
			listener.enterCalculo_logico_e(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_logico_e) {
			listener.exitCalculo_logico_e(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_logico_e) {
			return visitor.visitCalculo_logico_e(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_bitwise_ouContext extends ParserRuleContext {
	public calculo_bitwise_xou(): Calculo_bitwise_xouContext[];
	public calculo_bitwise_xou(i: number): Calculo_bitwise_xouContext;
	public calculo_bitwise_xou(i?: number): Calculo_bitwise_xouContext | Calculo_bitwise_xouContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_bitwise_xouContext);
		} else {
			return this.getRuleContext(i, Calculo_bitwise_xouContext);
		}
	}
	public BITWISE_OR(): TerminalNode[];
	public BITWISE_OR(i: number): TerminalNode;
	public BITWISE_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FileScriptParser.BITWISE_OR);
		} else {
			return this.getToken(FileScriptParser.BITWISE_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_bitwise_ou; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_bitwise_ou) {
			listener.enterCalculo_bitwise_ou(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_bitwise_ou) {
			listener.exitCalculo_bitwise_ou(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_bitwise_ou) {
			return visitor.visitCalculo_bitwise_ou(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_bitwise_xouContext extends ParserRuleContext {
	public calculo_bitwise_e(): Calculo_bitwise_eContext[];
	public calculo_bitwise_e(i: number): Calculo_bitwise_eContext;
	public calculo_bitwise_e(i?: number): Calculo_bitwise_eContext | Calculo_bitwise_eContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_bitwise_eContext);
		} else {
			return this.getRuleContext(i, Calculo_bitwise_eContext);
		}
	}
	public BITWISE_XOR(): TerminalNode[];
	public BITWISE_XOR(i: number): TerminalNode;
	public BITWISE_XOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FileScriptParser.BITWISE_XOR);
		} else {
			return this.getToken(FileScriptParser.BITWISE_XOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_bitwise_xou; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_bitwise_xou) {
			listener.enterCalculo_bitwise_xou(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_bitwise_xou) {
			listener.exitCalculo_bitwise_xou(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_bitwise_xou) {
			return visitor.visitCalculo_bitwise_xou(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_bitwise_eContext extends ParserRuleContext {
	public calculo_igualdade(): Calculo_igualdadeContext[];
	public calculo_igualdade(i: number): Calculo_igualdadeContext;
	public calculo_igualdade(i?: number): Calculo_igualdadeContext | Calculo_igualdadeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_igualdadeContext);
		} else {
			return this.getRuleContext(i, Calculo_igualdadeContext);
		}
	}
	public BITWISE_AND(): TerminalNode[];
	public BITWISE_AND(i: number): TerminalNode;
	public BITWISE_AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FileScriptParser.BITWISE_AND);
		} else {
			return this.getToken(FileScriptParser.BITWISE_AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_bitwise_e; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_bitwise_e) {
			listener.enterCalculo_bitwise_e(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_bitwise_e) {
			listener.exitCalculo_bitwise_e(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_bitwise_e) {
			return visitor.visitCalculo_bitwise_e(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_igualdadeContext extends ParserRuleContext {
	public calculo_relacional(): Calculo_relacionalContext[];
	public calculo_relacional(i: number): Calculo_relacionalContext;
	public calculo_relacional(i?: number): Calculo_relacionalContext | Calculo_relacionalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_relacionalContext);
		} else {
			return this.getRuleContext(i, Calculo_relacionalContext);
		}
	}
	public operador_igualdade(): Operador_igualdadeContext[];
	public operador_igualdade(i: number): Operador_igualdadeContext;
	public operador_igualdade(i?: number): Operador_igualdadeContext | Operador_igualdadeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Operador_igualdadeContext);
		} else {
			return this.getRuleContext(i, Operador_igualdadeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_igualdade; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_igualdade) {
			listener.enterCalculo_igualdade(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_igualdade) {
			listener.exitCalculo_igualdade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_igualdade) {
			return visitor.visitCalculo_igualdade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_relacionalContext extends ParserRuleContext {
	public calculo_deslocamento(): Calculo_deslocamentoContext[];
	public calculo_deslocamento(i: number): Calculo_deslocamentoContext;
	public calculo_deslocamento(i?: number): Calculo_deslocamentoContext | Calculo_deslocamentoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_deslocamentoContext);
		} else {
			return this.getRuleContext(i, Calculo_deslocamentoContext);
		}
	}
	public operador_relacional(): Operador_relacionalContext[];
	public operador_relacional(i: number): Operador_relacionalContext;
	public operador_relacional(i?: number): Operador_relacionalContext | Operador_relacionalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Operador_relacionalContext);
		} else {
			return this.getRuleContext(i, Operador_relacionalContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_relacional; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_relacional) {
			listener.enterCalculo_relacional(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_relacional) {
			listener.exitCalculo_relacional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_relacional) {
			return visitor.visitCalculo_relacional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_deslocamentoContext extends ParserRuleContext {
	public calculo_prioridade_1(): Calculo_prioridade_1Context[];
	public calculo_prioridade_1(i: number): Calculo_prioridade_1Context;
	public calculo_prioridade_1(i?: number): Calculo_prioridade_1Context | Calculo_prioridade_1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_prioridade_1Context);
		} else {
			return this.getRuleContext(i, Calculo_prioridade_1Context);
		}
	}
	public operador_deslocamento(): Operador_deslocamentoContext[];
	public operador_deslocamento(i: number): Operador_deslocamentoContext;
	public operador_deslocamento(i?: number): Operador_deslocamentoContext | Operador_deslocamentoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Operador_deslocamentoContext);
		} else {
			return this.getRuleContext(i, Operador_deslocamentoContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_deslocamento; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_deslocamento) {
			listener.enterCalculo_deslocamento(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_deslocamento) {
			listener.exitCalculo_deslocamento(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_deslocamento) {
			return visitor.visitCalculo_deslocamento(this);
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
	public calculo_unario(): Calculo_unarioContext[];
	public calculo_unario(i: number): Calculo_unarioContext;
	public calculo_unario(i?: number): Calculo_unarioContext | Calculo_unarioContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Calculo_unarioContext);
		} else {
			return this.getRuleContext(i, Calculo_unarioContext);
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


export class Calculo_unarioContext extends ParserRuleContext {
	public BITWISE_NOT(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.BITWISE_NOT, 0); }
	public calculo_unario(): Calculo_unarioContext | undefined {
		return this.tryGetRuleContext(0, Calculo_unarioContext);
	}
	public calculo_parenteses(): Calculo_parentesesContext | undefined {
		return this.tryGetRuleContext(0, Calculo_parentesesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_calculo_unario; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterCalculo_unario) {
			listener.enterCalculo_unario(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitCalculo_unario) {
			listener.exitCalculo_unario(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitCalculo_unario) {
			return visitor.visitCalculo_unario(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_parentesesContext extends ParserRuleContext {
	public PARENTESES_OPEN(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.PARENTESES_OPEN, 0); }
	public expressao(): ExpressaoContext | undefined {
		return this.tryGetRuleContext(0, ExpressaoContext);
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


export class Operador_igualdadeContext extends ParserRuleContext {
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.EQUALS, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.NOT_EQUALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_operador_igualdade; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterOperador_igualdade) {
			listener.enterOperador_igualdade(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitOperador_igualdade) {
			listener.exitOperador_igualdade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitOperador_igualdade) {
			return visitor.visitOperador_igualdade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operador_relacionalContext extends ParserRuleContext {
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.GREATER, 0); }
	public GREATER_EQUALS(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.GREATER_EQUALS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.LESS, 0); }
	public LESS_EQUALS(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.LESS_EQUALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_operador_relacional; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterOperador_relacional) {
			listener.enterOperador_relacional(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitOperador_relacional) {
			listener.exitOperador_relacional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitOperador_relacional) {
			return visitor.visitOperador_relacional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operador_deslocamentoContext extends ParserRuleContext {
	public RIGHT_SHIFT(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.RIGHT_SHIFT, 0); }
	public LEFT_SHIFT(): TerminalNode | undefined { return this.tryGetToken(FileScriptParser.LEFT_SHIFT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_operador_deslocamento; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterOperador_deslocamento) {
			listener.enterOperador_deslocamento(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitOperador_deslocamento) {
			listener.exitOperador_deslocamento(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitOperador_deslocamento) {
			return visitor.visitOperador_deslocamento(this);
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
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	public array_access(): Array_accessContext | undefined {
		return this.tryGetRuleContext(0, Array_accessContext);
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


export class Array_accessContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(FileScriptParser.VARIABLE, 0); }
	public COLCHETES_OPEN(): TerminalNode { return this.getToken(FileScriptParser.COLCHETES_OPEN, 0); }
	public expressao(): ExpressaoContext {
		return this.getRuleContext(0, ExpressaoContext);
	}
	public COLCHETES_CLOSE(): TerminalNode { return this.getToken(FileScriptParser.COLCHETES_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileScriptParser.RULE_array_access; }
	// @Override
	public enterRule(listener: FileScriptParserListener): void {
		if (listener.enterArray_access) {
			listener.enterArray_access(this);
		}
	}
	// @Override
	public exitRule(listener: FileScriptParserListener): void {
		if (listener.exitArray_access) {
			listener.exitArray_access(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileScriptParserVisitor<Result>): Result {
		if (visitor.visitArray_access) {
			return visitor.visitArray_access(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lista_expressoesContext extends ParserRuleContext {
	public expressao(): ExpressaoContext[];
	public expressao(i: number): ExpressaoContext;
	public expressao(i?: number): ExpressaoContext | ExpressaoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressaoContext);
		} else {
			return this.getRuleContext(i, ExpressaoContext);
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


