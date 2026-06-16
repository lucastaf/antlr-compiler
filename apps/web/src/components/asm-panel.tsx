import { Check, Copy, Cpu } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'

// Stagger between consecutive changed lines entering, in ms.
const LINE_STAGGER_MS = 28

type Token = { text: string; cls: string }

const MNEMONICS = new Set([
  'ld',
  'ldi',
  'ldv',
  'sto',
  'stov',
  'add',
  'addi',
  'sub',
  'subi',
  'and',
  'or',
  'ori',
  'xor',
  'not',
  'sll',
  'srl',
  'jmp',
  'beq',
  'bne',
  'bgt',
  'blt',
  'ble',
  'bge',
  'call',
  'return',
  'hlt',
])

// Hand-rolled tokenizer for the assembly dialect emitted by CodeGenerator
// (see ASM_EXAMPLE.txt): directives (.data/.text), #comments, label: lines,
// "name : 0,0" data declarations, and "mnemonic operand operand" instructions.
function tokenizeAsmLine(line: string): Token[] {
  const trimmed = line.trim()
  if (!trimmed) return [{ text: line || ' ', cls: '' }]

  if (trimmed.startsWith('#')) return [{ text: line, cls: 'text-[#6a9955]' }]
  if (trimmed === '.data' || trimmed === '.text') return [{ text: line, cls: 'text-[#c586c0]' }]

  const indent = line.slice(0, line.length - trimmed.length)

  const labelMatch = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*):$/)
  if (labelMatch) {
    return [
      { text: indent, cls: '' },
      { text: labelMatch[1], cls: 'text-[#dcdcaa]' },
      { text: ':', cls: 'text-[#858585]' },
    ]
  }

  const dataMatch = trimmed.match(/^([A-Za-z_$][A-Za-z0-9_]*)(\s*)(:)(\s*)([0-9,\s]+)$/)
  if (dataMatch) {
    const [, name, gap1, colon, gap2, values] = dataMatch
    return [
      { text: indent, cls: '' },
      { text: name, cls: 'text-[#9cdcfe]' },
      { text: gap1, cls: '' },
      { text: colon, cls: 'text-[#858585]' },
      { text: gap2, cls: '' },
      { text: values, cls: 'text-[#b5cea8]' },
    ]
  }

  const instrMatch = trimmed.match(/^(\S+)(\s*)([\s\S]*)$/)
  if (instrMatch) {
    const [, mnemonic, gap, rest] = instrMatch
    const tokens: Token[] = [
      { text: indent, cls: '' },
      { text: mnemonic, cls: MNEMONICS.has(mnemonic.toLowerCase()) ? 'text-[#569cd6]' : 'text-[#d4d4d4]' },
      { text: gap, cls: '' },
    ]

    const operandRegex = /(\$[A-Za-z_][A-Za-z0-9_]*|\d+|[A-Za-z_][A-Za-z0-9_]*|\s+|[^\sA-Za-z0-9_$]+)/g
    for (const match of rest.matchAll(operandRegex)) {
      const piece = match[0]
      if (piece.startsWith('$')) tokens.push({ text: piece, cls: 'text-[#4ec9b0]' })
      else if (/^\d+$/.test(piece)) tokens.push({ text: piece, cls: 'text-[#b5cea8]' })
      else if (/^[A-Za-z_]/.test(piece)) tokens.push({ text: piece, cls: 'text-[#9cdcfe]' })
      else tokens.push({ text: piece, cls: '' })
    }
    return tokens
  }

  return [{ text: line, cls: 'text-[#d4d4d4]' }]
}

