import * as THREE from 'three';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')];
}

function toTexture(c, renderer) {
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  tex.needsUpdate = true;
  return tex;
}

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/**
 * Écran de verrouillage : fond d'écran, heure, Dynamic Island, indicateur d'accueil.
 * glassW / glassH = taille réelle du verre (unités scène), bezel et rayon dans les mêmes unités.
 */
export function makeScreenTexture(renderer, glassW, glassH, bezel, radius) {
  const W = 1024;
  const H = Math.round((W * glassH) / glassW);
  const px = W / glassW;
  const [c, ctx] = canvas(W, H);

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, H);

  const b = bezel * px;
  const sx = b, sy = b, sw = W - 2 * b, sh = H - 2 * b;
  const sr = Math.max(8, (radius - bezel) * px);

  ctx.save();
  roundRectPath(ctx, sx, sy, sw, sh, sr);
  ctx.clip();

  // Fond d'écran : dégradé profond + halos colorés (tons titane / bleu nuit)
  const bg = ctx.createLinearGradient(0, sy, 0, sy + sh);
  bg.addColorStop(0, '#0d0f16');
  bg.addColorStop(0.55, '#141019');
  bg.addColorStop(1, '#07080b');
  ctx.fillStyle = bg;
  ctx.fillRect(sx, sy, sw, sh);

  const blobs = [
    [0.2, 0.28, 0.75, 'rgba(201,182,150,0.55)'],
    [0.85, 0.5, 0.7, 'rgba(70,96,160,0.55)'],
    [0.35, 0.82, 0.8, 'rgba(120,70,140,0.45)'],
    [0.75, 0.12, 0.45, 'rgba(230,214,190,0.25)'],
  ];
  for (const [bx, by, br, col] of blobs) {
    const g = ctx.createRadialGradient(sx + bx * sw, sy + by * sh, 0, sx + bx * sw, sy + by * sh, br * sw);
    g.addColorStop(0, col);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(sx, sy, sw, sh);
  }

  // Lignes fluides façon fond d'écran "titane"
  ctx.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 14; i++) {
    ctx.beginPath();
    const y0 = sy + sh * (0.45 + i * 0.022);
    ctx.moveTo(sx - 20, y0);
    ctx.bezierCurveTo(sx + sw * 0.3, y0 - sh * 0.18, sx + sw * 0.65, y0 + sh * 0.16, sx + sw + 20, y0 - sh * 0.08);
    ctx.strokeStyle = `rgba(${200 - i * 6},${185 - i * 4},${170 + i * 3},${0.05 + 0.012 * (14 - i)})`;
    ctx.lineWidth = 3 + i * 0.6;
    ctx.stroke();
  }
  ctx.globalCompositeOperation = 'source-over';

  const font = '-apple-system, "SF Pro Display", "Helvetica Neue", Inter, Arial, sans-serif';

  // Barre d'état
  ctx.fillStyle = 'rgba(255,255,255,0.95)';
  ctx.font = `600 ${sw * 0.042}px ${font}`;
  ctx.textBaseline = 'middle';
  const statusY = sy + sh * 0.031;
  ctx.textAlign = 'left';
  ctx.fillText('9:41', sx + sw * 0.11, statusY);
  // réseau
  for (let i = 0; i < 4; i++) {
    const bw = sw * 0.009, gap = sw * 0.004;
    const bh = sw * (0.012 + i * 0.006);
    ctx.fillRect(sx + sw * 0.73 + i * (bw + gap), statusY + sw * 0.016 - bh, bw, bh);
  }
  // batterie
  const btx = sx + sw * 0.83, bty = statusY - sw * 0.013, btw = sw * 0.06, bth = sw * 0.026;
  ctx.strokeStyle = 'rgba(255,255,255,0.5)';
  ctx.lineWidth = 2;
  roundRectPath(ctx, btx, bty, btw, bth, bth * 0.3);
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.95)';
  roundRectPath(ctx, btx + 3, bty + 3, (btw - 6) * 0.86, bth - 6, bth * 0.2);
  ctx.fill();

  // Date + heure (écran verrouillé)
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(255,255,255,0.82)';
  ctx.font = `500 ${sw * 0.052}px ${font}`;
  ctx.fillText('mardi 12 septembre', sx + sw / 2, sy + sh * 0.135);
  ctx.fillStyle = 'rgba(255,255,255,0.96)';
  ctx.font = `200 ${sw * 0.3}px ${font}`;
  ctx.fillText('9:41', sx + sw / 2, sy + sh * 0.225);

  // Widgets discrets
  ctx.fillStyle = 'rgba(255,255,255,0.10)';
  for (let i = 0; i < 3; i++) {
    const cx = sx + sw * (0.3 + i * 0.2);
    ctx.beginPath();
    ctx.arc(cx, sy + sh * 0.33, sw * 0.07, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.7)';
  ctx.lineWidth = 5;
  for (let i = 0; i < 3; i++) {
    const cx = sx + sw * (0.3 + i * 0.2);
    ctx.beginPath();
    ctx.arc(cx, sy + sh * 0.33, sw * 0.05, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (0.45 + i * 0.2));
    ctx.stroke();
  }

  // Raccourcis lampe torche / appareil photo
  for (const side of [-1, 1]) {
    const cx = sx + sw / 2 + side * sw * 0.36;
    const cy = sy + sh * 0.92;
    ctx.fillStyle = 'rgba(40,40,46,0.6)';
    ctx.beginPath();
    ctx.arc(cx, cy, sw * 0.065, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.beginPath();
    ctx.arc(cx, cy, sw * 0.018, 0, Math.PI * 2);
    ctx.fill();
  }

  // Indicateur d'accueil
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  roundRectPath(ctx, sx + sw * 0.33, sy + sh * 0.978, sw * 0.34, sh * 0.006, sh * 0.003);
  ctx.fill();

  // Dynamic Island
  const diW = sw * 0.32, diH = sh * 0.043;
  const diX = sx + (sw - diW) / 2, diY = sy + sh * 0.013;
  ctx.fillStyle = '#000';
  roundRectPath(ctx, diX, diY, diW, diH, diH / 2);
  ctx.fill();
  // lentille caméra frontale dans l'île
  const lg = ctx.createRadialGradient(diX + diW * 0.8, diY + diH / 2, 0, diX + diW * 0.8, diY + diH / 2, diH * 0.3);
  lg.addColorStop(0, '#1b2440');
  lg.addColorStop(0.6, '#0a0d18');
  lg.addColorStop(1, '#000');
  ctx.fillStyle = lg;
  ctx.beginPath();
  ctx.arc(diX + diW * 0.8, diY + diH / 2, diH * 0.3, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
  return toTexture(c, renderer);
}

/** Verre d'objectif : éléments concentriques, reflets bleu/violet, pupille. */
export function makeLensTexture(renderer) {
  const S = 512;
  const [c, ctx] = canvas(S, S);
  const m = S / 2;
  ctx.fillStyle = '#020203';
  ctx.fillRect(0, 0, S, S);

  const g = ctx.createRadialGradient(m, m, S * 0.04, m, m, S * 0.5);
  g.addColorStop(0, '#000000');
  g.addColorStop(0.25, '#0a0e1d');
  g.addColorStop(0.55, '#141a33');
  g.addColorStop(0.8, '#07080d');
  g.addColorStop(0.93, '#18181c');
  g.addColorStop(1, '#050505');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(m, m, m, 0, Math.PI * 2);
  ctx.fill();

  const rings = [
    [0.9, 'rgba(120,120,130,0.35)', 3],
    [0.78, 'rgba(70,90,170,0.35)', 4],
    [0.66, 'rgba(140,90,200,0.28)', 3],
    [0.52, 'rgba(60,110,190,0.35)', 5],
    [0.4, 'rgba(110,80,170,0.3)', 3],
    [0.28, 'rgba(50,70,140,0.45)', 4],
  ];
  for (const [r, col, lw] of rings) {
    ctx.beginPath();
    ctx.arc(m, m, r * m, 0, Math.PI * 2);
    ctx.strokeStyle = col;
    ctx.lineWidth = lw;
    ctx.stroke();
  }

  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(m, m, 0.17 * m, 0, Math.PI * 2);
  ctx.fill();

  // reflets en croissant
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'rgba(190,200,255,0.22)';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(m, m, 0.6 * m, -2.5, -1.5);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(200,150,255,0.18)';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(m, m, 0.36 * m, 0.6, 1.4);
  ctx.stroke();

  return toTexture(c, renderer);
}

/** Flash True Tone : diffuseur crème avec anneaux de Fresnel. */
export function makeFlashTexture(renderer) {
  const S = 256;
  const [c, ctx] = canvas(S, S);
  const m = S / 2;
  const g = ctx.createRadialGradient(m, m, 0, m, m, m);
  g.addColorStop(0, '#efe9d6');
  g.addColorStop(0.8, '#d6cfb8');
  g.addColorStop(1, '#a9a28f');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, S, S);
  for (let r = 8; r < m; r += 7) {
    ctx.beginPath();
    ctx.arc(m, m, r, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(80,70,50,0.12)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  return toTexture(c, renderer);
}

/** Dégradé radial utilisé pour le fond studio et la lueur au sol. */
export function makeGlowTexture(renderer, inner, outer = 'rgba(0,0,0,0)') {
  const S = 512;
  const [c, ctx] = canvas(S, S);
  const g = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  g.addColorStop(0, inner);
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, S, S);
  return toTexture(c, renderer);
}

/** Micro-grain pour le verre arrière dépoli (carte de rugosité). */
export function makeFrostTexture(renderer) {
  const S = 256;
  const [c, ctx] = canvas(S, S);
  const img = ctx.createImageData(S, S);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 150 + Math.random() * 70;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(6, 12);
  return tex;
}

const UI_FONT = '-apple-system, "SF Pro Display", "Helvetica Neue", Arial, sans-serif';

function wallpaper(ctx, x, y, w, h, colors) {
  const bg = ctx.createLinearGradient(x, y, x, y + h);
  bg.addColorStop(0, colors[0]);
  bg.addColorStop(1, colors[1]);
  ctx.fillStyle = bg;
  ctx.fillRect(x, y, w, h);
  const blobs = [[0.2, 0.3, 0.7, colors[2]], [0.85, 0.55, 0.65, colors[3]], [0.4, 0.9, 0.7, colors[4]]];
  for (const [bx, by, br, col] of blobs) {
    const g = ctx.createRadialGradient(x + bx * w, y + by * h, 0, x + bx * w, y + by * h, br * Math.max(w, h));
    g.addColorStop(0, col);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x, y, w, h);
  }
}

/**
 * Écran générique : 'ipad' (verrouillage), 'mac' / 'imac' (bureau), 'watch' (cadran).
 */
export function makeDisplayTexture(renderer, glassW, glassH, { bezel, radius, kind, bezelColor = '#000', notch = false }) {
  const maxDim = 2048;
  const s = maxDim / Math.max(glassW, glassH);
  const W = Math.round(glassW * s), H = Math.round(glassH * s);
  const [c, ctx] = canvas(W, H);
  ctx.fillStyle = bezelColor;
  ctx.fillRect(0, 0, W, H);
  const b = bezel * s;
  const sx = b, sy = b, sw = W - 2 * b, sh = H - 2 * b;
  ctx.save();
  roundRectPath(ctx, sx, sy, sw, sh, Math.max(6, (radius - bezel) * s));
  ctx.clip();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (kind === 'watch') {
    ctx.fillStyle = '#000';
    ctx.fillRect(sx, sy, sw, sh);
    ctx.fillStyle = '#ff9f0a';
    ctx.font = `600 ${sw * 0.1}px ${UI_FONT}`;
    ctx.fillText('MAR. 13', sx + sw / 2, sy + sh * 0.16);
    ctx.fillStyle = '#fff';
    ctx.font = `600 ${sw * 0.34}px ${UI_FONT}`;
    ctx.fillText('10:09', sx + sw / 2, sy + sh * 0.4);
    const rings = [['#fa114f', 0.78], ['#a6ff00', 0.62], ['#00d8fe', 0.9]];
    const cx = sx + sw / 2, cy = sy + sh * 0.76;
    rings.forEach(([col, p], i) => {
      const r = sw * (0.17 - i * 0.045);
      ctx.lineWidth = sw * 0.035;
      ctx.lineCap = 'round';
      ctx.strokeStyle = col + '44';
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
      ctx.strokeStyle = col;
      ctx.beginPath(); ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * p); ctx.stroke();
    });
  } else if (kind === 'ipad') {
    wallpaper(ctx, sx, sy, sw, sh, ['#0d0b14', '#120d10', 'rgba(255,120,90,0.55)', 'rgba(120,80,220,0.6)', 'rgba(255,190,120,0.35)']);
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = `500 ${sw * 0.034}px ${UI_FONT}`;
    ctx.fillText('mardi 13 octobre', sx + sw / 2, sy + sh * 0.1);
    ctx.font = `200 ${sw * 0.2}px ${UI_FONT}`;
    ctx.fillText('9:41', sx + sw / 2, sy + sh * 0.18);
    ctx.font = `600 ${sw * 0.022}px ${UI_FONT}`;
    ctx.textAlign = 'left';
    ctx.fillText('9:41', sx + sw * 0.03, sy + sh * 0.015);
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    roundRectPath(ctx, sx + sw * 0.4, sy + sh * 0.985, sw * 0.2, sh * 0.005, sh * 0.0025);
    ctx.fill();
  } else {
    // Bureau macOS générique (sans logo de marque)
    wallpaper(ctx, sx, sy, sw, sh, kind === 'imac'
      ? ['#0b2a5e', '#06122b', 'rgba(80,170,255,0.75)', 'rgba(40,90,220,0.7)', 'rgba(140,220,255,0.45)']
      : ['#140a24', '#05060c', 'rgba(200,90,255,0.6)', 'rgba(60,120,255,0.6)', 'rgba(255,130,90,0.35)']);
    const mb = sh * 0.03;
    ctx.fillStyle = 'rgba(0,0,0,0.28)';
    ctx.fillRect(sx, sy, sw, mb);
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.font = `600 ${mb * 0.5}px ${UI_FONT}`;
    ctx.textAlign = 'left';
    ['Finder', 'Fichier', 'Édition', 'Présentation', 'Aller', 'Fenêtre', 'Aide'].reduce((x, label, i) => {
      ctx.font = `${i === 0 ? 700 : 500} ${mb * 0.5}px ${UI_FONT}`;
      ctx.fillText(label, x, sy + mb / 2);
      return x + ctx.measureText(label).width + mb * 0.9;
    }, sx + mb * 0.8);
    ctx.textAlign = 'right';
    ctx.fillText('mar. 13 oct.  9:41', sx + sw - mb * 0.8, sy + mb / 2);
    // fenêtre
    const wx = sx + sw * 0.18, wy = sy + sh * 0.16, ww = sw * 0.5, wh = sh * 0.52;
    ctx.fillStyle = 'rgba(28,28,34,0.82)';
    roundRectPath(ctx, wx, wy, ww, wh, sh * 0.015); ctx.fill();
    ['#ff5f57', '#febc2e', '#28c840'].forEach((col, i) => {
      ctx.fillStyle = col;
      ctx.beginPath(); ctx.arc(wx + sh * (0.03 + i * 0.025), wy + sh * 0.03, sh * 0.008, 0, Math.PI * 2); ctx.fill();
    });
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    for (let i = 0; i < 6; i++) {
      roundRectPath(ctx, wx + ww * 0.06, wy + wh * (0.16 + i * 0.12), ww * (0.88 - (i % 3) * 0.18), wh * 0.06, sh * 0.006);
      ctx.fill();
    }
    // Dock
    const n = 11, ic = sh * 0.06, gap = ic * 0.22;
    const dw = n * ic + (n + 1) * gap, dh = ic + gap * 2;
    const dx = sx + (sw - dw) / 2, dy = sy + sh - dh - sh * 0.012;
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    roundRectPath(ctx, dx, dy, dw, dh, dh * 0.3); ctx.fill();
    const icons = ['#1e90ff', '#34c759', '#ff9500', '#ff2d55', '#5856d6', '#ffcc00', '#00c7be', '#af52de', '#ff3b30', '#8e8e93', '#30b0c7'];
    icons.forEach((col, i) => {
      const g = ctx.createLinearGradient(0, dy, 0, dy + ic);
      g.addColorStop(0, col);
      g.addColorStop(1, '#00000055');
      ctx.fillStyle = col;
      roundRectPath(ctx, dx + gap + i * (ic + gap), dy + gap, ic, ic, ic * 0.24); ctx.fill();
      ctx.fillStyle = g;
      roundRectPath(ctx, dx + gap + i * (ic + gap), dy + gap, ic, ic, ic * 0.24); ctx.fill();
    });
    if (notch) {
      const nw = sw * 0.1, nh = mb * 1.05;
      ctx.fillStyle = '#000';
      roundRectPath(ctx, sx + (sw - nw) / 2, sy - nh, nw, nh * 2, nh * 0.45); ctx.fill();
    }
  }
  ctx.restore();
  return toTexture(c, renderer);
}

