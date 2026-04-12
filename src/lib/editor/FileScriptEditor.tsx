/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import * as monaco from "monaco-editor";
import { trpcClient } from "../../services/api";
import toast from "react-hot-toast";
import { registerFileScriptLanguage } from "./FileScriptLanguage";
import type { CompileError } from "../../../shared/types";

export default function CodeEditor() {
  const [codeText, setCodeText] = useState<string>("");
  const [errors, setErrors] = useState<CompileError[]>();
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
          setErrors(null);
        } else {
          toast.error("Erros de compilação encontrados");
          setErrors(res.errors as CompileError[]);
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
        options={{
          padding: {
            top: 8,
            bottom: 8,
          },
        }}
        height="500px"
        onChange={handleEditorChange}
        language="filescript"
        defaultValue={`var x = 10;`}
        beforeMount={(monaco) => {
          registerFileScriptLanguage(monaco);
        }}
        onMount={(editor, monaco) => {
          editorRef.current = editor;
          monacoRef.current = monaco;
        }}
        theme="vs-dark"
      />
      {errors && (
        <div className="bg-red-500 ">
          {errors.map((error, index) => (
            <div className="text-white text-left my-1" key={index}>
              {error.message}, Error in {error.line}:{error.column}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
