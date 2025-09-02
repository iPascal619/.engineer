import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@portfolio/ui': fileURLToPath(new URL('../../packages/ui/src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
