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
		RULE_lista_parametros = 15, RULE_return_stmt = 16, RULE_expressao = 17, 
		RULE_calculo_logico_ou = 18, RULE_calculo_logico_e = 19, RULE_calculo_bitwise_ou = 20, 
		RULE_calculo_bitwise_xou = 21, RULE_calculo_bitwise_e = 22, RULE_calculo_igualdade = 23, 
		RULE_calculo_relacional = 24, RULE_calculo_deslocamento = 25, RULE_calculo_prioridade_1 = 26, 
		RULE_calculo_prioridade_2 = 27, RULE_calculo_unario = 28, RULE_calculo_parenteses = 29, 
		RULE_operador_prioridade_1 = 30, RULE_operador_prioridade_2 = 31, RULE_operador_igualdade = 32, 
		RULE_operador_relacional = 33, RULE_operador_deslocamento = 34, RULE_valor_calculo = 35, 
		RULE_array = 36, RULE_lista_expressoes = 37, RULE_function_call = 38;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "lista_comandos", "comando", "escopo_codigo", "comando_atribuicao", 
			"comando_declaracao", "if_stmt", "elseif", "else", "loop", "while_loop", 
			"do_while_loop", "for_loop", "comandos_function", "function_decl", "lista_parametros", 
			"return_stmt", "expressao", "calculo_logico_ou", "calculo_logico_e", 
			"calculo_bitwise_ou", "calculo_bitwise_xou", "calculo_bitwise_e", "calculo_igualdade", 
			"calculo_relacional", "calculo_deslocamento", "calculo_prioridade_1", 
			"calculo_prioridade_2", "calculo_unario", "calculo_parenteses", "operador_prioridade_1", 
			"operador_prioridade_2", "operador_igualdade", "operador_relacional", 
			"operador_deslocamento", "valor_calculo", "array", "lista_expressoes", 
			"function_call"
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
			setState(78);
			lista_comandos();
			setState(79);
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
			setState(86);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 57174621197680L) != 0)) {
				{
				{
				setState(81);
				comando();
				setState(82);
				match(LINE_END);
				}
				}
				setState(88);
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
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
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
			setState(97);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(89);
				comando_atribuicao();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(90);
				escopo_codigo();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(91);
				if_stmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(92);
				loop();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(93);
				comando_declaracao();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(94);
				comandos_function();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(95);
				expressao();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
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
			setState(105);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(99);
				match(CHAVES_OPEN);
				setState(100);
				lista_comandos();
				setState(101);
				match(CHAVES_CLOSE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(103);
				match(CHAVES_OPEN);
				setState(104);
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
			setState(107);
			match(VARIABLE);
			setState(108);
			match(ATTR);
			setState(109);
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
			setState(111);
			match(VARIABLE_DECLARE);
			setState(112);
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
			setState(114);
			match(IF);
			setState(115);
			expressao();
			setState(116);
			escopo_codigo();
			setState(120);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELIF) {
				{
				{
				setState(117);
				elseif();
				}
				}
				setState(122);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(124);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(123);
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
			setState(126);
			match(ELIF);
			setState(127);
			expressao();
			setState(128);
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
			setState(130);
			match(ELSE);
			setState(131);
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
			setState(136);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WHILE:
				enterOuterAlt(_localctx, 1);
				{
				setState(133);
				while_loop();
				}
				break;
			case DO:
				enterOuterAlt(_localctx, 2);
				{
				setState(134);
				do_while_loop();
				}
				break;
			case FOR:
				enterOuterAlt(_localctx, 3);
				{
				setState(135);
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
			setState(138);
			match(WHILE);
			setState(139);
			expressao();
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
			setState(142);
			match(DO);
			setState(143);
			escopo_codigo();
			setState(144);
			match(WHILE);
			setState(145);
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
			setState(147);
			match(FOR);
			setState(148);
			match(PARENTESES_OPEN);
			setState(149);
			comando();
			setState(150);
			match(LINE_END);
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 57174604645488L) != 0)) {
				{
				setState(151);
				expressao();
				}
			}

			setState(154);
			match(LINE_END);
			setState(155);
			comando();
			setState(156);
			match(PARENTESES_CLOSE);
			setState(157);
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
		public Comandos_functionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comandos_function; }
	}

	public final Comandos_functionContext comandos_function() throws RecognitionException {
		Comandos_functionContext _localctx = new Comandos_functionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_comandos_function);
		try {
			setState(161);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FUNCTION:
				enterOuterAlt(_localctx, 1);
				{
				setState(159);
				function_decl();
				}
				break;
			case RETURN:
				enterOuterAlt(_localctx, 2);
				{
				setState(160);
				return_stmt();
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
			setState(163);
			match(FUNCTION);
			setState(164);
			match(VARIABLE);
			setState(165);
			match(PARENTESES_OPEN);
			setState(167);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VARIABLE) {
				{
				setState(166);
				lista_parametros();
				}
			}

			setState(169);
			match(PARENTESES_CLOSE);
			setState(170);
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
			setState(172);
			match(VARIABLE);
			setState(177);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(173);
				match(COMMA);
				setState(174);
				match(VARIABLE);
				}
				}
				setState(179);
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
			setState(180);
			match(RETURN);
			setState(181);
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
		enterRule(_localctx, 34, RULE_expressao);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
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
		public List<TerminalNode> LOGIC_OR() { return getTokens(FileScriptParser.LOGIC_OR); }
		public TerminalNode LOGIC_OR(int i) {
			return getToken(FileScriptParser.LOGIC_OR, i);
		}
		public Calculo_logico_ouContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_logico_ou; }
	}

	public final Calculo_logico_ouContext calculo_logico_ou() throws RecognitionException {
		Calculo_logico_ouContext _localctx = new Calculo_logico_ouContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_calculo_logico_ou);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			calculo_logico_e();
			setState(190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGIC_OR) {
				{
				{
				setState(186);
				match(LOGIC_OR);
				setState(187);
				calculo_logico_e();
				}
				}
				setState(192);
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
		public List<TerminalNode> LOGIC_AND() { return getTokens(FileScriptParser.LOGIC_AND); }
		public TerminalNode LOGIC_AND(int i) {
			return getToken(FileScriptParser.LOGIC_AND, i);
		}
		public Calculo_logico_eContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_logico_e; }
	}

	public final Calculo_logico_eContext calculo_logico_e() throws RecognitionException {
		Calculo_logico_eContext _localctx = new Calculo_logico_eContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_calculo_logico_e);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			calculo_bitwise_ou();
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGIC_AND) {
				{
				{
				setState(194);
				match(LOGIC_AND);
				setState(195);
				calculo_bitwise_ou();
				}
				}
				setState(200);
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
		public List<TerminalNode> BITWISE_OR() { return getTokens(FileScriptParser.BITWISE_OR); }
		public TerminalNode BITWISE_OR(int i) {
			return getToken(FileScriptParser.BITWISE_OR, i);
		}
		public Calculo_bitwise_ouContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_bitwise_ou; }
	}

	public final Calculo_bitwise_ouContext calculo_bitwise_ou() throws RecognitionException {
		Calculo_bitwise_ouContext _localctx = new Calculo_bitwise_ouContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_calculo_bitwise_ou);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			calculo_bitwise_xou();
			setState(206);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==BITWISE_OR) {
				{
				{
				setState(202);
				match(BITWISE_OR);
				setState(203);
				calculo_bitwise_xou();
				}
				}
				setState(208);
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
		public List<TerminalNode> BITWISE_XOR() { return getTokens(FileScriptParser.BITWISE_XOR); }
		public TerminalNode BITWISE_XOR(int i) {
			return getToken(FileScriptParser.BITWISE_XOR, i);
		}
		public Calculo_bitwise_xouContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_bitwise_xou; }
	}

	public final Calculo_bitwise_xouContext calculo_bitwise_xou() throws RecognitionException {
		Calculo_bitwise_xouContext _localctx = new Calculo_bitwise_xouContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_calculo_bitwise_xou);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			calculo_bitwise_e();
			setState(214);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==BITWISE_XOR) {
				{
				{
				setState(210);
				match(BITWISE_XOR);
				setState(211);
				calculo_bitwise_e();
				}
				}
				setState(216);
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
		public List<TerminalNode> BITWISE_AND() { return getTokens(FileScriptParser.BITWISE_AND); }
		public TerminalNode BITWISE_AND(int i) {
			return getToken(FileScriptParser.BITWISE_AND, i);
		}
		public Calculo_bitwise_eContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculo_bitwise_e; }
	}

	public final Calculo_bitwise_eContext calculo_bitwise_e() throws RecognitionException {
		Calculo_bitwise_eContext _localctx = new Calculo_bitwise_eContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_calculo_bitwise_e);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(217);
			calculo_igualdade();
			setState(222);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==BITWISE_AND) {
				{
				{
				setState(218);
				match(BITWISE_AND);
				setState(219);
				calculo_igualdade();
				}
				}
				setState(224);
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
		enterRule(_localctx, 46, RULE_calculo_igualdade);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(225);
			calculo_relacional();
			setState(231);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==EQUALS || _la==NOT_EQUALS) {
				{
				{
				setState(226);
				operador_igualdade();
				setState(227);
				calculo_relacional();
				}
				}
				setState(233);
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
		enterRule(_localctx, 48, RULE_calculo_relacional);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			calculo_deslocamento();
			setState(240);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 64424509440L) != 0)) {
				{
				{
				setState(235);
				operador_relacional();
				setState(236);
				calculo_deslocamento();
				}
				}
				setState(242);
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
		enterRule(_localctx, 50, RULE_calculo_deslocamento);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243);
			calculo_prioridade_1();
			setState(249);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==RIGHT_SHIFT || _la==LEFT_SHIFT) {
				{
				{
				setState(244);
				operador_deslocamento();
				setState(245);
				calculo_prioridade_1();
				}
				}
				setState(251);
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
		enterRule(_localctx, 52, RULE_calculo_prioridade_1);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(252);
			calculo_prioridade_2();
			setState(258);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SUM || _la==SUB) {
				{
				{
				setState(253);
				operador_prioridade_1();
				setState(254);
				calculo_prioridade_2();
				}
				}
				setState(260);
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
		enterRule(_localctx, 54, RULE_calculo_prioridade_2);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(261);
			calculo_unario();
			setState(267);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 939524096L) != 0)) {
				{
				{
				setState(262);
				operador_prioridade_2();
				setState(263);
				calculo_unario();
				}
				}
				setState(269);
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
		public TerminalNode BITWISE_NOT() { return getToken(FileScriptParser.BITWISE_NOT, 0); }
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
		enterRule(_localctx, 56, RULE_calculo_unario);
		try {
			setState(273);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BITWISE_NOT:
				enterOuterAlt(_localctx, 1);
				{
				setState(270);
				match(BITWISE_NOT);
				setState(271);
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
				setState(272);
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
		public TerminalNode PARENTESES_OPEN() { return getToken(FileScriptParser.PARENTESES_OPEN, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
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
		enterRule(_localctx, 58, RULE_calculo_parenteses);
		try {
			setState(280);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PARENTESES_OPEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(275);
				match(PARENTESES_OPEN);
				setState(276);
				expressao();
				setState(277);
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
				setState(279);
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
		enterRule(_localctx, 60, RULE_operador_prioridade_1);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
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
		enterRule(_localctx, 62, RULE_operador_prioridade_2);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(284);
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
		public TerminalNode EQUALS() { return getToken(FileScriptParser.EQUALS, 0); }
		public TerminalNode NOT_EQUALS() { return getToken(FileScriptParser.NOT_EQUALS, 0); }
		public Operador_igualdadeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operador_igualdade; }
	}

	public final Operador_igualdadeContext operador_igualdade() throws RecognitionException {
		Operador_igualdadeContext _localctx = new Operador_igualdadeContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_operador_igualdade);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
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
		public TerminalNode GREATER() { return getToken(FileScriptParser.GREATER, 0); }
		public TerminalNode GREATER_EQUALS() { return getToken(FileScriptParser.GREATER_EQUALS, 0); }
		public TerminalNode LESS() { return getToken(FileScriptParser.LESS, 0); }
		public TerminalNode LESS_EQUALS() { return getToken(FileScriptParser.LESS_EQUALS, 0); }
		public Operador_relacionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operador_relacional; }
	}

	public final Operador_relacionalContext operador_relacional() throws RecognitionException {
		Operador_relacionalContext _localctx = new Operador_relacionalContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_operador_relacional);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
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
		public TerminalNode RIGHT_SHIFT() { return getToken(FileScriptParser.RIGHT_SHIFT, 0); }
		public TerminalNode LEFT_SHIFT() { return getToken(FileScriptParser.LEFT_SHIFT, 0); }
		public Operador_deslocamentoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operador_deslocamento; }
	}

	public final Operador_deslocamentoContext operador_deslocamento() throws RecognitionException {
		Operador_deslocamentoContext _localctx = new Operador_deslocamentoContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_operador_deslocamento);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(290);
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
		public TerminalNode NUMERICO() { return getToken(FileScriptParser.NUMERICO, 0); }
		public TerminalNode VARIABLE() { return getToken(FileScriptParser.VARIABLE, 0); }
		public TerminalNode STRING() { return getToken(FileScriptParser.STRING, 0); }
		public TerminalNode CHAR() { return getToken(FileScriptParser.CHAR, 0); }
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public Valor_calculoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor_calculo; }
	}

	public final Valor_calculoContext valor_calculo() throws RecognitionException {
		Valor_calculoContext _localctx = new Valor_calculoContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_valor_calculo);
		try {
			setState(298);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(292);
				match(NUMERICO);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(293);
				match(VARIABLE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(294);
				match(STRING);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(295);
				match(CHAR);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(296);
				array();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(297);
				function_call();
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
		enterRule(_localctx, 72, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(300);
			match(COLCHETES_OPEN);
			setState(302);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 57174604645488L) != 0)) {
				{
				setState(301);
				lista_expressoes();
				}
			}

			setState(304);
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
		enterRule(_localctx, 74, RULE_lista_expressoes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(306);
			expressao();
			setState(311);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(307);
				match(COMMA);
				setState(308);
				expressao();
				}
				}
				setState(313);
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
		enterRule(_localctx, 76, RULE_function_call);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(314);
			match(VARIABLE);
			setState(315);
			match(PARENTESES_OPEN);
			setState(317);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 57174604645488L) != 0)) {
				{
				setState(316);
				lista_expressoes();
				}
			}

			setState(319);
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
		"\u0004\u0001-\u0142\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001U\b\u0001"+
		"\n\u0001\f\u0001X\t\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002b\b\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0003\u0003j\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0005\u0006w\b\u0006\n\u0006\f\u0006z\t\u0006\u0001\u0006"+
		"\u0003\u0006}\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0003\t\u0089\b\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f\u0099\b\f"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0003\r\u00a2"+
		"\b\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u00a8"+
		"\b\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0005\u000f\u00b0\b\u000f\n\u000f\f\u000f\u00b3\t\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0005\u0012\u00bd\b\u0012\n\u0012\f\u0012\u00c0\t\u0012\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0005\u0013\u00c5\b\u0013\n\u0013\f\u0013"+
		"\u00c8\t\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0005\u0014\u00cd\b"+
		"\u0014\n\u0014\f\u0014\u00d0\t\u0014\u0001\u0015\u0001\u0015\u0001\u0015"+
		"\u0005\u0015\u00d5\b\u0015\n\u0015\f\u0015\u00d8\t\u0015\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0005\u0016\u00dd\b\u0016\n\u0016\f\u0016\u00e0\t\u0016"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0005\u0017\u00e6\b\u0017"+
		"\n\u0017\f\u0017\u00e9\t\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0005\u0018\u00ef\b\u0018\n\u0018\f\u0018\u00f2\t\u0018\u0001\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u0019\u0005\u0019\u00f8\b\u0019\n\u0019"+
		"\f\u0019\u00fb\t\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a"+
		"\u0005\u001a\u0101\b\u001a\n\u001a\f\u001a\u0104\t\u001a\u0001\u001b\u0001"+
		"\u001b\u0001\u001b\u0001\u001b\u0005\u001b\u010a\b\u001b\n\u001b\f\u001b"+
		"\u010d\t\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u0112\b"+
		"\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0003"+
		"\u001d\u0119\b\u001d\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001"+
		" \u0001 \u0001!\u0001!\u0001\"\u0001\"\u0001#\u0001#\u0001#\u0001#\u0001"+
		"#\u0001#\u0003#\u012b\b#\u0001$\u0001$\u0003$\u012f\b$\u0001$\u0001$\u0001"+
		"%\u0001%\u0001%\u0005%\u0136\b%\n%\f%\u0139\t%\u0001&\u0001&\u0001&\u0003"+
		"&\u013e\b&\u0001&\u0001&\u0001&\u0000\u0000\'\u0000\u0002\u0004\u0006"+
		"\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,."+
		"02468:<>@BDFHJL\u0000\u0005\u0001\u0000\u0019\u001a\u0001\u0000\u001b"+
		"\u001d\u0001\u0000\u001e\u001f\u0001\u0000 #\u0001\u0000&\'\u013f\u0000"+
		"N\u0001\u0000\u0000\u0000\u0002V\u0001\u0000\u0000\u0000\u0004a\u0001"+
		"\u0000\u0000\u0000\u0006i\u0001\u0000\u0000\u0000\bk\u0001\u0000\u0000"+
		"\u0000\no\u0001\u0000\u0000\u0000\fr\u0001\u0000\u0000\u0000\u000e~\u0001"+
		"\u0000\u0000\u0000\u0010\u0082\u0001\u0000\u0000\u0000\u0012\u0088\u0001"+
		"\u0000\u0000\u0000\u0014\u008a\u0001\u0000\u0000\u0000\u0016\u008e\u0001"+
		"\u0000\u0000\u0000\u0018\u0093\u0001\u0000\u0000\u0000\u001a\u00a1\u0001"+
		"\u0000\u0000\u0000\u001c\u00a3\u0001\u0000\u0000\u0000\u001e\u00ac\u0001"+
		"\u0000\u0000\u0000 \u00b4\u0001\u0000\u0000\u0000\"\u00b7\u0001\u0000"+
		"\u0000\u0000$\u00b9\u0001\u0000\u0000\u0000&\u00c1\u0001\u0000\u0000\u0000"+
		"(\u00c9\u0001\u0000\u0000\u0000*\u00d1\u0001\u0000\u0000\u0000,\u00d9"+
		"\u0001\u0000\u0000\u0000.\u00e1\u0001\u0000\u0000\u00000\u00ea\u0001\u0000"+
		"\u0000\u00002\u00f3\u0001\u0000\u0000\u00004\u00fc\u0001\u0000\u0000\u0000"+
		"6\u0105\u0001\u0000\u0000\u00008\u0111\u0001\u0000\u0000\u0000:\u0118"+
		"\u0001\u0000\u0000\u0000<\u011a\u0001\u0000\u0000\u0000>\u011c\u0001\u0000"+
		"\u0000\u0000@\u011e\u0001\u0000\u0000\u0000B\u0120\u0001\u0000\u0000\u0000"+
		"D\u0122\u0001\u0000\u0000\u0000F\u012a\u0001\u0000\u0000\u0000H\u012c"+
		"\u0001\u0000\u0000\u0000J\u0132\u0001\u0000\u0000\u0000L\u013a\u0001\u0000"+
		"\u0000\u0000NO\u0003\u0002\u0001\u0000OP\u0005\u0000\u0000\u0001P\u0001"+
		"\u0001\u0000\u0000\u0000QR\u0003\u0004\u0002\u0000RS\u0005\f\u0000\u0000"+
		"SU\u0001\u0000\u0000\u0000TQ\u0001\u0000\u0000\u0000UX\u0001\u0000\u0000"+
		"\u0000VT\u0001\u0000\u0000\u0000VW\u0001\u0000\u0000\u0000W\u0003\u0001"+
		"\u0000\u0000\u0000XV\u0001\u0000\u0000\u0000Yb\u0003\b\u0004\u0000Zb\u0003"+
		"\u0006\u0003\u0000[b\u0003\f\u0006\u0000\\b\u0003\u0012\t\u0000]b\u0003"+
		"\n\u0005\u0000^b\u0003\u001a\r\u0000_b\u0003\"\u0011\u0000`b\u0001\u0000"+
		"\u0000\u0000aY\u0001\u0000\u0000\u0000aZ\u0001\u0000\u0000\u0000a[\u0001"+
		"\u0000\u0000\u0000a\\\u0001\u0000\u0000\u0000a]\u0001\u0000\u0000\u0000"+
		"a^\u0001\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000a`\u0001\u0000\u0000"+
		"\u0000b\u0005\u0001\u0000\u0000\u0000cd\u0005\b\u0000\u0000de\u0003\u0002"+
		"\u0001\u0000ef\u0005\t\u0000\u0000fj\u0001\u0000\u0000\u0000gh\u0005\b"+
		"\u0000\u0000hj\u0005\t\u0000\u0000ic\u0001\u0000\u0000\u0000ig\u0001\u0000"+
		"\u0000\u0000j\u0007\u0001\u0000\u0000\u0000kl\u0005-\u0000\u0000lm\u0005"+
		"\u0018\u0000\u0000mn\u0003\"\u0011\u0000n\t\u0001\u0000\u0000\u0000op"+
		"\u0005\u0017\u0000\u0000pq\u0003\b\u0004\u0000q\u000b\u0001\u0000\u0000"+
		"\u0000rs\u0005\u000f\u0000\u0000st\u0003\"\u0011\u0000tx\u0003\u0006\u0003"+
		"\u0000uw\u0003\u000e\u0007\u0000vu\u0001\u0000\u0000\u0000wz\u0001\u0000"+
		"\u0000\u0000xv\u0001\u0000\u0000\u0000xy\u0001\u0000\u0000\u0000y|\u0001"+
		"\u0000\u0000\u0000zx\u0001\u0000\u0000\u0000{}\u0003\u0010\b\u0000|{\u0001"+
		"\u0000\u0000\u0000|}\u0001\u0000\u0000\u0000}\r\u0001\u0000\u0000\u0000"+
		"~\u007f\u0005\u0011\u0000\u0000\u007f\u0080\u0003\"\u0011\u0000\u0080"+
		"\u0081\u0003\u0006\u0003\u0000\u0081\u000f\u0001\u0000\u0000\u0000\u0082"+
		"\u0083\u0005\u0010\u0000\u0000\u0083\u0084\u0003\u0006\u0003\u0000\u0084"+
		"\u0011\u0001\u0000\u0000\u0000\u0085\u0089\u0003\u0014\n\u0000\u0086\u0089"+
		"\u0003\u0016\u000b\u0000\u0087\u0089\u0003\u0018\f\u0000\u0088\u0085\u0001"+
		"\u0000\u0000\u0000\u0088\u0086\u0001\u0000\u0000\u0000\u0088\u0087\u0001"+
		"\u0000\u0000\u0000\u0089\u0013\u0001\u0000\u0000\u0000\u008a\u008b\u0005"+
		"\u0013\u0000\u0000\u008b\u008c\u0003\"\u0011\u0000\u008c\u008d\u0003\u0006"+
		"\u0003\u0000\u008d\u0015\u0001\u0000\u0000\u0000\u008e\u008f\u0005\u0014"+
		"\u0000\u0000\u008f\u0090\u0003\u0006\u0003\u0000\u0090\u0091\u0005\u0013"+
		"\u0000\u0000\u0091\u0092\u0003\"\u0011\u0000\u0092\u0017\u0001\u0000\u0000"+
		"\u0000\u0093\u0094\u0005\u0012\u0000\u0000\u0094\u0095\u0005\u0006\u0000"+
		"\u0000\u0095\u0096\u0003\u0004\u0002\u0000\u0096\u0098\u0005\f\u0000\u0000"+
		"\u0097\u0099\u0003\"\u0011\u0000\u0098\u0097\u0001\u0000\u0000\u0000\u0098"+
		"\u0099\u0001\u0000\u0000\u0000\u0099\u009a\u0001\u0000\u0000\u0000\u009a"+
		"\u009b\u0005\f\u0000\u0000\u009b\u009c\u0003\u0004\u0002\u0000\u009c\u009d"+
		"\u0005\u0007\u0000\u0000\u009d\u009e\u0003\u0006\u0003\u0000\u009e\u0019"+
		"\u0001\u0000\u0000\u0000\u009f\u00a2\u0003\u001c\u000e\u0000\u00a0\u00a2"+
		"\u0003 \u0010\u0000\u00a1\u009f\u0001\u0000\u0000\u0000\u00a1\u00a0\u0001"+
		"\u0000\u0000\u0000\u00a2\u001b\u0001\u0000\u0000\u0000\u00a3\u00a4\u0005"+
		"\u0015\u0000\u0000\u00a4\u00a5\u0005-\u0000\u0000\u00a5\u00a7\u0005\u0006"+
		"\u0000\u0000\u00a6\u00a8\u0003\u001e\u000f\u0000\u00a7\u00a6\u0001\u0000"+
		"\u0000\u0000\u00a7\u00a8\u0001\u0000\u0000\u0000\u00a8\u00a9\u0001\u0000"+
		"\u0000\u0000\u00a9\u00aa\u0005\u0007\u0000\u0000\u00aa\u00ab\u0003\u0006"+
		"\u0003\u0000\u00ab\u001d\u0001\u0000\u0000\u0000\u00ac\u00b1\u0005-\u0000"+
		"\u0000\u00ad\u00ae\u0005\u000e\u0000\u0000\u00ae\u00b0\u0005-\u0000\u0000"+
		"\u00af\u00ad\u0001\u0000\u0000\u0000\u00b0\u00b3\u0001\u0000\u0000\u0000"+
		"\u00b1\u00af\u0001\u0000\u0000\u0000\u00b1\u00b2\u0001\u0000\u0000\u0000"+
		"\u00b2\u001f\u0001\u0000\u0000\u0000\u00b3\u00b1\u0001\u0000\u0000\u0000"+
		"\u00b4\u00b5\u0005\u0016\u0000\u0000\u00b5\u00b6\u0003\"\u0011\u0000\u00b6"+
		"!\u0001\u0000\u0000\u0000\u00b7\u00b8\u0003$\u0012\u0000\u00b8#\u0001"+
		"\u0000\u0000\u0000\u00b9\u00be\u0003&\u0013\u0000\u00ba\u00bb\u0005%\u0000"+
		"\u0000\u00bb\u00bd\u0003&\u0013\u0000\u00bc\u00ba\u0001\u0000\u0000\u0000"+
		"\u00bd\u00c0\u0001\u0000\u0000\u0000\u00be\u00bc\u0001\u0000\u0000\u0000"+
		"\u00be\u00bf\u0001\u0000\u0000\u0000\u00bf%\u0001\u0000\u0000\u0000\u00c0"+
		"\u00be\u0001\u0000\u0000\u0000\u00c1\u00c6\u0003(\u0014\u0000\u00c2\u00c3"+
		"\u0005$\u0000\u0000\u00c3\u00c5\u0003(\u0014\u0000\u00c4\u00c2\u0001\u0000"+
		"\u0000\u0000\u00c5\u00c8\u0001\u0000\u0000\u0000\u00c6\u00c4\u0001\u0000"+
		"\u0000\u0000\u00c6\u00c7\u0001\u0000\u0000\u0000\u00c7\'\u0001\u0000\u0000"+
		"\u0000\u00c8\u00c6\u0001\u0000\u0000\u0000\u00c9\u00ce\u0003*\u0015\u0000"+
		"\u00ca\u00cb\u0005)\u0000\u0000\u00cb\u00cd\u0003*\u0015\u0000\u00cc\u00ca"+
		"\u0001\u0000\u0000\u0000\u00cd\u00d0\u0001\u0000\u0000\u0000\u00ce\u00cc"+
		"\u0001\u0000\u0000\u0000\u00ce\u00cf\u0001\u0000\u0000\u0000\u00cf)\u0001"+
		"\u0000\u0000\u0000\u00d0\u00ce\u0001\u0000\u0000\u0000\u00d1\u00d6\u0003"+
		",\u0016\u0000\u00d2\u00d3\u0005+\u0000\u0000\u00d3\u00d5\u0003,\u0016"+
		"\u0000\u00d4\u00d2\u0001\u0000\u0000\u0000\u00d5\u00d8\u0001\u0000\u0000"+
		"\u0000\u00d6\u00d4\u0001\u0000\u0000\u0000\u00d6\u00d7\u0001\u0000\u0000"+
		"\u0000\u00d7+\u0001\u0000\u0000\u0000\u00d8\u00d6\u0001\u0000\u0000\u0000"+
		"\u00d9\u00de\u0003.\u0017\u0000\u00da\u00db\u0005(\u0000\u0000\u00db\u00dd"+
		"\u0003.\u0017\u0000\u00dc\u00da\u0001\u0000\u0000\u0000\u00dd\u00e0\u0001"+
		"\u0000\u0000\u0000\u00de\u00dc\u0001\u0000\u0000\u0000\u00de\u00df\u0001"+
		"\u0000\u0000\u0000\u00df-\u0001\u0000\u0000\u0000\u00e0\u00de\u0001\u0000"+
		"\u0000\u0000\u00e1\u00e7\u00030\u0018\u0000\u00e2\u00e3\u0003@ \u0000"+
		"\u00e3\u00e4\u00030\u0018\u0000\u00e4\u00e6\u0001\u0000\u0000\u0000\u00e5"+
		"\u00e2\u0001\u0000\u0000\u0000\u00e6\u00e9\u0001\u0000\u0000\u0000\u00e7"+
		"\u00e5\u0001\u0000\u0000\u0000\u00e7\u00e8\u0001\u0000\u0000\u0000\u00e8"+
		"/\u0001\u0000\u0000\u0000\u00e9\u00e7\u0001\u0000\u0000\u0000\u00ea\u00f0"+
		"\u00032\u0019\u0000\u00eb\u00ec\u0003B!\u0000\u00ec\u00ed\u00032\u0019"+
		"\u0000\u00ed\u00ef\u0001\u0000\u0000\u0000\u00ee\u00eb\u0001\u0000\u0000"+
		"\u0000\u00ef\u00f2\u0001\u0000\u0000\u0000\u00f0\u00ee\u0001\u0000\u0000"+
		"\u0000\u00f0\u00f1\u0001\u0000\u0000\u0000\u00f11\u0001\u0000\u0000\u0000"+
		"\u00f2\u00f0\u0001\u0000\u0000\u0000\u00f3\u00f9\u00034\u001a\u0000\u00f4"+
		"\u00f5\u0003D\"\u0000\u00f5\u00f6\u00034\u001a\u0000\u00f6\u00f8\u0001"+
		"\u0000\u0000\u0000\u00f7\u00f4\u0001\u0000\u0000\u0000\u00f8\u00fb\u0001"+
		"\u0000\u0000\u0000\u00f9\u00f7\u0001\u0000\u0000\u0000\u00f9\u00fa\u0001"+
		"\u0000\u0000\u0000\u00fa3\u0001\u0000\u0000\u0000\u00fb\u00f9\u0001\u0000"+
		"\u0000\u0000\u00fc\u0102\u00036\u001b\u0000\u00fd\u00fe\u0003<\u001e\u0000"+
		"\u00fe\u00ff\u00036\u001b\u0000\u00ff\u0101\u0001\u0000\u0000\u0000\u0100"+
		"\u00fd\u0001\u0000\u0000\u0000\u0101\u0104\u0001\u0000\u0000\u0000\u0102"+
		"\u0100\u0001\u0000\u0000\u0000\u0102\u0103\u0001\u0000\u0000\u0000\u0103"+
		"5\u0001\u0000\u0000\u0000\u0104\u0102\u0001\u0000\u0000\u0000\u0105\u010b"+
		"\u00038\u001c\u0000\u0106\u0107\u0003>\u001f\u0000\u0107\u0108\u00038"+
		"\u001c\u0000\u0108\u010a\u0001\u0000\u0000\u0000\u0109\u0106\u0001\u0000"+
		"\u0000\u0000\u010a\u010d\u0001\u0000\u0000\u0000\u010b\u0109\u0001\u0000"+
		"\u0000\u0000\u010b\u010c\u0001\u0000\u0000\u0000\u010c7\u0001\u0000\u0000"+
		"\u0000\u010d\u010b\u0001\u0000\u0000\u0000\u010e\u010f\u0005*\u0000\u0000"+
		"\u010f\u0112\u00038\u001c\u0000\u0110\u0112\u0003:\u001d\u0000\u0111\u010e"+
		"\u0001\u0000\u0000\u0000\u0111\u0110\u0001\u0000\u0000\u0000\u01129\u0001"+
		"\u0000\u0000\u0000\u0113\u0114\u0005\u0006\u0000\u0000\u0114\u0115\u0003"+
		"\"\u0011\u0000\u0115\u0116\u0005\u0007\u0000\u0000\u0116\u0119\u0001\u0000"+
		"\u0000\u0000\u0117\u0119\u0003F#\u0000\u0118\u0113\u0001\u0000\u0000\u0000"+
		"\u0118\u0117\u0001\u0000\u0000\u0000\u0119;\u0001\u0000\u0000\u0000\u011a"+
		"\u011b\u0007\u0000\u0000\u0000\u011b=\u0001\u0000\u0000\u0000\u011c\u011d"+
		"\u0007\u0001\u0000\u0000\u011d?\u0001\u0000\u0000\u0000\u011e\u011f\u0007"+
		"\u0002\u0000\u0000\u011fA\u0001\u0000\u0000\u0000\u0120\u0121\u0007\u0003"+
		"\u0000\u0000\u0121C\u0001\u0000\u0000\u0000\u0122\u0123\u0007\u0004\u0000"+
		"\u0000\u0123E\u0001\u0000\u0000\u0000\u0124\u012b\u0005,\u0000\u0000\u0125"+
		"\u012b\u0005-\u0000\u0000\u0126\u012b\u0005\u0004\u0000\u0000\u0127\u012b"+
		"\u0005\u0005\u0000\u0000\u0128\u012b\u0003H$\u0000\u0129\u012b\u0003L"+
		"&\u0000\u012a\u0124\u0001\u0000\u0000\u0000\u012a\u0125\u0001\u0000\u0000"+
		"\u0000\u012a\u0126\u0001\u0000\u0000\u0000\u012a\u0127\u0001\u0000\u0000"+
		"\u0000\u012a\u0128\u0001\u0000\u0000\u0000\u012a\u0129\u0001\u0000\u0000"+
		"\u0000\u012bG\u0001\u0000\u0000\u0000\u012c\u012e\u0005\n\u0000\u0000"+
		"\u012d\u012f\u0003J%\u0000\u012e\u012d\u0001\u0000\u0000\u0000\u012e\u012f"+
		"\u0001\u0000\u0000\u0000\u012f\u0130\u0001\u0000\u0000\u0000\u0130\u0131"+
		"\u0005\u000b\u0000\u0000\u0131I\u0001\u0000\u0000\u0000\u0132\u0137\u0003"+
		"\"\u0011\u0000\u0133\u0134\u0005\u000e\u0000\u0000\u0134\u0136\u0003\""+
		"\u0011\u0000\u0135\u0133\u0001\u0000\u0000\u0000\u0136\u0139\u0001\u0000"+
		"\u0000\u0000\u0137\u0135\u0001\u0000\u0000\u0000\u0137\u0138\u0001\u0000"+
		"\u0000\u0000\u0138K\u0001\u0000\u0000\u0000\u0139\u0137\u0001\u0000\u0000"+
		"\u0000\u013a\u013b\u0005-\u0000\u0000\u013b\u013d\u0005\u0006\u0000\u0000"+
		"\u013c\u013e\u0003J%\u0000\u013d\u013c\u0001\u0000\u0000\u0000\u013d\u013e"+
		"\u0001\u0000\u0000\u0000\u013e\u013f\u0001\u0000\u0000\u0000\u013f\u0140"+
		"\u0005\u0007\u0000\u0000\u0140M\u0001\u0000\u0000\u0000\u001aVaix|\u0088"+
		"\u0098\u00a1\u00a7\u00b1\u00be\u00c6\u00ce\u00d6\u00de\u00e7\u00f0\u00f9"+
		"\u0102\u010b\u0111\u0118\u012a\u012e\u0137\u013d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}