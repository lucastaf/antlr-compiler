import { compile } from "./compile";

compile(`
    const b = read();
    const a = b - 4;
    print(a);
    `);