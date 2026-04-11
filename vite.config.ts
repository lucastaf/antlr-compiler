import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  optimizeDeps: {
    exclude: ["api"]
  },
  resolve: {
    alias: {
      'process/browser': 'process/browser',
      'process': 'process/browser',
      'buffer': 'buffer',
    },
  },
  define: {
    global: "globalThis",
  },
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
})
