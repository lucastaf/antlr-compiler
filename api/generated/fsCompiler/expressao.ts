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
	public static readonly RULE_array_access = 20;
	public static readonly RULE_lista_expressoes = 21;
	public static readonly RULE_function_call = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expressao", "calculo_logico_ou", "calculo_logico_e", "calculo_bitwise_ou", 
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
			this.state = 46;
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
			this.state = 48;
			this.calculo_logico_e();
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.LOGIC_OR) {
				{
				{
				this.state = 49;
				this.match(expressao.LOGIC_OR);
				this.state = 50;
				this.calculo_logico_e();
				}
				}
				this.state = 55;
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
			this.state = 56;
			this.calculo_bitwise_ou();
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.LOGIC_AND) {
				{
				{
				this.state = 57;
				this.match(expressao.LOGIC_AND);
				this.state = 58;
				this.calculo_bitwise_ou();
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
	public calculo_bitwise_ou(): Calculo_bitwise_ouContext {
		let _localctx: Calculo_bitwise_ouContext = new Calculo_bitwise_ouContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, expressao.RULE_calculo_bitwise_ou);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.calculo_bitwise_xou();
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.BITWISE_OR) {
				{
				{
				this.state = 65;
				this.match(expressao.BITWISE_OR);
				this.state = 66;
				this.calculo_bitwise_xou();
				}
				}
				this.state = 71;
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
			this.state = 72;
			this.calculo_bitwise_e();
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.BITWISE_XOR) {
				{
				{
				this.state = 73;
				this.match(expressao.BITWISE_XOR);
				this.state = 74;
				this.calculo_bitwise_e();
				}
				}
				this.state = 79;
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
			this.state = 80;
			this.calculo_igualdade();
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.BITWISE_AND) {
				{
				{
				this.state = 81;
				this.match(expressao.BITWISE_AND);
				this.state = 82;
				this.calculo_igualdade();
				}
				}
				this.state = 87;
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
			this.state = 88;
			this.calculo_relacional();
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.EQUALS || _la === expressao.NOT_EQUALS) {
				{
				{
				this.state = 89;
				this.operador_igualdade();
				this.state = 90;
				this.calculo_relacional();
				}
				}
				this.state = 96;
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
			this.state = 97;
			this.calculo_deslocamento();
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (expressao.GREATER - 32)) | (1 << (expressao.GREATER_EQUALS - 32)) | (1 << (expressao.LESS - 32)) | (1 << (expressao.LESS_EQUALS - 32)))) !== 0)) {
				{
				{
				this.state = 98;
				this.operador_relacional();
				this.state = 99;
				this.calculo_deslocamento();
				}
				}
				this.state = 105;
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
			this.state = 106;
			this.calculo_prioridade_1();
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.RIGHT_SHIFT || _la === expressao.LEFT_SHIFT) {
				{
				{
				this.state = 107;
				this.operador_deslocamento();
				this.state = 108;
				this.calculo_prioridade_1();
				}
				}
				this.state = 114;
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
			this.state = 115;
			this.calculo_prioridade_2();
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.SUM || _la === expressao.SUB) {
				{
				{
				this.state = 116;
				this.operador_prioridade_1();
				this.state = 117;
				this.calculo_prioridade_2();
				}
				}
				this.state = 123;
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
			this.state = 124;
			this.calculo_unario();
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << expressao.MULT) | (1 << expressao.DIV) | (1 << expressao.MOD))) !== 0)) {
				{
				{
				this.state = 125;
				this.operador_prioridade_2();
				this.state = 126;
				this.calculo_unario();
				}
				}
				this.state = 132;
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
			this.state = 136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case expressao.BITWISE_NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 133;
				this.match(expressao.BITWISE_NOT);
				this.state = 134;
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
				this.state = 135;
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
			this.state = 143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case expressao.PARENTESES_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 138;
				this.match(expressao.PARENTESES_OPEN);
				this.state = 139;
				this.expressao();
				this.state = 140;
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
				this.state = 142;
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
			this.state = 145;
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
			this.state = 147;
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
			this.state = 149;
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
			this.state = 151;
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
			this.state = 153;
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
			this.state = 162;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 155;
				this.match(expressao.NUMERICO);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 156;
				this.match(expressao.VARIABLE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 157;
				this.match(expressao.STRING);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 158;
				this.match(expressao.CHAR);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 159;
				this.array();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 160;
				this.function_call();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 161;
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
		this.enterRule(_localctx, 38, expressao.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(expressao.COLCHETES_OPEN);
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << expressao.STRING) | (1 << expressao.CHAR) | (1 << expressao.PARENTESES_OPEN) | (1 << expressao.COLCHETES_OPEN))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (expressao.BITWISE_NOT - 42)) | (1 << (expressao.NUMERICO - 42)) | (1 << (expressao.VARIABLE - 42)))) !== 0)) {
				{
				this.state = 165;
				this.lista_expressoes();
				}
			}

			this.state = 168;
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
	public array_access(): Array_accessContext {
		let _localctx: Array_accessContext = new Array_accessContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, expressao.RULE_array_access);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(expressao.VARIABLE);
			this.state = 171;
			this.match(expressao.COLCHETES_OPEN);
			this.state = 172;
			this.expressao();
			this.state = 173;
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
		this.enterRule(_localctx, 42, expressao.RULE_lista_expressoes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.expressao();
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === expressao.COMMA) {
				{
				{
				this.state = 176;
				this.match(expressao.COMMA);
				this.state = 177;
				this.expressao();
				}
				}
				this.state = 182;
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
		this.enterRule(_localctx, 44, expressao.RULE_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.match(expressao.VARIABLE);
			this.state = 184;
			this.match(expressao.PARENTESES_OPEN);
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << expressao.STRING) | (1 << expressao.CHAR) | (1 << expressao.PARENTESES_OPEN) | (1 << expressao.COLCHETES_OPEN))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (expressao.BITWISE_NOT - 42)) | (1 << (expressao.NUMERICO - 42)) | (1 << (expressao.VARIABLE - 42)))) !== 0)) {
				{
				this.state = 185;
				this.lista_expressoes();
				}
			}

			this.state = 188;
			this.match(expressao.PARENTESES_CLOSE);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\xC1\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x036\n\x03\f\x03" +
		"\x0E\x039\v\x03\x03\x04\x03\x04\x03\x04\x07\x04>\n\x04\f\x04\x0E\x04A" +
		"\v\x04\x03\x05\x03\x05\x03\x05\x07\x05F\n\x05\f\x05\x0E\x05I\v\x05\x03" +
		"\x06\x03\x06\x03\x06\x07\x06N\n\x06\f\x06\x0E\x06Q\v\x06\x03\x07\x03\x07" +
		"\x03\x07\x07\x07V\n\x07\f\x07\x0E\x07Y\v\x07\x03\b\x03\b\x03\b\x03\b\x07" +
		"\b_\n\b\f\b\x0E\bb\v\b\x03\t\x03\t\x03\t\x03\t\x07\th\n\t\f\t\x0E\tk\v" +
		"\t\x03\n\x03\n\x03\n\x03\n\x07\nq\n\n\f\n\x0E\nt\v\n\x03\v\x03\v\x03\v" +
		"\x03\v\x07\vz\n\v\f\v\x0E\v}\v\v\x03\f\x03\f\x03\f\x03\f\x07\f\x83\n\f" +
		"\f\f\x0E\f\x86\v\f\x03\r\x03\r\x03\r\x05\r\x8B\n\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\x92\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xA5\n\x14\x03\x15\x03\x15\x05" +
		"\x15\xA9\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x17\x07\x17\xB5\n\x17\f\x17\x0E\x17\xB8\v\x17\x03" +
		"\x18\x03\x18\x03\x18\x05\x18\xBD\n\x18\x03\x18\x03\x18\x03\x18\x02\x02" +
		"\x02\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x02\x02\x07\x03\x02\x1B\x1C\x03\x02\x1D\x1F\x03\x02" +
		" !\x03\x02\"%\x03\x02()\x02\xBE\x020\x03\x02\x02\x02\x042\x03\x02\x02" +
		"\x02\x06:\x03\x02\x02\x02\bB\x03\x02\x02\x02\nJ\x03\x02\x02\x02\fR\x03" +
		"\x02\x02\x02\x0EZ\x03\x02\x02\x02\x10c\x03\x02\x02\x02\x12l\x03\x02\x02" +
		"\x02\x14u\x03\x02\x02\x02\x16~\x03\x02\x02\x02\x18\x8A\x03\x02\x02\x02" +
		"\x1A\x91\x03\x02\x02\x02\x1C\x93\x03\x02\x02\x02\x1E\x95\x03\x02\x02\x02" +
		" \x97\x03\x02\x02\x02\"\x99\x03\x02\x02\x02$\x9B\x03\x02\x02\x02&\xA4" +
		"\x03\x02\x02\x02(\xA6\x03\x02\x02\x02*\xAC\x03\x02\x02\x02,\xB1\x03\x02" +
		"\x02\x02.\xB9\x03\x02\x02\x0201\x05\x04\x03\x021\x03\x03\x02\x02\x022" +
		"7\x05\x06\x04\x0234\x07\'\x02\x0246\x05\x06\x04\x0253\x03\x02\x02\x02" +
		"69\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028\x05\x03\x02\x02" +
		"\x0297\x03\x02\x02\x02:?\x05\b\x05\x02;<\x07&\x02\x02<>\x05\b\x05\x02" +
		"=;\x03\x02\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02" +
		"@\x07\x03\x02\x02\x02A?\x03\x02\x02\x02BG\x05\n\x06\x02CD\x07+\x02\x02" +
		"DF\x05\n\x06\x02EC\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02" +
		"GH\x03\x02\x02\x02H\t\x03\x02\x02\x02IG\x03\x02\x02\x02JO\x05\f\x07\x02" +
		"KL\x07-\x02\x02LN\x05\f\x07\x02MK\x03\x02\x02\x02NQ\x03\x02\x02\x02OM" +
		"\x03\x02\x02\x02OP\x03\x02\x02\x02P\v\x03\x02\x02\x02QO\x03\x02\x02\x02" +
		"RW\x05\x0E\b\x02ST\x07*\x02\x02TV\x05\x0E\b\x02US\x03\x02\x02\x02VY\x03" +
		"\x02\x02\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02X\r\x03\x02\x02\x02YW" +
		"\x03\x02\x02\x02Z`\x05\x10\t\x02[\\\x05 \x11\x02\\]\x05\x10\t\x02]_\x03" +
		"\x02\x02\x02^[\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03" +
		"\x02\x02\x02a\x0F\x03\x02\x02\x02b`\x03\x02\x02\x02ci\x05\x12\n\x02de" +
		"\x05\"\x12\x02ef\x05\x12\n\x02fh\x03\x02\x02\x02gd\x03\x02\x02\x02hk\x03" +
		"\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02j\x11\x03\x02\x02\x02" +
		"ki\x03\x02\x02\x02lr\x05\x14\v\x02mn\x05$\x13\x02no\x05\x14\v\x02oq\x03" +
		"\x02\x02\x02pm\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03" +
		"\x02\x02\x02s\x13\x03\x02\x02\x02tr\x03\x02\x02\x02u{\x05\x16\f\x02vw" +
		"\x05\x1C\x0F\x02wx\x05\x16\f\x02xz\x03\x02\x02\x02yv\x03\x02\x02\x02z" +
		"}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\x15\x03\x02\x02" +
		"\x02}{\x03\x02\x02\x02~\x84\x05\x18\r\x02\x7F\x80\x05\x1E\x10\x02\x80" +
		"\x81\x05\x18\r\x02\x81\x83\x03\x02\x02\x02\x82\x7F\x03\x02\x02\x02\x83" +
		"\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85" +
		"\x17\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x87\x88\x07,\x02\x02\x88" +
		"\x8B\x05\x18\r\x02\x89\x8B\x05\x1A\x0E\x02\x8A\x87\x03\x02\x02\x02\x8A" +
		"\x89\x03\x02\x02\x02\x8B\x19\x03\x02\x02\x02\x8C\x8D\x07\b\x02\x02\x8D" +
		"\x8E\x05\x02\x02\x02\x8E\x8F\x07\t\x02\x02\x8F\x92\x03\x02\x02\x02\x90" +
		"\x92\x05&\x14\x02\x91\x8C\x03\x02\x02\x02\x91\x90\x03\x02\x02\x02\x92" +
		"\x1B\x03\x02\x02\x02\x93\x94\t\x02\x02\x02\x94\x1D\x03\x02\x02\x02\x95" +
		"\x96\t\x03\x02\x02\x96\x1F\x03\x02\x02\x02\x97\x98\t\x04\x02\x02\x98!" +
		"\x03\x02\x02\x02\x99\x9A\t\x05\x02\x02\x9A#\x03\x02\x02\x02\x9B\x9C\t" +
		"\x06\x02\x02\x9C%\x03\x02\x02\x02\x9D\xA5\x07.\x02\x02\x9E\xA5\x07/\x02" +
		"\x02\x9F\xA5\x07\x06\x02\x02\xA0\xA5\x07\x07\x02\x02\xA1\xA5\x05(\x15" +
		"\x02\xA2\xA5\x05.\x18\x02\xA3\xA5\x05*\x16\x02\xA4\x9D\x03\x02\x02\x02" +
		"\xA4\x9E\x03\x02\x02\x02\xA4\x9F\x03\x02\x02\x02\xA4\xA0\x03\x02\x02\x02" +
		"\xA4\xA1\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA3\x03\x02\x02\x02" +
		"\xA5\'\x03\x02\x02\x02\xA6\xA8\x07\f\x02\x02\xA7\xA9\x05,\x17\x02\xA8" +
		"\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA" +
		"\xAB\x07\r\x02\x02\xAB)\x03\x02\x02\x02\xAC\xAD\x07/\x02\x02\xAD\xAE\x07" +
		"\f\x02\x02\xAE\xAF\x05\x02\x02\x02\xAF\xB0\x07\r\x02\x02\xB0+\x03\x02" +
		"\x02\x02\xB1\xB6\x05\x02\x02\x02\xB2\xB3\x07\x10\x02\x02\xB3\xB5\x05\x02" +
		"\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02" +
		"\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7-\x03\x02\x02\x02\xB8\xB6\x03\x02" +
		"\x02\x02\xB9\xBA\x07/\x02\x02\xBA\xBC\x07\b\x02\x02\xBB\xBD\x05,\x17\x02" +
		"\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02" +
		"\xBE\xBF\x07\t\x02\x02\xBF/\x03\x02\x02\x02\x127?GOW`ir{\x84\x8A\x91\xA4" +
		"\xA8\xB6\xBC";
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


