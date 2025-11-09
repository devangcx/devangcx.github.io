import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Open the development server on port 3000 and automatically open in browser
  server: {
    port: 3000,
    open: true,
  },
})
