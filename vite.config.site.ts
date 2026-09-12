import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Static site build for the playground (GitHub Pages).
// The library build lives in vite.config.ts.
export default defineConfig({
  base: '/PiposLibrary/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist-site',
    emptyOutDir: true,
  },
});
