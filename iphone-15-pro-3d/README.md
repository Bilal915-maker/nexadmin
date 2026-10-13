# iPhone 15 Pro — animation 3D temps réel (Three.js / WebGL)

Modèle 100 % procédural (aucun fichier .glb) : cadre titane extrudé à bords contourés, verres avant/arrière 2.5D, plateau photo avec 3 objectifs (bagues usinées, verre iridescent, dôme), flash, LiDAR, micro, bouton Action, volume, bouton latéral, bandes d'antenne, USB‑C, grilles haut-parleur, vis.

## Lancer le projet

Prérequis : [Node.js 18+](https://nodejs.org).

```bash
cd iphone-15-pro-3d
npm install
npm run dev
```

Ouvre l'URL affichée (par défaut http://localhost:5173).
Sur mobile (même Wi‑Fi) : utilise l'adresse « Network » affichée par Vite.

Version de production :

```bash
npm run build     # génère ../public/iphone-15-pro/
npm run preview   # sert le build sur http://localhost:4173
```

Le build est écrit dans `../public/iphone-15-pro/` : l'app Next du repo le sert directement sur Vercel à **`/iphone-15-pro`**. Après une modification du code 3D, relance `npm run build` et commite `public/iphone-15-pro/`.

## Commandes

| Action | Desktop | Mobile |
|---|---|---|
| Tourner le téléphone | glisser | glisser |
| Zoom | molette | pincer |
| Recentrer | double‑clic | — |
| Film ⇄ Interactif | bouton ou barre espace | bouton |
| Rotation fine | flèches du clavier | — |

En mode interactif, les boutons *Caméras / Bouton Action / Titane / Écran* déclenchent des travellings vers chaque détail.

## Structure

```
index.html          UI (titre, modes, légendes, vues)
src/style.css       styles responsive
src/main.js         rendu, post-prod (profondeur de champ, bloom, MSAA), modes film/interactif, entrées
src/phone.js        géométrie + matériaux du téléphone (dimensions réelles 146,6 × 70,6 × 8,25 mm)
src/studio.js       studio sombre : environnement HDR procédural, lumières, ombres douces
src/timeline.js     plans du film (45 s en boucle, interpolation Hermite)
src/textures.js     textures générées (écran, objectifs, flash, verre dépoli)
```

Modèle non officiel, démo technique, non affiliée à Apple Inc.
