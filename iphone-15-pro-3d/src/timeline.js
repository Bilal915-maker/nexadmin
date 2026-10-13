import { ANCHORS } from './phone.js';

/**
 * Un "plan" = pose caméra + pose du téléphone.
 *  target   : point visé, dans le repère LOCAL du téléphone (suit sa rotation)
 *  az / el  : azimut / élévation de la caméra autour de la cible (radians, repère monde)
 *  dist     : distance caméra → cible (sert aussi de distance de mise au point)
 *  rotY/X   : rotation du téléphone
 *  aperture : force de la profondeur de champ
 *  close    : 0 = plan large, 1 = gros plan (recul auto sur écrans portrait)
 */
const TAU = Math.PI * 2;
export const ROT_PERIOD = 2 * TAU; // la boucle fait 2 tours complets → raccord invisible
export const DURATION = 45;

const K = (t, target, az, el, dist, rotY, rotX, aperture, close) => ({ t, target, az, el, dist, rotY, rotX, aperture, close });

// Boucle : la dernière clé = la première + ROT_PERIOD (non répétée ici).
export const KEYS = [
  // 1. Plan héro : rotation lente à 360°
  K(0, ANCHORS.center, 0.0, 0.05, 40, 0, 0, 0.0006, 0),
  K(4, ANCHORS.center, 0.04, 0.07, 39, TAU / 3, 0, 0.0006, 0),
  K(8, ANCHORS.center, -0.04, 0.04, 38, (2 * TAU) / 3, 0.02, 0.0007, 0),
  K(12, ANCHORS.center, 0.0, 0.06, 36, TAU, 0, 0.0008, 0),
  // 2. Gros plan système photo (travelling latéral sur les objectifs)
  K(16.5, ANCHORS.cameras, 0.45, 0.2, 15, TAU + Math.PI - 0.3, 0.05, 0.0035, 1),
  K(21.5, ANCHORS.cameras, -0.2, 0.05, 11.5, TAU + Math.PI + 0.2, 0, 0.005, 1),
  // 3. Bouton Action + volume (panoramique vertical)
  K(26.5, [ANCHORS.action[0], 4.2, 0], 0.25, 0.12, 10, 2 * TAU + Math.PI / 2 - 0.5, 0, 0.0045, 1),
  K(31, [ANCHORS.action[0], 2.6, 0], -0.1, -0.02, 9.5, 2 * TAU + Math.PI / 2 - 0.3, 0, 0.005, 1),
  // 4. Bord inférieur : USB‑C, titane brossé
  K(35.5, ANCHORS.bottom, 0.35, 0.02, 10, 2 * TAU + 0.35, -0.6, 0.0045, 1),
  // 5. Retour face écran puis plan large
  K(40, ANCHORS.screen, -0.3, 0.08, 24, 2 * TAU - 0.3, 0.06, 0.0015, 0.3),
];

export const CAPTIONS = [
  { from: 0.6, to: 11.4, title: 'iPhone 15 Pro', sub: 'Titane naturel. Forgé pour durer.' },
  { from: 12.8, to: 21.4, title: 'Système photo Pro', sub: 'Trois objectifs. Un seul geste.' },
  { from: 22.6, to: 31, title: 'Bouton Action', sub: 'Votre raccourci, au bout du doigt.' },
  { from: 32, to: 39.4, title: 'USB‑C', sub: 'Bords contourés en titane brossé.' },
  { from: 40.4, to: 44.6, title: 'Pro. Jusqu’au bout.', sub: '' },
];

export const HOME = K(0, ANCHORS.center, 0, 0.05, 34, -0.35, 0, 0.0008, 0);

export const PRESETS = {
  overview: HOME,
  cameras: K(0, ANCHORS.cameras, 0.3, 0.15, 14, Math.PI - 0.25, 0.05, 0.004, 1),
  action: K(0, [ANCHORS.action[0], 3.3, 0], 0.2, 0.08, 10, Math.PI / 2 - 0.45, 0, 0.004, 1),
  titanium: K(0, ANCHORS.sideButton, 0.15, 0.25, 12, -Math.PI / 2 + 0.5, 0.05, 0.0035, 1),
  screen: K(0, ANCHORS.screen, 0, 0.04, 22, 0, 0, 0.0015, 0.3),
};

const SCALARS = ['az', 'el', 'dist', 'rotY', 'rotX', 'aperture', 'close'];

export function clonePose(p) {
  return { ...p, target: [...p.target] };
}

export function lerpPose(a, b, u, out = clonePose(a)) {
  for (const k of SCALARS) out[k] = a[k] + (b[k] - a[k]) * u;
  for (let i = 0; i < 3; i++) out.target[i] = a.target[i] + (b.target[i] - a.target[i]) * u;
  return out;
}

/** Ramène un angle au tour le plus proche d'une référence (évite les tours parasites). */
export function nearestAngle(angle, ref) {
  return angle + TAU * Math.round((ref - angle) / TAU);
}

// Accès cyclique aux clés (avec décalage de rotation à chaque boucle)
const N = KEYS.length;
function key(j) {
  const idx = ((j % N) + N) % N;
  const wraps = Math.floor(j / N);
  return { k: KEYS[idx], t: KEYS[idx].t + wraps * DURATION, rot: wraps * ROT_PERIOD };
}
function val(j, field, comp) {
  const { k, rot } = key(j);
  if (field === 'target') return k.target[comp];
  return k[field] + (field === 'rotY' ? rot : 0);
}

/**
 * Interpolation Hermite cubique (tangentes Catmull-Rom non uniformes) :
 * vitesse continue entre les plans → mouvements de caméra fluides, sans à-coups.
 */
export function sampleTimeline(time, out = clonePose(KEYS[0])) {
  const t = ((time % DURATION) + DURATION) % DURATION;
  let i = N - 1;
  for (let j = 0; j < N; j++) if (KEYS[j].t <= t) i = j;
  const t0 = key(i).t, t1 = key(i + 1).t, tm = key(i - 1).t, t2 = key(i + 2).t;
  const h = t1 - t0;
  const u = (t - t0) / h;
  const u2 = u * u, u3 = u2 * u;
  const h00 = 2 * u3 - 3 * u2 + 1, h10 = u3 - 2 * u2 + u, h01 = -2 * u3 + 3 * u2, h11 = u3 - u2;

  const interp = (field, comp) => {
    const pm = val(i - 1, field, comp), p0 = val(i, field, comp);
    const p1 = val(i + 1, field, comp), p2 = val(i + 2, field, comp);
    const m0 = ((p1 - pm) / (t1 - tm)) * h;
    const m1 = ((p2 - p0) / (t2 - t0)) * h;
    return h00 * p0 + h10 * m0 + h01 * p1 + h11 * m1;
  };
  for (const k of SCALARS) out[k] = interp(k);
  for (let c = 0; c < 3; c++) out.target[c] = interp('target', c);
  out.aperture = Math.max(0, out.aperture);
  out.close = Math.min(1, Math.max(0, out.close));
  return out;
}
