import { compile } from "./compile";

compile(`
    const b = 2;
    const a = 2 + b * 4;
    `);