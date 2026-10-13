import { defineConfig } from 'vite';

// Publié dans le public/ de l'app Next (même modèle que public/landing.html) :
//   public/catalogue-3d.html            → servi sur /catalogue-3d
//   public/catalogue-3d-files/assets/*  → JS / CSS
export default defineConfig({
  base: '/catalogue-3d-files/',
  build: {
    outDir: '../public/catalogue-3d-files',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500,
  },
});
