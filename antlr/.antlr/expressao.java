// Generated from c:/Users/Lucas/Documents/GitHub/antlr-compiler/antlr/expressao.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class expressao extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, MULTI_LINE_COMMENT=2, SINGLE_LINE_COMMENT=3, STRING=4, CHAR=5, PARENTESES_OPEN=6, 
		PARENTESES_CLOSE=7, CHAVES_OPEN=8, CHAVES_CLOSE=9, COLCHETES_OPEN=10, 
		COLCHETES_CLOSE=11, LINE_END=12, COLON=13, COMMA=14, IF=15, ELSE=16, ELIF=17, 
		FOR=18, WHILE=19, DO=20, FUNCTION=21, RETURN=22, VARIABLE_DECLARE=23, 
		ATTR=24, SUM=25, SUB=26, MULT=27, DIV=28, MOD=29, EQUALS=30, NOT_EQUALS=31, 
		GREATER=32, GREATER_EQUALS=33, LESS=34, LESS_EQUALS=35, LOGIC_AND=36, 
		LOGIC_OR=37, RIGHT_SHIFT=38, LEFT_SHIFT=39, BITWISE_AND=40, BITWISE_OR=41, 
		BITWISE_NOT=42, BITWISE_XOR=43, NUMERICO=44, VARIABLE=45;
	public static final int
		RULE_expressao = 0, RULE_calculo_logico_ou = 1, RULE_calculo_logico_e = 2, 
		RULE_calculo_bitwise_ou = 3, RULE_calculo_bitwise_xou = 4, RULE_calculo_bitwise_e = 5, 
		RULE_calculo_igualdade = 6, RULE_calculo_relacional = 7, RULE_calculo_deslocamento = 8, 
		RULE_calculo_prioridade_1 = 9, RULE_calculo_prioridade_2 = 10, RULE_calculo_unario = 11, 
		RULE_calculo_parenteses = 12, RULE_operador_prioridade_1 = 13, RULE_operador_prioridade_2 = 14, 
		RULE_operador_igualdade = 15, RULE_operador_relacional = 16, RULE_operador_deslocamento = 17, 
		RULE_valor_calculo = 18, RULE_array_access = 19, RULE_lista_expressoes = 20, 
		RULE_array = 21, RULE_function_call = 22;
	private static String[] makeRuleNames() {
		return new String[] {
			"expressao", "calculo_logico_ou", "calculo_logico_e", "calculo_bitwise_ou", 
			"calculo_bitwise_xou", "calculo_bitwise_e", "calculo_igualdade", "calculo_relacional", 
			"calculo_deslocamento", "calculo_prioridade_1", "calculo_prioridade_2", 
			"calculo_unario", "calculo_parenteses", "operador_prioridade_1", "operador_prioridade_2", 
			"operador_igualdade", "operador_relacional", "operador_deslocamento", 
			"valor_calculo", "array_access", "lista_expressoes", "array", "function_call"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, "'('", "')'", "'{'", "'}'", "'['", 
			"']'", "';'", "':'", "','", "'if'", "'else'", "'elif'", "'for'", "'while'", 
			"'do'", "'function'", "'return'", null, "'='", "'+'", "'-'", "'*'", "'/'", 
			"'%'", "'=='", "'!='", "'>'", "'>='", "'<'", "'<='", "'&&'", "'||'", 
			"'>>'", "'<<'", "'&'", "'|'", "'~'", "'^'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "MULTI_LINE_COMMENT", "SINGLE_LINE_COMMENT", "STRING", "CHAR", 
			"PARENTESES_OPEN", "PARENTESES_CLOSE", "CHAVES_OPEN", "CHAVES_CLOSE", 
			"COLCHETES_OPEN", "COLCHETES_CLOSE", "LINE_END", "COLON", "COMMA", "IF", 
			"ELSE", "ELIF", "FOR", "WHILE", "DO", "FUNCTION", "RETURN", "VARIABLE_DECLARE", 
			"ATTR", "SUM", "SUB", "MULT", "DIV", "MOD", "EQUALS", "NOT_EQUALS", "GREATER", 
			"GREATER_EQUALS", "LESS", "LESS_EQUALS", "LOGIC_AND", "LOGIC_OR", "RIGHT_SHIFT", 
			"LEFT_SHIFT", "BITWISE_AND", "BITWISE_OR", "BITWISE_NOT", "BITWISE_XOR", 
			"NUMERICO", "VARIABLE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "expressao.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public expressao(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressaoContext extends ParserRuleContext {
		public Calculo_logico_ouContext calculo_logico_ou() {
			return getRuleContext(Calculo_logico_ouContext.class,0);
		}
		public ExpressaoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressao; }
	}

	public final ExpressaoContext expressao() throws RecognitionException {
		ExpressaoContext _localctx = new ExpressaoContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_expressao);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			calculo_logico_ou();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Calculo_logico_ouContext extends ParserRuleContext {
		public List<Calculo_logico_eContext> calculo_logico_e() {
			return getRuleContexts(Calculo_logico_eContext.class);
		}
		public Calculo_logico_eContext calculo_logico_e(int i) {
			return getRuleContext(Calculo_logico_eContext.class,i);
		}
		public List<TerminalNode> LOGIC_OR() { return getTokens(expressao.LOGIC_OR); }
		public TerminalNode LOGIC_OR(int i) {
			return getToken(expressao.LOGIC_OR, i);
		}
		public Calculo_logico_ouContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_logico_ou; }
	}

	public final Calculo_logico_ouContext calculo_logico_ou() throws RecognitionException {
		Calculo_logico_ouContext _localctx = new Calculo_logico_ouContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_calculo_logico_ou);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			calculo_logico_e();
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGIC_OR) {
				{
				{
				setState(49);
				match(LOGIC_OR);
				setState(50);
				calculo_logico_e();
				}
				}
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Calculo_logico_eContext extends ParserRuleContext {
		public List<Calculo_bitwise_ouContext> calculo_bitwise_ou() {
			return getRuleContexts(Calculo_bitwise_ouContext.class);
		}
		public Calculo_bitwise_ouContext calculo_bitwise_ou(int i) {
			return getRuleContext(Calculo_bitwise_ouContext.class,i);
		}
		public List<TerminalNode> LOGIC_AND() { return getTokens(expressao.LOGIC_AND); }
		public TerminalNode LOGIC_AND(int i) {
			return getToken(expressao.LOGIC_AND, i);
		}
		public Calculo_logico_eContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_logico_e; }
	}

	public final Calculo_logico_eContext calculo_logico_e() throws RecognitionException {
		Calculo_logico_eContext _localctx = new Calculo_logico_eContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_calculo_logico_e);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			calculo_bitwise_ou();
			setState(61);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGIC_AND) {
				{
				{
				setState(57);
				match(LOGIC_AND);
				setState(58);
				calculo_bitwise_ou();
				}
				}
				setState(63);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Calculo_bitwise_ouContext extends ParserRuleContext {
		public List<Calculo_bitwise_xouContext> calculo_bitwise_xou() {
			return getRuleContexts(Calculo_bitwise_xouContext.class);
		}
		public Calculo_bitwise_xouContext calculo_bitwise_xou(int i) {
			return getRuleContext(Calculo_bitwise_xouContext.class,i);
		}
		public List<TerminalNode> BITWISE_OR() { return getTokens(expressao.BITWISE_OR); }
		public TerminalNode BITWISE_OR(int i) {
			return getToken(expressao.BITWISE_OR, i);
		}
		public Calculo_bitwise_ouContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_bitwise_ou; }
	}

	public final Calculo_bitwise_ouContext calculo_bitwise_ou() throws RecognitionException {
		Calculo_bitwise_ouContext _localctx = new Calculo_bitwise_ouContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_calculo_bitwise_ou);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			calculo_bitwise_xou();
			setState(69);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==BITWISE_OR) {
				{
				{
				setState(65);
				match(BITWISE_OR);
				setState(66);
				calculo_bitwise_xou();
				}
				}
				setState(71);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Calculo_bitwise_xouContext extends ParserRuleContext {
		public List<Calculo_bitwise_eContext> calculo_bitwise_e() {
			return getRuleContexts(Calculo_bitwise_eContext.class);
		}
		public Calculo_bitwise_eContext calculo_bitwise_e(int i) {
			return getRuleContext(Calculo_bitwise_eContext.class,i);
		}
		public List<TerminalNode> BITWISE_XOR() { return getTokens(expressao.BITWISE_XOR); }
		public TerminalNode BITWISE_XOR(int i) {
			return getToken(expressao.BITWISE_XOR, i);
		}
		public Calculo_bitwise_xouContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_bitwise_xou; }
	}

	public final Calculo_bitwise_xouContext calculo_bitwise_xou() throws RecognitionException {
		Calculo_bitwise_xouContext _localctx = new Calculo_bitwise_xouContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_calculo_bitwise_xou);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			calculo_bitwise_e();
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==BITWISE_XOR) {
				{
				{
				setState(73);
				match(BITWISE_XOR);
				setState(74);
				calculo_bitwise_e();
				}
				}
				setState(79);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Calculo_bitwise_eContext extends ParserRuleContext {
		public List<Calculo_igualdadeContext> calculo_igualdade() {
			return getRuleContexts(Calculo_igualdadeContext.class);
		}
		public Calculo_igualdadeContext calculo_igualdade(int i) {
			return getRuleContext(Calculo_igualdadeContext.class,i);
		}
		public List<TerminalNode> BITWISE_AND() { return getTokens(expressao.BITWISE_AND); }
		public TerminalNode BITWISE_AND(int i) {
			return getToken(expressao.BITWISE_AND, i);
		}
		public Calculo_bitwise_eContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_bitwise_e; }
	}

	public final Calculo_bitwise_eContext calculo_bitwise_e() throws RecognitionException {
		Calculo_bitwise_eContext _localctx = new Calculo_bitwise_eContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_calculo_bitwise_e);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			calculo_igualdade();
			setState(85);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==BITWISE_AND) {
				{
				{
				setState(81);
				match(BITWISE_AND);
				setState(82);
				calculo_igualdade();
				}
				}
				setState(87);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Calculo_igualdadeContext extends ParserRuleContext {
		public List<Calculo_relacionalContext> calculo_relacional() {
			return getRuleContexts(Calculo_relacionalContext.class);
		}
		public Calculo_relacionalContext calculo_relacional(int i) {
			return getRuleContext(Calculo_relacionalContext.class,i);
		}
		public List<Operador_igualdadeContext> operador_igualdade() {
			return getRuleContexts(Operador_igualdadeContext.class);
		}
		public Operador_igualdadeContext operador_igualdade(int i) {
			return getRuleContext(Operador_igualdadeContext.class,i);
		}
		public Calculo_igualdadeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_igualdade; }
	}

	public final Calculo_igualdadeContext calculo_igualdade() throws RecognitionException {
		Calculo_igualdadeContext _localctx = new Calculo_igualdadeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_calculo_igualdade);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			calculo_relacional();
			setState(94);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==EQUALS || _la==NOT_EQUALS) {
				{
				{
				setState(89);
				operador_igualdade();
				setState(90);
				calculo_relacional();
				}
				}
				setState(96);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Calculo_relacionalContext extends ParserRuleContext {
		public List<Calculo_deslocamentoContext> calculo_deslocamento() {
			return getRuleContexts(Calculo_deslocamentoContext.class);
		}
		public Calculo_deslocamentoContext calculo_deslocamento(int i) {
			return getRuleContext(Calculo_deslocamentoContext.class,i);
		}
		public List<Operador_relacionalContext> operador_relacional() {
			return getRuleContexts(Operador_relacionalContext.class);
		}
		public Operador_relacionalContext operador_relacional(int i) {
			return getRuleContext(Operador_relacionalContext.class,i);
		}
		public Calculo_relacionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_relacional; }
	}

	public final Calculo_relacionalContext calculo_relacional() throws RecognitionException {
		Calculo_relacionalContext _localctx = new Calculo_relacionalContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_calculo_relacional);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			calculo_deslocamento();
			setState(103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 64424509440L) != 0)) {
				{
				{
				setState(98);
				operador_relacional();
				setState(99);
				calculo_deslocamento();
				}
				}
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Calculo_deslocamentoContext extends ParserRuleContext {
		public List<Calculo_prioridade_1Context> calculo_prioridade_1() {
			return getRuleContexts(Calculo_prioridade_1Context.class);
		}
		public Calculo_prioridade_1Context calculo_prioridade_1(int i) {
			return getRuleContext(Calculo_prioridade_1Context.class,i);
		}
		public List<Operador_deslocamentoContext> operador_deslocamento() {
			return getRuleContexts(Operador_deslocamentoContext.class);
		}
		public Operador_deslocamentoContext operador_deslocamento(int i) {
			return getRuleContext(Operador_deslocamentoContext.class,i);
		}
		public Calculo_deslocamentoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_deslocamento; }
	}

	public final Calculo_deslocamentoContext calculo_deslocamento() throws RecognitionException {
		Calculo_deslocamentoContext _localctx = new Calculo_deslocamentoContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_calculo_deslocamento);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			calculo_prioridade_1();
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==RIGHT_SHIFT || _la==LEFT_SHIFT) {
				{
				{
				setState(107);
				operador_deslocamento();
				setState(108);
				calculo_prioridade_1();
				}
				}
				setState(114);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Calculo_prioridade_1Context extends ParserRuleContext {
		public List<Calculo_prioridade_2Context> calculo_prioridade_2() {
			return getRuleContexts(Calculo_prioridade_2Context.class);
		}
		public Calculo_prioridade_2Context calculo_prioridade_2(int i) {
			return getRuleContext(Calculo_prioridade_2Context.class,i);
		}
		public List<Operador_prioridade_1Context> operador_prioridade_1() {
			return getRuleContexts(Operador_prioridade_1Context.class);
		}
		public Operador_prioridade_1Context operador_prioridade_1(int i) {
			return getRuleContext(Operador_prioridade_1Context.class,i);
		}
		public Calculo_prioridade_1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_prioridade_1; }
	}

	public final Calculo_prioridade_1Context calculo_prioridade_1() throws RecognitionException {
		Calculo_prioridade_1Context _localctx = new Calculo_prioridade_1Context(_ctx, getState());
		enterRule(_localctx, 18, RULE_calculo_prioridade_1);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			calculo_prioridade_2();
			setState(121);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SUM || _la==SUB) {
				{
				{
				setState(116);
				operador_prioridade_1();
				setState(117);
				calculo_prioridade_2();
				}
				}
				setState(123);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Calculo_prioridade_2Context extends ParserRuleContext {
		public List<Calculo_unarioContext> calculo_unario() {
			return getRuleContexts(Calculo_unarioContext.class);
		}
		public Calculo_unarioContext calculo_unario(int i) {
			return getRuleContext(Calculo_unarioContext.class,i);
		}
		public List<Operador_prioridade_2Context> operador_prioridade_2() {
			return getRuleContexts(Operador_prioridade_2Context.class);
		}
		public Operador_prioridade_2Context operador_prioridade_2(int i) {
			return getRuleContext(Operador_prioridade_2Context.class,i);
		}
		public Calculo_prioridade_2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_prioridade_2; }
	}

	public final Calculo_prioridade_2Context calculo_prioridade_2() throws RecognitionException {
		Calculo_prioridade_2Context _localctx = new Calculo_prioridade_2Context(_ctx, getState());
		enterRule(_localctx, 20, RULE_calculo_prioridade_2);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			calculo_unario();
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 939524096L) != 0)) {
				{
				{
				setState(125);
				operador_prioridade_2();
				setState(126);
				calculo_unario();
				}
				}
				setState(132);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Calculo_unarioContext extends ParserRuleContext {
		public TerminalNode BITWISE_NOT() { return getToken(expressao.BITWISE_NOT, 0); }
		public Calculo_unarioContext calculo_unario() {
			return getRuleContext(Calculo_unarioContext.class,0);
		}
		public Calculo_parentesesContext calculo_parenteses() {
			return getRuleContext(Calculo_parentesesContext.class,0);
		}
		public Calculo_unarioContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_unario; }
	}

	public final Calculo_unarioContext calculo_unario() throws RecognitionException {
		Calculo_unarioContext _localctx = new Calculo_unarioContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_calculo_unario);
		try {
			setState(136);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BITWISE_NOT:
				enterOuterAlt(_localctx, 1);
				{
				setState(133);
				match(BITWISE_NOT);
				setState(134);
				calculo_unario();
				}
				break;
			case STRING:
			case CHAR:
			case PARENTESES_OPEN:
			case COLCHETES_OPEN:
			case NUMERICO:
			case VARIABLE:
				enterOuterAlt(_localctx, 2);
				{
				setState(135);
				calculo_parenteses();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Calculo_parentesesContext extends ParserRuleContext {
		public TerminalNode PARENTESES_OPEN() { return getToken(expressao.PARENTESES_OPEN, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public TerminalNode PARENTESES_CLOSE() { return getToken(expressao.PARENTESES_CLOSE, 0); }
		public Valor_calculoContext valor_calculo() {
			return getRuleContext(Valor_calculoContext.class,0);
		}
		public Calculo_parentesesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_parenteses; }
	}

	public final Calculo_parentesesContext calculo_parenteses() throws RecognitionException {
		Calculo_parentesesContext _localctx = new Calculo_parentesesContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_calculo_parenteses);
		try {
			setState(143);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PARENTESES_OPEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(138);
				match(PARENTESES_OPEN);
				setState(139);
				expressao();
				setState(140);
				match(PARENTESES_CLOSE);
				}
				break;
			case STRING:
			case CHAR:
			case COLCHETES_OPEN:
			case NUMERICO:
			case VARIABLE:
				enterOuterAlt(_localctx, 2);
				{
				setState(142);
				valor_calculo();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Operador_prioridade_1Context extends ParserRuleContext {
		public TerminalNode SUM() { return getToken(expressao.SUM, 0); }
		public TerminalNode SUB() { return getToken(expressao.SUB, 0); }
		public Operador_prioridade_1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operador_prioridade_1; }
	}

	public final Operador_prioridade_1Context operador_prioridade_1() throws RecognitionException {
		Operador_prioridade_1Context _localctx = new Operador_prioridade_1Context(_ctx, getState());
		enterRule(_localctx, 26, RULE_operador_prioridade_1);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			_la = _input.LA(1);
			if ( !(_la==SUM || _la==SUB) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Operador_prioridade_2Context extends ParserRuleContext {
		public TerminalNode MULT() { return getToken(expressao.MULT, 0); }
		public TerminalNode DIV() { return getToken(expressao.DIV, 0); }
		public TerminalNode MOD() { return getToken(expressao.MOD, 0); }
		public Operador_prioridade_2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operador_prioridade_2; }
	}

	public final Operador_prioridade_2Context operador_prioridade_2() throws RecognitionException {
		Operador_prioridade_2Context _localctx = new Operador_prioridade_2Context(_ctx, getState());
		enterRule(_localctx, 28, RULE_operador_prioridade_2);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 939524096L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Operador_igualdadeContext extends ParserRuleContext {
		public TerminalNode EQUALS() { return getToken(expressao.EQUALS, 0); }
		public TerminalNode NOT_EQUALS() { return getToken(expressao.NOT_EQUALS, 0); }
		public Operador_igualdadeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operador_igualdade; }
	}

	public final Operador_igualdadeContext operador_igualdade() throws RecognitionException {
		Operador_igualdadeContext _localctx = new Operador_igualdadeContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_operador_igualdade);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			_la = _input.LA(1);
			if ( !(_la==EQUALS || _la==NOT_EQUALS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Operador_relacionalContext extends ParserRuleContext {
		public TerminalNode GREATER() { return getToken(expressao.GREATER, 0); }
		public TerminalNode GREATER_EQUALS() { return getToken(expressao.GREATER_EQUALS, 0); }
		public TerminalNode LESS() { return getToken(expressao.LESS, 0); }
		public TerminalNode LESS_EQUALS() { return getToken(expressao.LESS_EQUALS, 0); }
		public Operador_relacionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operador_relacional; }
	}

	public final Operador_relacionalContext operador_relacional() throws RecognitionException {
		Operador_relacionalContext _localctx = new Operador_relacionalContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_operador_relacional);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 64424509440L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Operador_deslocamentoContext extends ParserRuleContext {
		public TerminalNode RIGHT_SHIFT() { return getToken(expressao.RIGHT_SHIFT, 0); }
		public TerminalNode LEFT_SHIFT() { return getToken(expressao.LEFT_SHIFT, 0); }
		public Operador_deslocamentoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operador_deslocamento; }
	}

	public final Operador_deslocamentoContext operador_deslocamento() throws RecognitionException {
		Operador_deslocamentoContext _localctx = new Operador_deslocamentoContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_operador_deslocamento);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			_la = _input.LA(1);
			if ( !(_la==RIGHT_SHIFT || _la==LEFT_SHIFT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Valor_calculoContext extends ParserRuleContext {
		public TerminalNode NUMERICO() { return getToken(expressao.NUMERICO, 0); }
		public TerminalNode VARIABLE() { return getToken(expressao.VARIABLE, 0); }
		public TerminalNode STRING() { return getToken(expressao.STRING, 0); }
		public TerminalNode CHAR() { return getToken(expressao.CHAR, 0); }
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public Array_accessContext array_access() {
			return getRuleContext(Array_accessContext.class,0);
		}
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public Valor_calculoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor_calculo; }
	}

	public final Valor_calculoContext valor_calculo() throws RecognitionException {
		Valor_calculoContext _localctx = new Valor_calculoContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_valor_calculo);
		try {
			setState(162);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(155);
				match(NUMERICO);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(156);
				match(VARIABLE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(157);
				match(STRING);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(158);
				match(CHAR);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(159);
				function_call();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(160);
				array_access();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(161);
				array();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Array_accessContext extends ParserRuleContext {
		public TerminalNode VARIABLE() { return getToken(expressao.VARIABLE, 0); }
		public TerminalNode COLCHETES_OPEN() { return getToken(expressao.COLCHETES_OPEN, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public TerminalNode COLCHETES_CLOSE() { return getToken(expressao.COLCHETES_CLOSE, 0); }
		public Array_accessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array_access; }
	}

	public final Array_accessContext array_access() throws RecognitionException {
		Array_accessContext _localctx = new Array_accessContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_array_access);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			match(VARIABLE);
			setState(165);
			match(COLCHETES_OPEN);
			setState(166);
			expressao();
			setState(167);
			match(COLCHETES_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Lista_expressoesContext extends ParserRuleContext {
		public List<ExpressaoContext> expressao() {
			return getRuleContexts(ExpressaoContext.class);
		}
		public ExpressaoContext expressao(int i) {
			return getRuleContext(ExpressaoContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(expressao.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(expressao.COMMA, i);
		}
		public Lista_expressoesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_expressoes; }
	}

	public final Lista_expressoesContext lista_expressoes() throws RecognitionException {
		Lista_expressoesContext _localctx = new Lista_expressoesContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_lista_expressoes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(169);
			expressao();
			setState(174);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(170);
				match(COMMA);
				setState(171);
				expressao();
				}
				}
				setState(176);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayContext extends ParserRuleContext {
		public TerminalNode COLCHETES_OPEN() { return getToken(expressao.COLCHETES_OPEN, 0); }
		public TerminalNode COLCHETES_CLOSE() { return getToken(expressao.COLCHETES_CLOSE, 0); }
		public Lista_expressoesContext lista_expressoes() {
			return getRuleContext(Lista_expressoesContext.class,0);
		}
		public ArrayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array; }
	}

	public final ArrayContext array() throws RecognitionException {
		ArrayContext _localctx = new ArrayContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			match(COLCHETES_OPEN);
			setState(179);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 57174604645488L) != 0)) {
				{
				setState(178);
				lista_expressoes();
				}
			}

			setState(181);
			match(COLCHETES_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Function_callContext extends ParserRuleContext {
		public TerminalNode VARIABLE() { return getToken(expressao.VARIABLE, 0); }
		public TerminalNode PARENTESES_OPEN() { return getToken(expressao.PARENTESES_OPEN, 0); }
		public TerminalNode PARENTESES_CLOSE() { return getToken(expressao.PARENTESES_CLOSE, 0); }
		public Lista_expressoesContext lista_expressoes() {
			return getRuleContext(Lista_expressoesContext.class,0);
		}
		public Function_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_call; }
	}

	public final Function_callContext function_call() throws RecognitionException {
		Function_callContext _localctx = new Function_callContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_function_call);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(VARIABLE);
			setState(184);
			match(PARENTESES_OPEN);
			setState(186);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 57174604645488L) != 0)) {
				{
				setState(185);
				lista_expressoes();
				}
			}

			setState(188);
			match(PARENTESES_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001-\u00bf\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0005\u00014\b\u0001\n\u0001\f\u00017\t\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0005\u0002<\b\u0002\n\u0002\f\u0002?\t\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003D\b\u0003\n\u0003\f\u0003"+
		"G\t\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004L\b\u0004\n\u0004"+
		"\f\u0004O\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005T\b\u0005"+
		"\n\u0005\f\u0005W\t\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0005\u0006]\b\u0006\n\u0006\f\u0006`\t\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0005\u0007f\b\u0007\n\u0007\f\u0007i\t\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0005\bo\b\b\n\b\f\br\t\b\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0005\tx\b\t\n\t\f\t{\t\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0005\n\u0081\b\n\n\n\f\n\u0084\t\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0003\u000b\u0089\b\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003"+
		"\f\u0090\b\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0003"+
		"\u0012\u00a3\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0005\u0014\u00ad\b\u0014\n"+
		"\u0014\f\u0014\u00b0\t\u0014\u0001\u0015\u0001\u0015\u0003\u0015\u00b4"+
		"\b\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0003"+
		"\u0016\u00bb\b\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0000\u0000\u0017"+
		"\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a"+
		"\u001c\u001e \"$&(*,\u0000\u0005\u0001\u0000\u0019\u001a\u0001\u0000\u001b"+
		"\u001d\u0001\u0000\u001e\u001f\u0001\u0000 #\u0001\u0000&\'\u00bc\u0000"+
		".\u0001\u0000\u0000\u0000\u00020\u0001\u0000\u0000\u0000\u00048\u0001"+
		"\u0000\u0000\u0000\u0006@\u0001\u0000\u0000\u0000\bH\u0001\u0000\u0000"+
		"\u0000\nP\u0001\u0000\u0000\u0000\fX\u0001\u0000\u0000\u0000\u000ea\u0001"+
		"\u0000\u0000\u0000\u0010j\u0001\u0000\u0000\u0000\u0012s\u0001\u0000\u0000"+
		"\u0000\u0014|\u0001\u0000\u0000\u0000\u0016\u0088\u0001\u0000\u0000\u0000"+
		"\u0018\u008f\u0001\u0000\u0000\u0000\u001a\u0091\u0001\u0000\u0000\u0000"+
		"\u001c\u0093\u0001\u0000\u0000\u0000\u001e\u0095\u0001\u0000\u0000\u0000"+
		" \u0097\u0001\u0000\u0000\u0000\"\u0099\u0001\u0000\u0000\u0000$\u00a2"+
		"\u0001\u0000\u0000\u0000&\u00a4\u0001\u0000\u0000\u0000(\u00a9\u0001\u0000"+
		"\u0000\u0000*\u00b1\u0001\u0000\u0000\u0000,\u00b7\u0001\u0000\u0000\u0000"+
		"./\u0003\u0002\u0001\u0000/\u0001\u0001\u0000\u0000\u000005\u0003\u0004"+
		"\u0002\u000012\u0005%\u0000\u000024\u0003\u0004\u0002\u000031\u0001\u0000"+
		"\u0000\u000047\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u000056\u0001"+
		"\u0000\u0000\u00006\u0003\u0001\u0000\u0000\u000075\u0001\u0000\u0000"+
		"\u00008=\u0003\u0006\u0003\u00009:\u0005$\u0000\u0000:<\u0003\u0006\u0003"+
		"\u0000;9\u0001\u0000\u0000\u0000<?\u0001\u0000\u0000\u0000=;\u0001\u0000"+
		"\u0000\u0000=>\u0001\u0000\u0000\u0000>\u0005\u0001\u0000\u0000\u0000"+
		"?=\u0001\u0000\u0000\u0000@E\u0003\b\u0004\u0000AB\u0005)\u0000\u0000"+
		"BD\u0003\b\u0004\u0000CA\u0001\u0000\u0000\u0000DG\u0001\u0000\u0000\u0000"+
		"EC\u0001\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000F\u0007\u0001\u0000"+
		"\u0000\u0000GE\u0001\u0000\u0000\u0000HM\u0003\n\u0005\u0000IJ\u0005+"+
		"\u0000\u0000JL\u0003\n\u0005\u0000KI\u0001\u0000\u0000\u0000LO\u0001\u0000"+
		"\u0000\u0000MK\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000N\t\u0001"+
		"\u0000\u0000\u0000OM\u0001\u0000\u0000\u0000PU\u0003\f\u0006\u0000QR\u0005"+
		"(\u0000\u0000RT\u0003\f\u0006\u0000SQ\u0001\u0000\u0000\u0000TW\u0001"+
		"\u0000\u0000\u0000US\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000\u0000"+
		"V\u000b\u0001\u0000\u0000\u0000WU\u0001\u0000\u0000\u0000X^\u0003\u000e"+
		"\u0007\u0000YZ\u0003\u001e\u000f\u0000Z[\u0003\u000e\u0007\u0000[]\u0001"+
		"\u0000\u0000\u0000\\Y\u0001\u0000\u0000\u0000]`\u0001\u0000\u0000\u0000"+
		"^\\\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_\r\u0001\u0000\u0000"+
		"\u0000`^\u0001\u0000\u0000\u0000ag\u0003\u0010\b\u0000bc\u0003 \u0010"+
		"\u0000cd\u0003\u0010\b\u0000df\u0001\u0000\u0000\u0000eb\u0001\u0000\u0000"+
		"\u0000fi\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000gh\u0001\u0000"+
		"\u0000\u0000h\u000f\u0001\u0000\u0000\u0000ig\u0001\u0000\u0000\u0000"+
		"jp\u0003\u0012\t\u0000kl\u0003\"\u0011\u0000lm\u0003\u0012\t\u0000mo\u0001"+
		"\u0000\u0000\u0000nk\u0001\u0000\u0000\u0000or\u0001\u0000\u0000\u0000"+
		"pn\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000q\u0011\u0001\u0000"+
		"\u0000\u0000rp\u0001\u0000\u0000\u0000sy\u0003\u0014\n\u0000tu\u0003\u001a"+
		"\r\u0000uv\u0003\u0014\n\u0000vx\u0001\u0000\u0000\u0000wt\u0001\u0000"+
		"\u0000\u0000x{\u0001\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000yz\u0001"+
		"\u0000\u0000\u0000z\u0013\u0001\u0000\u0000\u0000{y\u0001\u0000\u0000"+
		"\u0000|\u0082\u0003\u0016\u000b\u0000}~\u0003\u001c\u000e\u0000~\u007f"+
		"\u0003\u0016\u000b\u0000\u007f\u0081\u0001\u0000\u0000\u0000\u0080}\u0001"+
		"\u0000\u0000\u0000\u0081\u0084\u0001\u0000\u0000\u0000\u0082\u0080\u0001"+
		"\u0000\u0000\u0000\u0082\u0083\u0001\u0000\u0000\u0000\u0083\u0015\u0001"+
		"\u0000\u0000\u0000\u0084\u0082\u0001\u0000\u0000\u0000\u0085\u0086\u0005"+
		"*\u0000\u0000\u0086\u0089\u0003\u0016\u000b\u0000\u0087\u0089\u0003\u0018"+
		"\f\u0000\u0088\u0085\u0001\u0000\u0000\u0000\u0088\u0087\u0001\u0000\u0000"+
		"\u0000\u0089\u0017\u0001\u0000\u0000\u0000\u008a\u008b\u0005\u0006\u0000"+
		"\u0000\u008b\u008c\u0003\u0000\u0000\u0000\u008c\u008d\u0005\u0007\u0000"+
		"\u0000\u008d\u0090\u0001\u0000\u0000\u0000\u008e\u0090\u0003$\u0012\u0000"+
		"\u008f\u008a\u0001\u0000\u0000\u0000\u008f\u008e\u0001\u0000\u0000\u0000"+
		"\u0090\u0019\u0001\u0000\u0000\u0000\u0091\u0092\u0007\u0000\u0000\u0000"+
		"\u0092\u001b\u0001\u0000\u0000\u0000\u0093\u0094\u0007\u0001\u0000\u0000"+
		"\u0094\u001d\u0001\u0000\u0000\u0000\u0095\u0096\u0007\u0002\u0000\u0000"+
		"\u0096\u001f\u0001\u0000\u0000\u0000\u0097\u0098\u0007\u0003\u0000\u0000"+
		"\u0098!\u0001\u0000\u0000\u0000\u0099\u009a\u0007\u0004\u0000\u0000\u009a"+
		"#\u0001\u0000\u0000\u0000\u009b\u00a3\u0005,\u0000\u0000\u009c\u00a3\u0005"+
		"-\u0000\u0000\u009d\u00a3\u0005\u0004\u0000\u0000\u009e\u00a3\u0005\u0005"+
		"\u0000\u0000\u009f\u00a3\u0003,\u0016\u0000\u00a0\u00a3\u0003&\u0013\u0000"+
		"\u00a1\u00a3\u0003*\u0015\u0000\u00a2\u009b\u0001\u0000\u0000\u0000\u00a2"+
		"\u009c\u0001\u0000\u0000\u0000\u00a2\u009d\u0001\u0000\u0000\u0000\u00a2"+
		"\u009e\u0001\u0000\u0000\u0000\u00a2\u009f\u0001\u0000\u0000\u0000\u00a2"+
		"\u00a0\u0001\u0000\u0000\u0000\u00a2\u00a1\u0001\u0000\u0000\u0000\u00a3"+
		"%\u0001\u0000\u0000\u0000\u00a4\u00a5\u0005-\u0000\u0000\u00a5\u00a6\u0005"+
		"\n\u0000\u0000\u00a6\u00a7\u0003\u0000\u0000\u0000\u00a7\u00a8\u0005\u000b"+
		"\u0000\u0000\u00a8\'\u0001\u0000\u0000\u0000\u00a9\u00ae\u0003\u0000\u0000"+
		"\u0000\u00aa\u00ab\u0005\u000e\u0000\u0000\u00ab\u00ad\u0003\u0000\u0000"+
		"\u0000\u00ac\u00aa\u0001\u0000\u0000\u0000\u00ad\u00b0\u0001\u0000\u0000"+
		"\u0000\u00ae\u00ac\u0001\u0000\u0000\u0000\u00ae\u00af\u0001\u0000\u0000"+
		"\u0000\u00af)\u0001\u0000\u0000\u0000\u00b0\u00ae\u0001\u0000\u0000\u0000"+
		"\u00b1\u00b3\u0005\n\u0000\u0000\u00b2\u00b4\u0003(\u0014\u0000\u00b3"+
		"\u00b2\u0001\u0000\u0000\u0000\u00b3\u00b4\u0001\u0000\u0000\u0000\u00b4"+
		"\u00b5\u0001\u0000\u0000\u0000\u00b5\u00b6\u0005\u000b\u0000\u0000\u00b6"+
		"+\u0001\u0000\u0000\u0000\u00b7\u00b8\u0005-\u0000\u0000\u00b8\u00ba\u0005"+
		"\u0006\u0000\u0000\u00b9\u00bb\u0003(\u0014\u0000\u00ba\u00b9\u0001\u0000"+
		"\u0000\u0000\u00ba\u00bb\u0001\u0000\u0000\u0000\u00bb\u00bc\u0001\u0000"+
		"\u0000\u0000\u00bc\u00bd\u0005\u0007\u0000\u0000\u00bd-\u0001\u0000\u0000"+
		"\u0000\u00105=EMU^gpy\u0082\u0088\u008f\u00a2\u00ae\u00b3\u00ba";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}