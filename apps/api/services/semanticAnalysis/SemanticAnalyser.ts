import type { CompileError, ErrorSeverity } from '@antlr-compiler/shared/types'
import type { ParserRuleContext } from 'antlr4ts'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree'
import type {
  Comando_atribuicaoContext,
  Comando_declaracaoContext,
  Escopo_codigoContext,
  ExpressaoContext,
  For_loopContext,
  Function_callContext,
  Function_declContext,
  ProgramContext,
  Return_stmtContext,
} from '../../generated/fsCompiler/FileScriptParser'
import type { FileScriptParserVisitor } from '../../generated/fsCompiler/FileScriptParserVisitor'
import { ExpressionTypeVisitor } from './ExpressionHandler'
import { ScopeManager } from './ScopeManager'

export class SemanticAnalyser extends AbstractParseTreeVisitor<any> implements FileScriptParserVisitor<any> {
  private scopeManager: ScopeManager

  public errors: CompileError[] = []

  public constructor() {
    super()

    this.scopeManager = new ScopeManager(this.addError)
  }

  public GetVariablesList() {
    return this.scopeManager.GetVariablesList()
  }

  visitExpressao(ctx: ExpressaoContext) {
    const expressionVisitor = new ExpressionTypeVisitor(this.scopeManager, this.addError)
    expressionVisitor.visit(ctx)
  }

  visitProgram(ctx: ProgramContext) {
    this.scopeManager.beginScope()
    this.visitChildren(ctx)
    this.scopeManager.endScope(ctx)
  }

  private addError = (ctx: ParserRuleContext, message: string, severity: ErrorSeverity) => {
    console.log('ADICIONADO ERROR', message)
    this.errors.push({
      line: ctx.start.line,
      column: ctx.start.charPositionInLine,
      message: message,
      severity: severity,
      type: 'SEMANTIC',
    })
  }

  protected defaultResult() {
    return null
  }

  private parseVariableAttr(ctx: Comando_atribuicaoContext) {
    const varName = ctx.VARIABLE().text
    const expressionVisitor = new ExpressionTypeVisitor(this.scopeManager, this.addError)

    const type = expressionVisitor.visit(ctx.expressao())

    return {
      name: varName,
      type,
    }
  }

  //#region Declaração de atribuição de variaveis

  visitComando_declaracao(ctx: Comando_declaracaoContext) {
    const isConst = ctx.VARIABLE_DECLARE().text === 'const'

    const { name, type } = this.parseVariableAttr(ctx.comando_atribuicao())

    this.scopeManager.define(name, type, isConst, ctx)

    return null
  }

  visitComando_atribuicao(ctx: Comando_atribuicaoContext) {
    const { name, type } = this.parseVariableAttr(ctx)

    this.scopeManager.assign(name, type, ctx)

    return null
  }

  //#endregion

  visitEscopo_codigo(ctx: Escopo_codigoContext) {
    this.scopeManager.beginScope()

    this.visitChildren(ctx)

    this.scopeManager.endScope(ctx)

    return null
  }

  //#region loops

  visitFor_loop(ctx: For_loopContext) {
    this.scopeManager.beginScope()
    this.visitChildren(ctx)
    this.scopeManager.endScope(ctx)
  }

  //#endregion

  //#region Funções
  visitFunction_decl(ctx: Function_declContext) {
    const funcName = ctx.VARIABLE().text
    this.scopeManager.define(funcName, 'function', true, ctx)
    this.scopeManager.beginScope()
    ctx
      .lista_parametros()
      ?.VARIABLE()
      ?.forEach((exp) => {
        this.scopeManager.define(exp.text, 'any', false, ctx)
      })

    this.visitChildren(ctx)

    this.scopeManager.endScope(ctx)
  }

  visitFunction_call(ctx: Function_callContext) {
    const funcName = ctx.VARIABLE().text
    const symbol = this.scopeManager.resolve(funcName, ctx)
    if (symbol?.type !== 'function') this.addError(ctx, `${funcName} não é uma função`, 'Warning')
    const expressionVisitor = new ExpressionTypeVisitor(this.scopeManager, this.addError)
    ctx
      .lista_expressoes()
      ?.expressao()
      ?.forEach((ex) => {
        expressionVisitor.visit(ex)
      })
  }

  visitReturn_stmt(ctx: Return_stmtContext) {
    const expressionVisitor = new ExpressionTypeVisitor(this.scopeManager, this.addError)
    expressionVisitor.visit(ctx.expressao())
  }

  //#endregion
}