function AsmLine({ text, animate, delayMs }: { text: string; animate: boolean; delayMs: number }) {
  return (
    <div
      className={animate ? 'asm-line-enter' : undefined}
      style={animate ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {tokenizeAsmLine(text).map((token, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: tokens are positional and never reordered within a line
        <span key={i} className={token.cls}>
          {token.text}
        </span>
      ))}
    </div>
  )
}

// Splits old/new ASM into the unchanged lines before and after the edit, plus
// the changed lines in between — so re-compiling only animates what moved.
function diffLines(oldCode: string | null, newCode: string) {
  const oldLines = oldCode?.split('\n') ?? []
  const newLines = newCode.split('\n')

  let prefixLen = 0
  while (prefixLen < oldLines.length && prefixLen < newLines.length && oldLines[prefixLen] === newLines[prefixLen]) {
    prefixLen++
  }

  let suffixLen = 0
  const maxSuffix = Math.min(oldLines.length, newLines.length) - prefixLen
  while (
    suffixLen < maxSuffix &&
    oldLines[oldLines.length - 1 - suffixLen] === newLines[newLines.length - 1 - suffixLen]
  ) {
    suffixLen++
  }

  return {
    prefix: newLines.slice(0, prefixLen),
    changed: newLines.slice(prefixLen, newLines.length - suffixLen),
    suffix: suffixLen > 0 ? newLines.slice(newLines.length - suffixLen) : [],
  }
}

export default function AsmPanel(props: { code: string | null | undefined }) {
  const { code } = props
  const isEmpty = !code
  const [copied, setCopied] = useState(false)
  const previousCodeRef = useRef<string | null>(null)
  const [diff, setDiff] = useState<{ prefix: string[]; changed: string[]; suffix: string[] }>({
    prefix: [],
    changed: [],
    suffix: [],
  })

  useEffect(() => {
    if (!code) {
      previousCodeRef.current = null
      setDiff({ prefix: [], changed: [], suffix: [] })
      return
    }

    if (code === previousCodeRef.current) return

    setDiff(diffLines(previousCodeRef.current, code))
    previousCodeRef.current = code
  }, [code])

  async function handleCopy() {
    if (!code) return

    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      toast.success('ASM copiado')
      setTimeout(() => setCopied(false), 1500)
    } catch {
      toast.error('Não foi possível copiar o ASM')
    }
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Panel header */}
      <div className="shrink-0 flex items-center gap-1.5 px-3 h-9 border-b border-[#3c3c3c]">
        <Cpu size={12} className="text-[#858585]" />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#858585] select-none">ASM</span>
        {!isEmpty && (
          <button
            type="button"
            onClick={handleCopy}
            title="Copiar ASM"
            className="ml-auto flex items-center justify-center w-5 h-5 rounded text-[#858585]
                       hover:bg-[#3c3c3c] hover:text-[#d4d4d4] cursor-pointer transition-colors"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
          </button>
        )}
      </div>

      {isEmpty ? (
        /* Empty state */
        <div className="flex-1 flex flex-col items-center justify-center gap-2 px-4 text-center">
          <Cpu size={28} strokeWidth={1} className="text-[#3c3c3c]" />
          <p className="text-xs text-[#858585]">Nenhum código gerado</p>
          <p className="text-[11px] text-[#4e4e4e] leading-relaxed">Execute o código para gerar o assembly</p>
        </div>
      ) : (
        /* ASM output — only the lines that changed since the last compile fade in */
        <div className="flex-1 overflow-auto p-2 font-mono text-xs leading-relaxed">
          {/* biome-ignore-start lint/suspicious/noArrayIndexKey: lines are positional and re-diffed as a whole on every compile */}
          {diff.prefix.map((line, i) => (
            <AsmLine key={`prefix-${i}`} text={line} animate={false} delayMs={0} />
          ))}
          {diff.changed.map((line, i) => (
            <AsmLine key={`changed-${i}`} text={line} animate delayMs={i * LINE_STAGGER_MS} />
          ))}
          {diff.suffix.map((line, i) => (
            <AsmLine key={`suffix-${i}`} text={line} animate={false} delayMs={0} />
          ))}
          {/* biome-ignore-end lint/suspicious/noArrayIndexKey: lines are positional and re-diffed as a whole on every compile */}
        </div>
      )}
    </div>
  )
}
