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
	public static readonly RULE_calculo_logico_ou = 1;
	public static readonly RULE_calculo_logico_e = 2;
	public static readonly RULE_calculo_bitwise_ou = 3;
	public static readonly RULE_calculo_bitwise_xou = 4;
	public static readonly RULE_calculo_bitwise_e = 5;
	public static readonly RULE_calculo_igualdade = 6;
	public static readonly RULE_calculo_relacional = 7;
	public static readonly RULE_calculo_deslocamento = 8;
	public static readonly RULE_calculo_prioridade_1 = 9;
	public static readonly RULE_calculo_prioridade_2 = 10;
	public static readonly RULE_calculo_unario = 11;
	public static readonly RULE_calculo_parenteses = 12;
	public static readonly RULE_operador_prioridade_1 = 13;
	public static readonly RULE_operador_prioridade_2 = 14;
	public static readonly RULE_operador_igualdade = 15;
	public static readonly RULE_operador_relacional = 16;
	public static readonly RULE_operador_deslocamento = 17;
	public static readonly RULE_valor_calculo = 18;
	public static readonly RULE_array = 19;
	public static readonly RULE_lista_expressoes = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expressao", "calculo_logico_ou", "calculo_logico_e", "calculo_bitwise_ou", 
		"calculo_bitwise_xou", "calculo_bitwise_e", "calculo_igualdade", "calculo_relacional", 
		"calculo_deslocamento", "calculo_prioridade_1", "calculo_prioridade_2", 
		"calculo_unario", "calculo_parenteses", "operador_prioridade_1", "operador_prioridade_2", 
		"operador_igualdade", "operador_relacional", "operador_deslocamento", 
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
			this.state = 42;
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
		this.enterRule(_localctx, 2, expressao.RULE_calculo_logico_ou);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.calculo_logico_e();
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.LOGIC_OR) {
				{
				{
				this.state = 45;
				this.match(expressao.LOGIC_OR);
				this.state = 46;
				this.calculo_logico_e();
				}
				}
				this.state = 51;
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
		this.enterRule(_localctx, 4, expressao.RULE_calculo_logico_e);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.calculo_bitwise_ou();
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.LOGIC_AND) {
				{
				{
				this.state = 53;
				this.match(expressao.LOGIC_AND);
				this.state = 54;
				this.calculo_bitwise_ou();
				}
				}
				this.state = 59;
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
		this.enterRule(_localctx, 6, expressao.RULE_calculo_bitwise_ou);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.calculo_bitwise_xou();
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.BITWISE_OR) {
				{
				{
				this.state = 61;
				this.match(expressao.BITWISE_OR);
				this.state = 62;
				this.calculo_bitwise_xou();
				}
				}
				this.state = 67;
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
		this.enterRule(_localctx, 8, expressao.RULE_calculo_bitwise_xou);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.calculo_bitwise_e();
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.BITWISE_XOR) {
				{
				{
				this.state = 69;
				this.match(expressao.BITWISE_XOR);
				this.state = 70;
				this.calculo_bitwise_e();
				}
				}
				this.state = 75;
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
		this.enterRule(_localctx, 10, expressao.RULE_calculo_bitwise_e);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.calculo_igualdade();
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.BITWISE_AND) {
				{
				{
				this.state = 77;
				this.match(expressao.BITWISE_AND);
				this.state = 78;
				this.calculo_igualdade();
				}
				}
				this.state = 83;
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
		this.enterRule(_localctx, 12, expressao.RULE_calculo_igualdade);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.calculo_relacional();
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.EQUALS || _la === expressao.NOT_EQUALS) {
				{
				{
				this.state = 85;
				this.operador_igualdade();
				this.state = 86;
				this.calculo_relacional();
				}
				}
				this.state = 92;
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
		this.enterRule(_localctx, 14, expressao.RULE_calculo_relacional);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.calculo_deslocamento();
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (expressao.GREATER - 32)) | (1 << (expressao.GREATER_EQUALS - 32)) | (1 << (expressao.LESS - 32)) | (1 << (expressao.LESS_EQUALS - 32)))) !== 0)) {
				{
				{
				this.state = 94;
				this.operador_relacional();
				this.state = 95;
				this.calculo_deslocamento();
				}
				}
				this.state = 101;
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
		this.enterRule(_localctx, 16, expressao.RULE_calculo_deslocamento);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.calculo_prioridade_1();
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.RIGHT_SHIFT || _la === expressao.LEFT_SHIFT) {
				{
				{
				this.state = 103;
				this.operador_deslocamento();
				this.state = 104;
				this.calculo_prioridade_1();
				}
				}
				this.state = 110;
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
		this.enterRule(_localctx, 18, expressao.RULE_calculo_prioridade_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.calculo_prioridade_2();
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.SUM || _la === expressao.SUB) {
				{
				{
				this.state = 112;
				this.operador_prioridade_1();
				this.state = 113;
				this.calculo_prioridade_2();
				}
				}
				this.state = 119;
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
		this.enterRule(_localctx, 20, expressao.RULE_calculo_prioridade_2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.calculo_unario();
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << expressao.MULT) | (1 << expressao.DIV) | (1 << expressao.MOD))) !== 0)) {
				{
				{
				this.state = 121;
				this.operador_prioridade_2();
				this.state = 122;
				this.calculo_unario();
				}
				}
				this.state = 128;
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
		this.enterRule(_localctx, 22, expressao.RULE_calculo_unario);
		try {
			this.state = 132;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case expressao.BITWISE_NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 129;
				this.match(expressao.BITWISE_NOT);
				this.state = 130;
				this.calculo_unario();
				}
				break;
			case expressao.STRING:
			case expressao.CHAR:
			case expressao.PARENTESES_OPEN:
			case expressao.COLCHETES_OPEN:
			case expressao.NUMERICO:
			case expressao.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 131;
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
		this.enterRule(_localctx, 24, expressao.RULE_calculo_parenteses);
		try {
			this.state = 139;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case expressao.PARENTESES_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 134;
				this.match(expressao.PARENTESES_OPEN);
				this.state = 135;
				this.expressao();
				this.state = 136;
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
				this.state = 138;
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
		this.enterRule(_localctx, 26, expressao.RULE_operador_prioridade_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
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
		this.enterRule(_localctx, 28, expressao.RULE_operador_prioridade_2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
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
	public operador_igualdade(): Operador_igualdadeContext {
		let _localctx: Operador_igualdadeContext = new Operador_igualdadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, expressao.RULE_operador_igualdade);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			_la = this._input.LA(1);
			if (!(_la === expressao.EQUALS || _la === expressao.NOT_EQUALS)) {
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
		this.enterRule(_localctx, 32, expressao.RULE_operador_relacional);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			_la = this._input.LA(1);
			if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (expressao.GREATER - 32)) | (1 << (expressao.GREATER_EQUALS - 32)) | (1 << (expressao.LESS - 32)) | (1 << (expressao.LESS_EQUALS - 32)))) !== 0))) {
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
		this.enterRule(_localctx, 34, expressao.RULE_operador_deslocamento);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			_la = this._input.LA(1);
			if (!(_la === expressao.RIGHT_SHIFT || _la === expressao.LEFT_SHIFT)) {
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
		this.enterRule(_localctx, 36, expressao.RULE_valor_calculo);
		try {
			this.state = 156;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case expressao.NUMERICO:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 151;
				this.match(expressao.NUMERICO);
				}
				break;
			case expressao.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 152;
				this.match(expressao.VARIABLE);
				}
				break;
			case expressao.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 153;
				this.match(expressao.STRING);
				}
				break;
			case expressao.CHAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 154;
				this.match(expressao.CHAR);
				}
				break;
			case expressao.COLCHETES_OPEN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 155;
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
		this.enterRule(_localctx, 38, expressao.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(expressao.COLCHETES_OPEN);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << expressao.STRING) | (1 << expressao.CHAR) | (1 << expressao.PARENTESES_OPEN) | (1 << expressao.COLCHETES_OPEN))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (expressao.BITWISE_NOT - 42)) | (1 << (expressao.NUMERICO - 42)) | (1 << (expressao.VARIABLE - 42)))) !== 0)) {
				{
				this.state = 159;
				this.lista_expressoes();
				}
			}

			this.state = 162;
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
		this.enterRule(_localctx, 40, expressao.RULE_lista_expressoes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.expressao();
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.COMMA) {
				{
				{
				this.state = 165;
				this.match(expressao.COMMA);
				this.state = 166;
				this.expressao();
				}
				}
				this.state = 171;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\xAF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x07\x032\n\x03\f\x03\x0E\x035\v\x03\x03\x04\x03\x04" +
		"\x03\x04\x07\x04:\n\x04\f\x04\x0E\x04=\v\x04\x03\x05\x03\x05\x03\x05\x07" +
		"\x05B\n\x05\f\x05\x0E\x05E\v\x05\x03\x06\x03\x06\x03\x06\x07\x06J\n\x06" +
		"\f\x06\x0E\x06M\v\x06\x03\x07\x03\x07\x03\x07\x07\x07R\n\x07\f\x07\x0E" +
		"\x07U\v\x07\x03\b\x03\b\x03\b\x03\b\x07\b[\n\b\f\b\x0E\b^\v\b\x03\t\x03" +
		"\t\x03\t\x03\t\x07\td\n\t\f\t\x0E\tg\v\t\x03\n\x03\n\x03\n\x03\n\x07\n" +
		"m\n\n\f\n\x0E\np\v\n\x03\v\x03\v\x03\v\x03\v\x07\vv\n\v\f\v\x0E\vy\v\v" +
		"\x03\f\x03\f\x03\f\x03\f\x07\f\x7F\n\f\f\f\x0E\f\x82\v\f\x03\r\x03\r\x03" +
		"\r\x05\r\x87\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x8E\n" +
		"\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\x9F\n\x14" +
		"\x03\x15\x03\x15\x05\x15\xA3\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x16\x07\x16\xAA\n\x16\f\x16\x0E\x16\xAD\v\x16\x03\x16\x02\x02\x02\x17" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02\x02\x07\x03\x02\x1B\x1C\x03\x02\x1D\x1F\x03\x02 !\x03\x02\"%\x03" +
		"\x02()\x02\xAB\x02,\x03\x02\x02\x02\x04.\x03\x02\x02\x02\x066\x03\x02" +
		"\x02\x02\b>\x03\x02\x02\x02\nF\x03\x02\x02\x02\fN\x03\x02\x02\x02\x0E" +
		"V\x03\x02\x02\x02\x10_\x03\x02\x02\x02\x12h\x03\x02\x02\x02\x14q\x03\x02" +
		"\x02\x02\x16z\x03\x02\x02\x02\x18\x86\x03\x02\x02\x02\x1A\x8D\x03\x02" +
		"\x02\x02\x1C\x8F\x03\x02\x02\x02\x1E\x91\x03\x02\x02\x02 \x93\x03\x02" +
		"\x02\x02\"\x95\x03\x02\x02\x02$\x97\x03\x02\x02\x02&\x9E\x03\x02\x02\x02" +
		"(\xA0\x03\x02\x02\x02*\xA6\x03\x02\x02\x02,-\x05\x04\x03\x02-\x03\x03" +
		"\x02\x02\x02.3\x05\x06\x04\x02/0\x07\'\x02\x0202\x05\x06\x04\x021/\x03" +
		"\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x024\x05" +
		"\x03\x02\x02\x0253\x03\x02\x02\x026;\x05\b\x05\x0278\x07&\x02\x028:\x05" +
		"\b\x05\x0297\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03" +
		"\x02\x02\x02<\x07\x03\x02\x02\x02=;\x03\x02\x02\x02>C\x05\n\x06\x02?@" +
		"\x07+\x02\x02@B\x05\n\x06\x02A?\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03" +
		"\x02\x02\x02CD\x03\x02\x02\x02D\t\x03\x02\x02\x02EC\x03\x02\x02\x02FK" +
		"\x05\f\x07\x02GH\x07-\x02\x02HJ\x05\f\x07\x02IG\x03\x02\x02\x02JM\x03" +
		"\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02L\v\x03\x02\x02\x02MK" +
		"\x03\x02\x02\x02NS\x05\x0E\b\x02OP\x07*\x02\x02PR\x05\x0E\b\x02QO\x03" +
		"\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02T\r" +
		"\x03\x02\x02\x02US\x03\x02\x02\x02V\\\x05\x10\t\x02WX\x05 \x11\x02XY\x05" +
		"\x10\t\x02Y[\x03\x02\x02\x02ZW\x03\x02\x02\x02[^\x03\x02\x02\x02\\Z\x03" +
		"\x02\x02\x02\\]\x03\x02\x02\x02]\x0F\x03\x02\x02\x02^\\\x03\x02\x02\x02" +
		"_e\x05\x12\n\x02`a\x05\"\x12\x02ab\x05\x12\n\x02bd\x03\x02\x02\x02c`\x03" +
		"\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02f\x11" +
		"\x03\x02\x02\x02ge\x03\x02\x02\x02hn\x05\x14\v\x02ij\x05$\x13\x02jk\x05" +
		"\x14\v\x02km\x03\x02\x02\x02li\x03\x02\x02\x02mp\x03\x02\x02\x02nl\x03" +
		"\x02\x02\x02no\x03\x02\x02\x02o\x13\x03\x02\x02\x02pn\x03\x02\x02\x02" +
		"qw\x05\x16\f\x02rs\x05\x1C\x0F\x02st\x05\x16\f\x02tv\x03\x02\x02\x02u" +
		"r\x03\x02\x02\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02" +
		"x\x15\x03\x02\x02\x02yw\x03\x02\x02\x02z\x80\x05\x18\r\x02{|\x05\x1E\x10" +
		"\x02|}\x05\x18\r\x02}\x7F\x03\x02\x02\x02~{\x03\x02\x02\x02\x7F\x82\x03" +
		"\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x17\x03" +
		"\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\x84\x07,\x02\x02\x84\x87\x05" +
		"\x18\r\x02\x85\x87\x05\x1A\x0E\x02\x86\x83\x03\x02\x02\x02\x86\x85\x03" +
		"\x02\x02\x02\x87\x19\x03\x02\x02\x02\x88\x89\x07\b\x02\x02\x89\x8A\x05" +
		"\x02\x02\x02\x8A\x8B\x07\t\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8E\x05" +
		"&\x14\x02\x8D\x88\x03\x02\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x1B\x03" +
		"\x02\x02\x02\x8F\x90\t\x02\x02\x02\x90\x1D\x03\x02\x02\x02\x91\x92\t\x03" +
		"\x02\x02\x92\x1F\x03\x02\x02\x02\x93\x94\t\x04\x02\x02\x94!\x03\x02\x02" +
		"\x02\x95\x96\t\x05\x02\x02\x96#\x03\x02\x02\x02\x97\x98\t\x06\x02\x02" +
		"\x98%\x03\x02\x02\x02\x99\x9F\x07.\x02\x02\x9A\x9F\x07/\x02\x02\x9B\x9F" +
		"\x07\x06\x02\x02\x9C\x9F\x07\x07\x02\x02\x9D\x9F\x05(\x15\x02\x9E\x99" +
		"\x03\x02\x02\x02\x9E\x9A\x03\x02\x02\x02\x9E\x9B\x03\x02\x02\x02\x9E\x9C" +
		"\x03\x02\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\'\x03\x02\x02\x02\xA0\xA2" +
		"\x07\f\x02\x02\xA1\xA3\x05*\x16\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03" +
		"\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x07\r\x02\x02\xA5)\x03\x02" +
		"\x02\x02\xA6\xAB\x05\x02\x02\x02\xA7\xA8\x07\x10\x02\x02\xA8\xAA\x05\x02" +
		"\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02" +
		"\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC+\x03\x02\x02\x02\xAD\xAB\x03\x02" +
		"\x02\x02\x113;CKS\\enw\x80\x86\x8D\x9E\xA2\xAB";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!expressao.__ATN) {
			expressao.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(expressao._serializedATN));
		}

		return expressao.__ATN;
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
			return this.getTokens(expressao.LOGIC_OR);
		} else {
			return this.getToken(expressao.LOGIC_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_calculo_logico_ou; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_logico_ou) {
			listener.enterCalculo_logico_ou(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_logico_ou) {
			listener.exitCalculo_logico_ou(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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
			return this.getTokens(expressao.LOGIC_AND);
		} else {
			return this.getToken(expressao.LOGIC_AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_calculo_logico_e; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_logico_e) {
			listener.enterCalculo_logico_e(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_logico_e) {
			listener.exitCalculo_logico_e(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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
			return this.getTokens(expressao.BITWISE_OR);
		} else {
			return this.getToken(expressao.BITWISE_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_calculo_bitwise_ou; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_bitwise_ou) {
			listener.enterCalculo_bitwise_ou(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_bitwise_ou) {
			listener.exitCalculo_bitwise_ou(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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
			return this.getTokens(expressao.BITWISE_XOR);
		} else {
			return this.getToken(expressao.BITWISE_XOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_calculo_bitwise_xou; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_bitwise_xou) {
			listener.enterCalculo_bitwise_xou(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_bitwise_xou) {
			listener.exitCalculo_bitwise_xou(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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
			return this.getTokens(expressao.BITWISE_AND);
		} else {
			return this.getToken(expressao.BITWISE_AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_calculo_bitwise_e; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_bitwise_e) {
			listener.enterCalculo_bitwise_e(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_bitwise_e) {
			listener.exitCalculo_bitwise_e(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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
	public get ruleIndex(): number { return expressao.RULE_calculo_igualdade; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_igualdade) {
			listener.enterCalculo_igualdade(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_igualdade) {
			listener.exitCalculo_igualdade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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
	public get ruleIndex(): number { return expressao.RULE_calculo_relacional; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_relacional) {
			listener.enterCalculo_relacional(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_relacional) {
			listener.exitCalculo_relacional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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
	public get ruleIndex(): number { return expressao.RULE_calculo_deslocamento; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_deslocamento) {
			listener.enterCalculo_deslocamento(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_deslocamento) {
			listener.exitCalculo_deslocamento(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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


export class Calculo_unarioContext extends ParserRuleContext {
	public BITWISE_NOT(): TerminalNode | undefined { return this.tryGetToken(expressao.BITWISE_NOT, 0); }
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
	public get ruleIndex(): number { return expressao.RULE_calculo_unario; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterCalculo_unario) {
			listener.enterCalculo_unario(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitCalculo_unario) {
			listener.exitCalculo_unario(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitCalculo_unario) {
			return visitor.visitCalculo_unario(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Calculo_parentesesContext extends ParserRuleContext {
	public PARENTESES_OPEN(): TerminalNode | undefined { return this.tryGetToken(expressao.PARENTESES_OPEN, 0); }
	public expressao(): ExpressaoContext | undefined {
		return this.tryGetRuleContext(0, ExpressaoContext);
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


export class Operador_igualdadeContext extends ParserRuleContext {
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(expressao.EQUALS, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(expressao.NOT_EQUALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_operador_igualdade; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterOperador_igualdade) {
			listener.enterOperador_igualdade(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitOperador_igualdade) {
			listener.exitOperador_igualdade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitOperador_igualdade) {
			return visitor.visitOperador_igualdade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operador_relacionalContext extends ParserRuleContext {
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(expressao.GREATER, 0); }
	public GREATER_EQUALS(): TerminalNode | undefined { return this.tryGetToken(expressao.GREATER_EQUALS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(expressao.LESS, 0); }
	public LESS_EQUALS(): TerminalNode | undefined { return this.tryGetToken(expressao.LESS_EQUALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_operador_relacional; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterOperador_relacional) {
			listener.enterOperador_relacional(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitOperador_relacional) {
			listener.exitOperador_relacional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitOperador_relacional) {
			return visitor.visitOperador_relacional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operador_deslocamentoContext extends ParserRuleContext {
	public RIGHT_SHIFT(): TerminalNode | undefined { return this.tryGetToken(expressao.RIGHT_SHIFT, 0); }
	public LEFT_SHIFT(): TerminalNode | undefined { return this.tryGetToken(expressao.LEFT_SHIFT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_operador_deslocamento; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterOperador_deslocamento) {
			listener.enterOperador_deslocamento(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitOperador_deslocamento) {
			listener.exitOperador_deslocamento(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitOperador_deslocamento) {
			return visitor.visitOperador_deslocamento(this);
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


