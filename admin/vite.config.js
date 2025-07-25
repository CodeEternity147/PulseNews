import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],

  server: {
    proxy: {
      '/api': 'https://pulsenews-3-qfs3.onrender.com',
    },
  },
})
