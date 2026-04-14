/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import * as monaco from "monaco-editor";
import { trpcClient } from "../../services/api";
import toast from "react-hot-toast";
import { registerFileScriptLanguage } from "./FileScriptLanguage";
import type { CompileError, ProgramTreeRuleNode } from "../../../shared/types";
import { ParseTreeGraph } from "../parseTree/ParseTreeGraph";

export default function CodeEditor() {
  const [codeText, setCodeText] = useState<string>("");
  const [errors, setErrors] = useState<CompileError[]>();
  const [programTree, setProgramTree] = useState<ProgramTreeRuleNode | null>(
    null,
  );
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
        const model = editorRef.current?.getModel();
        const monacoApi = monacoRef.current;
        const markers: monaco.editor.IMarkerData[] =
          res?.errors?.map((err: any) => ({
            startLineNumber: err.line,
            startColumn: err.column + 1,
            endLineNumber: err.line,
            endColumn: err.column + 2,
            message: err.message,
            severity: monaco.MarkerSeverity.Error,
          })) ?? [];

        if (res?.programTree) {
          setProgramTree(res.programTree);
        }

        if (!res?.errors?.length) {
          toast.success("Código compilado sem erros");
          setErrors(null);
        } else {
          toast.error("Erros de compilação encontrados");
          setErrors(res.errors as CompileError[]);
        }
        if (model && monacoApi) {
          monacoApi.editor.setModelMarkers(model, "test-owner", markers);
        }
      });
  }

  return (
    <div className="w-full">
      <div className="p-1 flex justify-end">
        <button
          className="bg-blue-950 p-2 cursor-pointer rounded text-white text-sm font-medium hover:bg-blue-900"
          onClick={handleCompile}
        >
          Compilar
        </button>
      </div>
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:gap-6">
        <div className="min-w-0 flex-1">
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
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          <h2 className="text-sm font-semibold tracking-wide text-slate-600 uppercase">
            Parse tree
          </h2>
          {programTree ? (
            <ParseTreeGraph root={programTree} />
          ) : (
            <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50/80 px-4 text-center text-sm text-slate-500">
              Compile to visualize the parse tree.
            </div>
          )}
        </div>
      </div>
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
