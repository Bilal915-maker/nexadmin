import { defineConfig } from 'vite';

// Publié dans le public/ de l'app Next : public/catalogue.html → /catalogue
export default defineConfig({
  base: '/catalogue-files/',
  build: { outDir: '../public/catalogue-files', emptyOutDir: true, chunkSizeWarningLimit: 1500 },
});
