/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import * as monaco from "monaco-editor";
import { trpcClient } from "../../services/api";
import toast from "react-hot-toast";

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

        if (!res?.errors?.length) {
          toast.success("Código compilado sem erros");
        } else {
          toast.error("Erros de compilação encontrados");
        }
        console.log(markers);
        monaco.editor.setModelMarkers(model!, "test-owner", markers);
      });
  }

  return (
    <div className="w-full">
      <div className="p-1 flex justify-end">
        <button
          className="bg-blue-950 p-2 cursor-pointer"
          onClick={handleCompile}
        >
          Compilar
        </button>
      </div>
      <Editor
        height="500px"
        onChange={handleEditorChange}
        language="filescript"
        defaultValue={`var x = 10;`}
        onMount={(editor, monaco) => {
          editorRef.current = editor;
          monacoRef.current = monaco;
        }}
        theme="vs-dark"
      />
    </div>
  );
}
