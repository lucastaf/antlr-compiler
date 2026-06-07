import { compile } from "./compile";

compile(`
    const y = 2;
    print(y);
    read();
    print(3 + y);
    `);