/** Tricot (bandeau, tissu) : rayures fines + grain. */
export function makeKnitTexture(renderer, base = '#3a3b3f', repeat = [8, 2]) {
  const S = 256;
  const [c, ctx] = canvas(S, S);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, S, S);
  for (let y = 0; y < S; y += 4) {
    ctx.fillStyle = `rgba(255,255,255,${0.04 + (y % 8 ? 0 : 0.05)})`;
    ctx.fillRect(0, y, S, 2);
  }
  for (let i = 0; i < 3000; i++) {
    ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.12})`;
    ctx.fillRect(Math.random() * S, Math.random() * S, 2, 1);
  }
  const tex = toTexture(c, renderer);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(...repeat);
  return tex;
}

/** Maillage acoustique (relief) pour le HomePod mini. */
export function makeMeshBump(renderer) {
  const S = 128;
  const [c, ctx] = canvas(S, S);
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, S, S);
  ctx.fillStyle = '#ffffff';
  for (let y = 0; y < S; y += 8) {
    for (let x = (y / 8) % 2 ? 4 : 0; x < S; x += 8) {
      ctx.beginPath(); ctx.arc(x + 2, y + 2, 2.2, 0, Math.PI * 2); ctx.fill();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

/** Halo lumineux multicolore (surface tactile). */
export function makeSwirlTexture(renderer) {
  const S = 512;
  const [c, ctx] = canvas(S, S);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, S, S);
  ctx.globalCompositeOperation = 'lighter';
  [['rgba(255,60,160,0.75)', 0.38, 0.42], ['rgba(60,140,255,0.8)', 0.62, 0.45], ['rgba(255,170,40,0.6)', 0.5, 0.62]].forEach(([col, x, y]) => {
    const g = ctx.createRadialGradient(S * x, S * y, 0, S * x, S * y, S * 0.32);
    g.addColorStop(0, col);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, S, S);
  });
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = 'rgba(255,255,255,0.75)';
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(S * 0.5, S * 0.12); ctx.lineTo(S * 0.5, S * 0.22); ctx.moveTo(S * 0.45, S * 0.17); ctx.lineTo(S * 0.55, S * 0.17); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(S * 0.45, S * 0.83); ctx.lineTo(S * 0.55, S * 0.83); ctx.stroke();
  return toTexture(c, renderer);
}

/** Grille de perçages (haut-parleurs) en alpha. */
export function makeDotsTexture(renderer, cols = 8, rows = 60) {
  const W = cols * 8, H = rows * 8;
  const [c, ctx] = canvas(W, H);
  ctx.fillStyle = '#fff';
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    ctx.beginPath(); ctx.arc(x * 8 + 4, y * 8 + 4, 1.6, 0, Math.PI * 2); ctx.fill();
  }
  return new THREE.CanvasTexture(c);
}
