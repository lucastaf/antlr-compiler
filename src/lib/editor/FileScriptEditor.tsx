/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import * as monaco from "monaco-editor";
import { trpcClient } from "../../services/api";

export default function CodeEditor() {
  const [codeText, setCodeText] = useState<string>("");
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<typeof monaco | null>(null);

  function handleEditorChange(value: string | undefined) {
    setCodeText(value || "");
  }

  function handleCompile() {
    trpcClient.compileFScriptCode
      .mutate({
        code: codeText,
      })
      .then((res) => {
        const model = editorRef.current.getModel();
        const monaco = monacoRef.current;
        const markers: monaco.editor.IMarkerData[] = res?.errors?.map(
          (err: any) => ({
            startLineNumber: err.line,
            startColumn: err.column + 1,
            endLineNumber: err.line,
            endColumn: err.column + 2,
            message: err.message,
            severity: monaco.MarkerSeverity.Error,
          }),
        );

        console.log(markers);
        monaco.editor.setModelMarkers(model!, "test-owner", markers);
      });
  }

  return (
    <div className="w-full">
      <button className="bg-blue-950 p-2" onClick={handleCompile}>
        Compilar
      </button>
      <Editor
        height="500px"
        onChange={handleEditorChange}
        language="filescript"
        defaultValue={`var x = 10;
        if x > 5 {
            return x;
            }`}
        onMount={(editor, monaco) => {
          editorRef.current = editor;
          monacoRef.current = monaco;
        }}
        theme="vs-dark"
      />
    </div>
  );
}
