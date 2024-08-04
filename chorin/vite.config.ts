import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.GITHUB_PAGES  // ���̍s��ǉ�
        ? "reactailwind"            // ���̍s��ǉ�
        : "./",                     // ���̍s��ǉ�
  plugins: [react()],
})
