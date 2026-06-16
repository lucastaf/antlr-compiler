import type { VariableDeclare } from '@antlr-compiler/shared/types'
import { Variable } from 'lucide-react'

export default function SymbolTable(props: { variables: VariableDeclare[] | null | undefined }) {
  const { variables } = props
  const isEmpty = !variables || variables.length === 0

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Panel header */}
      <div className="shrink-0 flex items-center gap-1.5 px-3 h-9 border-b border-[#3c3c3c]">
        <Variable size={12} className="text-[#858585]" />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#858585] select-none">Símbolos</span>
        {!isEmpty && <span className="ml-auto text-[10px] text-[#858585]">{variables.length}</span>}
      </div>

      {isEmpty ? (
        /* Empty state */
        <div className="flex-1 flex flex-col items-center justify-center gap-2 px-4 text-center">
          <Variable size={28} strokeWidth={1} className="text-[#3c3c3c]" />
          <p className="text-xs text-[#858585]">Nenhum símbolo</p>
          <p className="text-[11px] text-[#4e4e4e] leading-relaxed">Execute o código para inspecionar as variáveis</p>
        </div>
      ) : (
        /* Symbol cards */
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {variables.map((v) => (
            <div
              key={`${v.name}-${v.type}-${v.start}-${v.end}`}
              className="px-2.5 py-2 rounded bg-[#2d2d2d] border border-[#3c3c3c]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-mono text-[#d4d4d4] truncate">{v.name}</span>
                {v.isConst ? (
                  <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-[#1e1e1e] text-[#569cd6] font-mono border border-[#3c3c3c]">
                    const
                  </span>
                ) : (
                  <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-[#1e1e1e] text-[#858585] font-mono border border-[#3c3c3c]">
                    let
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-[#4ec9b0] font-mono">{v.type}</span>
                <span className="text-xs text-[#626262]">·</span>
                <span className="text-xs text-[#a7a7a7]">
                  {v.scopeName} ({v.start}–{v.end})
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
