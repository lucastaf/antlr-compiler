import { AbstractParseTreeVisitor } from "antlr4ts/tree";

import type { expressaoVisitor } from "../../generated/fsCompiler/expressaoVisitor";
import type { ScopeManager } from "./ScopeManager";

import type { ParserRuleContext } from "antlr4ts";
import type { ErrorSeverity } from "../../../shared/types";
import {
    ArrayContext,
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
    ExpressaoContext,
    Lista_expressoesContext,
    Valor_calculoContext
} from "../../generated/fsCompiler/expressao";
import { ASTExpressionNode, ArrayLiteral, BinaryOperator, CharLiteral, NumberLiteral, StringLiteral, SymbolNode, UnaryOperator, UnknownExpressionNode, type VarType } from "./AstNode";

// ===================== VISITOR =====================

export class ExpressionTypeVisitor
    extends AbstractParseTreeVisitor<ASTExpressionNode>
    implements expressaoVisitor<ASTExpressionNode> {


    private scopes: ScopeManager

    constructor(
        scopes: ScopeManager,
        private readonly addError: (ctx: ParserRuleContext, message: string, severity: ErrorSeverity) => void
    ) {
        super();
        this.scopes = scopes;
    }

    protected defaultResult(): ASTExpressionNode {
        return new UnknownExpressionNode();
    }

    visitExpressao(
        ctx: ExpressaoContext
    ): ASTExpressionNode {

        return this.visit(
            ctx.calculo_logico_ou()!
        );
    }

    // =====================
    // HELPERS
    // =====================

    private isNumeric(type?: VarType) {

        return type === "number";
    }

    private isBoolean(type?: VarType) {

        return type === "boolean";
    }

    private isUnknown(type?: VarType) {

        return type === undefined || type === "unknown";
    }

    private buildBinaryChain(
        ctx: ParserRuleContext,
        operands: any[],
        operators: any[],
        resultType: VarType,
        validate: (left?: VarType, right?: VarType) => boolean,
        errorMessage: string
    ): ASTExpressionNode {

        if (operands.length === 0) {
            return new UnknownExpressionNode();
        }

        let current = this.visit(operands[0]);

        for (
            let i = 0;
            i < operators.length;
            i++
        ) {

            const rightNode = this.visit(operands[i + 1]);
            const operatorText = operators[i]?.text ?? operators[i]?.getText?.() ?? "";

            if (
                this.isUnknown(current.type) ||
                this.isUnknown(rightNode.type)
            ) {
                current = new BinaryOperator(current, operatorText, rightNode, "unknown");
                continue;
            }

            if (
                !validate(current.type, rightNode.type)
            ) {
                this.addError(
                    ctx,
                    errorMessage,
                    "Error"
                );

                current = new BinaryOperator(current, operatorText, rightNode, "unknown");
                continue;
            }

            current = new BinaryOperator(
                current,
                operatorText,
                rightNode,
                resultType
            );
        }

        return current;
    }

    // =====================
    // VALORES
    // =====================

    visitValor_calculo(
        ctx: Valor_calculoContext
    ) : ASTExpressionNode {

        if (ctx.NUMERICO()) {
            return new NumberLiteral(+ ctx.NUMERICO()!.text);
        }

        if (ctx.STRING()) {
            return new StringLiteral(ctx.STRING()!.text);
        }

        if (ctx.CHAR()) {
            return new CharLiteral(ctx.CHAR()!.text);
        }

        if (ctx.array()) {
            return this.visit(
                ctx.array()!
            );
        }

        if (ctx.VARIABLE()) {

            const name =
                ctx.VARIABLE()!.text;

            const symbol =
                this.scopes.resolve(name, ctx);

            if (!symbol) {
                this.addError(
                    ctx,
                    `Variável '${name}' não declarada`,
                    "Error"
                );

                return new UnknownExpressionNode();
            }

            return new SymbolNode(symbol);
        }

        return new UnknownExpressionNode();
    }

    // =====================
    // PARENTHESES
    // =====================

    visitCalculo_parenteses(
        ctx: Calculo_parentesesContext
    ): ASTExpressionNode {

        if (ctx.expressao()) {

            return this.visit(
                ctx.expressao()!
            );
        }

        return this.visit(
            ctx.valor_calculo()!
        );
    }

    // =====================
    // UNÁRIO
    // =====================

    visitCalculo_unario(
        ctx: Calculo_unarioContext
    ): ASTExpressionNode {

        if (
            ctx.calculo_unario()
        ) {

            const innerNode =
                this.visit(
                    ctx.calculo_unario()!
                );

            if (
                !this.isNumeric(innerNode.type)
            ) {

                this.addError(
                    ctx,
                    "Operador unário inválido",
                    "Error"
                );

                return new UnaryOperator("~", innerNode, "unknown");
            }

            return new UnaryOperator("~", innerNode, "number");
        }

        return this.visit(
            ctx.calculo_parenteses()!
        );
    }

    // =====================
    // *, /, %
    // =====================

    visitCalculo_prioridade_2(
        ctx: Calculo_prioridade_2Context
    ) : ASTExpressionNode {

        return this.buildBinaryChain(
            ctx,
            ctx.calculo_unario(),
            ctx.operador_prioridade_2(),
            "number",
            (left, right) => this.isNumeric(left) && this.isNumeric(right),
            "Operação aritmética inválida"
        );
    }

    // =====================
    // +, -
    // =====================

    visitCalculo_prioridade_1(
        ctx: Calculo_prioridade_1Context
    ): ASTExpressionNode {

        return this.buildBinaryChain(
            ctx,
            ctx.calculo_prioridade_2(),
            ctx.operador_prioridade_1(),
            "number",
            (left, right) => this.isNumeric(left) && this.isNumeric(right),
            "Operação aritmética inválida"
        );
    }

    // =====================
    // << >>
    // =====================

    visitCalculo_deslocamento(
        ctx: Calculo_deslocamentoContext
    ): ASTExpressionNode {

        return this.buildBinaryChain(
            ctx,
            ctx.calculo_prioridade_1(),
            ctx.operador_deslocamento(),
            "number",
            (left, right) => this.isNumeric(left) && this.isNumeric(right),
            "Shift exige números"
        );
    }

    // =====================
    // < <= > >=
    // =====================

    visitCalculo_relacional(
        ctx: Calculo_relacionalContext
    ): ASTExpressionNode {

        return this.buildBinaryChain(
            ctx,
            ctx.calculo_deslocamento(),
            ctx.operador_relacional(),
            "boolean",
            (left, right) => this.isNumeric(left) && this.isNumeric(right),
            "Operador relacional exige números"
        );
    }

    // =====================
    // == !=
    // =====================

    visitCalculo_igualdade(
        ctx: Calculo_igualdadeContext
    ): ASTExpressionNode {

        return this.buildBinaryChain(
            ctx,
            ctx.calculo_relacional(),
            ctx.operador_igualdade(),
            "boolean",
            (left, right) => left === right || left === "any" || right === "any",
            "Comparação entre tipos incompatíveis"
        );
    }

    // =====================
    // BITWISE &
    // =====================

    visitCalculo_bitwise_e(
        ctx: Calculo_bitwise_eContext
    ): ASTExpressionNode {

        return this.buildBinaryChain(
            ctx,
            ctx.calculo_igualdade(),
            ctx.BITWISE_AND(),
            "number",
            (left, right) => this.isNumeric(left) && this.isNumeric(right),
            "Operador bitwise exige números"
        );
    }

    // =====================
    // BITWISE ^
    // =====================

    visitCalculo_bitwise_xou(
        ctx: Calculo_bitwise_xouContext
    ): ASTExpressionNode {

        return this.buildBinaryChain(
            ctx,
            ctx.calculo_bitwise_e(),
            ctx.BITWISE_XOR(),
            "number",
            (left, right) => this.isNumeric(left) && this.isNumeric(right),
            "Operador bitwise exige números"
        );
    }

    // =====================
    // BITWISE |
    // =====================

    visitCalculo_bitwise_ou(
        ctx: Calculo_bitwise_ouContext
    ): ASTExpressionNode {

        return this.buildBinaryChain(
            ctx,
            ctx.calculo_bitwise_xou(),
            ctx.BITWISE_OR(),
            "number",
            (left, right) => this.isNumeric(left) && this.isNumeric(right),
            "Operador bitwise exige números"
        );
    }

    // =====================
    // &&
    // =====================

    visitCalculo_logico_e(
        ctx: Calculo_logico_eContext
    ): ASTExpressionNode {

        return this.buildBinaryChain(
            ctx,
            ctx.calculo_bitwise_ou(),
            ctx.LOGIC_AND(),
            "boolean",
            (left, right) => this.isBoolean(left) && this.isBoolean(right),
            "Operador lógico exige boolean"
        );
    }

    // =====================
    // ||
    // =====================

    visitCalculo_logico_ou(
        ctx: Calculo_logico_ouContext
    ): ASTExpressionNode {

        return this.buildBinaryChain(
            ctx,
            ctx.calculo_logico_e(),
            ctx.LOGIC_OR(),
            "boolean",
            (left, right) => this.isBoolean(left) && this.isBoolean(right),
            "Operador lógico exige boolean"
        );
    }

    // =====================
    // ARRAY
    // =====================

    visitArray(
        ctx: ArrayContext
    ): ASTExpressionNode {

        const elements =
            ctx.lista_expressoes()?.expressao().map(expression =>
                this.visit(expression)
            ) ?? [];

        return new ArrayLiteral(elements);
    }

    visitLista_expressoes(
        ctx: Lista_expressoesContext
    ): ASTExpressionNode {

        const elements =
            ctx.expressao().map(expression =>
                this.visit(expression)
            );

        return new ArrayLiteral(elements);
    }
}