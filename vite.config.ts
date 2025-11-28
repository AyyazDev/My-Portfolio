import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  appType: 'spa',
  plugins: [
    react(),
    tailwind(),  // use the tailwind Vite plugin
  ],
    server: { host: true },
});
