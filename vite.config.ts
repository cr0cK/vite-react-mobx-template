import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },

  resolve: {
    alias: {
      '@/src': path.resolve(__dirname, './src')
    }
  },

  plugins: [react()],

  build: {
    minify: true,
    emptyOutDir: true
  },

  clearScreen: false
})
