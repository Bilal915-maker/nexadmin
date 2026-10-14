# TECHVERSE — catalogue des produits Apple depuis 2016

Site Next.js qui recense les produits Apple commercialisés depuis le 1er janvier 2016 : familles, gammes, générations, modèles, variantes matérielles, couleurs d’origine, caractéristiques, prix de lancement et sources. Avec recherche, filtres par catégorie, comparateur, chronologie, scènes 3D procédurales et une administration sécurisée.

> Projet indépendant, non affilié à Apple Inc. Aucune image ni modèle 3D propriétaire n’est utilisé.

## État réel du projet (à lire d’abord)

| Élément | État |
|---|---|
| Fiches | **242** sur 10 familles, 120 générations (voir [`docs/INVENTAIRE.md`](docs/INVENTAIRE.md)) |
| Données vérifiées contre apple.com | **0**. apple.com et support.apple.com étaient inaccessibles depuis l’environnement de construction |
| Données 2016–2025 | Saisie éditoriale, statut **« À vérifier »** (222 fiches) |
| Données 2026 | Recoupées par recherche web (presse), statut **« Rapporté »** (20 fiches) |
| Couleurs | Noms officiels (marché US) ; les valeurs hexadécimales sont des **approximations visuelles** |
| Visuels 3D / 2D | **Représentations procédurales** générées à partir des dimensions : schématiques, jamais présentées comme exactes |
| Exhaustivité | **Non déclarée.** Lacunes connues : étuis et bracelets saisonniers, références commerciales (part numbers), une partie des câbles et adaptateurs, numéros de modèle 2024-2026, noms de couleurs français officiels |

La page `/inventaire` du site expose ces informations publiquement, famille par famille.

## Démarrage rapide (sans base de données)

Prérequis : Node.js 18.18+ (testé avec Node 22).

```bash
cd techverse
npm install
CATALOG_SOURCE=files npm run dev      # http://localhost:3100
```

En mode `files`, le site lit les données versionnées de `data/catalog/`. Aucune base n’est requise, mais l’administration est désactivée.

## Avec PostgreSQL (mode complet, administration incluse)

```bash
cp .env.example .env.local            # puis renseigner les valeurs
npm run db:migrate                    # applique prisma/migrations
npm run db:seed                       # importe data/catalog/** (idempotent)
npm run dev
```

Variables (`.env.example`) :

| Variable | Rôle |
|---|---|
| `DATABASE_URL` | Connexion PostgreSQL |
| `CATALOG_SOURCE` | `files` ou `database` (défaut : `database` si `DATABASE_URL` est défini) |
| `ADMIN_EMAIL` | E-mail de l’administrateur |
| `ADMIN_PASSWORD_HASH` | Hash scrypt : `npm run admin:hash -- "mot de passe de 12 caractères ou plus"` |
| `ADMIN_SESSION_SECRET` | 32 caractères aléatoires minimum : `openssl rand -base64 48` |
| `NEXT_PUBLIC_SITE_URL` | URL publique (sitemap, balises canoniques) |

Il n’existe **aucun identifiant par défaut** : sans ces trois variables, l’administration reste fermée.

## Scripts

| Commande | Effet |
|---|---|
| `npm run dev` / `build` / `start` | Développement, build de production, serveur de production (port 3100) |
| `npm run typecheck` | Vérification TypeScript |
| `npm test` | Tests unitaires (Vitest) : données, recherche, filtres, comparateur, import CSV/JSON, vérification de sources, authentification |
| `npm run test:e2e` | Tests navigateur (Playwright, desktop et mobile), après `npm run build` |
| `npm run catalog:check` | Contrôle d’intégrité des données : doublons, références cassées, champs manquants (`-- --verbose`) |
| `npm run catalog:export` | Export JSON des données fichiers (format d’import de l’admin) |
| `npm run sources:verify` | Vérification assistée des sources (voir plus bas) |
| `npm run db:migrate` / `db:seed` | Migrations Prisma et import des données |
| `npm run admin:hash -- "…"` | Génère `ADMIN_PASSWORD_HASH` |
| `npx tsx scripts/inventory-md.ts` | Régénère `docs/INVENTAIRE.md` |

