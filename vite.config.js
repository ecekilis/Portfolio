import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  css: {
    modules: {
      localsConvention: "camelCase"
    },
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.PNG', '**/*.png'], // Görsel dosyalarını doğru şekilde işlemek için
});