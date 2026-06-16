import { initTRPC } from '@trpc/server'
import { z } from 'zod'
import { compile } from './compile'

const t = initTRPC.create()

export const router = t.router({
  compileFScriptCode: t.procedure
    .input(
      z.object({
        code: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const resTree = compile(input.code)
      return {
        ...resTree,
      }
    }),
})

export type AppRouter = typeof router
