import path from 'node:path'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
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

  plugins: [TanStackRouterVite(), react()],

  build: {
    minify: true,
    emptyOutDir: true
  },

  clearScreen: false
})
