---
name: studeria-intel
description: |
  Intelligence extraite des lives "Challenge IA 2026" de Studeria (juin 2026 — J1, J2, J3). 
  Déclenche cette compétence quand Bilal pose des questions sur : les outils IA du marché, 
  les méthodes de création d'agents, la prospection automatisée, le branding LinkedIn, 
  la génération de vidéos IA, les arguments de vente pour NexAdmin, ou la stratégie 
  concurrentielle Studeria. Contient les extractions terrain brutes + ce qui est actionnable 
  pour NexAdmin.
---

# STUDERIA INTEL — Challenge IA 2026 (J1 + J2 + J3)

## PROFIL STUDERIA (concurrent / référence)
- Fondé 2022/2023, Qualiopi-certifié, 5000+ personnes accompagnées, 200+ entreprises
- Co-fondateurs : Guillaume Liesse (CEO), Youes Belcaraf (CTO / démo technique)
- Modèle : 2 Sommets IA/an → 5 lives gratuits → closing vers Accélérateur (B2C) ou Parcours Consultant IA
- Funnel : live gratuit 3h (forte valeur démo) → "coût de l'inaction" → session stratégique 45min gratuite → offre payante
- Tarifs sortie accompagnement : 450-850€/jour TJM consultant IA
- Urgence : "100 places", replay expire 48h, calendrier ferme en fin de semaine
- Partenaire officiel Make.com (30 personnes en France)

---

## STACK TECHNIQUE OBSERVÉ EN LIVE

### Outils démontrés
- **Claude Cowork** : interface avec "tâches programmées" (agents récurrents autonomes, tournent même ordi éteint)
- **Claude Code** : terminal pour exécuter du code, connecter APIs, générer fichiers/vidéos
- **Claude Chat** : interface classique avec connecteurs MCP
- **Skills Claude** (compétences) : prompts structurés persistants, invocables par `/[nom]`, créés via `/skill creator`
- **Apify** : banque de scrapers web connectables à Claude via MCP. Gratuit = 5 crédits/mois. Cas d'usage : récupérer top 10 posts LinkedIn viraux d'un secteur + stats engagement (likes, commentaires, partages). Connecteur disponible dans Claude marketplace.
- **Clay** : sourcing prospects B2B en langage naturel avec filtres (taille entreprise, signal faible = prise de poste <12 mois). Export CSV. Gratuit jusqu'à 100 lignes/mois.
- **Airtable** : base de données centrale (CRM/ERP). Version gratuite disponible. Connecteur MCP Claude natif. Claude peut créer colonnes, importer CSV, scorer prospects, créer tables — tout sans toucher l'interface.
- **Notion** : stockage des outputs (briefs quotidiens, posts, veille). Connecteur MCP Claude natif.
- **Unipile** : outil français (hébergé EU), connecteur multicanal LinkedIn/WhatsApp/Instagram/Gmail/Outlook pour prospection automatisée. Payant. LinkedIn : 5-8 ajouts/jour gratuit, 80 premium.
- **Lixi** : transcription appels visio automatique (Zoom/Meet/Teams). Belge, ISO 27001, RGPD. Dépose résumé + transcript structuré. Payant.
- **Xfield** : agrégateur de générateurs images/vidéos IA (centralise Runway, Kling, Stable Diffusion, etc.). ~29-39€/mois pour 1000-2500 crédits. Connecté à Claude Code via MCP. Permet de générer vidéos marketing depuis Claude directement. Cas d'usage démontré : vidéo produit gel douche en FR + IT depuis 2 photos produit, 8 secondes, voix générée, format vertical.
- **Make.com** : automatisation workflow. Partenaire Studeria officiel.
- **N8N** : alternative open-source à Make.

### Connecteurs MCP Claude disponibles
- Gmail, Google Calendar, Slack, Airtable, Notion, Zoom, LinkedIn (via Unipile), Apify, Xfield, HubSpot/Pipedrive/Salesforce

---

