import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'vendor'
          if (id.includes('react-intersection-observer') || id.includes('react-type-animation') || id.includes('react-helmet-async')) return 'utils'
        },
      },
    },
    target: 'esnext',
    sourcemap: false,
  },
})
