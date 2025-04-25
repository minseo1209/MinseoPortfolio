import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/MinseoPortfolio/',
  build: {
    rollupOptions: {
     external: ['react-bootstrap', 'react-router-dom', 'react-icons/fa'], 
    },
  },
});
