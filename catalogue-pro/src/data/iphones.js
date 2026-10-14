/**
 * Gamme iPhone depuis 2016.
 * Données : fiches techniques publiques d'Apple (dimensions en mm, arrondies).
 * Les teintes `hex` sont des approximations visuelles des finitions officielles.
 * `null` = information non vérifiée → affichée comme telle, jamais inventée.
 *
 * design.edge  : 'round' (bords arrondis) | 'flat' (bords plats) | 'contour' (bords contourés)
 * design.front : 'home' (bouton principal) | 'notch' (encoche) | 'island' (Dynamic Island)
 * design.back  : 'alu' | 'glass' | 'matte' | 'unibody'
 * design.cam   : disposition du module photo
 */
const C = (n, hex, extra = {}) => ({ n, hex, ...extra });
const SPACE_GRAY_FRONT = { front: 'black' };
const WHITE_FRONT = { front: 'white' };

const IPHONES = [
  // ── 2016 ────────────────────────────────────────────────────────────────
  {
    id: 'iphone-se', name: 'iPhone SE (1re génération)', year: 2016, tier: 'se', chip: 'A9',
    display: '4 pouces · Retina (LCD)', cameras: '12 Mpx', front: '1,2 Mpx',
    storage: ['16 Go', '32 Go', '64 Go', '128 Go'], auth: 'Touch ID', port: 'Lightning', ip: null,
    material: 'Aluminium', dims: [123.8, 58.6, 7.6],
    design: { edge: 'flat', front: 'home', back: 'alu', cam: 'single', frame: 'alu', mute: true, radius: 0.13, chamfer: true },
    colors: [
      C('Gris sidéral', '#4a4b4f', SPACE_GRAY_FRONT), C('Argent', '#d9dadc', WHITE_FRONT),
      C('Or', '#e5d1b6', WHITE_FRONT), C('Or rose', '#e7c0b3', WHITE_FRONT),
    ],
  },
  {
    id: 'iphone-7', name: 'iPhone 7', year: 2016, tier: 'standard', chip: 'A10 Fusion',
    display: '4,7 pouces · Retina HD (LCD)', cameras: '12 Mpx grand-angle', front: '7 Mpx',
    storage: ['32 Go', '128 Go', '256 Go'], auth: 'Touch ID', port: 'Lightning', ip: 'IP67',
    material: 'Aluminium', dims: [138.3, 67.1, 7.1],
    design: { edge: 'round', front: 'home', back: 'alu', cam: 'single', frame: 'alu', mute: true, radius: 0.14 },
    colors: [
      C('Noir de jais', '#0b0b0d', { gloss: true, ...SPACE_GRAY_FRONT }), C('Noir', '#2a2b2e', SPACE_GRAY_FRONT),
      C('Argent', '#d7d8da', WHITE_FRONT), C('Or', '#e5d1b6', WHITE_FRONT), C('Or rose', '#e7c0b3', WHITE_FRONT),
      C('(PRODUCT)RED', '#b2152b', WHITE_FRONT),
    ],
  },
  {
    id: 'iphone-7-plus', name: 'iPhone 7 Plus', year: 2016, tier: 'plus', chip: 'A10 Fusion',
    display: '5,5 pouces · Retina HD (LCD)', cameras: 'Double 12 Mpx : grand-angle + téléobjectif 2×', front: '7 Mpx',
    storage: ['32 Go', '128 Go', '256 Go'], auth: 'Touch ID', port: 'Lightning', ip: 'IP67',
    material: 'Aluminium', dims: [158.2, 77.9, 7.3],
    design: { edge: 'round', front: 'home', back: 'alu', cam: 'dualH', frame: 'alu', mute: true, radius: 0.14 },
    colors: [
      C('Noir de jais', '#0b0b0d', { gloss: true, ...SPACE_GRAY_FRONT }), C('Noir', '#2a2b2e', SPACE_GRAY_FRONT),
      C('Argent', '#d7d8da', WHITE_FRONT), C('Or', '#e5d1b6', WHITE_FRONT), C('Or rose', '#e7c0b3', WHITE_FRONT),
      C('(PRODUCT)RED', '#b2152b', WHITE_FRONT),
    ],
  },
  // ── 2017 ────────────────────────────────────────────────────────────────
  {
    id: 'iphone-8', name: 'iPhone 8', year: 2017, tier: 'standard', chip: 'A11 Bionic',
    display: '4,7 pouces · Retina HD (LCD)', cameras: '12 Mpx grand-angle', front: '7 Mpx',
    storage: ['64 Go', '128 Go', '256 Go'], auth: 'Touch ID', port: 'Lightning', ip: 'IP67',
    material: 'Verre et aluminium', dims: [138.4, 67.3, 7.3],
    design: { edge: 'round', front: 'home', back: 'glass', cam: 'single', frame: 'alu', mute: true, radius: 0.14 },
    colors: [
      C('Argent', '#e6e6e4', { frame: '#cdced0', ...WHITE_FRONT }), C('Or', '#f0dcc4', { frame: '#dcc3a6', ...WHITE_FRONT }),
      C('Gris sidéral', '#2c2d30', { frame: '#4b4c50', ...SPACE_GRAY_FRONT }), C('(PRODUCT)RED', '#b3132a', { frame: '#a8142a', ...SPACE_GRAY_FRONT }),
    ],
  },
  {
    id: 'iphone-8-plus', name: 'iPhone 8 Plus', year: 2017, tier: 'plus', chip: 'A11 Bionic',
    display: '5,5 pouces · Retina HD (LCD)', cameras: 'Double 12 Mpx : grand-angle + téléobjectif 2×', front: '7 Mpx',
    storage: ['64 Go', '128 Go', '256 Go'], auth: 'Touch ID', port: 'Lightning', ip: 'IP67',
    material: 'Verre et aluminium', dims: [158.4, 78.1, 7.5],
    design: { edge: 'round', front: 'home', back: 'glass', cam: 'dualH', frame: 'alu', mute: true, radius: 0.14 },
    colors: [
      C('Argent', '#e6e6e4', { frame: '#cdced0', ...WHITE_FRONT }), C('Or', '#f0dcc4', { frame: '#dcc3a6', ...WHITE_FRONT }),
      C('Gris sidéral', '#2c2d30', { frame: '#4b4c50', ...SPACE_GRAY_FRONT }), C('(PRODUCT)RED', '#b3132a', { frame: '#a8142a', ...SPACE_GRAY_FRONT }),
    ],
  },
  {
    id: 'iphone-x', name: 'iPhone X', year: 2017, tier: 'pro', chip: 'A11 Bionic',
    display: '5,8 pouces · Super Retina (OLED)', cameras: 'Double 12 Mpx : grand-angle + téléobjectif 2×', front: '7 Mpx TrueDepth',
    storage: ['64 Go', '256 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP67',
    material: 'Verre et acier inoxydable', dims: [143.6, 70.9, 7.7],
    design: { edge: 'round', front: 'notch', back: 'glass', cam: 'dualV', frame: 'steel', mute: true, radius: 0.17 },
    colors: [C('Argent', '#e8e8e5', { frame: '#d3d3d1' }), C('Gris sidéral', '#2b2b2e', { frame: '#47484b' })],
  },
  // ── 2018 ────────────────────────────────────────────────────────────────
  {
    id: 'iphone-xr', name: 'iPhone XR', year: 2018, tier: 'standard', chip: 'A12 Bionic',
    display: '6,1 pouces · Liquid Retina (LCD)', cameras: '12 Mpx grand-angle', front: '7 Mpx TrueDepth',
    storage: ['64 Go', '128 Go', '256 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP67',
    material: 'Verre et aluminium', dims: [150.9, 75.7, 8.3],
    design: { edge: 'round', front: 'notch', back: 'glass', cam: 'singleXR', frame: 'alu', mute: true, radius: 0.17 },
    colors: [
      C('Noir', '#1d1e20'), C('Blanc', '#f3f2ef'), C('Bleu', '#5c9ccf'), C('Jaune', '#f6cd4a'),
      C('Corail', '#f27a66'), C('(PRODUCT)RED', '#b8162c'),
    ],
  },
  {
    id: 'iphone-xs', name: 'iPhone XS', year: 2018, tier: 'pro', chip: 'A12 Bionic',
    display: '5,8 pouces · Super Retina HD (OLED)', cameras: 'Double 12 Mpx : grand-angle + téléobjectif 2×', front: '7 Mpx TrueDepth',
    storage: ['64 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre et acier inoxydable', dims: [143.6, 70.9, 7.7],
    design: { edge: 'round', front: 'notch', back: 'glass', cam: 'dualV', frame: 'steel', mute: true, radius: 0.17 },
    colors: [C('Or', '#f2ddc4', { frame: '#d9b98e' }), C('Argent', '#e8e8e5', { frame: '#d3d3d1' }), C('Gris sidéral', '#2b2b2e', { frame: '#47484b' })],
  },
  {
    id: 'iphone-xs-max', name: 'iPhone XS Max', year: 2018, tier: 'promax', chip: 'A12 Bionic',
    display: '6,5 pouces · Super Retina HD (OLED)', cameras: 'Double 12 Mpx : grand-angle + téléobjectif 2×', front: '7 Mpx TrueDepth',
    storage: ['64 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre et acier inoxydable', dims: [157.5, 77.4, 7.7],
    design: { edge: 'round', front: 'notch', back: 'glass', cam: 'dualV', frame: 'steel', mute: true, radius: 0.17 },
    colors: [C('Or', '#f2ddc4', { frame: '#d9b98e' }), C('Argent', '#e8e8e5', { frame: '#d3d3d1' }), C('Gris sidéral', '#2b2b2e', { frame: '#47484b' })],
  },
  // ── 2019 ────────────────────────────────────────────────────────────────
  {
    id: 'iphone-11', name: 'iPhone 11', year: 2019, tier: 'standard', chip: 'A13 Bionic',
    display: '6,1 pouces · Liquid Retina HD (LCD)', cameras: 'Double 12 Mpx : grand-angle + ultra grand-angle', front: '12 Mpx TrueDepth',
    storage: ['64 Go', '128 Go', '256 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre et aluminium', dims: [150.9, 75.7, 8.3],
    design: { edge: 'round', front: 'notch', back: 'glass', cam: 'sq2v', frame: 'alu', mute: true, radius: 0.17 },
    colors: [
      C('Noir', '#202122'), C('Vert', '#aee1cd'), C('Jaune', '#ffe681'), C('Mauve', '#d1cddb'),
      C('(PRODUCT)RED', '#ba0c2e'), C('Blanc', '#f8f6f0'),
    ],
  },
  {
    id: 'iphone-11-pro', name: 'iPhone 11 Pro', year: 2019, tier: 'pro', chip: 'A13 Bionic',
    display: '5,8 pouces · Super Retina XDR (OLED)', cameras: 'Triple 12 Mpx : grand-angle, ultra grand-angle, téléobjectif 2×', front: '12 Mpx TrueDepth',
    storage: ['64 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre dépoli et acier inoxydable', dims: [144.0, 71.4, 8.1],
    design: { edge: 'round', front: 'notch', back: 'matte', cam: 'sq3', frame: 'steel', mute: true, radius: 0.17 },
    colors: [
      C('Vert nuit', '#4e5851', { frame: '#3f4740' }), C('Gris sidéral', '#535150', { frame: '#47474a' }),
      C('Argent', '#ebebe4', { frame: '#d4d4d2' }), C('Or', '#f6dfc8', { frame: '#e0c39c' }),
    ],
  },
  {
    id: 'iphone-11-pro-max', name: 'iPhone 11 Pro Max', year: 2019, tier: 'promax', chip: 'A13 Bionic',
    display: '6,5 pouces · Super Retina XDR (OLED)', cameras: 'Triple 12 Mpx : grand-angle, ultra grand-angle, téléobjectif 2×', front: '12 Mpx TrueDepth',
    storage: ['64 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre dépoli et acier inoxydable', dims: [158.0, 77.8, 8.1],
    design: { edge: 'round', front: 'notch', back: 'matte', cam: 'sq3', frame: 'steel', mute: true, radius: 0.17 },
    colors: [
      C('Vert nuit', '#4e5851', { frame: '#3f4740' }), C('Gris sidéral', '#535150', { frame: '#47474a' }),
      C('Argent', '#ebebe4', { frame: '#d4d4d2' }), C('Or', '#f6dfc8', { frame: '#e0c39c' }),
    ],
  },
  // ── 2020 ────────────────────────────────────────────────────────────────
  {
    id: 'iphone-se-2', name: 'iPhone SE (2e génération)', year: 2020, tier: 'se', chip: 'A13 Bionic',
    display: '4,7 pouces · Retina HD (LCD)', cameras: '12 Mpx grand-angle', front: '7 Mpx',
    storage: ['64 Go', '128 Go', '256 Go'], auth: 'Touch ID', port: 'Lightning', ip: 'IP67',
    material: 'Verre et aluminium', dims: [138.4, 67.3, 7.3],
    design: { edge: 'round', front: 'home', back: 'glass', cam: 'single', frame: 'alu', mute: true, radius: 0.14 },
    colors: [C('Noir', '#1f2021', SPACE_GRAY_FRONT), C('Blanc', '#f8f6f0', SPACE_GRAY_FRONT), C('(PRODUCT)RED', '#ba0c2e', SPACE_GRAY_FRONT)],
  },
  {
    id: 'iphone-12-mini', name: 'iPhone 12 mini', year: 2020, tier: 'mini', chip: 'A14 Bionic',
    display: '5,4 pouces · Super Retina XDR (OLED)', cameras: 'Double 12 Mpx : grand-angle + ultra grand-angle', front: '12 Mpx TrueDepth',
    storage: ['64 Go', '128 Go', '256 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre et aluminium', dims: [131.5, 64.2, 7.4],
    design: { edge: 'flat', front: 'notch', back: 'glass', cam: 'sq2v', frame: 'alu', mute: true, radius: 0.16 },
    colors: [C('Noir', '#25292e'), C('Blanc', '#f6f2ef'), C('(PRODUCT)RED', '#bf0013'), C('Vert', '#d8efd5'), C('Bleu', '#023b63'), C('Mauve', '#b7afe6')],
  },
  {
    id: 'iphone-12', name: 'iPhone 12', year: 2020, tier: 'standard', chip: 'A14 Bionic',
    display: '6,1 pouces · Super Retina XDR (OLED)', cameras: 'Double 12 Mpx : grand-angle + ultra grand-angle', front: '12 Mpx TrueDepth',
    storage: ['64 Go', '128 Go', '256 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre et aluminium', dims: [146.7, 71.5, 7.4],
    design: { edge: 'flat', front: 'notch', back: 'glass', cam: 'sq2v', frame: 'alu', mute: true, radius: 0.16 },
    colors: [C('Noir', '#25292e'), C('Blanc', '#f6f2ef'), C('(PRODUCT)RED', '#bf0013'), C('Vert', '#d8efd5'), C('Bleu', '#023b63'), C('Mauve', '#b7afe6')],
  },
  {
    id: 'iphone-12-pro', name: 'iPhone 12 Pro', year: 2020, tier: 'pro', chip: 'A14 Bionic',
    display: '6,1 pouces · Super Retina XDR (OLED)', cameras: 'Triple 12 Mpx + scanner LiDAR, téléobjectif 2×', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre dépoli et acier inoxydable', dims: [146.7, 71.5, 7.4],
    design: { edge: 'flat', front: 'notch', back: 'matte', cam: 'sq3', lidar: true, frame: 'steel', mute: true, radius: 0.16 },
    colors: [
      C('Graphite', '#52514f', { frame: '#3c3c3e' }), C('Argent', '#e3e4df', { frame: '#d5d5d3' }),
      C('Or', '#fcebd3', { frame: '#e6c99c' }), C('Bleu Pacifique', '#2e4d61', { frame: '#34536a' }),
    ],
  },
  {
    id: 'iphone-12-pro-max', name: 'iPhone 12 Pro Max', year: 2020, tier: 'promax', chip: 'A14 Bionic',
    display: '6,7 pouces · Super Retina XDR (OLED)', cameras: 'Triple 12 Mpx + scanner LiDAR, téléobjectif 2,5×', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre dépoli et acier inoxydable', dims: [160.8, 78.1, 7.4],
    design: { edge: 'flat', front: 'notch', back: 'matte', cam: 'sq3', lidar: true, frame: 'steel', mute: true, radius: 0.16 },
    colors: [
      C('Graphite', '#52514f', { frame: '#3c3c3e' }), C('Argent', '#e3e4df', { frame: '#d5d5d3' }),
      C('Or', '#fcebd3', { frame: '#e6c99c' }), C('Bleu Pacifique', '#2e4d61', { frame: '#34536a' }),
    ],
  },
  // ── 2021 ────────────────────────────────────────────────────────────────
  {
    id: 'iphone-13-mini', name: 'iPhone 13 mini', year: 2021, tier: 'mini', chip: 'A15 Bionic',
    display: '5,4 pouces · Super Retina XDR (OLED)', cameras: 'Double 12 Mpx : grand-angle + ultra grand-angle', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre et aluminium', dims: [131.5, 64.2, 7.65],
    design: { edge: 'flat', front: 'notch', notch: 'small', back: 'glass', cam: 'sq2d', frame: 'alu', mute: true, radius: 0.16 },
    colors: [C('Minuit', '#232a31'), C('Lumière stellaire', '#faf6f2'), C('Bleu', '#276787'), C('Rose', '#fae0d8'), C('(PRODUCT)RED', '#bf0013'), C('Vert', '#394c38')],
  },
  {
    id: 'iphone-13', name: 'iPhone 13', year: 2021, tier: 'standard', chip: 'A15 Bionic',
    display: '6,1 pouces · Super Retina XDR (OLED)', cameras: 'Double 12 Mpx : grand-angle + ultra grand-angle', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre et aluminium', dims: [146.7, 71.5, 7.65],
    design: { edge: 'flat', front: 'notch', notch: 'small', back: 'glass', cam: 'sq2d', frame: 'alu', mute: true, radius: 0.16 },
    colors: [C('Minuit', '#232a31'), C('Lumière stellaire', '#faf6f2'), C('Bleu', '#276787'), C('Rose', '#fae0d8'), C('(PRODUCT)RED', '#bf0013'), C('Vert', '#394c38')],
  },
  {
    id: 'iphone-13-pro', name: 'iPhone 13 Pro', year: 2021, tier: 'pro', chip: 'A15 Bionic',
    display: '6,1 pouces · Super Retina XDR avec ProMotion', cameras: 'Triple 12 Mpx + LiDAR, téléobjectif 3×, macro', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go', '1 To'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre dépoli et acier inoxydable', dims: [146.7, 71.5, 7.65],
    design: { edge: 'flat', front: 'notch', notch: 'small', back: 'matte', cam: 'sq3', lidar: true, frame: 'steel', mute: true, radius: 0.16, bigLens: true },
    colors: [
      C('Graphite', '#54524f', { frame: '#3d3d3f' }), C('Or', '#fae7cf', { frame: '#e6c99c' }), C('Argent', '#f1f2ed', { frame: '#d5d5d3' }),
      C('Bleu alpin', '#a7c1d9', { frame: '#9fb7cf' }), C('Vert alpin', '#576856', { frame: '#4c5a4b' }),
    ],
  },
  {
    id: 'iphone-13-pro-max', name: 'iPhone 13 Pro Max', year: 2021, tier: 'promax', chip: 'A15 Bionic',
    display: '6,7 pouces · Super Retina XDR avec ProMotion', cameras: 'Triple 12 Mpx + LiDAR, téléobjectif 3×, macro', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go', '1 To'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre dépoli et acier inoxydable', dims: [160.8, 78.1, 7.65],
    design: { edge: 'flat', front: 'notch', notch: 'small', back: 'matte', cam: 'sq3', lidar: true, frame: 'steel', mute: true, radius: 0.16, bigLens: true },
    colors: [
      C('Graphite', '#54524f', { frame: '#3d3d3f' }), C('Or', '#fae7cf', { frame: '#e6c99c' }), C('Argent', '#f1f2ed', { frame: '#d5d5d3' }),
      C('Bleu alpin', '#a7c1d9', { frame: '#9fb7cf' }), C('Vert alpin', '#576856', { frame: '#4c5a4b' }),
    ],
  },
  // ── 2022 ────────────────────────────────────────────────────────────────
  {
    id: 'iphone-se-3', name: 'iPhone SE (3e génération)', year: 2022, tier: 'se', chip: 'A15 Bionic',
    display: '4,7 pouces · Retina HD (LCD)', cameras: '12 Mpx grand-angle', front: '7 Mpx',
    storage: ['64 Go', '128 Go', '256 Go'], auth: 'Touch ID', port: 'Lightning', ip: 'IP67',
    material: 'Verre et aluminium', dims: [138.4, 67.3, 7.3],
    design: { edge: 'round', front: 'home', back: 'glass', cam: 'single', frame: 'alu', mute: true, radius: 0.14 },
    colors: [C('Minuit', '#232a31', SPACE_GRAY_FRONT), C('Lumière stellaire', '#faf6f2', SPACE_GRAY_FRONT), C('(PRODUCT)RED', '#bf0013', SPACE_GRAY_FRONT)],
  },
  {
    id: 'iphone-14', name: 'iPhone 14', year: 2022, tier: 'standard', chip: 'A15 Bionic',
    display: '6,1 pouces · Super Retina XDR (OLED)', cameras: 'Double 12 Mpx : principal + ultra grand-angle', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre et aluminium', dims: [146.7, 71.5, 7.8],
    design: { edge: 'flat', front: 'notch', notch: 'small', back: 'glass', cam: 'sq2d', frame: 'alu', mute: true, radius: 0.16 },
    colors: [C('Minuit', '#222930'), C('Lumière stellaire', '#faf6f2'), C('Mauve', '#e5ddea'), C('Bleu', '#a0b4c7'), C('(PRODUCT)RED', '#e31d33'), C('Jaune', '#f9e479')],
  },
  {
    id: 'iphone-14-plus', name: 'iPhone 14 Plus', year: 2022, tier: 'plus', chip: 'A15 Bionic',
    display: '6,7 pouces · Super Retina XDR (OLED)', cameras: 'Double 12 Mpx : principal + ultra grand-angle', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre et aluminium', dims: [160.8, 78.1, 7.8],
    design: { edge: 'flat', front: 'notch', notch: 'small', back: 'glass', cam: 'sq2d', frame: 'alu', mute: true, radius: 0.16 },
    colors: [C('Minuit', '#222930'), C('Lumière stellaire', '#faf6f2'), C('Mauve', '#e5ddea'), C('Bleu', '#a0b4c7'), C('(PRODUCT)RED', '#e31d33'), C('Jaune', '#f9e479')],
  },
  {
    id: 'iphone-14-pro', name: 'iPhone 14 Pro', year: 2022, tier: 'pro', chip: 'A16 Bionic',
    display: '6,1 pouces · Super Retina XDR, ProMotion et toujours activé', cameras: '48 Mpx principal, 12 Mpx ultra grand-angle, 12 Mpx téléobjectif 3×', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go', '1 To'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre dépoli et acier inoxydable', dims: [147.5, 71.5, 7.85],
    design: { edge: 'flat', front: 'island', back: 'matte', cam: 'sq3', lidar: true, frame: 'steel', mute: true, radius: 0.16, bigLens: true },
    colors: [
      C('Noir sidéral', '#403e3d', { frame: '#353436' }), C('Argent', '#f0f2f2', { frame: '#d5d6d6' }),
      C('Or', '#f4e8ce', { frame: '#e3c999' }), C('Violet intense', '#594f63', { frame: '#4f4659' }),
    ],
  },
  {
    id: 'iphone-14-pro-max', name: 'iPhone 14 Pro Max', year: 2022, tier: 'promax', chip: 'A16 Bionic',
    display: '6,7 pouces · Super Retina XDR, ProMotion et toujours activé', cameras: '48 Mpx principal, 12 Mpx ultra grand-angle, 12 Mpx téléobjectif 3×', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go', '1 To'], auth: 'Face ID', port: 'Lightning', ip: 'IP68',
    material: 'Verre dépoli et acier inoxydable', dims: [160.7, 77.6, 7.85],
    design: { edge: 'flat', front: 'island', back: 'matte', cam: 'sq3', lidar: true, frame: 'steel', mute: true, radius: 0.16, bigLens: true },
    colors: [
      C('Noir sidéral', '#403e3d', { frame: '#353436' }), C('Argent', '#f0f2f2', { frame: '#d5d6d6' }),
      C('Or', '#f4e8ce', { frame: '#e3c999' }), C('Violet intense', '#594f63', { frame: '#4f4659' }),
    ],
  },
  // ── 2023 ────────────────────────────────────────────────────────────────
  {
    id: 'iphone-15', name: 'iPhone 15', year: 2023, tier: 'standard', chip: 'A16 Bionic',
    display: '6,1 pouces · Super Retina XDR, Dynamic Island', cameras: '48 Mpx principal + 12 Mpx ultra grand-angle', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'USB‑C', ip: 'IP68',
    material: 'Verre teinté dans la masse et aluminium', dims: [147.6, 71.6, 7.8],
    design: { edge: 'contour', front: 'island', back: 'matte', cam: 'sq2d', frame: 'alu', mute: true, radius: 0.16 },
    colors: [C('Noir', '#35393b'), C('Bleu', '#d4e4ed'), C('Vert', '#e3e8d9'), C('Jaune', '#efecc6'), C('Rose', '#ead1d5')],
  },
  {
    id: 'iphone-15-plus', name: 'iPhone 15 Plus', year: 2023, tier: 'plus', chip: 'A16 Bionic',
    display: '6,7 pouces · Super Retina XDR, Dynamic Island', cameras: '48 Mpx principal + 12 Mpx ultra grand-angle', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'USB‑C', ip: 'IP68',
    material: 'Verre teinté dans la masse et aluminium', dims: [160.9, 77.8, 7.8],
    design: { edge: 'contour', front: 'island', back: 'matte', cam: 'sq2d', frame: 'alu', mute: true, radius: 0.16 },
    colors: [C('Noir', '#35393b'), C('Bleu', '#d4e4ed'), C('Vert', '#e3e8d9'), C('Jaune', '#efecc6'), C('Rose', '#ead1d5')],
  },
  {
    id: 'iphone-15-pro', name: 'iPhone 15 Pro', year: 2023, tier: 'pro', chip: 'A17 Pro',
    display: '6,1 pouces · Super Retina XDR, ProMotion et toujours activé', cameras: '48 Mpx principal, 12 Mpx ultra grand-angle, 12 Mpx téléobjectif 3×', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go', '1 To'], auth: 'Face ID', port: 'USB‑C (USB 3)', ip: 'IP68',
    material: 'Titane et verre dépoli', dims: [146.6, 70.6, 8.25],
    design: { edge: 'contour', front: 'island', back: 'matte', cam: 'sq3', lidar: true, frame: 'titanium', action: true, radius: 0.163, bigLens: true },
    colors: [
      C('Titane noir', '#3c3c3d', { frame: '#4a4a4b' }), C('Titane blanc', '#f2f1ed', { frame: '#d2d0cb' }),
      C('Titane bleu', '#2f4452', { frame: '#3f5462' }), C('Titane naturel', '#bab4a9', { frame: '#aca79e' }),
    ],
  },
  {
    id: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max', year: 2023, tier: 'promax', chip: 'A17 Pro',
    display: '6,7 pouces · Super Retina XDR, ProMotion et toujours activé', cameras: '48 Mpx principal, 12 Mpx ultra grand-angle, 12 Mpx téléobjectif 5×', front: '12 Mpx TrueDepth',
    storage: ['256 Go', '512 Go', '1 To'], auth: 'Face ID', port: 'USB‑C (USB 3)', ip: 'IP68',
    material: 'Titane et verre dépoli', dims: [159.9, 76.7, 8.25],
    design: { edge: 'contour', front: 'island', back: 'matte', cam: 'sq3', lidar: true, frame: 'titanium', action: true, radius: 0.163, bigLens: true },
    colors: [
      C('Titane noir', '#3c3c3d', { frame: '#4a4a4b' }), C('Titane blanc', '#f2f1ed', { frame: '#d2d0cb' }),
      C('Titane bleu', '#2f4452', { frame: '#3f5462' }), C('Titane naturel', '#bab4a9', { frame: '#aca79e' }),
    ],
  },
  // ── 2024 ────────────────────────────────────────────────────────────────
  {
    id: 'iphone-16', name: 'iPhone 16', year: 2024, tier: 'standard', chip: 'A18',
    display: '6,1 pouces · Super Retina XDR, Dynamic Island', cameras: '48 Mpx Fusion + 12 Mpx ultra grand-angle', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'USB‑C', ip: 'IP68',
    material: 'Verre teinté dans la masse et aluminium', dims: [147.6, 71.6, 7.8],
    design: { edge: 'contour', front: 'island', back: 'matte', cam: 'pill2', frame: 'alu', action: true, control: true, radius: 0.16 },
    colors: [C('Noir', '#3c4042'), C('Blanc', '#f7f7f6'), C('Rose', '#f1a7c8'), C('Sarcelle', '#a8d0c8'), C('Outremer', '#7484e3')],
  },
  {
    id: 'iphone-16-plus', name: 'iPhone 16 Plus', year: 2024, tier: 'plus', chip: 'A18',
    display: '6,7 pouces · Super Retina XDR, Dynamic Island', cameras: '48 Mpx Fusion + 12 Mpx ultra grand-angle', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'USB‑C', ip: 'IP68',
    material: 'Verre teinté dans la masse et aluminium', dims: [160.9, 77.8, 7.8],
    design: { edge: 'contour', front: 'island', back: 'matte', cam: 'pill2', frame: 'alu', action: true, control: true, radius: 0.16 },
    colors: [C('Noir', '#3c4042'), C('Blanc', '#f7f7f6'), C('Rose', '#f1a7c8'), C('Sarcelle', '#a8d0c8'), C('Outremer', '#7484e3')],
  },
  {
    id: 'iphone-16-pro', name: 'iPhone 16 Pro', year: 2024, tier: 'pro', chip: 'A18 Pro',
    display: '6,3 pouces · Super Retina XDR, ProMotion et toujours activé', cameras: '48 Mpx Fusion, 48 Mpx ultra grand-angle, 12 Mpx téléobjectif 5×', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go', '1 To'], auth: 'Face ID', port: 'USB‑C (USB 3)', ip: 'IP68',
    material: 'Titane et verre dépoli', dims: [149.6, 71.5, 8.25],
    design: { edge: 'contour', front: 'island', back: 'matte', cam: 'sq3', lidar: true, frame: 'titanium', action: true, control: true, radius: 0.163, bigLens: true },
    colors: [
      C('Titane noir', '#3d3d3b', { frame: '#4a4a48' }), C('Titane blanc', '#f2f1ec', { frame: '#d2d0cb' }),
      C('Titane naturel', '#c2bcb2', { frame: '#aea89e' }), C('Titane sable', '#c4a891', { frame: '#b39a84' }),
    ],
  },
  {
    id: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max', year: 2024, tier: 'promax', chip: 'A18 Pro',
    display: '6,9 pouces · Super Retina XDR, ProMotion et toujours activé', cameras: '48 Mpx Fusion, 48 Mpx ultra grand-angle, 12 Mpx téléobjectif 5×', front: '12 Mpx TrueDepth',
    storage: ['256 Go', '512 Go', '1 To'], auth: 'Face ID', port: 'USB‑C (USB 3)', ip: 'IP68',
    material: 'Titane et verre dépoli', dims: [163.0, 77.6, 8.25],
    design: { edge: 'contour', front: 'island', back: 'matte', cam: 'sq3', lidar: true, frame: 'titanium', action: true, control: true, radius: 0.163, bigLens: true },
    colors: [
      C('Titane noir', '#3d3d3b', { frame: '#4a4a48' }), C('Titane blanc', '#f2f1ec', { frame: '#d2d0cb' }),
      C('Titane naturel', '#c2bcb2', { frame: '#aea89e' }), C('Titane sable', '#c4a891', { frame: '#b39a84' }),
    ],
  },
  // ── 2025 ────────────────────────────────────────────────────────────────
  {
    id: 'iphone-16e', name: 'iPhone 16e', year: 2025, tier: 'e', chip: 'A18',
    display: '6,1 pouces · Super Retina XDR (OLED)', cameras: '48 Mpx Fusion', front: '12 Mpx TrueDepth',
    storage: ['128 Go', '256 Go', '512 Go'], auth: 'Face ID', port: 'USB‑C', ip: 'IP68',
    material: 'Verre et aluminium', dims: [146.7, 71.5, 7.8],
    design: { edge: 'flat', front: 'notch', notch: 'small', back: 'matte', cam: 'single16e', frame: 'alu', action: true, radius: 0.16 },
    colors: [C('Noir', '#333336'), C('Blanc', '#f5f5f3')],
  },
  {
    id: 'iphone-17', name: 'iPhone 17', year: 2025, tier: 'standard', chip: 'A19',
    display: '6,3 pouces · Super Retina XDR, ProMotion et toujours activé', cameras: '48 Mpx Fusion + 48 Mpx ultra grand-angle', front: '18 Mpx Center Stage',
    storage: ['256 Go', '512 Go'], auth: 'Face ID', port: 'USB‑C', ip: 'IP68',
    material: 'Verre et aluminium', dims: [149.6, 71.5, 7.95],
    design: { edge: 'contour', front: 'island', back: 'matte', cam: 'pill2', frame: 'alu', action: true, control: true, radius: 0.163 },
    colors: [C('Noir', '#303033'), C('Blanc', '#f4f4f1'), C('Bleu brume', '#a9bcd8'), C('Sauge', '#aab89c'), C('Lavande', '#cbbfe3')],
  },
  {
    id: 'iphone-air', name: 'iPhone Air', year: 2025, tier: 'air', chip: 'A19 Pro',
    display: '6,5 pouces · Super Retina XDR, ProMotion et toujours activé', cameras: '48 Mpx Fusion', front: '18 Mpx Center Stage',
    storage: ['256 Go', '512 Go', '1 To'], auth: 'Face ID', port: 'USB‑C', ip: 'IP68',
    material: 'Titane', dims: [156.2, 74.7, 5.64],
    design: { edge: 'flat', front: 'island', back: 'glass', cam: 'plateau1', frame: 'titanium', action: true, control: true, radius: 0.165 },
    colors: [
      C('Noir sidéral', '#2d2d2f', { frame: '#3a3a3c' }), C('Blanc nuage', '#f4f3ef', { frame: '#dcdad5' }),
      C('Or pâle', '#ebdcbf', { frame: '#d9c6a2' }), C('Bleu ciel', '#d8e6f2', { frame: '#c2d3e2' }),
    ],
  },
  {
    id: 'iphone-17-pro', name: 'iPhone 17 Pro', year: 2025, tier: 'pro', chip: 'A19 Pro',
    display: '6,3 pouces · Super Retina XDR, ProMotion et toujours activé', cameras: '48 Mpx Fusion, 48 Mpx ultra grand-angle, 48 Mpx téléobjectif 4×', front: '18 Mpx Center Stage',
    storage: ['256 Go', '512 Go', '1 To'], auth: 'Face ID', port: 'USB‑C (USB 3)', ip: 'IP68',
    material: 'Aluminium monocoque', dims: [150.0, 71.9, 8.75],
    design: { edge: 'contour', front: 'island', back: 'unibody', cam: 'plateau3', lidar: true, frame: 'alu', action: true, control: true, radius: 0.165, bigLens: true },
    colors: [C('Orange cosmique', '#e57a32'), C('Bleu intense', '#2f3b52'), C('Argent', '#e2e3e4')],
  },
  {
    id: 'iphone-17-pro-max', name: 'iPhone 17 Pro Max', year: 2025, tier: 'promax', chip: 'A19 Pro',
    display: '6,9 pouces · Super Retina XDR, ProMotion et toujours activé', cameras: '48 Mpx Fusion, 48 Mpx ultra grand-angle, 48 Mpx téléobjectif 4×', front: '18 Mpx Center Stage',
    storage: ['256 Go', '512 Go', '1 To', '2 To'], auth: 'Face ID', port: 'USB‑C (USB 3)', ip: 'IP68',
    material: 'Aluminium monocoque', dims: [163.4, 78.0, 8.75],
    design: { edge: 'contour', front: 'island', back: 'unibody', cam: 'plateau3', lidar: true, frame: 'alu', action: true, control: true, radius: 0.165, bigLens: true },
    colors: [C('Orange cosmique', '#e57a32'), C('Bleu intense', '#2f3b52'), C('Argent', '#e2e3e4')],
  },
  // ── 2026 ────────────────────────────────────────────────────────────────
  {
    id: 'iphone-17e', name: 'iPhone 17e', year: 2026, tier: 'e', chip: 'A19',
    display: '6,1 pouces · Super Retina XDR (OLED)', cameras: '48 Mpx Fusion', front: '12 Mpx',
    storage: ['256 Go', '512 Go'], auth: 'Face ID', port: 'USB‑C', ip: null,
    material: null, dims: null, dims3d: [146.7, 71.5, 7.8],
    design: { edge: 'flat', front: 'notch', notch: 'small', back: 'matte', cam: 'single16e', frame: 'alu', action: true, radius: 0.16 },
    colors: [C('Noir', '#333336'), C('Blanc', '#f5f5f3'), C('Rose pâle', '#efd1d5')],
  },
  {
    id: 'iphone-18-pro', name: 'iPhone 18 Pro', year: 2026, tier: 'pro', chip: 'A20 Pro',
    display: '6,3 pouces · Super Retina XDR, Dynamic Island réduite', cameras: '48 Mpx Fusion à ouverture variable, ultra grand-angle, téléobjectif', front: null,
    storage: null, auth: 'Face ID', port: 'USB‑C', ip: null,
    material: null, dims: null, dims3d: [150.0, 71.9, 8.75],
    design: { edge: 'contour', front: 'island', island: 'small', back: 'unibody', cam: 'plateau3', lidar: true, frame: 'alu', action: true, control: true, radius: 0.165, bigLens: true },
    colors: [C('Bordeaux', '#5c1f2b'), C('Glacier', '#cfe0ea'), C('Argent', '#e2e3e4'), C('Noir', '#2b2b2d')],
  },
  {
    id: 'iphone-18-pro-max', name: 'iPhone 18 Pro Max', year: 2026, tier: 'promax', chip: 'A20 Pro',
    display: '6,9 pouces · Super Retina XDR, Dynamic Island réduite', cameras: '48 Mpx Fusion à ouverture variable, ultra grand-angle, téléobjectif', front: null,
    storage: null, auth: 'Face ID', port: 'USB‑C', ip: null,
    material: null, dims: null, dims3d: [163.4, 78.0, 8.75],
    design: { edge: 'contour', front: 'island', island: 'small', back: 'unibody', cam: 'plateau3', lidar: true, frame: 'alu', action: true, control: true, radius: 0.165, bigLens: true },
    colors: [C('Bordeaux', '#5c1f2b'), C('Glacier', '#cfe0ea'), C('Argent', '#e2e3e4'), C('Noir', '#2b2b2d')],
  },
  {
    id: 'iphone-duo', name: 'iPhone Duo', year: 2026, tier: 'duo', chip: 'A20 Pro',
    display: 'Écran externe 5,4 pouces · écran interne pliable 7,6 pouces', cameras: 'Double 48 Mpx', front: '12 Mpx (écran externe)',
    storage: ['256 Go à 2 To'], auth: 'Touch ID (bouton latéral)', port: 'USB‑C', ip: null,
    material: null, dims: [117.8, 84.1, 11.3], dimsNote: 'plié ; 117,8 × 164,6 × 5,2 mm déplié',
    design: { edge: 'contour', front: 'island', island: 'dot', back: 'glass', cam: 'duo', frame: 'titanium', action: true, radius: 0.13, hinge: true },
    colors: [C('Star White', '#f2f1ee', { frame: '#d9d7d2' }), C('Night Sky', '#1f2433', { frame: '#2e3446' })],
  },
];

export const TIERS = {
  standard: 'Standard', plus: 'Plus', mini: 'mini', pro: 'Pro', promax: 'Pro Max', se: 'SE', e: 'Gamme e', air: 'Air', duo: 'Pliable',
};

export const FILTERS = [
  { id: 'all', label: 'Tous', test: () => true },
  { id: 'pro', label: 'Pro', test: (m) => m.tier === 'pro' || m.tier === 'promax' },
  { id: 'standard', label: 'Standard', test: (m) => ['standard', 'plus', 'mini'].includes(m.tier) },
  { id: 'compact', label: 'SE et e', test: (m) => m.tier === 'se' || m.tier === 'e' },
  { id: 'new', label: 'Air et Duo', test: (m) => m.tier === 'air' || m.tier === 'duo' },
];

export default IPHONES;
