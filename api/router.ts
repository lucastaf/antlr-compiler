import { initTRPC } from "@trpc/server";
import { compile } from "./compile";
import { z } from 'zod';

const t = initTRPC.create();

export const router = t.router({
  compileFScriptCode: t.procedure.input(z.object({
    code: z.string()
  })).mutation(async ({ input }) => {
    console.log(input.code);
    const resTree = compile(input.code);
    console.log(resTree)
    return {
      message: resTree
    };
  }),
});

export type AppRouter = typeof router;
