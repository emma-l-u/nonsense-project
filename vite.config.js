import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use the repo name as base only when building for GitHub Pages,
  // so local dev still works at localhost:5173
  base: command === 'build' ? '/nonsense-project/' : '/',
}))
