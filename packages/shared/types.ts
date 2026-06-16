export type ErrorSeverity = 'Error' | 'Warning'

export type CompileErrorType = 'LEXER' | 'PARSER' | 'SEMANTIC' | 'COMPILATION'

export interface CompileError {
  line: number
  column: number
  message: string
  severity: ErrorSeverity
  type: CompileErrorType
}

export interface TokenInfo {
  text: string
  type: number
  line: number
  column: number
}

export interface VariableDeclare {
  name: string
  type: string
  isConst: boolean
  start: number
  end: number
  scopeName: string
}

export interface CompileResult {
  tokens: TokenInfo[]
  parseTree: string
  errors: CompileError[]
  variables: VariableDeclare[]
  ASMcode: string
}