## MÉTHODES EXTRAITES

### Création de skill Claude (méthode Studeria)
1. Faire la tâche une fois manuellement avec Claude, étape par étape
2. Demander feedback à chaque étape ("as-tu compris ? es-tu prêt ?")
3. Une fois résultat validé : "capitalise sur ce qu'on vient de faire pour créer un skill nommé [X], déclenché par [mot-clé], qui suit ces étapes : [liste]"
4. Claude reformule sa compréhension → valider avant création
5. Le skill se réactive en tapant son nom, relit son mode d'emploi, redemande "on reprend où ?"

### Stack prospection sortante (démo live J2)
1. **Clay** → sourcing prospects B2B avec filtres (taille, signal faible = prise de poste <12 mois) → export CSV
2. **Claude** (connecteur Airtable) → import CSV dans Airtable, création automatique des colonnes, scoring fort/moyen/faible
3. **Claude** → génération message de prospection personnalisé par profil
4. **Unipile** (via skill Claude) → envoi automatique LinkedIn/email

### Agent brief quotidien commercial (démo live J2 — Tristan)
- Tâche programmée Claude Cowork, déclenche chaque matin à heure fixe
- Connecté à : Gmail + Airtable (CRM) + agenda + internet
- Output : brief PDF à la charte graphique, déposé en Notion
- Contenu : pipeline du jour, deals chauds, prospects à relancer, 5 questions à poser par RDV, offre recommandée, signaux d'achat

### Agent veille secteur quotidienne (démo live J1/J2)
- Tâche programmée 7h matin
- Sources scrapées : Les Échos, Le Figaro Tech, Le Monde, Actuia, l'Usine Digitale
- Output : brief PDF avec résumé exécutif, top 3 sujets + angle pour posts LinkedIn, sources
- ROI estimé : 3-4h/semaine économisées

### Agent de contenu LinkedIn (démo live J3 — Apify)
1. Claude + Apify → scrape top 10 posts viraux du secteur sur LinkedIn (likes, commentaires, partages)
2. Claude stocke dans Airtable (table "inspiration")
3. Claude génère 5 posts LinkedIn dans le ton/voix de l'utilisateur (table "mes posts")
4. Colonnes générées automatiquement : contenu, potentiel viral, CTA, hashtags, statut "prêt à publier"
5. Publication automatisée via Claude Cowork (tâche programmée, ex: tous les lundis)

### Agent proposition commerciale après-appel (démo live J2 — Julie)
1. Lixi → transcript de l'appel visio (mot par mot, interlocuteur par interlocuteur)
2. Coller le transcript dans Claude + invoquer le skill `/proposition [nom client]`
3. Claude lit : charte graphique, données client, exemple de propale
4. Output : PDF propale complète avec images générées IA, devis, signature, cachet
- ROI : remplace 45min à 2h de travail manuel sur Canva/PowerPoint

### Agent génération vidéo produit (démo live J3 — Xfield)
1. Glisser image produit dans Claude Code
2. Décrire scénario en langage naturel (personnage, ambiance, durée, langue/accent)
3. Claude interroge Xfield → estime le coût en crédits → génère si validé
4. Output : vidéo 8 secondes format vertical, voix générée, prête à publier
- Coût : ~20-22 crédits Xfield (inclus dans abonnement mensuel)
- ROI vs production classique : x100 moins cher, livraison en 5-10 min vs 3 semaines

---

## CONCEPTS CLÉS

### RAG (Retrieval Augmented Generation)
Données propriétaires de l'entreprise branchées sur l'IA (historique clients, factures, litiges, habitudes). Ce que le modèle générique ne connaît pas. **Argument différenciant majeur pour NexAdmin** : NexAdmin connaît l'historique propre de l'artisan BTP (clients, retards de paiement, chantiers passés) → justifie le prix vs ChatGPT générique.

