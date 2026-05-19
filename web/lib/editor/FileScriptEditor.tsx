import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { useEffect, useRef } from "react";
import { registerFileScriptLanguage } from "./FileScriptLanguage";

interface Props {
  content: string;
  onContentChange: (content: string) => void;
  /** Called after each compile — passes refs so App can set markers */
  onEditorMount: (
    editor: monaco.editor.IStandaloneCodeEditor,
    monacoInstance: typeof monaco,
  ) => void;
}

export default function CodeEditor({
  content,
  onContentChange,
  onEditorMount,
}: Props) {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  // Sync external content changes (file switch) into Monaco without
  // triggering onContentChange, which would cause an update loop.
  useEffect(() => {
    const editor = editorRef.current;
    if (!editor) return;
    const current = editor.getValue();
    if (current !== content) {
      editor.setValue(content);
    }
  }, [content]);

  return (
    <Editor
      height="100%"
      language="filescript"
      defaultValue={content}
      theme="vs-dark"
      options={{
        padding: { top: 8, bottom: 8 },
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "ui-monospace, Consolas, 'Courier New', monospace",
        renderLineHighlight: "gutter",
        overviewRulerBorder: false,
      }}
      beforeMount={(monacoInstance) => {
        registerFileScriptLanguage(monacoInstance);
      }}
      onMount={(editor, monacoInstance) => {
        editorRef.current = editor;
        onEditorMount(editor, monacoInstance);
      }}
      onChange={(value) => onContentChange(value ?? "")}
    />
  );
}
