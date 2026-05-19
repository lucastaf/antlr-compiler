import { FileCode, Plus, X } from "lucide-react";
import { useRef, useState } from "react";
import type { FileScriptFile } from "../../hooks/useFileStorage";

interface Props {
  files: FileScriptFile[];
  activeId: string;
  onSelect: (id: string) => void;
  onCreate: () => void;
  onDelete: (id: string) => void;
  onRename: (id: string, name: string) => void;
}

export default function FileSidebar({
  files,
  activeId,
  onSelect,
  onCreate,
  onDelete,
  onRename,
}: Props) {
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function startRename(file: FileScriptFile) {
    setRenamingId(file.id);
    setRenameValue(file.name);
    setTimeout(() => inputRef.current?.select(), 0);
  }

  function commitRename() {
    if (renamingId) {
      onRename(renamingId, renameValue);
    }
    setRenamingId(null);
  }

  function handleRenameKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") commitRename();
    if (e.key === "Escape") setRenamingId(null);
  }

  return (
    <aside className="w-52 shrink-0 flex flex-col overflow-hidden border-r border-[#3c3c3c] bg-[#252526]">
      {/* Header */}
      <div className="shrink-0 flex items-center justify-between px-3 h-9 border-b border-[#3c3c3c]">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#858585] select-none">
          Explorador
        </span>
        <button
          onClick={onCreate}
          title="Novo arquivo"
          className="text-[#858585] hover:text-[#d4d4d4] cursor-pointer transition-colors p-0.5 rounded"
        >
          <Plus size={15} />
        </button>
      </div>

      {/* File list */}
      <div className="flex-1 overflow-y-auto py-1">
        {files.map((file) => {
          const isActive = file.id === activeId;
          const isRenaming = renamingId === file.id;

          return (
            <div
              key={file.id}
              onClick={() => onSelect(file.id)}
              onDoubleClick={() => startRename(file)}
              className={`group relative flex items-center gap-1.5 px-2 py-1.5 cursor-pointer select-none
                ${
                  isActive
                    ? "bg-[#37373d] border-l-2 border-[#007acc] text-white"
                    : "border-l-2 border-transparent text-[#cccccc] hover:bg-[#2a2d2e]"
                }`}
            >
              <FileCode
                size={14}
                className={isActive ? "text-[#569cd6] shrink-0" : "text-[#858585] shrink-0"}
              />

              {isRenaming ? (
                <input
                  ref={inputRef}
                  value={renameValue}
                  onChange={(e) => setRenameValue(e.target.value)}
                  onBlur={commitRename}
                  onKeyDown={handleRenameKeyDown}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 min-w-0 bg-[#3c3c3c] text-[#d4d4d4] text-xs px-1 py-0.5 rounded outline-none border border-[#007acc]"
                  autoFocus
                />
              ) : (
                <span className="flex-1 min-w-0 text-xs truncate">{file.name}</span>
              )}

              {!isRenaming && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(file.id);
                  }}
                  title="Excluir arquivo"
                  className="opacity-0 group-hover:opacity-100 text-[#858585] hover:text-[#f14c4c] transition-all cursor-pointer rounded p-0.5 shrink-0"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer hint */}
      <div className="shrink-0 border-t border-[#3c3c3c] px-3 py-2">
        <button
          onClick={onCreate}
          className="w-full text-left text-xs text-[#858585] hover:text-[#d4d4d4] cursor-pointer transition-colors flex items-center gap-1.5"
        >
          <Plus size={12} />
          Novo arquivo
        </button>
      </div>
    </aside>
  );
}
