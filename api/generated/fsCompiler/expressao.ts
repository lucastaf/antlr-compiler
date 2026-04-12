// Generated from antlr\expressao.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { expressaoListener } from "./expressaoListener";
import { expressaoVisitor } from "./expressaoVisitor";


export class expressao extends Parser {
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
	public static readonly RULE_expressao = 0;
	public static readonly RULE_calculo_prioridade_1 = 1;
	public static readonly RULE_calculo_prioridade_2 = 2;
	public static readonly RULE_calculo_operador_logico = 3;
	public static readonly RULE_calculo_logico_composto = 4;
	public static readonly RULE_calculo_parenteses = 5;
	public static readonly RULE_operador_prioridade_1 = 6;
	public static readonly RULE_operador_prioridade_2 = 7;
	public static readonly RULE_operador_logico = 8;
	public static readonly RULE_composto_logico = 9;
	public static readonly RULE_valor_calculo = 10;
	public static readonly RULE_array = 11;
	public static readonly RULE_lista_expressoes = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expressao", "calculo_prioridade_1", "calculo_prioridade_2", "calculo_operador_logico", 
		"calculo_logico_composto", "calculo_parenteses", "operador_prioridade_1", 
		"operador_prioridade_2", "operador_logico", "composto_logico", "valor_calculo", 
		"array", "lista_expressoes",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(expressao._LITERAL_NAMES, expressao._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return expressao.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "expressao.g4"; }

	// @Override
	public get ruleNames(): string[] { return expressao.ruleNames; }

