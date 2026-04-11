import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as monaco from "monaco-editor";
import { registerFileScriptLanguage } from "./FileScriptLanguage";
import { trpcClient } from "../../services/api";

export default function CodeEditor() {
  const [codeText, setCodeText] = useState<string>("");
  function handleBeforeMount(monacoInstance: typeof monaco) {
    registerFileScriptLanguage();
  }

  function handleEditorChange(value: string | undefined) {
    setCodeText(value || "");
  }

  function handleCompile() {
    const tree = trpcClient.compileFScriptCode.mutate({
      code: "",
    });
    console.log(tree);

    // // converte erros → markers do Monaco
    // const markers: monaco.editor.IMarkerData[] = errors.map((err) => ({
    //   startLineNumber: err.line,
    //   startColumn: err.column + 1,
    //   endLineNumber: err.line,
    //   endColumn: err.column + 2,
    //   message: err.message,
    //   severity: monaco.MarkerSeverity.Error,
    // }));

    // // aplica no editor
    // monaco.editor.setModelMarkers(model, "antlr", markers);
  }

  return (
    <div>
      <button onClick={handleCompile}>Compilar</button>
      <Editor
        height="500px"
        onChange={handleEditorChange}
        defaultValue={`var x = 10;
        if x > 5 {
            return x;
            }`}
        beforeMount={handleBeforeMount}
        theme="vs-dark"
      />
    </div>
  );
}
