import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      external: ['react-router-dom'], 
    },
  },
  optimizeDeps: {
    include: ['react-bootstrap', 'react-router-dom', 'react-icons/fa'],
  },
  server: {
    allowedHosts: ['devserver-main--keen-gecko-0e426e.netlify.app'],
  },
});
