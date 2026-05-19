import { useState } from "react";

export interface FileScriptFile {
  id: string;
  name: string;
  content: string;
}

const FILES_KEY = "filescript_files";
const ACTIVE_KEY = "filescript_active";

function generateId(): string {
  return crypto.randomUUID();
}

function loadFiles(): FileScriptFile[] {
  try {
    const raw = localStorage.getItem(FILES_KEY);
    return raw ? (JSON.parse(raw) as FileScriptFile[]) : [];
  } catch {
    return [];
  }
}

function persistFiles(files: FileScriptFile[]): void {
  localStorage.setItem(FILES_KEY, JSON.stringify(files));
}

const DEFAULT_FILE: FileScriptFile = {
  id: generateId(),
  name: "main.fs",
  content: "var x = 10;\n",
};

function getInitialFiles(): FileScriptFile[] {
  const stored = loadFiles();
  if (stored.length > 0) return stored;
  persistFiles([DEFAULT_FILE]);
  return [DEFAULT_FILE];
}

function getInitialActiveId(files: FileScriptFile[]): string {
  const saved = localStorage.getItem(ACTIVE_KEY);
  if (saved && files.find((f) => f.id === saved)) return saved;
  return files[0].id;
}

export function useFileStorage() {
  const [files, setFiles] = useState<FileScriptFile[]>(getInitialFiles);
  const [activeId, setActiveIdState] = useState<string>(() =>
    getInitialActiveId(getInitialFiles()),
  );

  const activeFile = files.find((f) => f.id === activeId) ?? files[0];

  function setActiveFileId(id: string) {
    setActiveIdState(id);
    localStorage.setItem(ACTIVE_KEY, id);
  }

  function createFile() {
    const newFile: FileScriptFile = {
      id: generateId(),
      name: `untitled-${files.length + 1}.fs`,
      content: "",
    };
    const updated = [...files, newFile];
    setFiles(updated);
    persistFiles(updated);
    setActiveFileId(newFile.id);
  }

  function deleteFile(id: string) {
    const updated = files.filter((f) => f.id !== id);

    if (updated.length === 0) {
      const fallback: FileScriptFile = {
        id: generateId(),
        name: "main.fs",
        content: "",
      };
      setFiles([fallback]);
      persistFiles([fallback]);
      setActiveFileId(fallback.id);
      return;
    }

    setFiles(updated);
    persistFiles(updated);

    if (id === activeId) {
      setActiveFileId(updated[0].id);
    }
  }

  function renameFile(id: string, name: string) {
    const trimmed = name.trim();
    if (!trimmed) return;
    const updated = files.map((f) => (f.id === id ? { ...f, name: trimmed } : f));
    setFiles(updated);
    persistFiles(updated);
  }

  function updateContent(id: string, content: string) {
    const updated = files.map((f) => (f.id === id ? { ...f, content } : f));
    setFiles(updated);
    persistFiles(updated);
  }

  function importFiles(incoming: Array<{ name: string; content: string }>) {
    const toAdd: FileScriptFile[] = incoming.map((f) => ({
      id: generateId(),
      name: f.name,
      content: f.content,
    }));
    const updated = [...files, ...toAdd];
    setFiles(updated);
    persistFiles(updated);
    if (toAdd.length > 0) {
      setActiveFileId(toAdd[0].id);
    }
  }

  return {
    files,
    activeId,
    activeFile,
    createFile,
    deleteFile,
    renameFile,
    updateContent,
    setActiveFileId,
    importFiles,
  };
}
