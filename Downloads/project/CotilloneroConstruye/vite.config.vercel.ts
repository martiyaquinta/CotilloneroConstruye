import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration for Vercel deployment
export default defineConfig({
  plugins: [react()],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});