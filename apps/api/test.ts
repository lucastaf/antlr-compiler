import { compile } from "../../api/compile";

compile(`
    const y = 2;
    print(y);
    read();
    print(3 + y);
    `);