Le test d’intégration PostgreSQL (aller-retour exact des 242 fiches) s’exécute quand `DATABASE_URL` est défini : `DATABASE_URL=… npx vitest run tests/unit/db-roundtrip.test.ts`.

## Architecture

```
techverse/
├── data/catalog/            Données sources, un fichier par famille (+ _define.ts : aides de saisie)
├── prisma/                  Schéma PostgreSQL, migrations, seed
├── src/
│   ├── app/                 Pages (App Router) et API
│   │   ├── page.tsx                 Accueil
│   │   ├── [family]/                Page famille + filtres
│   │   ├── [family]/[slug]/         Fiche produit (pré-générée)
│   │   ├── catalogue/  comparer/  chronologie/  inventaire/
│   │   ├── admin/                   Administration (protégée)
│   │   └── api/catalog/ · api/admin/
│   ├── components/
│   │   ├── three/           Moteur 3D : studio, générateurs procéduraux, scènes
│   │   ├── silhouette/      Silhouettes SVG calculées depuis les dimensions
│   │   ├── home/ catalog/ product/ compare/ admin/ layout/ ui/
│   ├── lib/catalog/         Types, schéma Zod, requêtes, intégrité, persistance, import, vérification
│   └── lib/auth/            scrypt, sessions JWT, limitation des tentatives, garde serveur
└── tests/unit · tests/e2e
```

**Modèle de données** (Prisma) : `ProductFamily` → `ProductGeneration` → `ProductModel`, avec `ProductVariant` (numéros de modèle Axxxx), `ProductSpecification` (clé/valeur par groupe), `ProductColor`, `ProductImage`, `ProductAsset3D`, `ProductCompatibility`, `ProductPrice`, `ProductSource`, plus `PendingProduct` (signalés non confirmés) et `AuditLog`. Les configurations commerciales (stockage, mémoire, couleur) sont des options d’un modèle, pas des modèles distincts.

**Accès aux données** : `getCatalog()` lit les fichiers ou PostgreSQL (cache Next invalidé à chaque écriture admin via `revalidateTag('catalog')`). Toute la logique (recherche, facettes, comparateur) travaille sur le même objet, quel que soit le stockage.

**Statuts de validation** :
- `confirmed` : confronté manuellement à la source officielle, avec date (exige au moins une source confirmée et datée, contrôlé côté serveur) ;
- `reported` : sources secondaires (presse) ;
- `unverified` : saisie éditoriale à vérifier.

## 3D et animations

- Three.js (r170), GSAP + ScrollTrigger. La 3D n’est chargée qu’à l’approche de la scène (import dynamique) : JS initial des pages ≈ 98 ko.
- Un générateur par type d’appareil (téléphone, tablette, portable, iMac, écran, boîtier, tour, montre, écouteurs, casque, enceinte, casque de réalité mixte, accessoires), paramétré par les dimensions documentées et la disposition (module photo, encoche / Dynamic Island, Touch Bar…).
- Éclairage de studio **blanc neutre** : les couleurs du site (violet, cyan) ne touchent jamais les appareils, seulement le décor.
- Interactions : rotation 360°, zoom, vues face / dos / profil / gros plan, finitions officielles, décomposition (couches internes explicitement schématiques), ouverture des portables et boîtiers, pliage de l’iPhone Duo, comparaison 3D côte à côte à l’échelle relative.
- Repli : silhouette SVG si WebGL est indisponible ; respect de `prefers-reduced-motion` (pas de rotation automatique ni d’animation de défilement).

## Administration

`/admin` (connexion `/admin/login`) — tableau de bord (contrôles d’intégrité, doublons, champs manquants, journal), liste filtrable, édition complète d’une fiche (couleurs, dimensions, prix, variantes, spécifications, compatibilités, images sous licence, modèles 3D, sources avec « Marquer vérifiée aujourd’hui », statut de validation), création et duplication, générations, import, export JSON.

