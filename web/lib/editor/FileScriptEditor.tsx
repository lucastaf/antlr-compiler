/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import type { VariableDeclare, CompileError } from "../../../shared/types";
import { trpcClient } from "../../services/api";
import SymbolTable from "../symbolsTable/symbolsTable";
import { registerFileScriptLanguage } from "./FileScriptLanguage";

const errorsSeverity: Record<
  CompileError["severity"],
  { monaco: monaco.MarkerSeverity; className: string }
> = {
  Error: { monaco: monaco.MarkerSeverity.Error, className: "bg-red-500" },
  Warning: {
    monaco: monaco.MarkerSeverity.Warning,
    className: "bg-yellow-500",
  },
};
export default function CodeEditor() {
  const [codeText, setCodeText] = useState<string>("");
  const [errors, setErrors] = useState<CompileError[] | null>();
  const [symbols, setSymbols] = useState<VariableDeclare[] | null>();
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
        const model = editorRef?.current?.getModel();
        const monaco = monacoRef.current;
        const markers: monaco.editor.IMarkerData[] = res?.errors?.map(
          (err: any) => ({
            startLineNumber: err.line,
            startColumn: err.column + 1,
            endLineNumber: err.line,
            endColumn: err.column + 2,
            message: err.message,
            severity: errorsSeverity[err.severity].monaco,
          }),
        );

        setSymbols(res.variables);
        if (!res?.errors?.length) {
          toast.success("Código compilado sem erros");
          setErrors(null);
        } else {
          toast.error("Erros de compilação encontrados");
          setErrors(res.errors as CompileError[]);
        }
        console.log(markers);
        monaco?.editor.setModelMarkers(model!, "test-owner", markers);
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
        <div>
          {errors.map((error, index) => (
            <div
              className={`text-white text-left my-1 ${errorsSeverity[error.severity].className}`}
              key={index}
            >
              {error.message}, {error.severity} in {error.line}:{error.column}
            </div>
          ))}
        </div>
      )}
      {symbols && <SymbolTable variables={symbols} />}
    </div>
  );
}