### Anatomie d'un agent IA
- Cerveau = modèle IA (Claude, GPT, etc.)
- Bras = automatisations (Make, N8N, Zapier)
- Bouche = canaux de sortie (email, WhatsApp, LinkedIn, PDF)
- Mémoire = base de données (Airtable, Notion, Supabase)

### Framework 70/30 (vente)
La vente = 70% préparation (délégable à l'IA) + 30% exécution (humain). Les 70% = recherche prospect, signaux d'achat, brief RDV, propale. Argument pour NexAdmin : l'artisan passe du temps à préparer ses devis/relances au lieu d'être sur chantier.

### Framework 24h (Valrand Mouliberto — Le Crayon)
Pour lancer un business : 4 questions en 24h → quel problème, qui sont mes clients, quel modèle de revenu, quel canal d'acquisition → produire une V1 en 24h pour tester la traction réelle. "Celui qui n'a pas honte de sa V1 a sorti sa version trop tard."

### Roadmap entrepreneur 3 temps (Valrand)
- J1 : version 24h (tester l'idée, pitch + maquette)
- 6 mois : passer de gratuit à payant sur les 10 premiers clients
- 2-3 ans : standardiser et déléguer la vente

### Personal branding (Sixtine Mouliberto — Le Crayon, J3)
- Choisir UNE seule plateforme au départ selon où est la cible (LinkedIn pour B2B)
- Format écrit LinkedIn > vidéo pour B2B
- 2-3 posts/semaine suffisent avec bonne structure : accroche → sujet → storytelling → valeur
- L'IA aide sur le fond (recherche, résumés) mais PAS sur le storytelling/émotionnel
- Nourrir Claude avec ses 150+ anciens posts pour qu'il écrive dans sa voix
- "Si un contenu ne plaît pas, il fait 0 vues → personne ne l'a vu → rien à perdre à se lancer"

### Coût de l'inaction (argument closing Studeria)
- Résumé de réunion : 1h/jour
- Gestion emails : 30min/jour
- Recherche et synthèse info : 30min/jour
- Préparation RDV commercial : 30-40min/RDV × nombre de RDV/jour
- Total × coût horaire × 52 semaines = montant annuel perdu à ne pas automatiser

Pour NexAdmin / artisans BTP :
- Devis manuel : 30-45min × 3-5 devis/semaine
- Relances paiement : 20-30min × factures en retard
- Réponses clients : dispersées sur la journée
- **Estimation : 15-22k€/an de coût de l'inaction pour un artisan BTP moyen**

---

## CE QUI EST ACTIONNABLE POUR NEXADMIN

### Immédiat
1. **Argument RAG dans le pitch** : "NexAdmin connaît votre historique client, pas ChatGPT"
2. **Recadrage pitch** : "NexAdmin libère du temps pour le terrain et la relation client" (pas "automatise vos devis")
3. **Chiffre clé** : 15-22k€/an de coût de l'inaction pour un artisan BTP
4. **Skills NexAdmin** : nexadmin-devis, nexadmin-relance, nexadmin-brief-quotidien (déjà créées)

### Court terme (features NexAdmin)
5. **Agent brief quotidien artisan** → feature NexAdmin Business à 897€ (brief matin : devis en attente, factures à relancer, leads du jour)
6. **Apify** → veille concurrentielle BTP : surveiller ce que postent les concurrents SaaS artisans

### Plus tard (post-revenus)
7. **Xfield** → vidéo démo NexAdmin ou contenu de prospection artisans
8. **Unipile** → relances multicanal WhatsApp + email pour NexAdmin (alternative/complément Lemlist)
9. **Clay** → prospection artisans BTP (signal faible : création entreprise <12 mois)

---

## CE QUI N'EST PAS UTILE POUR NEXADMIN
- Lixi → pour commerciaux en rendez-vous visio, pas pour artisans BTP
- Le contenu storytelling des lives (marketing Studeria, pas méthode technique)
- Le stack Clay/LinkedIn pour la prospection → artisans BTP ne sont quasiment pas sur LinkedIn
- La formation consultant IA → hors scope (un seul business actif)
