// Generated from c:/Users/Lucas/Documents/GitHub/antlr-compiler/antlr/FileScriptParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class FileScriptParser extends Parser {
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
		RULE_program = 0, RULE_lista_comandos = 1, RULE_comando = 2, RULE_escopo_codigo = 3, 
		RULE_comando_atribuicao = 4, RULE_comando_declaracao = 5, RULE_if_stmt = 6, 
		RULE_elseif = 7, RULE_else = 8, RULE_loop = 9, RULE_while_loop = 10, RULE_do_while_loop = 11, 
		RULE_for_loop = 12, RULE_comandos_function = 13, RULE_function_decl = 14, 
		RULE_lista_parametros = 15, RULE_return_stmt = 16, RULE_function_call = 17, 
		RULE_expressao = 18, RULE_calculo_prioridade_1 = 19, RULE_calculo_prioridade_2 = 20, 
		RULE_calculo_operador_logico = 21, RULE_calculo_logico_composto = 22, 
		RULE_calculo_parenteses = 23, RULE_operador_prioridade_1 = 24, RULE_operador_prioridade_2 = 25, 
		RULE_operador_logico = 26, RULE_composto_logico = 27, RULE_valor_calculo = 28, 
		RULE_array = 29, RULE_lista_expressoes = 30;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "lista_comandos", "comando", "escopo_codigo", "comando_atribuicao", 
			"comando_declaracao", "if_stmt", "elseif", "else", "loop", "while_loop", 
			"do_while_loop", "for_loop", "comandos_function", "function_decl", "lista_parametros", 
			"return_stmt", "function_call", "expressao", "calculo_prioridade_1", 
			"calculo_prioridade_2", "calculo_operador_logico", "calculo_logico_composto", 
			"calculo_parenteses", "operador_prioridade_1", "operador_prioridade_2", 
			"operador_logico", "composto_logico", "valor_calculo", "array", "lista_expressoes"
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
	public String getGrammarFileName() { return "FileScriptParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FileScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public Lista_comandosContext lista_comandos() {
			return getRuleContext(Lista_comandosContext.class,0);
		}
		public TerminalNode EOF() { return getToken(FileScriptParser.EOF, 0); }
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			lista_comandos();
			setState(63);
			match(EOF);
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
	public static class Lista_comandosContext extends ParserRuleContext {
		public List<ComandoContext> comando() {
			return getRuleContexts(ComandoContext.class);
		}
		public ComandoContext comando(int i) {
			return getRuleContext(ComandoContext.class,i);
		}
		public List<TerminalNode> LINE_END() { return getTokens(FileScriptParser.LINE_END); }
		public TerminalNode LINE_END(int i) {
			return getToken(FileScriptParser.LINE_END, i);
		}
		public Lista_comandosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_comandos; }
	}

	public final Lista_comandosContext lista_comandos() throws RecognitionException {
		Lista_comandosContext _localctx = new Lista_comandosContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_lista_comandos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 35184388641024L) != 0)) {
				{
				{
				setState(65);
				comando();
				setState(66);
				match(LINE_END);
				}
				}
				setState(72);
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
	public static class ComandoContext extends ParserRuleContext {
		public Comando_atribuicaoContext comando_atribuicao() {
			return getRuleContext(Comando_atribuicaoContext.class,0);
		}
		public Escopo_codigoContext escopo_codigo() {
			return getRuleContext(Escopo_codigoContext.class,0);
		}
		public If_stmtContext if_stmt() {
			return getRuleContext(If_stmtContext.class,0);
		}
		public LoopContext loop() {
			return getRuleContext(LoopContext.class,0);
		}
		public Comando_declaracaoContext comando_declaracao() {
			return getRuleContext(Comando_declaracaoContext.class,0);
		}
		public Comandos_functionContext comandos_function() {
			return getRuleContext(Comandos_functionContext.class,0);
		}
		public ComandoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comando; }
	}

	public final ComandoContext comando() throws RecognitionException {
		ComandoContext _localctx = new ComandoContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_comando);
		try {
			setState(80);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(73);
				comando_atribuicao();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(74);
				escopo_codigo();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(75);
				if_stmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(76);
				loop();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(77);
				comando_declaracao();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(78);
				comandos_function();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
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
	public static class Escopo_codigoContext extends ParserRuleContext {
		public TerminalNode CHAVES_OPEN() { return getToken(FileScriptParser.CHAVES_OPEN, 0); }
		public Lista_comandosContext lista_comandos() {
			return getRuleContext(Lista_comandosContext.class,0);
		}
		public TerminalNode CHAVES_CLOSE() { return getToken(FileScriptParser.CHAVES_CLOSE, 0); }
		public Escopo_codigoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_escopo_codigo; }
	}

	public final Escopo_codigoContext escopo_codigo() throws RecognitionException {
		Escopo_codigoContext _localctx = new Escopo_codigoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_escopo_codigo);
		try {
			setState(88);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(82);
				match(CHAVES_OPEN);
				setState(83);
				lista_comandos();
				setState(84);
				match(CHAVES_CLOSE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(86);
				match(CHAVES_OPEN);
				setState(87);
				match(CHAVES_CLOSE);
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
	public static class Comando_atribuicaoContext extends ParserRuleContext {
		public TerminalNode VARIABLE() { return getToken(FileScriptParser.VARIABLE, 0); }
		public TerminalNode ATTR() { return getToken(FileScriptParser.ATTR, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public Comando_atribuicaoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comando_atribuicao; }
	}

	public final Comando_atribuicaoContext comando_atribuicao() throws RecognitionException {
		Comando_atribuicaoContext _localctx = new Comando_atribuicaoContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_comando_atribuicao);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			match(VARIABLE);
			setState(91);
			match(ATTR);
			setState(92);
			expressao();
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
	public static class Comando_declaracaoContext extends ParserRuleContext {
		public TerminalNode VARIABLE_DECLARE() { return getToken(FileScriptParser.VARIABLE_DECLARE, 0); }
		public Comando_atribuicaoContext comando_atribuicao() {
			return getRuleContext(Comando_atribuicaoContext.class,0);
		}
		public Comando_declaracaoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comando_declaracao; }
	}

	public final Comando_declaracaoContext comando_declaracao() throws RecognitionException {
		Comando_declaracaoContext _localctx = new Comando_declaracaoContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_comando_declaracao);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(94);
			match(VARIABLE_DECLARE);
			setState(95);
			comando_atribuicao();
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
	public static class If_stmtContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(FileScriptParser.IF, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public Escopo_codigoContext escopo_codigo() {
			return getRuleContext(Escopo_codigoContext.class,0);
		}
		public List<ElseifContext> elseif() {
			return getRuleContexts(ElseifContext.class);
		}
		public ElseifContext elseif(int i) {
			return getRuleContext(ElseifContext.class,i);
		}
		public ElseContext else_() {
			return getRuleContext(ElseContext.class,0);
		}
		public If_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_stmt; }
	}

	public final If_stmtContext if_stmt() throws RecognitionException {
		If_stmtContext _localctx = new If_stmtContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_if_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(IF);
			setState(98);
			expressao();
			setState(99);
			escopo_codigo();
			setState(103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELIF) {
				{
				{
				setState(100);
				elseif();
				}
				}
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(106);
				else_();
				}
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
	public static class ElseifContext extends ParserRuleContext {
		public TerminalNode ELIF() { return getToken(FileScriptParser.ELIF, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public Escopo_codigoContext escopo_codigo() {
			return getRuleContext(Escopo_codigoContext.class,0);
		}
		public ElseifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseif; }
	}

	public final ElseifContext elseif() throws RecognitionException {
		ElseifContext _localctx = new ElseifContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_elseif);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			match(ELIF);
			setState(110);
			expressao();
			setState(111);
			escopo_codigo();
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
	public static class ElseContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(FileScriptParser.ELSE, 0); }
		public Escopo_codigoContext escopo_codigo() {
			return getRuleContext(Escopo_codigoContext.class,0);
		}
		public ElseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_else; }
	}

	public final ElseContext else_() throws RecognitionException {
		ElseContext _localctx = new ElseContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_else);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
			match(ELSE);
			setState(114);
			escopo_codigo();
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
	public static class LoopContext extends ParserRuleContext {
		public While_loopContext while_loop() {
			return getRuleContext(While_loopContext.class,0);
		}
		public Do_while_loopContext do_while_loop() {
			return getRuleContext(Do_while_loopContext.class,0);
		}
		public For_loopContext for_loop() {
			return getRuleContext(For_loopContext.class,0);
		}
		public LoopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loop; }
	}

	public final LoopContext loop() throws RecognitionException {
		LoopContext _localctx = new LoopContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_loop);
		try {
			setState(119);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WHILE:
				enterOuterAlt(_localctx, 1);
				{
				setState(116);
				while_loop();
				}
				break;
			case DO:
				enterOuterAlt(_localctx, 2);
				{
				setState(117);
				do_while_loop();
				}
				break;
			case FOR:
				enterOuterAlt(_localctx, 3);
				{
				setState(118);
				for_loop();
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
	public static class While_loopContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(FileScriptParser.WHILE, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public Escopo_codigoContext escopo_codigo() {
			return getRuleContext(Escopo_codigoContext.class,0);
		}
		public While_loopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while_loop; }
	}

	public final While_loopContext while_loop() throws RecognitionException {
		While_loopContext _localctx = new While_loopContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_while_loop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			match(WHILE);
			setState(122);
			expressao();
			setState(123);
			escopo_codigo();
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
	public static class Do_while_loopContext extends ParserRuleContext {
		public TerminalNode DO() { return getToken(FileScriptParser.DO, 0); }
		public Escopo_codigoContext escopo_codigo() {
			return getRuleContext(Escopo_codigoContext.class,0);
		}
		public TerminalNode WHILE() { return getToken(FileScriptParser.WHILE, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public Do_while_loopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_do_while_loop; }
	}

	public final Do_while_loopContext do_while_loop() throws RecognitionException {
		Do_while_loopContext _localctx = new Do_while_loopContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_do_while_loop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			match(DO);
			setState(126);
			escopo_codigo();
			setState(127);
			match(WHILE);
			setState(128);
			expressao();
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
	public static class For_loopContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(FileScriptParser.FOR, 0); }
		public TerminalNode PARENTESES_OPEN() { return getToken(FileScriptParser.PARENTESES_OPEN, 0); }
		public List<ComandoContext> comando() {
			return getRuleContexts(ComandoContext.class);
		}
		public ComandoContext comando(int i) {
			return getRuleContext(ComandoContext.class,i);
		}
		public List<TerminalNode> LINE_END() { return getTokens(FileScriptParser.LINE_END); }
		public TerminalNode LINE_END(int i) {
			return getToken(FileScriptParser.LINE_END, i);
		}
		public TerminalNode PARENTESES_CLOSE() { return getToken(FileScriptParser.PARENTESES_CLOSE, 0); }
		public Escopo_codigoContext escopo_codigo() {
			return getRuleContext(Escopo_codigoContext.class,0);
		}
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public For_loopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_loop; }
	}

	public final For_loopContext for_loop() throws RecognitionException {
		For_loopContext _localctx = new For_loopContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_for_loop);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			match(FOR);
			setState(131);
			match(PARENTESES_OPEN);
			setState(132);
			comando();
			setState(133);
			match(LINE_END);
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 52776558134384L) != 0)) {
				{
				setState(134);
				expressao();
				}
			}

			setState(137);
			match(LINE_END);
			setState(138);
			comando();
			setState(139);
			match(PARENTESES_CLOSE);
			setState(140);
			escopo_codigo();
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
	public static class Comandos_functionContext extends ParserRuleContext {
		public Function_declContext function_decl() {
			return getRuleContext(Function_declContext.class,0);
		}
		public Return_stmtContext return_stmt() {
			return getRuleContext(Return_stmtContext.class,0);
		}
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public Comandos_functionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comandos_function; }
	}

	public final Comandos_functionContext comandos_function() throws RecognitionException {
		Comandos_functionContext _localctx = new Comandos_functionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_comandos_function);
		try {
			setState(145);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FUNCTION:
				enterOuterAlt(_localctx, 1);
				{
				setState(142);
				function_decl();
				}
				break;
			case RETURN:
				enterOuterAlt(_localctx, 2);
				{
				setState(143);
				return_stmt();
				}
				break;
			case VARIABLE:
				enterOuterAlt(_localctx, 3);
				{
				setState(144);
				function_call();
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
	public static class Function_declContext extends ParserRuleContext {
		public TerminalNode FUNCTION() { return getToken(FileScriptParser.FUNCTION, 0); }
		public TerminalNode VARIABLE() { return getToken(FileScriptParser.VARIABLE, 0); }
		public TerminalNode PARENTESES_OPEN() { return getToken(FileScriptParser.PARENTESES_OPEN, 0); }
		public TerminalNode PARENTESES_CLOSE() { return getToken(FileScriptParser.PARENTESES_CLOSE, 0); }
		public Escopo_codigoContext escopo_codigo() {
			return getRuleContext(Escopo_codigoContext.class,0);
		}
		public Lista_parametrosContext lista_parametros() {
			return getRuleContext(Lista_parametrosContext.class,0);
		}
		public Function_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_decl; }
	}

	public final Function_declContext function_decl() throws RecognitionException {
		Function_declContext _localctx = new Function_declContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_function_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			match(FUNCTION);
			setState(148);
			match(VARIABLE);
			setState(149);
			match(PARENTESES_OPEN);
			setState(151);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VARIABLE) {
				{
				setState(150);
				lista_parametros();
				}
			}

			setState(153);
			match(PARENTESES_CLOSE);
			setState(154);
			escopo_codigo();
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
	public static class Lista_parametrosContext extends ParserRuleContext {
		public List<TerminalNode> VARIABLE() { return getTokens(FileScriptParser.VARIABLE); }
		public TerminalNode VARIABLE(int i) {
			return getToken(FileScriptParser.VARIABLE, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FileScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FileScriptParser.COMMA, i);
		}
		public Lista_parametrosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_parametros; }
	}

	public final Lista_parametrosContext lista_parametros() throws RecognitionException {
		Lista_parametrosContext _localctx = new Lista_parametrosContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_lista_parametros);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			match(VARIABLE);
			setState(161);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(157);
				match(COMMA);
				setState(158);
				match(VARIABLE);
				}
				}
				setState(163);
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
	public static class Return_stmtContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(FileScriptParser.RETURN, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public Return_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_return_stmt; }
	}

	public final Return_stmtContext return_stmt() throws RecognitionException {
		Return_stmtContext _localctx = new Return_stmtContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_return_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			match(RETURN);
			setState(165);
			expressao();
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
		public TerminalNode VARIABLE() { return getToken(FileScriptParser.VARIABLE, 0); }
		public TerminalNode PARENTESES_OPEN() { return getToken(FileScriptParser.PARENTESES_OPEN, 0); }
		public TerminalNode PARENTESES_CLOSE() { return getToken(FileScriptParser.PARENTESES_CLOSE, 0); }
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
		enterRule(_localctx, 34, RULE_function_call);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			match(VARIABLE);
			setState(168);
			match(PARENTESES_OPEN);
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 52776558134320L) != 0)) {
				{
				setState(169);
				lista_expressoes();
				}
			}

			setState(172);
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

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressaoContext extends ParserRuleContext {
		public Calculo_prioridade_1Context calculo_prioridade_1() {
			return getRuleContext(Calculo_prioridade_1Context.class,0);
		}
		public ExpressaoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressao; }
	}

	public final ExpressaoContext expressao() throws RecognitionException {
		ExpressaoContext _localctx = new ExpressaoContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_expressao);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
			calculo_prioridade_1();
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
		enterRule(_localctx, 38, RULE_calculo_prioridade_1);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			calculo_prioridade_2();
			setState(182);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SUM || _la==SUB) {
				{
				{
				setState(177);
				operador_prioridade_1();
				setState(178);
				calculo_prioridade_2();
				}
				}
				setState(184);
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
		public List<Calculo_operador_logicoContext> calculo_operador_logico() {
			return getRuleContexts(Calculo_operador_logicoContext.class);
		}
		public Calculo_operador_logicoContext calculo_operador_logico(int i) {
			return getRuleContext(Calculo_operador_logicoContext.class,i);
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
		enterRule(_localctx, 40, RULE_calculo_prioridade_2);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			calculo_operador_logico();
			setState(191);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 939524096L) != 0)) {
				{
				{
				setState(186);
				operador_prioridade_2();
				setState(187);
				calculo_operador_logico();
				}
				}
				setState(193);
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
	public static class Calculo_operador_logicoContext extends ParserRuleContext {
		public List<Calculo_logico_compostoContext> calculo_logico_composto() {
			return getRuleContexts(Calculo_logico_compostoContext.class);
		}
		public Calculo_logico_compostoContext calculo_logico_composto(int i) {
			return getRuleContext(Calculo_logico_compostoContext.class,i);
		}
		public List<Operador_logicoContext> operador_logico() {
			return getRuleContexts(Operador_logicoContext.class);
		}
		public Operador_logicoContext operador_logico(int i) {
			return getRuleContext(Operador_logicoContext.class,i);
		}
		public Calculo_operador_logicoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_operador_logico; }
	}

	public final Calculo_operador_logicoContext calculo_operador_logico() throws RecognitionException {
		Calculo_operador_logicoContext _localctx = new Calculo_operador_logicoContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_calculo_operador_logico);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			calculo_logico_composto();
			setState(200);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 67645734912L) != 0)) {
				{
				{
				setState(195);
				operador_logico();
				setState(196);
				calculo_logico_composto();
				}
				}
				setState(202);
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
	public static class Calculo_logico_compostoContext extends ParserRuleContext {
		public List<Calculo_parentesesContext> calculo_parenteses() {
			return getRuleContexts(Calculo_parentesesContext.class);
		}
		public Calculo_parentesesContext calculo_parenteses(int i) {
			return getRuleContext(Calculo_parentesesContext.class,i);
		}
		public List<Composto_logicoContext> composto_logico() {
			return getRuleContexts(Composto_logicoContext.class);
		}
		public Composto_logicoContext composto_logico(int i) {
			return getRuleContext(Composto_logicoContext.class,i);
		}
		public Calculo_logico_compostoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_logico_composto; }
	}

	public final Calculo_logico_compostoContext calculo_logico_composto() throws RecognitionException {
		Calculo_logico_compostoContext _localctx = new Calculo_logico_compostoContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_calculo_logico_composto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			calculo_parenteses();
			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGIC_AND || _la==LOGIC_OR) {
				{
				{
				setState(204);
				composto_logico();
				setState(205);
				calculo_parenteses();
				}
				}
				setState(211);
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
	public static class Calculo_parentesesContext extends ParserRuleContext {
		public TerminalNode PARENTESES_OPEN() { return getToken(FileScriptParser.PARENTESES_OPEN, 0); }
		public Calculo_prioridade_1Context calculo_prioridade_1() {
			return getRuleContext(Calculo_prioridade_1Context.class,0);
		}
		public TerminalNode PARENTESES_CLOSE() { return getToken(FileScriptParser.PARENTESES_CLOSE, 0); }
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
		enterRule(_localctx, 46, RULE_calculo_parenteses);
		try {
			setState(217);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PARENTESES_OPEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(212);
				match(PARENTESES_OPEN);
				setState(213);
				calculo_prioridade_1();
				setState(214);
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
				setState(216);
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
		public TerminalNode SUM() { return getToken(FileScriptParser.SUM, 0); }
		public TerminalNode SUB() { return getToken(FileScriptParser.SUB, 0); }
		public Operador_prioridade_1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operador_prioridade_1; }
	}

	public final Operador_prioridade_1Context operador_prioridade_1() throws RecognitionException {
		Operador_prioridade_1Context _localctx = new Operador_prioridade_1Context(_ctx, getState());
		enterRule(_localctx, 48, RULE_operador_prioridade_1);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
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
		public TerminalNode MULT() { return getToken(FileScriptParser.MULT, 0); }
		public TerminalNode DIV() { return getToken(FileScriptParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(FileScriptParser.MOD, 0); }
		public Operador_prioridade_2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operador_prioridade_2; }
	}

	public final Operador_prioridade_2Context operador_prioridade_2() throws RecognitionException {
		Operador_prioridade_2Context _localctx = new Operador_prioridade_2Context(_ctx, getState());
		enterRule(_localctx, 50, RULE_operador_prioridade_2);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
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
	public static class Operador_logicoContext extends ParserRuleContext {
		public TerminalNode EQUALS() { return getToken(FileScriptParser.EQUALS, 0); }
		public TerminalNode NOT_EQUALS() { return getToken(FileScriptParser.NOT_EQUALS, 0); }
		public TerminalNode GREATER() { return getToken(FileScriptParser.GREATER, 0); }
		public TerminalNode GREATER_EQUALS() { return getToken(FileScriptParser.GREATER_EQUALS, 0); }
		public TerminalNode LESS() { return getToken(FileScriptParser.LESS, 0); }
		public TerminalNode LESS_EQUALS() { return getToken(FileScriptParser.LESS_EQUALS, 0); }
		public Operador_logicoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operador_logico; }
	}

	public final Operador_logicoContext operador_logico() throws RecognitionException {
		Operador_logicoContext _localctx = new Operador_logicoContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_operador_logico);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 67645734912L) != 0)) ) {
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
	public static class Composto_logicoContext extends ParserRuleContext {
		public TerminalNode LOGIC_AND() { return getToken(FileScriptParser.LOGIC_AND, 0); }
		public TerminalNode LOGIC_OR() { return getToken(FileScriptParser.LOGIC_OR, 0); }
		public Composto_logicoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_composto_logico; }
	}

	public final Composto_logicoContext composto_logico() throws RecognitionException {
		Composto_logicoContext _localctx = new Composto_logicoContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_composto_logico);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(225);
			_la = _input.LA(1);
			if ( !(_la==LOGIC_AND || _la==LOGIC_OR) ) {
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
		public TerminalNode NUMERICO() { return getToken(FileScriptParser.NUMERICO, 0); }
		public TerminalNode VARIABLE() { return getToken(FileScriptParser.VARIABLE, 0); }
		public TerminalNode STRING() { return getToken(FileScriptParser.STRING, 0); }
		public TerminalNode CHAR() { return getToken(FileScriptParser.CHAR, 0); }
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
		enterRule(_localctx, 56, RULE_valor_calculo);
		try {
			setState(232);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMERICO:
				enterOuterAlt(_localctx, 1);
				{
				setState(227);
				match(NUMERICO);
				}
				break;
			case VARIABLE:
				enterOuterAlt(_localctx, 2);
				{
				setState(228);
				match(VARIABLE);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(229);
				match(STRING);
				}
				break;
			case CHAR:
				enterOuterAlt(_localctx, 4);
				{
				setState(230);
				match(CHAR);
				}
				break;
			case COLCHETES_OPEN:
				enterOuterAlt(_localctx, 5);
				{
				setState(231);
				array();
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
	public static class ArrayContext extends ParserRuleContext {
		public TerminalNode COLCHETES_OPEN() { return getToken(FileScriptParser.COLCHETES_OPEN, 0); }
		public TerminalNode COLCHETES_CLOSE() { return getToken(FileScriptParser.COLCHETES_CLOSE, 0); }
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
		enterRule(_localctx, 58, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			match(COLCHETES_OPEN);
			setState(236);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 52776558134320L) != 0)) {
				{
				setState(235);
				lista_expressoes();
				}
			}

			setState(238);
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
		public List<Valor_calculoContext> valor_calculo() {
			return getRuleContexts(Valor_calculoContext.class);
		}
		public Valor_calculoContext valor_calculo(int i) {
			return getRuleContext(Valor_calculoContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FileScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FileScriptParser.COMMA, i);
		}
		public Lista_expressoesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_expressoes; }
	}

	public final Lista_expressoesContext lista_expressoes() throws RecognitionException {
		Lista_expressoesContext _localctx = new Lista_expressoesContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_lista_expressoes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			valor_calculo();
			setState(245);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(241);
				match(COMMA);
				setState(242);
				valor_calculo();
				}
				}
				setState(247);
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

	public static final String _serializedATN =
		"\u0004\u0001-\u00f9\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0005\u0001E\b\u0001\n\u0001\f\u0001H\t\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		"Q\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0003\u0003Y\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0005\u0006f\b\u0006\n\u0006\f\u0006i\t\u0006"+
		"\u0001\u0006\u0003\u0006l\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0003\tx"+
		"\b\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003"+
		"\f\u0088\b\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\r\u0003\r\u0092\b\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0003"+
		"\u000e\u0098\b\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0005\u000f\u00a0\b\u000f\n\u000f\f\u000f\u00a3\t\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0003\u0011\u00ab\b\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0005\u0013\u00b5\b\u0013"+
		"\n\u0013\f\u0013\u00b8\t\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0005\u0014\u00be\b\u0014\n\u0014\f\u0014\u00c1\t\u0014\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0005\u0015\u00c7\b\u0015\n\u0015"+
		"\f\u0015\u00ca\t\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0005\u0016\u00d0\b\u0016\n\u0016\f\u0016\u00d3\t\u0016\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u00da\b\u0017\u0001"+
		"\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001"+
		"\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001"+
		"\u001c\u0003\u001c\u00e9\b\u001c\u0001\u001d\u0001\u001d\u0003\u001d\u00ed"+
		"\b\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0005"+
		"\u001e\u00f4\b\u001e\n\u001e\f\u001e\u00f7\t\u001e\u0001\u001e\u0000\u0000"+
		"\u001f\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e \"$&(*,.02468:<\u0000\u0004\u0001\u0000\u0019\u001a"+
		"\u0001\u0000\u001b\u001d\u0001\u0000\u001e#\u0001\u0000$%\u00f6\u0000"+
		">\u0001\u0000\u0000\u0000\u0002F\u0001\u0000\u0000\u0000\u0004P\u0001"+
		"\u0000\u0000\u0000\u0006X\u0001\u0000\u0000\u0000\bZ\u0001\u0000\u0000"+
		"\u0000\n^\u0001\u0000\u0000\u0000\fa\u0001\u0000\u0000\u0000\u000em\u0001"+
		"\u0000\u0000\u0000\u0010q\u0001\u0000\u0000\u0000\u0012w\u0001\u0000\u0000"+
		"\u0000\u0014y\u0001\u0000\u0000\u0000\u0016}\u0001\u0000\u0000\u0000\u0018"+
		"\u0082\u0001\u0000\u0000\u0000\u001a\u0091\u0001\u0000\u0000\u0000\u001c"+
		"\u0093\u0001\u0000\u0000\u0000\u001e\u009c\u0001\u0000\u0000\u0000 \u00a4"+
		"\u0001\u0000\u0000\u0000\"\u00a7\u0001\u0000\u0000\u0000$\u00ae\u0001"+
		"\u0000\u0000\u0000&\u00b0\u0001\u0000\u0000\u0000(\u00b9\u0001\u0000\u0000"+
		"\u0000*\u00c2\u0001\u0000\u0000\u0000,\u00cb\u0001\u0000\u0000\u0000."+
		"\u00d9\u0001\u0000\u0000\u00000\u00db\u0001\u0000\u0000\u00002\u00dd\u0001"+
		"\u0000\u0000\u00004\u00df\u0001\u0000\u0000\u00006\u00e1\u0001\u0000\u0000"+
		"\u00008\u00e8\u0001\u0000\u0000\u0000:\u00ea\u0001\u0000\u0000\u0000<"+
		"\u00f0\u0001\u0000\u0000\u0000>?\u0003\u0002\u0001\u0000?@\u0005\u0000"+
		"\u0000\u0001@\u0001\u0001\u0000\u0000\u0000AB\u0003\u0004\u0002\u0000"+
		"BC\u0005\f\u0000\u0000CE\u0001\u0000\u0000\u0000DA\u0001\u0000\u0000\u0000"+
		"EH\u0001\u0000\u0000\u0000FD\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000"+
		"\u0000G\u0003\u0001\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000IQ\u0003"+
		"\b\u0004\u0000JQ\u0003\u0006\u0003\u0000KQ\u0003\f\u0006\u0000LQ\u0003"+
		"\u0012\t\u0000MQ\u0003\n\u0005\u0000NQ\u0003\u001a\r\u0000OQ\u0001\u0000"+
		"\u0000\u0000PI\u0001\u0000\u0000\u0000PJ\u0001\u0000\u0000\u0000PK\u0001"+
		"\u0000\u0000\u0000PL\u0001\u0000\u0000\u0000PM\u0001\u0000\u0000\u0000"+
		"PN\u0001\u0000\u0000\u0000PO\u0001\u0000\u0000\u0000Q\u0005\u0001\u0000"+
		"\u0000\u0000RS\u0005\b\u0000\u0000ST\u0003\u0002\u0001\u0000TU\u0005\t"+
		"\u0000\u0000UY\u0001\u0000\u0000\u0000VW\u0005\b\u0000\u0000WY\u0005\t"+
		"\u0000\u0000XR\u0001\u0000\u0000\u0000XV\u0001\u0000\u0000\u0000Y\u0007"+
		"\u0001\u0000\u0000\u0000Z[\u0005-\u0000\u0000[\\\u0005\u0018\u0000\u0000"+
		"\\]\u0003$\u0012\u0000]\t\u0001\u0000\u0000\u0000^_\u0005\u0017\u0000"+
		"\u0000_`\u0003\b\u0004\u0000`\u000b\u0001\u0000\u0000\u0000ab\u0005\u000f"+
		"\u0000\u0000bc\u0003$\u0012\u0000cg\u0003\u0006\u0003\u0000df\u0003\u000e"+
		"\u0007\u0000ed\u0001\u0000\u0000\u0000fi\u0001\u0000\u0000\u0000ge\u0001"+
		"\u0000\u0000\u0000gh\u0001\u0000\u0000\u0000hk\u0001\u0000\u0000\u0000"+
		"ig\u0001\u0000\u0000\u0000jl\u0003\u0010\b\u0000kj\u0001\u0000\u0000\u0000"+
		"kl\u0001\u0000\u0000\u0000l\r\u0001\u0000\u0000\u0000mn\u0005\u0011\u0000"+
		"\u0000no\u0003$\u0012\u0000op\u0003\u0006\u0003\u0000p\u000f\u0001\u0000"+
		"\u0000\u0000qr\u0005\u0010\u0000\u0000rs\u0003\u0006\u0003\u0000s\u0011"+
		"\u0001\u0000\u0000\u0000tx\u0003\u0014\n\u0000ux\u0003\u0016\u000b\u0000"+
		"vx\u0003\u0018\f\u0000wt\u0001\u0000\u0000\u0000wu\u0001\u0000\u0000\u0000"+
		"wv\u0001\u0000\u0000\u0000x\u0013\u0001\u0000\u0000\u0000yz\u0005\u0013"+
		"\u0000\u0000z{\u0003$\u0012\u0000{|\u0003\u0006\u0003\u0000|\u0015\u0001"+
		"\u0000\u0000\u0000}~\u0005\u0014\u0000\u0000~\u007f\u0003\u0006\u0003"+
		"\u0000\u007f\u0080\u0005\u0013\u0000\u0000\u0080\u0081\u0003$\u0012\u0000"+
		"\u0081\u0017\u0001\u0000\u0000\u0000\u0082\u0083\u0005\u0012\u0000\u0000"+
		"\u0083\u0084\u0005\u0006\u0000\u0000\u0084\u0085\u0003\u0004\u0002\u0000"+
		"\u0085\u0087\u0005\f\u0000\u0000\u0086\u0088\u0003$\u0012\u0000\u0087"+
		"\u0086\u0001\u0000\u0000\u0000\u0087\u0088\u0001\u0000\u0000\u0000\u0088"+
		"\u0089\u0001\u0000\u0000\u0000\u0089\u008a\u0005\f\u0000\u0000\u008a\u008b"+
		"\u0003\u0004\u0002\u0000\u008b\u008c\u0005\u0007\u0000\u0000\u008c\u008d"+
		"\u0003\u0006\u0003\u0000\u008d\u0019\u0001\u0000\u0000\u0000\u008e\u0092"+
		"\u0003\u001c\u000e\u0000\u008f\u0092\u0003 \u0010\u0000\u0090\u0092\u0003"+
		"\"\u0011\u0000\u0091\u008e\u0001\u0000\u0000\u0000\u0091\u008f\u0001\u0000"+
		"\u0000\u0000\u0091\u0090\u0001\u0000\u0000\u0000\u0092\u001b\u0001\u0000"+
		"\u0000\u0000\u0093\u0094\u0005\u0015\u0000\u0000\u0094\u0095\u0005-\u0000"+
		"\u0000\u0095\u0097\u0005\u0006\u0000\u0000\u0096\u0098\u0003\u001e\u000f"+
		"\u0000\u0097\u0096\u0001\u0000\u0000\u0000\u0097\u0098\u0001\u0000\u0000"+
		"\u0000\u0098\u0099\u0001\u0000\u0000\u0000\u0099\u009a\u0005\u0007\u0000"+
		"\u0000\u009a\u009b\u0003\u0006\u0003\u0000\u009b\u001d\u0001\u0000\u0000"+
		"\u0000\u009c\u00a1\u0005-\u0000\u0000\u009d\u009e\u0005\u000e\u0000\u0000"+
		"\u009e\u00a0\u0005-\u0000\u0000\u009f\u009d\u0001\u0000\u0000\u0000\u00a0"+
		"\u00a3\u0001\u0000\u0000\u0000\u00a1\u009f\u0001\u0000\u0000\u0000\u00a1"+
		"\u00a2\u0001\u0000\u0000\u0000\u00a2\u001f\u0001\u0000\u0000\u0000\u00a3"+
		"\u00a1\u0001\u0000\u0000\u0000\u00a4\u00a5\u0005\u0016\u0000\u0000\u00a5"+
		"\u00a6\u0003$\u0012\u0000\u00a6!\u0001\u0000\u0000\u0000\u00a7\u00a8\u0005"+
		"-\u0000\u0000\u00a8\u00aa\u0005\u0006\u0000\u0000\u00a9\u00ab\u0003<\u001e"+
		"\u0000\u00aa\u00a9\u0001\u0000\u0000\u0000\u00aa\u00ab\u0001\u0000\u0000"+
		"\u0000\u00ab\u00ac\u0001\u0000\u0000\u0000\u00ac\u00ad\u0005\u0007\u0000"+
		"\u0000\u00ad#\u0001\u0000\u0000\u0000\u00ae\u00af\u0003&\u0013\u0000\u00af"+
		"%\u0001\u0000\u0000\u0000\u00b0\u00b6\u0003(\u0014\u0000\u00b1\u00b2\u0003"+
		"0\u0018\u0000\u00b2\u00b3\u0003(\u0014\u0000\u00b3\u00b5\u0001\u0000\u0000"+
		"\u0000\u00b4\u00b1\u0001\u0000\u0000\u0000\u00b5\u00b8\u0001\u0000\u0000"+
		"\u0000\u00b6\u00b4\u0001\u0000\u0000\u0000\u00b6\u00b7\u0001\u0000\u0000"+
		"\u0000\u00b7\'\u0001\u0000\u0000\u0000\u00b8\u00b6\u0001\u0000\u0000\u0000"+
		"\u00b9\u00bf\u0003*\u0015\u0000\u00ba\u00bb\u00032\u0019\u0000\u00bb\u00bc"+
		"\u0003*\u0015\u0000\u00bc\u00be\u0001\u0000\u0000\u0000\u00bd\u00ba\u0001"+
		"\u0000\u0000\u0000\u00be\u00c1\u0001\u0000\u0000\u0000\u00bf\u00bd\u0001"+
		"\u0000\u0000\u0000\u00bf\u00c0\u0001\u0000\u0000\u0000\u00c0)\u0001\u0000"+
		"\u0000\u0000\u00c1\u00bf\u0001\u0000\u0000\u0000\u00c2\u00c8\u0003,\u0016"+
		"\u0000\u00c3\u00c4\u00034\u001a\u0000\u00c4\u00c5\u0003,\u0016\u0000\u00c5"+
		"\u00c7\u0001\u0000\u0000\u0000\u00c6\u00c3\u0001\u0000\u0000\u0000\u00c7"+
		"\u00ca\u0001\u0000\u0000\u0000\u00c8\u00c6\u0001\u0000\u0000\u0000\u00c8"+
		"\u00c9\u0001\u0000\u0000\u0000\u00c9+\u0001\u0000\u0000\u0000\u00ca\u00c8"+
		"\u0001\u0000\u0000\u0000\u00cb\u00d1\u0003.\u0017\u0000\u00cc\u00cd\u0003"+
		"6\u001b\u0000\u00cd\u00ce\u0003.\u0017\u0000\u00ce\u00d0\u0001\u0000\u0000"+
		"\u0000\u00cf\u00cc\u0001\u0000\u0000\u0000\u00d0\u00d3\u0001\u0000\u0000"+
		"\u0000\u00d1\u00cf\u0001\u0000\u0000\u0000\u00d1\u00d2\u0001\u0000\u0000"+
		"\u0000\u00d2-\u0001\u0000\u0000\u0000\u00d3\u00d1\u0001\u0000\u0000\u0000"+
		"\u00d4\u00d5\u0005\u0006\u0000\u0000\u00d5\u00d6\u0003&\u0013\u0000\u00d6"+
		"\u00d7\u0005\u0007\u0000\u0000\u00d7\u00da\u0001\u0000\u0000\u0000\u00d8"+
		"\u00da\u00038\u001c\u0000\u00d9\u00d4\u0001\u0000\u0000\u0000\u00d9\u00d8"+
		"\u0001\u0000\u0000\u0000\u00da/\u0001\u0000\u0000\u0000\u00db\u00dc\u0007"+
		"\u0000\u0000\u0000\u00dc1\u0001\u0000\u0000\u0000\u00dd\u00de\u0007\u0001"+
		"\u0000\u0000\u00de3\u0001\u0000\u0000\u0000\u00df\u00e0\u0007\u0002\u0000"+
		"\u0000\u00e05\u0001\u0000\u0000\u0000\u00e1\u00e2\u0007\u0003\u0000\u0000"+
		"\u00e27\u0001\u0000\u0000\u0000\u00e3\u00e9\u0005,\u0000\u0000\u00e4\u00e9"+
		"\u0005-\u0000\u0000\u00e5\u00e9\u0005\u0004\u0000\u0000\u00e6\u00e9\u0005"+
		"\u0005\u0000\u0000\u00e7\u00e9\u0003:\u001d\u0000\u00e8\u00e3\u0001\u0000"+
		"\u0000\u0000\u00e8\u00e4\u0001\u0000\u0000\u0000\u00e8\u00e5\u0001\u0000"+
		"\u0000\u0000\u00e8\u00e6\u0001\u0000\u0000\u0000\u00e8\u00e7\u0001\u0000"+
		"\u0000\u0000\u00e99\u0001\u0000\u0000\u0000\u00ea\u00ec\u0005\n\u0000"+
		"\u0000\u00eb\u00ed\u0003<\u001e\u0000\u00ec\u00eb\u0001\u0000\u0000\u0000"+
		"\u00ec\u00ed\u0001\u0000\u0000\u0000\u00ed\u00ee\u0001\u0000\u0000\u0000"+
		"\u00ee\u00ef\u0005\u000b\u0000\u0000\u00ef;\u0001\u0000\u0000\u0000\u00f0"+
		"\u00f5\u00038\u001c\u0000\u00f1\u00f2\u0005\u000e\u0000\u0000\u00f2\u00f4"+
		"\u00038\u001c\u0000\u00f3\u00f1\u0001\u0000\u0000\u0000\u00f4\u00f7\u0001"+
		"\u0000\u0000\u0000\u00f5\u00f3\u0001\u0000\u0000\u0000\u00f5\u00f6\u0001"+
		"\u0000\u0000\u0000\u00f6=\u0001\u0000\u0000\u0000\u00f7\u00f5\u0001\u0000"+
		"\u0000\u0000\u0013FPXgkw\u0087\u0091\u0097\u00a1\u00aa\u00b6\u00bf\u00c8"+
		"\u00d1\u00d9\u00e8\u00ec\u00f5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}