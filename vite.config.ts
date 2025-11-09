import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Open the development server on port 3000 and automatically open in browser
  server: {
    port: 3000,
    open: true,
  },
})
