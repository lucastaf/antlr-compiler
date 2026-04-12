import * as monacoEditor from "monaco-editor";

export function registerFileScriptLanguage(monaco: typeof monacoEditor) {
    monaco.languages.register({ id: "filescript" });

    monaco.languages.setMonarchTokensProvider("filescript", {
        tokenizer: {
            root: [
                // keywords
                [/\b(if|else|elif|while|for|do|function|return)\b/, "keyword"],

                // declaração
                [/\b(var|let|const)\b/, "type"],

                // operadores
                [/[+\-*/%]/, "operator"],
                [/==|!=|>=|<=|>|</, "operator"],
                [/&&|\|\|/, "operator"],

                // números
                [/[0-9]+(\.[0-9]+)?/, "number"],

                // strings
                [/".*?"/, "string"],
                [/'.'/, "string"],

                // identificadores
                [/[a-zA-Z_][a-zA-Z0-9_]*/, "identifier"],

                // delimitadores
                [/[{}()[\]]/, "@brackets"],

                // comentários
                [/\/\/.*/, "comment"],
                [/\/\*/, "comment", "@comment"],
            ],

            comment: [
                [/[^/*]+/, "comment"],
                [/\*\//, "comment", "@pop"],
                [/[/*]/, "comment"],
            ],
        },
    });

    // tema custom (cores)
    monaco.editor.defineTheme("filescriptTheme", {
        base: "vs-dark",
        inherit: true,
        rules: [
            { token: "keyword", foreground: "569CD6" },
            { token: "type", foreground: "4EC9B0" },
            { token: "identifier", foreground: "D4D4D4" },
            { token: "number", foreground: "B5CEA8" },
            { token: "string", foreground: "CE9178" },
            { token: "operator", foreground: "D4D4D4" },
            { token: "comment", foreground: "6A9955" },
        ],
        colors: {
            "editor.background": "#1e1e1e",
        },
    });
}