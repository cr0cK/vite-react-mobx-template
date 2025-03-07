import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
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
      '@': path.resolve(__dirname, './src')
    }
  },

  plugins: [TanStackRouterVite(), react(), tailwindcss()],

  // https://theme-ui.com/guides/jsx-pragma#using-vite
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `import { jsx } from 'theme-ui'`
  },

  build: {
    minify: true,
    emptyOutDir: true
  },

  clearScreen: false
})
