import type { CompileError, VariableDeclare } from '@antlr-compiler/shared/types'
import { AlertCircle, AlertTriangle, Play } from 'lucide-react'
import type * as monaco from 'monaco-editor'
import { useRef, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import FSLOGO from '../public/favicon.svg'
import { trpcClient } from '../services/api'
import CodeEditor from './components/file-script-editor'
import FileSidebar from './components/file-sidebar'
import SymbolTable from './components/symbols-table'
import WorkspaceMenu from './components/workspace-menu'
import { useFileStorage } from './hooks/useFileStorage'

const DEBOUNCE_MS = 500

export default function App() {
  const {
    files,
    activeId,
    activeFile,
    createFile,
    deleteFile,
    renameFile,
    updateContent,
    setActiveFileId,
    importFiles,
  } = useFileStorage()

  const [errors, setErrors] = useState<CompileError[] | null>(null)
  const [symbols, setSymbols] = useState<VariableDeclare[] | null>(null)
  const [isCompiling, setIsCompiling] = useState(false)

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const monacoRef = useRef<typeof monaco | null>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Always points to the latest handleCompile — used by Monaco keybinding and
  // the debounce timer to avoid stale closures after file switches.
  const compileRef = useRef<() => void>(() => {})

  function clearMarkers() {
    const editor = editorRef.current
    const monacoInstance = monacoRef.current
    if (editor && monacoInstance) {
      monacoInstance.editor.setModelMarkers(editor.getModel()!, 'filescript', [])
    }
  }

  function cancelDebounce() {
    if (debounceRef.current !== null) {
      clearTimeout(debounceRef.current)
      debounceRef.current = null
    }
  }

  function handleSelectFile(id: string) {
    cancelDebounce()
    setActiveFileId(id)
    setErrors(null)
    setSymbols(null)
    clearMarkers()
  }

  function handleEditorMount(editor: monaco.editor.IStandaloneCodeEditor, monacoInstance: typeof monaco) {
    editorRef.current = editor
    monacoRef.current = monacoInstance

    // Ctrl+Enter (Windows/Linux) / Cmd+Enter (macOS) → compile immediately
    editor.addCommand(monacoInstance.KeyMod.CtrlCmd | monacoInstance.KeyCode.Enter, () => {
      cancelDebounce()
      compileRef.current()
    })
  }

  function handleCompile() {
    if (!activeFile) return
    setIsCompiling(true)

    trpcClient.compileFScriptCode
      .mutate({ code: activeFile.content })
      .then((res) => {
        const editor = editorRef.current
        const monacoInstance = monacoRef.current

        if (editor && monacoInstance) {
          const markers: monaco.editor.IMarkerData[] = res.errors.map((err) => ({
            startLineNumber: err.line,
            startColumn: err.column + 1,
            endLineNumber: err.line,
            endColumn: err.column + 2,
            message: err.message,
            severity:
              err.severity === 'Error' ? monacoInstance.MarkerSeverity.Error : monacoInstance.MarkerSeverity.Warning,
          }))
          monacoInstance.editor.setModelMarkers(editor.getModel()!, 'filescript', markers)
        }

        setSymbols(res.variables as VariableDeclare[])

        const hasErrors = res.errors.some((e) => e.severity === 'Error')
        const hasWarnings = res.errors.some((e) => e.severity === 'Warning')

        if (!res.errors.length) {
          toast.success('Compilado com sucesso')
          setErrors(null)
        } else if (!hasErrors && hasWarnings) {
          toast('Compilado com avisos', {
            icon: '⚠️',
            style: {
              background: '#2d2d2d',
              color: '#cca710',
              fontSize: '13px',
            },
          })
          setErrors(res.errors as CompileError[])
        } else {
          toast.error('Erros de compilação encontrados')
          setErrors(res.errors as CompileError[])
        }
      })
      .catch(() => {
        toast.error('Não foi possível conectar ao compilador')
      })
      .finally(() => {
        setIsCompiling(false)
      })
  }

  // Keep the ref current on every render so Monaco's keybinding and the
  // debounce timer always call the latest version (with up-to-date activeFile).
  compileRef.current = handleCompile

  function handleContentChange(content: string) {
    if (activeFile) {
      updateContent(activeFile.id, content)
    }
    // Debounce: reset the timer on every keystroke
    cancelDebounce()
    debounceRef.current = setTimeout(() => compileRef.current(), DEBOUNCE_MS)
  }

  const errorCount = errors?.length ?? 0

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-[#1e1e1e]">
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#2d2d2d',
            color: '#d4d4d4',
            border: '1px solid #3c3c3c',
            fontSize: '13px',
          },
        }}
      />

      {/* Title bar */}
      <header className="shrink-0 h-9 bg-[#323233] border-b border-[#3c3c3c] flex items-center px-3 gap-2 select-none">
        <img src={FSLOGO} width={18} height={18} alt="FileScript logo" />
        <span className="text-sm text-[#cccccc] font-medium">FileScript</span>
        <div className="ml-auto">
          <WorkspaceMenu files={files} onImport={importFiles} />
        </div>
      </header>

      {/* Three-column body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        <FileSidebar
          files={files}
          activeId={activeId}
          onSelect={handleSelectFile}
          onCreate={createFile}
          onDelete={deleteFile}
          onRename={renameFile}
        />

        {/* Center column: toolbar + editor + problems */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Editor toolbar */}
          <div className="shrink-0 h-9 bg-[#2d2d2d] border-b border-[#3c3c3c] flex items-center justify-between px-3">
            <span className="text-xs text-[#858585] select-none font-mono">{activeFile?.name ?? ''}</span>
            <button
              type="button"
              onClick={() => {
                cancelDebounce()
                handleCompile()
              }}
              disabled={isCompiling}
              title="Executar (Ctrl+Enter)"
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded
                         bg-[#0e639c] hover:bg-[#1177bb] disabled:opacity-50
                         text-white cursor-pointer disabled:cursor-not-allowed transition-colors"
            >
              <Play size={12} />
              {isCompiling ? 'Executando…' : 'Executar'}
              <kbd className="ml-1 text-[10px] opacity-60 font-sans">Ctrl+↵</kbd>
            </button>
          </div>

          {/* Monaco editor — fills all remaining vertical space */}
          <div className="flex-1 overflow-hidden">
            <CodeEditor
              content={activeFile?.content ?? ''}
              onContentChange={handleContentChange}
              onEditorMount={handleEditorMount}
            />
          </div>

          {/* Problems panel — only shown when there are errors/warnings */}
          {errors && errors.length > 0 && (
            <div className="shrink-0 border-t border-[#3c3c3c] bg-[#1e1e1e]">
              <div className="px-3 py-1.5 flex items-center gap-1.5 border-b border-[#3c3c3c]">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#858585] select-none">
                  Problemas
                </span>
                <span className="text-[10px] text-[#858585]">({errorCount})</span>
              </div>
              <div className="overflow-y-auto max-h-36">
                {errors.map((err) => (
                  <div
                    key={`${err.line}-${err.column}-${err.type}`}
                    className="flex items-start gap-2 px-3 py-1.5 hover:bg-[#2a2d2e] transition-colors"
                  >
                    {err.severity === 'Error' ? (
                      <AlertCircle size={13} className="text-[#f14c4c] mt-0.5 shrink-0" />
                    ) : (
                      <AlertTriangle size={13} className="text-[#cca700] mt-0.5 shrink-0" />
                    )}
                    <span className="text-xs text-[#d4d4d4] flex-1 min-w-0">{err.message}</span>
                    <span className="text-xs text-[#858585] shrink-0 font-mono">
                      {err.line}:{err.column}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Right panel: symbol table */}
        <aside className="w-64 shrink-0 bg-[#252526] border-l border-[#3c3c3c] flex flex-col overflow-hidden">
          <SymbolTable variables={symbols} />
        </aside>
      </div>

      {/* Status bar */}
      <footer className="shrink-0 h-6 bg-[#007acc] flex items-center px-3 text-white text-[11px] select-none">
        {errorCount > 0 ? (
          <span className="flex items-center gap-1">
            <AlertCircle size={11} />
            {errorCount} problema{errorCount > 1 ? 's' : ''}
          </span>
        ) : (
          <span>Sem problemas</span>
        )}
        <span className="ml-auto opacity-80">FileScript</span>
      </footer>
    </div>
  )
}
