import { AbstractParseTreeVisitor } from "antlr4ts/tree";

import type { expressaoVisitor } from "../../generated/fsCompiler/expressaoVisitor";
import { type ParserRuleContext } from "antlr4ts";
import type { ErrorSeverity } from "../../../shared/types";
import {
    Array_accessContext,
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
    Function_callContext,
    Lista_expressoesContext,
    Valor_calculoContext
} from "../../generated/fsCompiler/expressao";
import { ArrayAccessExpression, ArrayExpression, ASTExpressionNode, CharLiteral, isLogicExpression, isMathOperator, LogicOperation, MathOperation, NumberLiteral, PrintNode, ReadNode, StringLiteral, SymbolNode, UnaryOperator, UnknownExpressionNode, type VarType } from "../abstractSyntaxTree/AstExpressionNode";
import { ScopeManager } from "./ScopeManager";

// ===================== VISITOR =====================

export class ExpressionTypeVisitor
    extends AbstractParseTreeVisitor<ASTExpressionNode>
    implements expressaoVisitor<ASTExpressionNode> {


    private scopes: ScopeManager

    constructor(
        scopes: ScopeManager,
        private readonly addError: (ctx: ParserRuleContext, message: string, severity: ErrorSeverity) => void,
    ) {
        super();
        this.scopes = scopes;
    }

    protected defaultResult(): ASTExpressionNode {
        return new UnknownExpressionNode(undefined);
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

    private getMathOperation(left: ASTExpressionNode, operator: string, right: ASTExpressionNode, ctx: ParserRuleContext): ASTExpressionNode {
        if (isMathOperator(operator)) {
            return new MathOperation(left, operator, right, ctx);
        }
        if (isLogicExpression(operator)) {
            return new LogicOperation(left, operator, right, this.scopes.getNextLabel(), ctx);
        }

        return new UnknownExpressionNode(ctx);
    }

    private buildBinaryChain(
        ctx: ParserRuleContext,
        operands: any[],
        operators: any[],
        validate: (left?: VarType, right?: VarType) => boolean,
        errorMessage: string
    ): ASTExpressionNode {

        if (operands.length === 0) {
            return new UnknownExpressionNode(ctx);
        }

        let current = this.visit(operands[0]);

        for (
            let i = 0;
            i < operators.length;
            i++
        ) {

            const rightNode = this.visit(operands[i + 1]);
            const operatorText: string = operators[i]?.text ?? operators[i]?.getText?.() ?? "";

            if (
                this.isUnknown(current.type) ||
                this.isUnknown(rightNode.type)
            ) {
                current = this.getMathOperation(current, operatorText, rightNode, ctx);
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

                current = this.getMathOperation(current, operatorText, rightNode, ctx);
                continue;
            }

            current = this.getMathOperation(
                current,
                operatorText,
                rightNode, ctx
            );
        }

        return current;
    }

    // =====================
    // VALORES
    // =====================

    visitValor_calculo(
        ctx: Valor_calculoContext
    ): ASTExpressionNode {

        if (ctx.NUMERICO()) {
            return new NumberLiteral(+ ctx.NUMERICO()!.text, ctx);
        }

        if (ctx.STRING()) {
            return new StringLiteral(ctx.STRING()!.text, ctx);
        }

        if (ctx.CHAR()) {
            return new CharLiteral(ctx.CHAR()!.text, ctx);
        }

        if (ctx.function_call()) {
            return this.visit(ctx.function_call()!);
        }

        if (ctx.array_access()) {
            return this.visit(ctx.array_access()!);
        }

        if (ctx.array()) {
            return this.visit(ctx.array()!);
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

                return new UnknownExpressionNode(ctx);
            }

            return new SymbolNode(symbol, ctx);
        }

        return new UnknownExpressionNode(ctx);
    }

    visitFunction_call(ctx: Function_callContext) {
        const functionName = ctx.VARIABLE().text;
        if (functionName == "read") {
            return new ReadNode(ctx);
        } else if (functionName == "print") {
            const firstParameter = ctx.lista_expressoes?.()?.expressao()?.at(0);
            if (!firstParameter) {
                return new UnknownExpressionNode(ctx);
            } else {
                return new PrintNode(this.visit(firstParameter), ctx);
            }
        } else {
            const symbol = this.scopes.resolve(functionName, ctx);
            if (symbol && symbol?.type != "function") this.addError(ctx, `${functionName} não é uma função`, "Warning")
            return new UnknownExpressionNode(ctx);
        }
    };

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

                return new UnaryOperator("~", innerNode, "unknown", ctx);
            }

            return new UnaryOperator("~", innerNode, "number", ctx);
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
    ): ASTExpressionNode {

        return this.buildBinaryChain(
            ctx,
            ctx.calculo_unario(),
            ctx.operador_prioridade_2(),
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
            ctx.operador_igualdade(), (left, right) => left === right || left === "any" || right === "any",
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
            ctx.BITWISE_AND(), (left, right) => this.isNumeric(left) && this.isNumeric(right),
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
            ctx.BITWISE_XOR(), (left, right) => this.isNumeric(left) && this.isNumeric(right),
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
            ctx.BITWISE_OR(), (left, right) => this.isNumeric(left) && this.isNumeric(right),
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
            ctx.LOGIC_AND(), (left, right) => this.isBoolean(left) && this.isBoolean(right),
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
            ctx.LOGIC_OR(), (left, right) => this.isBoolean(left) && this.isBoolean(right),
            "Operador lógico exige boolean"
        );
    }

    // =====================
    // ARRAY
    // =====================

    visitArray_access(ctx: Array_accessContext) {
        const symbolName = ctx.VARIABLE().text;
        const symbol = this.scopes.resolve(symbolName, ctx);
        const indexEXP = this.visit(ctx.expressao());

        if (!symbol) {
            return new UnknownExpressionNode(ctx);
        }
        if (symbol.type != "array") {
            this.addError(ctx, `Não é possível acessar os elementos de ${symbol.name} pois a variavel não é uma array`, "Error")
            return new UnknownExpressionNode(ctx);
        }

        return new ArrayAccessExpression(symbol, indexEXP, ctx);
    };

    visitArray(ctx: ArrayContext) {
        const expressions =
            ctx.lista_expressoes()?.expressao().map(expression =>
                this.visit(expression)
            ) ?? [];
        console.log("EXPRESSAO")
        console.log(expressions.length)
        return new ArrayExpression(expressions, ctx);
    };

    //TODO - MUDAR O RETORNO DA LISTA DE EXPRESSOES QUANDO FOR IMPLEMENTAR FUNCTION CALL
    visitLista_expressoes(
        ctx: Lista_expressoesContext
    ): ASTExpressionNode {

        return new UnknownExpressionNode(ctx);
    }
}