	// @Override
	public get serializedATN(): string { return expressao._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(expressao._ATN, this);
	}
	// @RuleVersion(0)
	public expressao(): ExpressaoContext {
		let _localctx: ExpressaoContext = new ExpressaoContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, expressao.RULE_expressao);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
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
		this.enterRule(_localctx, 2, expressao.RULE_calculo_prioridade_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.calculo_prioridade_2();
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.SUM || _la === expressao.SUB) {
				{
				{
				this.state = 29;
				this.operador_prioridade_1();
				this.state = 30;
				this.calculo_prioridade_2();
				}
				}
				this.state = 36;
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
		this.enterRule(_localctx, 4, expressao.RULE_calculo_prioridade_2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.calculo_operador_logico();
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << expressao.MULT) | (1 << expressao.DIV) | (1 << expressao.MOD))) !== 0)) {
				{
				{
				this.state = 38;
				this.operador_prioridade_2();
				this.state = 39;
				this.calculo_operador_logico();
				}
				}
				this.state = 45;
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
		this.enterRule(_localctx, 6, expressao.RULE_calculo_operador_logico);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.calculo_logico_composto();
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (expressao.EQUALS - 30)) | (1 << (expressao.NOT_EQUALS - 30)) | (1 << (expressao.GREATER - 30)) | (1 << (expressao.GREATER_EQUALS - 30)) | (1 << (expressao.LESS - 30)) | (1 << (expressao.LESS_EQUALS - 30)))) !== 0)) {
				{
				{
				this.state = 47;
				this.operador_logico();
				this.state = 48;
				this.calculo_logico_composto();
				}
				}
				this.state = 54;
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
		this.enterRule(_localctx, 8, expressao.RULE_calculo_logico_composto);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.calculo_parenteses();
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.LOGIC_AND || _la === expressao.LOGIC_OR) {
				{
				{
				this.state = 56;
				this.composto_logico();
				this.state = 57;
				this.calculo_parenteses();
				}
				}
				this.state = 63;
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
		this.enterRule(_localctx, 10, expressao.RULE_calculo_parenteses);
		try {
			this.state = 69;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case expressao.PARENTESES_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				this.match(expressao.PARENTESES_OPEN);
				this.state = 65;
				this.calculo_prioridade_1();
				this.state = 66;
				this.match(expressao.PARENTESES_CLOSE);
				}
				break;
			case expressao.STRING:
			case expressao.CHAR:
			case expressao.COLCHETES_OPEN:
			case expressao.NUMERICO:
			case expressao.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 68;
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
		this.enterRule(_localctx, 12, expressao.RULE_operador_prioridade_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			_la = this._input.LA(1);
			if (!(_la === expressao.SUM || _la === expressao.SUB)) {
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
		this.enterRule(_localctx, 14, expressao.RULE_operador_prioridade_2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << expressao.MULT) | (1 << expressao.DIV) | (1 << expressao.MOD))) !== 0))) {
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
		this.enterRule(_localctx, 16, expressao.RULE_operador_logico);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (expressao.EQUALS - 30)) | (1 << (expressao.NOT_EQUALS - 30)) | (1 << (expressao.GREATER - 30)) | (1 << (expressao.GREATER_EQUALS - 30)) | (1 << (expressao.LESS - 30)) | (1 << (expressao.LESS_EQUALS - 30)))) !== 0))) {
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
		this.enterRule(_localctx, 18, expressao.RULE_composto_logico);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			_la = this._input.LA(1);
			if (!(_la === expressao.LOGIC_AND || _la === expressao.LOGIC_OR)) {
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
		this.enterRule(_localctx, 20, expressao.RULE_valor_calculo);
		try {
			this.state = 84;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case expressao.NUMERICO:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				this.match(expressao.NUMERICO);
				}
				break;
			case expressao.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 80;
				this.match(expressao.VARIABLE);
				}
				break;
			case expressao.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 81;
				this.match(expressao.STRING);
				}
				break;
			case expressao.CHAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 82;
				this.match(expressao.CHAR);
				}
				break;
			case expressao.COLCHETES_OPEN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 83;
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
		this.enterRule(_localctx, 22, expressao.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(expressao.COLCHETES_OPEN);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << expressao.STRING) | (1 << expressao.CHAR) | (1 << expressao.COLCHETES_OPEN))) !== 0) || _la === expressao.NUMERICO || _la === expressao.VARIABLE) {
				{
				this.state = 87;
				this.lista_expressoes();
				}
			}

			this.state = 90;
			this.match(expressao.COLCHETES_CLOSE);
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
		this.enterRule(_localctx, 24, expressao.RULE_lista_expressoes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.valor_calculo();
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.COMMA) {
				{
				{
				this.state = 93;
				this.match(expressao.COMMA);
				this.state = 94;
				this.valor_calculo();
				}
				}
				this.state = 99;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/g\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E\t" +
		"\x0E\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03#\n\x03\f" +
		"\x03\x0E\x03&\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04,\n\x04\f\x04" +
		"\x0E\x04/\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x055\n\x05\f\x05\x0E" +
		"\x058\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06>\n\x06\f\x06\x0E\x06" +
		"A\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07H\n\x07\x03\b\x03" +
		"\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\fW\n\f\x03\r\x03\r\x05\r[\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07" +
		"\x0Eb\n\x0E\f\x0E\x0E\x0Ee\v\x0E\x03\x0E\x02\x02\x02\x0F\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x02\x06\x03\x02\x1B\x1C\x03\x02\x1D\x1F\x03\x02 %\x03\x02" +
		"&\'\x02d\x02\x1C\x03\x02\x02\x02\x04\x1E\x03\x02\x02\x02\x06\'\x03\x02" +
		"\x02\x02\b0\x03\x02\x02\x02\n9\x03\x02\x02\x02\fG\x03\x02\x02\x02\x0E" +
		"I\x03\x02\x02\x02\x10K\x03\x02\x02\x02\x12M\x03\x02\x02\x02\x14O\x03\x02" +
		"\x02\x02\x16V\x03\x02\x02\x02\x18X\x03\x02\x02\x02\x1A^\x03\x02\x02\x02" +
		"\x1C\x1D\x05\x04\x03\x02\x1D\x03\x03\x02\x02\x02\x1E$\x05\x06\x04\x02" +
		"\x1F \x05\x0E\b\x02 !\x05\x06\x04\x02!#\x03\x02\x02\x02\"\x1F\x03\x02" +
		"\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\x05\x03" +
		"\x02\x02\x02&$\x03\x02\x02\x02\'-\x05\b\x05\x02()\x05\x10\t\x02)*\x05" +
		"\b\x05\x02*,\x03\x02\x02\x02+(\x03\x02\x02\x02,/\x03\x02\x02\x02-+\x03" +
		"\x02\x02\x02-.\x03\x02\x02\x02.\x07\x03\x02\x02\x02/-\x03\x02\x02\x02" +
		"06\x05\n\x06\x0212\x05\x12\n\x0223\x05\n\x06\x0235\x03\x02\x02\x0241\x03" +
		"\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x027\t" +
		"\x03\x02\x02\x0286\x03\x02\x02\x029?\x05\f\x07\x02:;\x05\x14\v\x02;<\x05" +
		"\f\x07\x02<>\x03\x02\x02\x02=:\x03\x02\x02\x02>A\x03\x02\x02\x02?=\x03" +
		"\x02\x02\x02?@\x03\x02\x02\x02@\v\x03\x02\x02\x02A?\x03\x02\x02\x02BC" +
		"\x07\b\x02\x02CD\x05\x04\x03\x02DE\x07\t\x02\x02EH\x03\x02\x02\x02FH\x05" +
		"\x16\f\x02GB\x03\x02\x02\x02GF\x03\x02\x02\x02H\r\x03\x02\x02\x02IJ\t" +
		"\x02\x02\x02J\x0F\x03\x02\x02\x02KL\t\x03\x02\x02L\x11\x03\x02\x02\x02" +
		"MN\t\x04\x02\x02N\x13\x03\x02\x02\x02OP\t\x05\x02\x02P\x15\x03\x02\x02" +
		"\x02QW\x07.\x02\x02RW\x07/\x02\x02SW\x07\x06\x02\x02TW\x07\x07\x02\x02" +
		"UW\x05\x18\r\x02VQ\x03\x02\x02\x02VR\x03\x02\x02\x02VS\x03\x02\x02\x02" +
		"VT\x03\x02\x02\x02VU\x03\x02\x02\x02W\x17\x03\x02\x02\x02XZ\x07\f\x02" +
		"\x02Y[\x05\x1A\x0E\x02ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x03\x02" +
		"\x02\x02\\]\x07\r\x02\x02]\x19\x03\x02\x02\x02^c\x05\x16\f\x02_`\x07\x10" +
		"\x02\x02`b\x05\x16\f\x02a_\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02" +
		"\x02\x02cd\x03\x02\x02\x02d\x1B\x03\x02\x02\x02ec\x03\x02\x02\x02\n$-" +
		"6?GVZc";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!expressao.__ATN) {
			expressao.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(expressao._serializedATN));
		}

		return expressao.__ATN;
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
	public get ruleIndex(): number { return expressao.RULE_expressao; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterExpressao) {
			listener.enterExpressao(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitExpressao) {
			listener.exitExpressao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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
	public get ruleIndex(): number { return expressao.RULE_calculo_prioridade_1; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_prioridade_1) {
			listener.enterCalculo_prioridade_1(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_prioridade_1) {
			listener.exitCalculo_prioridade_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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
	public get ruleIndex(): number { return expressao.RULE_calculo_prioridade_2; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_prioridade_2) {
			listener.enterCalculo_prioridade_2(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_prioridade_2) {
			listener.exitCalculo_prioridade_2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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
	public get ruleIndex(): number { return expressao.RULE_calculo_operador_logico; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_operador_logico) {
			listener.enterCalculo_operador_logico(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_operador_logico) {
			listener.exitCalculo_operador_logico(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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
	public get ruleIndex(): number { return expressao.RULE_calculo_logico_composto; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_logico_composto) {
			listener.enterCalculo_logico_composto(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_logico_composto) {
			listener.exitCalculo_logico_composto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitCalculo_logico_composto) {
			return visitor.visitCalculo_logico_composto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_parentesesContext extends ParserRuleContext {
	public PARENTESES_OPEN(): TerminalNode | undefined { return this.tryGetToken(expressao.PARENTESES_OPEN, 0); }
	public calculo_prioridade_1(): Calculo_prioridade_1Context | undefined {
		return this.tryGetRuleContext(0, Calculo_prioridade_1Context);
	}
	public PARENTESES_CLOSE(): TerminalNode | undefined { return this.tryGetToken(expressao.PARENTESES_CLOSE, 0); }
	public valor_calculo(): Valor_calculoContext | undefined {
		return this.tryGetRuleContext(0, Valor_calculoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_calculo_parenteses; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_parenteses) {
			listener.enterCalculo_parenteses(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_parenteses) {
			listener.exitCalculo_parenteses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitCalculo_parenteses) {
			return visitor.visitCalculo_parenteses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operador_prioridade_1Context extends ParserRuleContext {
	public SUM(): TerminalNode | undefined { return this.tryGetToken(expressao.SUM, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(expressao.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_operador_prioridade_1; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterOperador_prioridade_1) {
			listener.enterOperador_prioridade_1(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitOperador_prioridade_1) {
			listener.exitOperador_prioridade_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitOperador_prioridade_1) {
			return visitor.visitOperador_prioridade_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operador_prioridade_2Context extends ParserRuleContext {
	public MULT(): TerminalNode | undefined { return this.tryGetToken(expressao.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(expressao.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(expressao.MOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_operador_prioridade_2; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterOperador_prioridade_2) {
			listener.enterOperador_prioridade_2(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitOperador_prioridade_2) {
			listener.exitOperador_prioridade_2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitOperador_prioridade_2) {
			return visitor.visitOperador_prioridade_2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operador_logicoContext extends ParserRuleContext {
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(expressao.EQUALS, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(expressao.NOT_EQUALS, 0); }
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(expressao.GREATER, 0); }
	public GREATER_EQUALS(): TerminalNode | undefined { return this.tryGetToken(expressao.GREATER_EQUALS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(expressao.LESS, 0); }
	public LESS_EQUALS(): TerminalNode | undefined { return this.tryGetToken(expressao.LESS_EQUALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_operador_logico; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterOperador_logico) {
			listener.enterOperador_logico(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitOperador_logico) {
			listener.exitOperador_logico(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitOperador_logico) {
			return visitor.visitOperador_logico(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Composto_logicoContext extends ParserRuleContext {
	public LOGIC_AND(): TerminalNode | undefined { return this.tryGetToken(expressao.LOGIC_AND, 0); }
	public LOGIC_OR(): TerminalNode | undefined { return this.tryGetToken(expressao.LOGIC_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_composto_logico; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterComposto_logico) {
			listener.enterComposto_logico(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitComposto_logico) {
			listener.exitComposto_logico(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitComposto_logico) {
			return visitor.visitComposto_logico(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Valor_calculoContext extends ParserRuleContext {
	public NUMERICO(): TerminalNode | undefined { return this.tryGetToken(expressao.NUMERICO, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(expressao.VARIABLE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(expressao.STRING, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(expressao.CHAR, 0); }
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_valor_calculo; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterValor_calculo) {
			listener.enterValor_calculo(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitValor_calculo) {
			listener.exitValor_calculo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitValor_calculo) {
			return visitor.visitValor_calculo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public COLCHETES_OPEN(): TerminalNode { return this.getToken(expressao.COLCHETES_OPEN, 0); }
	public COLCHETES_CLOSE(): TerminalNode { return this.getToken(expressao.COLCHETES_CLOSE, 0); }
	public lista_expressoes(): Lista_expressoesContext | undefined {
		return this.tryGetRuleContext(0, Lista_expressoesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_array; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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
			return this.getTokens(expressao.COMMA);
		} else {
			return this.getToken(expressao.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_lista_expressoes; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterLista_expressoes) {
			listener.enterLista_expressoes(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitLista_expressoes) {
			listener.exitLista_expressoes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitLista_expressoes) {
			return visitor.visitLista_expressoes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


