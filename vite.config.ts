import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
  return {
    server: {
      host: '0.0.0.0'
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },

    base: process.env.VITE_GH_DEPLOYMENT_BASE || '/',

    plugins: [TanStackRouterVite(), react(), tailwindcss()],

    // https://theme-ui.com/guides/jsx-pragma#using-vite
    esbuild:
      mode === 'development'
        ? {
            jsxFactory: 'jsx',
            jsxInject: `import { jsx } from 'theme-ui'`
          }
        : {},

    build: {
      minify: true,
      emptyOutDir: true
      // outDir: 'dist/vite-react-mobx-template'
    },

    clearScreen: false
  }
})
