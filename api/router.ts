import { initTRPC } from "@trpc/server";
import { CompileFileScriptCode } from "./FileScriptCompiler";
import { z } from 'zod';

const t = initTRPC.create();

export const router = t.router({
  compileFScriptCode: t.procedure.input(z.object({
    code: z.string()
  })).mutation(async ({ input }) => {
    const resTree = CompileFileScriptCode(input.code);
    return {
      message: resTree.getTokens
    };
  }),
});

export type AppRouter = typeof router;
