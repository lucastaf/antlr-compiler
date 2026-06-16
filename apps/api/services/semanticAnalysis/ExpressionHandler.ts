import type { ErrorSeverity } from '@antlr-compiler/shared/types'
import type { ParserRuleContext } from 'antlr4ts'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree'
import type {
  Calculo_bitwise_eContext,
  Calculo_bitwise_ouContext,
  Calculo_bitwise_xouContext,
  Calculo_deslocamentoContext,
  Calculo_igualdadeContext,
  Calculo_logico_eContext,
  Calculo_logico_ouContext,
  Calculo_parentesesContext,
  Calculo_prioridade_1Context,
  Calculo_prioridade_2Context,
  Calculo_relacionalContext,
  Calculo_unarioContext,
  Valor_calculoContext,
} from '../../generated/fsCompiler/expressao'
import type { expressaoVisitor } from '../../generated/fsCompiler/expressaoVisitor'
import type { ScopeManager } from './ScopeManager'

// ===================== TYPES =====================

export type VarType = 'number' | 'string' | 'char' | 'boolean' | 'array' | 'function' | 'unknown' | 'any'

// ===================== VISITOR =====================

export class ExpressionTypeVisitor extends AbstractParseTreeVisitor<VarType> implements expressaoVisitor<VarType> {
  private scopes: ScopeManager

  constructor(
    scopes: ScopeManager,
    private readonly addError: (ctx: ParserRuleContext, message: string, severity: ErrorSeverity) => void,
  ) {
    super()
    this.scopes = scopes
  }

  protected defaultResult(): VarType {
    return 'unknown'
  }

  // =====================
  // HELPERS
  // =====================

  private isNumeric(type: VarType) {
    return type === 'number'
  }

  private isBoolean(type: VarType) {
    return type === 'boolean'
  }

  // =====================
  // VALORES
  // =====================

  visitValor_calculo(ctx: Valor_calculoContext): VarType {
    if (ctx.NUMERICO()) {
      return 'number'
    }

    if (ctx.STRING()) {
      return 'string'
    }

    if (ctx.CHAR()) {
      return 'char'
    }

    if (ctx.array()) {
      return this.visit(ctx.array()!)
    }

    if (ctx.VARIABLE()) {
      const name = ctx.VARIABLE()!.text

      const symbol = this.scopes.resolve(name, ctx)

      if (!symbol) {
        // this.addError(
        //     ctx,
        //     `Variável '${name}' não declarada`,
        //     "Error"
        // );

        return 'unknown'
      }

      return symbol.type
    }

    return 'unknown'
  }

  // =====================
  // PARENTHESES
  // =====================

  visitCalculo_parenteses(ctx: Calculo_parentesesContext): VarType {
    if (ctx.expressao()) {
      return this.visit(ctx.expressao()!)
    }

    return this.visit(ctx.valor_calculo()!)
  }

  // =====================
  // UNÁRIO
  // =====================

  visitCalculo_unario(ctx: Calculo_unarioContext): VarType {
    if (ctx.calculo_unario()) {
      const type = this.visit(ctx.calculo_unario()!)

      if (!this.isNumeric(type)) {
        this.addError(ctx, 'Operador unário inválido', 'Error')

        return 'unknown'
      }

      return 'number'
    }

    return this.visit(ctx.calculo_parenteses()!)
  }

  // =====================
  // *, /, %
  // =====================

  visitCalculo_prioridade_2(ctx: Calculo_prioridade_2Context): VarType {
    const expressions = ctx.calculo_unario()

    const currentType = this.visit(expressions[0])

    // sem operador

    if (expressions.length === 1) {
      return currentType
    }

    for (let i = 1; i < expressions.length; i++) {
      const rightType = this.visit(expressions[i])

      if (!this.isNumeric(currentType) || !this.isNumeric(rightType)) {
        this.addError(ctx, 'Operação aritmética inválida', 'Error')

        return 'unknown'
      }
    }

    return 'number'
  }

  // =====================
  // +, -
  // =====================

  visitCalculo_prioridade_1(ctx: Calculo_prioridade_1Context): VarType {
    const expressions = ctx.calculo_prioridade_2()

    const currentType = this.visit(expressions[0])

    // sem operador

    if (expressions.length === 1) {
      return currentType
    }

    for (let i = 1; i < expressions.length; i++) {
      const rightType = this.visit(expressions[i])

      if (!this.isNumeric(currentType) || !this.isNumeric(rightType)) {
        this.addError(ctx, 'Operação aritmética inválida', 'Error')

        return 'unknown'
      }
    }

    return 'number'
  }

  // =====================
  // << >>
  // =====================

