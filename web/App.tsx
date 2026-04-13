import { Toaster } from "react-hot-toast";
import "./App.css";
import CodeEditor from "./lib/editor/FileScriptEditor";
import FSLOGO from "../public/favicon.svg";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <section id="center">
        <div className="flex gap-4">
          <img width={48} src={FSLOGO}></img>
          <h1>FileScript editor</h1>
        </div>
        <CodeEditor />
      </section>
    </>
  );
}

export default App;
