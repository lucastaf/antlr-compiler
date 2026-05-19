import { ChevronDown, Download, FileCode, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import type { FileScriptFile } from "../../hooks/useFileStorage";

interface WorkspaceExport {
  version: number;
  exportedAt: string;
  files: Array<{ name: string; content: string }>;
}

interface ParsedFile {
  name: string;
  content: string;
}

interface Props {
  files: FileScriptFile[];
  onImport: (files: ParsedFile[]) => void;
}

export default function WorkspaceMenu({ files, onImport }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [importCandidates, setImportCandidates] = useState<ParsedFile[] | null>(null);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [importError, setImportError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Export ──────────────────────────────────────────────────────────────────

  function handleExport() {
    const data: WorkspaceExport = {
      version: 1,
      exportedAt: new Date().toISOString(),
      files: files.map((f) => ({ name: f.name, content: f.content })),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "filescript-workspace.json";
    a.click();
    URL.revokeObjectURL(url);
    setIsOpen(false);
  }

  // ── Import ───────────────────────────────────────────────────────────────

  function handleImportClick() {
    setIsOpen(false);
    fileInputRef.current?.click();
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    // Reset input so the same file can be re-selected
    e.target.value = "";

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target?.result as string) as WorkspaceExport;

        if (
          typeof parsed !== "object" ||
          parsed.version !== 1 ||
          !Array.isArray(parsed.files)
        ) {
          setImportError("Arquivo inválido. Exporte um workspace do FileScript primeiro.");
          setImportCandidates([]);
          return;
        }

        const candidates: ParsedFile[] = parsed.files.map((f) => ({
          name: String(f.name ?? "sem-nome.fs"),
          content: String(f.content ?? ""),
        }));

        setImportCandidates(candidates);
        setSelected(new Set(candidates.map((_, i) => i)));
        setImportError(null);
      } catch {
        setImportError("Não foi possível ler o arquivo. Verifique se é um JSON válido.");
        setImportCandidates([]);
      }
    };
    reader.readAsText(file);
  }

  function toggleOne(i: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  function toggleAll() {
    if (!importCandidates) return;
    if (selected.size === importCandidates.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(importCandidates.map((_, i) => i)));
    }
  }

  function handleConfirmImport() {
    if (!importCandidates) return;
    const toImport = importCandidates.filter((_, i) => selected.has(i));
    if (toImport.length > 0) onImport(toImport);
    setImportCandidates(null);
    setSelected(new Set());
  }

  function handleCancelImport() {
    setImportCandidates(null);
    setSelected(new Set());
    setImportError(null);
  }

  const allChecked =
    importCandidates !== null && selected.size === importCandidates.length;

  return (
    <>
      {/* ── Trigger button + dropdown ─────────────────────────────────────── */}
      <div className="relative">
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-[#cccccc]
                     hover:bg-[#3c3c3c] rounded transition-colors select-none cursor-pointer"
        >
          Workspace
          <ChevronDown
            size={12}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <>
            {/* Invisible backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            {/* Dropdown */}
            <div className="absolute right-0 top-full mt-1 z-20 bg-[#2d2d2d] border border-[#3c3c3c] rounded shadow-xl py-1 w-48">
              <button
                onClick={handleExport}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-[#cccccc]
                           hover:bg-[#3c3c3c] transition-colors cursor-pointer"
              >
                <Download size={13} className="text-[#858585]" />
                Exportar workspace
              </button>
              <button
                onClick={handleImportClick}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-[#cccccc]
                           hover:bg-[#3c3c3c] transition-colors cursor-pointer"
              >
                <Upload size={13} className="text-[#858585]" />
                Importar workspace
              </button>
            </div>
          </>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        className="hidden"
        onChange={handleFileSelect}
      />

      {/* ── Import modal ──────────────────────────────────────────────────── */}
      {importCandidates !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div
            className="bg-[#252526] border border-[#3c3c3c] rounded-lg shadow-2xl
                        w-[420px] max-h-[80vh] flex flex-col"
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#3c3c3c]">
              <div>
                <h2 className="text-sm font-medium text-[#d4d4d4]">
                  Importar workspace
                </h2>
                {importError ? null : (
                  <p className="text-[11px] text-[#858585] mt-0.5">
                    {importCandidates.length} arquivo
                    {importCandidates.length !== 1 ? "s" : ""} encontrado
                    {importCandidates.length !== 1 ? "s" : ""}
                  </p>
                )}
              </div>
              <button
                onClick={handleCancelImport}
                className="text-[#858585] hover:text-[#d4d4d4] transition-colors cursor-pointer p-1 rounded"
              >
                <X size={15} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">
              {importError ? (
                <div className="px-4 py-6 text-center">
                  <p className="text-xs text-[#f14c4c]">{importError}</p>
                </div>
              ) : importCandidates.length === 0 ? (
                <div className="px-4 py-6 text-center">
                  <p className="text-xs text-[#858585]">
                    Nenhum arquivo encontrado no workspace exportado.
                  </p>
                </div>
              ) : (
                <>
                  {/* Select all toggle */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#3c3c3c]">
                    <input
                      type="checkbox"
                      id="select-all"
                      checked={allChecked}
                      onChange={toggleAll}
                      className="accent-[#007acc] cursor-pointer"
                    />
                    <label
                      htmlFor="select-all"
                      className="text-xs text-[#858585] cursor-pointer select-none"
                    >
                      {allChecked ? "Desmarcar todos" : "Selecionar todos"}
                    </label>
                  </div>

                  {/* File list */}
                  {importCandidates.map((f, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#2a2d2e]
                                 transition-colors cursor-pointer border-b border-[#3c3c3c] last:border-0"
                    >
                      <input
                        type="checkbox"
                        checked={selected.has(i)}
                        onChange={() => toggleOne(i)}
                        className="accent-[#007acc] shrink-0 cursor-pointer"
                      />
                      <FileCode size={14} className="text-[#569cd6] shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-[#d4d4d4] truncate font-mono">
                          {f.name}
                        </p>
                        <p className="text-[11px] text-[#4e4e4e] mt-0.5">
                          {f.content.split("\n").length} linha
                          {f.content.split("\n").length !== 1 ? "s" : ""} ·{" "}
                          {f.content.length} caractere
                          {f.content.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </label>
                  ))}
                </>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-[#3c3c3c]">
              <button
                onClick={handleCancelImport}
                className="px-3 py-1.5 text-xs text-[#858585] hover:text-[#d4d4d4]
                           hover:bg-[#3c3c3c] rounded transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              {!importError && importCandidates.length > 0 && (
                <button
                  onClick={handleConfirmImport}
                  disabled={selected.size === 0}
                  className="px-3 py-1.5 text-xs font-medium rounded bg-[#0e639c]
                             hover:bg-[#1177bb] disabled:opacity-40 disabled:cursor-not-allowed
                             text-white transition-colors cursor-pointer"
                >
                  Importar ({selected.size})
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
