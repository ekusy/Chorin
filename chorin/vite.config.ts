import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.GITHUB_PAGES  // ‚±‚Ìs‚ğ’Ç‰Á
        ? "reactailwind"            // ‚±‚Ìs‚ğ’Ç‰Á
        : "./",                     // ‚±‚Ìs‚ğ’Ç‰Á
  plugins: [react()],
})