  visitCalculo_deslocamento(ctx: Calculo_deslocamentoContext): VarType {
    const expressions = ctx.calculo_prioridade_1()

    const currentType = this.visit(expressions[0])

    // sem operador

    if (expressions.length === 1) {
      return currentType
    }

    for (let i = 1; i < expressions.length; i++) {
      const rightType = this.visit(expressions[i])

      if (!this.isNumeric(currentType) || !this.isNumeric(rightType)) {
        this.addError(ctx, 'Shift exige números', 'Error')

        return 'unknown'
      }
    }

    return 'number'
  }

  // =====================
  // < <= > >=
  // =====================

  visitCalculo_relacional(ctx: Calculo_relacionalContext): VarType {
    const expressions = ctx.calculo_deslocamento()

    const currentType = this.visit(expressions[0])

    // sem operador

    if (expressions.length === 1) {
      return currentType
    }

    for (let i = 1; i < expressions.length; i++) {
      const rightType = this.visit(expressions[i])

      if (!this.isNumeric(currentType) || !this.isNumeric(rightType)) {
        this.addError(ctx, 'Operador relacional exige números', 'Error')

        return 'unknown'
      }
    }

    return 'boolean'
  }

  // =====================
  // == !=
  // =====================

  visitCalculo_igualdade(ctx: Calculo_igualdadeContext): VarType {
    const expressions = ctx.calculo_relacional()

    const currentType = this.visit(expressions[0])

    // sem operador

    if (expressions.length === 1) {
      return currentType
    }

    for (let i = 1; i < expressions.length; i++) {
      const rightType = this.visit(expressions[i])

      if (currentType !== rightType) {
        this.addError(ctx, 'Comparação entre tipos incompatíveis', 'Error')

        return 'unknown'
      }
    }

    return 'boolean'
  }

  // =====================
  // BITWISE &
  // =====================

  visitCalculo_bitwise_e(ctx: Calculo_bitwise_eContext): VarType {
    const expressions = ctx.calculo_igualdade()

    const currentType = this.visit(expressions[0])

    if (expressions.length === 1) {
      return currentType
    }

    for (let i = 1; i < expressions.length; i++) {
      const rightType = this.visit(expressions[i])

      if (!this.isNumeric(currentType) || !this.isNumeric(rightType)) {
        this.addError(ctx, 'Operador bitwise exige números', 'Error')

        return 'unknown'
      }
    }

    return 'number'
  }

  // =====================
  // BITWISE ^
  // =====================

  visitCalculo_bitwise_xou(ctx: Calculo_bitwise_xouContext): VarType {
    const expressions = ctx.calculo_bitwise_e()

    const currentType = this.visit(expressions[0])

    if (expressions.length === 1) {
      return currentType
    }

    for (let i = 1; i < expressions.length; i++) {
      const rightType = this.visit(expressions[i])

      if (!this.isNumeric(currentType) || !this.isNumeric(rightType)) {
        this.addError(ctx, 'Operador bitwise exige números', 'Error')

        return 'unknown'
      }
    }

    return 'number'
  }

  // =====================
  // BITWISE |
  // =====================

  visitCalculo_bitwise_ou(ctx: Calculo_bitwise_ouContext): VarType {
    const expressions = ctx.calculo_bitwise_xou()

    const currentType = this.visit(expressions[0])

    if (expressions.length === 1) {
      return currentType
    }

    for (let i = 1; i < expressions.length; i++) {
      const rightType = this.visit(expressions[i])

      if (!this.isNumeric(currentType) || !this.isNumeric(rightType)) {
        this.addError(ctx, 'Operador bitwise exige números', 'Error')

        return 'unknown'
      }
    }

    return 'number'
  }

  // =====================
  // &&
  // =====================

  visitCalculo_logico_e(ctx: Calculo_logico_eContext): VarType {
    const expressions = ctx.calculo_bitwise_ou()

    const currentType = this.visit(expressions[0])

    // sem operador

    if (expressions.length === 1) {
      return currentType
    }

    for (let i = 1; i < expressions.length; i++) {
      const rightType = this.visit(expressions[i])

      if (!this.isBoolean(currentType) || !this.isBoolean(rightType)) {
        this.addError(ctx, 'Operador lógico exige boolean', 'Error')

        return 'unknown'
      }
    }

    return 'boolean'
  }

  // =====================
  // ||
  // =====================

  visitCalculo_logico_ou(ctx: Calculo_logico_ouContext): VarType {
    const expressions = ctx.calculo_logico_e()

    const currentType = this.visit(expressions[0])

    // sem operador

    if (expressions.length === 1) {
      return currentType
    }

    for (let i = 1; i < expressions.length; i++) {
      const rightType = this.visit(expressions[i])

      if (!this.isBoolean(currentType) || !this.isBoolean(rightType)) {
        this.addError(ctx, 'Operador lógico exige boolean', 'Error')

        return 'unknown'
      }
    }

    return 'boolean'
  }

  // =====================
  // ARRAY
  // =====================

  visitArray(): VarType {
    return 'array'
  }
}
