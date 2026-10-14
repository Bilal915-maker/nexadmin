/**
 * Point d'entrée des données « fichiers » du catalogue.
 * Chaque famille vit dans son propre module ; ce fichier ne fait qu'agréger.
 */
import type { Catalog, PendingItem, ProductGeneration, ProductModel } from '../../src/lib/catalog/types'
import { press } from './_define'
import * as accessories from './accessories'
import * as audio from './audio'
import * as displays from './displays'
import { families } from './families'
import * as home from './home'
import * as ipad from './ipad'
import * as iphone from './iphone'
import * as mac from './mac'
import * as other from './other'
import * as watch from './watch'

export const generations: ProductGeneration[] = [
  ...iphone.generations,
  ...ipad.generations,
  ...mac.generations,
  ...watch.generations,
  ...audio.generations,
  ...displays.generations,
  ...home.generations,
  ...accessories.generations,
  ...other.visionGenerations,
  ...other.otherGenerations,
]

export const models: ProductModel[] = [
  ...iphone.models,
  ...ipad.models,
  ...mac.models,
  ...watch.models,
  ...audio.models,
  ...displays.models,
  ...home.models,
  ...accessories.models,
  ...other.visionModels,
  ...other.otherModels,
]

/** Produits signalés mais non intégrés faute de confirmation suffisante. */
export const pending: PendingItem[] = [
  {
    name: 'Produits « maison » (HomePod mini, Apple TV, écran domestique)',
    family: 'tv-maison',
    reason: 'Annonces évoquées par la presse pour le 13 octobre 2026 ; aucune confirmation officielle dans les sources consultées.',
    sources: [press('https://www.macrumors.com/2026/09/21/apple-event-october-2026-what-to-expect', 'MacRumors — Apple event this October? What to expect')],
  },
  {
    name: 'iMac M6 et MacBook Pro 14 pouces M6',
    family: 'mac',
    reason: 'Rumeurs pour fin octobre 2026, non confirmées à la date de référence.',
    sources: [press('https://www.macrumors.com/2026/09/22/apple-event-october-2026-what-to-expect/', 'MacRumors — Apple event this October? What to expect')],
  },
  {
    name: 'iPad mini OLED (A20 Pro)',
    family: 'ipad',
    reason: 'Rumeur, non confirmée à la date de référence.',
    sources: [press('https://www.digit.in/news/general/apples-october-2026-launch-roadmap-leaked-from-smart-home-devices-to-oled-ipad-mini-here-is-what-to-expect.html', 'Digit — October 2026 roadmap leaked')],
  },
  {
    name: 'Apple Watch SE (2026)',
    family: 'apple-watch',
    reason: 'Aucune source trouvée mentionnant une nouvelle Apple Watch SE en 2026.',
    sources: [],
  },
]

export const filesCatalog: Omit<Catalog, 'source' | 'loadedAt'> = { families, generations, models, pending }
