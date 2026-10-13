import { defineConfig } from 'vite';

// Le build est publié dans le dossier public/ de l'app Next du repo :
// il est servi tel quel par Vercel sur /iphone-15-pro/index.html
export default defineConfig({
  base: './',
  build: {
    outDir: '../public/iphone-15-pro',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1200,
  },
});
