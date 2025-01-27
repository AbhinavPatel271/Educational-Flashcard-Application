import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Educational-Flashcard-Application/', // Set base path for GitHub Pages
  build: {
    outDir: 'docs', // Set the output folder to 'docs' for GitHub Pages deployment
  },
})
