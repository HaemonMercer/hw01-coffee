import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base 用相對路徑 './'，不管 repo 叫什麼名字，發布到 GitHub Pages 都找得到 CSS、JS 和圖片
export default defineConfig({
  plugins: [react()],
  base: './',
})