export class Array_accessContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(expressao.VARIABLE, 0); }
	public COLCHETES_OPEN(): TerminalNode { return this.getToken(expressao.COLCHETES_OPEN, 0); }
	public expressao(): ExpressaoContext {
		return this.getRuleContext(0, ExpressaoContext);
	}
	public COLCHETES_CLOSE(): TerminalNode { return this.getToken(expressao.COLCHETES_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_array_access; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterArray_access) {
			listener.enterArray_access(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitArray_access) {
			listener.exitArray_access(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
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


export class Function_callContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(expressao.VARIABLE, 0); }
	public PARENTESES_OPEN(): TerminalNode { return this.getToken(expressao.PARENTESES_OPEN, 0); }
	public PARENTESES_CLOSE(): TerminalNode { return this.getToken(expressao.PARENTESES_CLOSE, 0); }
	public lista_expressoes(): Lista_expressoesContext | undefined {
		return this.tryGetRuleContext(0, Lista_expressoesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return expressao.RULE_function_call; }
	// @Override
	public enterRule(listener: expressaoListener): void {
		if (listener.enterFunction_call) {
			listener.enterFunction_call(this);
		}
	}
	// @Override
	public exitRule(listener: expressaoListener): void {
		if (listener.exitFunction_call) {
			listener.exitFunction_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: expressaoVisitor<Result>): Result {
		if (visitor.visitFunction_call) {
			return visitor.visitFunction_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


