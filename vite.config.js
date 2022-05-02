// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root:'./frontend',
  server:{
    proxy:{
      "/api":{
        target:"http://localhost:5000",
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, ''),
      }
    },
  },
  build:{
    outDir:'build'
  },
  plugins: [react()]
})