import { Toaster } from "react-hot-toast";
import "./App.css";
import CodeEditor from "./lib/editor/FileScriptEditor";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <section id="center">
        <div>
          <h1>FileScript editor</h1>
          <p></p>
        </div>
        <CodeEditor />
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