Sécurité : mot de passe scrypt, session JWT HS256 en cookie `httpOnly` / `SameSite=Strict` / `Secure` en production (8 h), middleware + revérification dans chaque route, contrôle d’origine sur toute requête modifiante, 5 tentatives de connexion par 15 min et par IP, `noindex`, aucune clé dans le code.

### Import

L’import est toujours analysé avant application (créations, mises à jour, erreurs, doublons de nom, numéros de modèle déjà attribués) et refusé tant qu’une ligne est en erreur.

- **JSON** : tableau de fiches au format complet (celui de l’export).
- **CSV** (séparateur `,` ou `;`, guillemets RFC 4180) — en-tête :
  `slug,name,family,line,generation,announced,released,discontinued,status,summary,storageGB,ramGB,chips,screenInches,colors,prices,modelNumbers,heightMm,widthMm,depthMm,weightG,connector,os,sourceUrls,sourceType,sourceTitle,validation,visualKind,visualParams`
  Listes séparées par `|`. Couleurs `Nom:#hex[:finition]`. Prix `MARCHÉ:montant[:configuration[:date]]`. La génération doit exister.

## Vérifier et enrichir les données

1. Depuis une machine qui accède à apple.com : `npm run sources:verify -- --family iphone`. Le script télécharge chaque source citée et indique quelles valeurs saisies (poids, dimensions, couleurs, puce) y figurent. Rapport dans `data/.sources-cache/`. Il ne modifie aucune fiche.
2. Dans l’admin, ouvrir la fiche, corriger, ajouter l’URL de la fiche technique Apple exacte, cliquer « Marquer vérifiée aujourd’hui », passer la fiche en `confirmed`, enregistrer.
3. Pour un nouveau produit : créer la génération, puis la fiche (ou dupliquer `?depuis=<slug>`), ou importer un CSV.
4. Pour versionner le travail fait en base : export JSON depuis l’admin.

## Déploiement (Vercel)

Le projet vit dans le sous-dossier `techverse/` du dépôt `nexadmin` (qui contient une autre application à la racine). Créer un **projet Vercel distinct** :

1. Importer le dépôt, **Root Directory = `techverse`**, framework Next.js.
2. Variables : `NEXT_PUBLIC_SITE_URL`, puis pour le mode complet `DATABASE_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`, `ADMIN_SESSION_SECRET` (PostgreSQL managé : Neon, Supabase, Vercel Postgres…).
3. Commande de build en mode base : `prisma migrate deploy && prisma generate && next build` (lancer `npm run db:seed` une fois).
4. Sans base : `CATALOG_SOURCE=files`, le site fonctionne en lecture seule.

Pages statiques : accueil, familles, 242 fiches (revalidation 10 min, et immédiate après une modification dans l’admin).

## Accessibilité et performance

Navigation clavier (lien d’évitement, recherche ⌘K / Ctrl+K, flèches pour la chronologie et la 3D), libellés ARIA sur les scènes et les filtres, contraste élevé, aucune information portée par la seule couleur, mise en page mobile sans défilement horizontal (testé), chargement différé de la 3D, pause du rendu hors écran et onglet masqué.

## Limites connues

- Aucune donnée n’a encore été confrontée à apple.com (voir plus haut) : c’est la priorité avant toute publication grand public.
- Les visuels sont des schémas procéduraux ; seuls des modèles 3D ou images sous licence ajoutés via l’admin peuvent prétendre à l’exactitude.
- Le rendu 3D est vérifié dans Chromium (rendu logiciel SwiftShader) ; à contrôler sur Safari iOS et sur des GPU d’entrée de gamme.
- La limitation des tentatives de connexion est en mémoire : elle se réinitialise à chaque redémarrage et n’est pas partagée entre instances serverless.
