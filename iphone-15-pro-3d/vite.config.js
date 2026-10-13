import { defineConfig } from 'vite';

// Le build est publié dans le dossier public/ de l'app Next du repo, sur le même
// modèle que public/landing.html (servi sur /landing) :
//   public/iphone-15-pro.html          → page servie sur /iphone-15-pro
//   public/iphone-15-pro-files/assets/* → JS / CSS
export default defineConfig({
  base: '/iphone-15-pro-files/',
  build: {
    outDir: '../public/iphone-15-pro-files',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1200,
  },
});
