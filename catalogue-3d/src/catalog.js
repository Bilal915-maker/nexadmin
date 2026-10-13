import { createPhone } from './phone.js';
import {
  createIPad, createMacBook, createIMac, createWatch,
  createAirPods, createVisionPro, createHomePod, createAirTag,
} from './products.js';

/**
 * size  : encombrement visé (unités scène) après normalisation
 * rot   : [inclinaison X, rotation Y de départ]
 * spin  : rotation ajoutée sur la hauteur de la section (radians)
 */
export const PRODUCTS = [
  {
    id: 'iphone', family: 'iPhone', name: 'iPhone 15 Pro', create: createPhone, size: 15, rot: [0.04, -0.55], spin: Math.PI * 1.4,
    tagline: 'Du titane, une puce Pro, un bouton qui fait ce que vous voulez.',
    points: ['Cadre en titane', 'Puce A17 Pro', 'Bouton Action et USB‑C'],
  },
  {
    id: 'ipad', family: 'iPad', name: 'iPad Pro', create: createIPad, size: 15.5, rot: [0.08, 0.5], spin: Math.PI * 1.2,
    tagline: 'Une plaque d’aluminium de 5,1 mm qui fait tourner une station de travail.',
    points: ['Écran Ultra Retina XDR', 'Puce M4', 'Smart Connector pour clavier'],
  },
  {
    id: 'macbook', family: 'Mac', name: 'MacBook Pro', create: createMacBook, size: 17, rot: [0.32, -0.6], spin: Math.PI * 0.6,
    tagline: 'Le portable des gens qui livrent. Écran XDR, clavier pleine taille, MagSafe.',
    points: ['Écran Liquid Retina XDR', 'Magic Keyboard avec Touch ID', 'Charge MagSafe'],
  },
  {
    id: 'imac', family: 'Mac', name: 'iMac', create: createIMac, size: 16, rot: [0.06, -0.45], spin: Math.PI * 0.7,
    tagline: 'Un écran 4,5K posé sur un pied, dans une couleur franche.',
    points: ['Écran Retina 4,5K de 24 pouces', 'Châssis de 11,5 mm', 'Coloris vifs'],
  },
  {
    id: 'watch', family: 'Watch', name: 'Apple Watch', create: createWatch, size: 14, rot: [0.12, -0.5], spin: Math.PI * 1.3,
    tagline: 'L’heure, l’activité et la santé, au poignet.',
    points: ['Écran toujours activé', 'Couronne Digitale', 'Anneaux d’activité'],
  },
  {
    id: 'airpods', family: 'AirPods', name: 'AirPods Pro', create: createAirPods, size: 15, rot: [0.15, -0.3], spin: Math.PI * 0.9,
    tagline: 'Le silence quand vous le voulez, le monde quand vous en avez besoin.',
    points: ['Réduction active du bruit', 'Audio spatial', 'Boîtier de charge USB‑C'],
  },
  {
    id: 'vision', family: 'Vision', name: 'Apple Vision Pro', create: createVisionPro, size: 15, rot: [0.18, -0.55], spin: Math.PI * 1.1,
    tagline: 'Un ordinateur qui se porte, et des apps qui flottent dans votre pièce.',
    points: ['Écrans micro‑OLED', 'visionOS', 'Bandeau Solo Knit'],
  },
  {
    id: 'homepod', family: 'Maison', name: 'HomePod mini', create: createHomePod, size: 11, rot: [0.2, 0.3], spin: Math.PI * 0.8,
    tagline: 'Une petite sphère qui remplit la pièce.',
    points: ['Son à 360°', 'Siri intégré', 'Surface tactile lumineuse'],
  },
  {
    id: 'airtag', family: 'Accessoires', name: 'AirTag', create: createAirTag, size: 9, rot: [0.35, -0.4], spin: Math.PI * 1.6,
    tagline: 'Accrochez-le à vos clés. Retrouvez-les depuis votre téléphone.',
    points: ['Réseau Localiser', 'Pile remplaçable', 'Résistance IP67'],
  },
];
