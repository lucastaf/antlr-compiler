import { createHTTPServer } from '@trpc/server/adapters/standalone'
import cors from 'cors'
import { router } from './router'

const server = createHTTPServer({
  router,
  middleware: cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
})

server.listen(3000)
console.log('tRPC API rodando em http://localhost:3000')
