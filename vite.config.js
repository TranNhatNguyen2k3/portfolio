import { defineConfig } from 'vite'

// Cloudflare Pages (and most hosts): keep base as '/'
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
