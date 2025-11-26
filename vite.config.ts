import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-avatar', '@radix-ui/react-dialog', '@radix-ui/react-navigation-menu', '@radix-ui/react-popover', '@radix-ui/react-separator', '@radix-ui/react-tooltip', '@radix-ui/react-scroll-area', '@radix-ui/react-accordion'],
          'motion': ['motion'],
          'markdown': ['react-markdown'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
