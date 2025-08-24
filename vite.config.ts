import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  server: {
    host: true,   // exposes your local IP
    port: 5173,   // you can change this if needed
  },
})
