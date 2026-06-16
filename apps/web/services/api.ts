import type { AppRouter } from '@antlr-compiler/api'
import { createTRPCClient, httpBatchLink } from '@trpc/client'

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
})
