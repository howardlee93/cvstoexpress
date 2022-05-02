// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root:'./frontend',
  build:{
    outDir:'build'
  },
  plugins: [react()]
})