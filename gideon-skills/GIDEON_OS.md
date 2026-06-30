# GIDEON OS — Document Maître
> Dernière mise à jour : juillet 2026
> Auteur : Bilal (CEO) + Jarvis (Claude)

---

## QUI EST BILAL
- 20 ans, Amiens (France)
- Solo entrepreneur, vision : agence IA zéro salarié (GIDEON OS)
- Claude = "Jarvis" — exécuteur autonome, Bilal valide uniquement les décisions financières
- Commence au snack bar familial en septembre 2026
- Certifications : CACES 1B, Permis B, PSC1/BSB, BAFA
- Préférences paiement : virement bancaire (RIB/IBAN), jamais Stripe par défaut
- Investissements : halal uniquement

---

## RÈGLES GIDEON (non négociables)
1. Un seul business actif à la fois — jusqu'aux premiers revenus
2. Jarvis décide et exécute sur tout sauf dépenses d'argent et changement de prix
3. Aucun contenu générique — chaque livrable doit avoir une valeur réelle démontrée
4. Si une direction est mauvaise, Jarvis le dit et se corrige sans demander validation
5. Ratio valeur minimum 1:10 sur tous les produits
6. Si Bilal propose un nouveau projet → refuser et refocaliser sur NexAdmin jusqu'aux revenus

---

## PROJET ACTIF : NEXADMIN

### Description
SaaS BTP/artisans France — automatise devis, facturation, relances paiement, réponses clients, brief quotidien.

### Pricing
- Starter : 297€/mois
- Pro : 497€/mois
- Business : 897€/mois

### Stack technique
- Frontend : Next.js (landing HTML statique)
- Backend : TypeScript agents
- Base de données : PostgreSQL sur Supabase
- Déploiement : Vercel (via GitHub integration — api.vercel.com bloqué dans container)
- Versioning : GitHub

### URLs & références
- Landing : nexadmin-942n-psqxpegyr-bilal915-makers-projects.vercel.app
- GitHub : github.com/Bilal915-maker/nexadmin
- Supabase projet : "nexadmin" (ref: rqbiectjcowjehuzdrdc)
- Notion master page ID : 37cfb40734fa8149827bf18382f0753b
- Make.com teamId : 531766

### Credentials (à ne jamais exposer publiquement)
- GitHub token : [GITHUB_TOKEN - stocker dans .env ou gestionnaire de secrets] (user: Bilal915-maker)
- Vercel token : [VERCEL_TOKEN - stocker dans .env ou gestionnaire de secrets] (no expiration)

### Schéma Supabase (tables créées)
- tenants, clients, quotes, invoices, email_logs, agent_logs, treasury_snapshots
- RLS activé sur toutes les tables

### Argument différenciant principal
NexAdmin connaît l'historique propre de l'artisan (clients, retards, litiges, habitudes) — RAG sur données propriétaires. ChatGPT générique ne connaît pas ça. Justifie le prix.

### Pitch recadré
"NexAdmin libère du temps pour le terrain et la relation client" — pas "automatise vos devis"

### Chiffre clé
15-22k€/an de coût de l'inaction pour un artisan BTP moyen (devis manuels + relances + réponses clients)

---

## SKILLS NEXADMIN CRÉÉES
Toutes sauvegardées dans `/gideon-skills/` sur GitHub.

### nexadmin-devis
Génère un devis BTP complet depuis description orale/brute du chantier. Corps de métier, TVA correcte (10% rénovation >2 ans, 20% sinon), mentions légales obligatoires (assurance décennale). Validation des hypothèses avant finalisation.

### nexadmin-relance
Relances de paiement avec 3 niveaux d'escalade automatiques :
- N1 (J+0 à J+15) : rappel courtois
- N2 (J+15 à J+30) : relance ferme
- N3 (>J+30) : mise en demeure — **jamais sans validation humaine explicite**
Garde-fou : détection des litiges en cours avant d'envoyer.

### nexadmin-brief-quotidien
Brief quotidien artisan BTP lisible en 2 minutes sur téléphone :
- Devis en attente de réponse (>7j = à relancer)
- Factures à relancer avec niveau d'escalade
- Nouveaux leads reçus
- Chantiers du jour
Conçu pour tâche programmée Claude Cowork chaque matin.

---

## INTELLIGENCE STUDERIA (veille concurrentielle)

### Profil Studeria
Fondé 2022, Qualiopi, 5000+ personnes, 200+ entreprises. Co-fondateurs : Guillaume Liesse (CEO), Youes Belcaraf (CTO). Partenaire officiel Make.com. Accompagnement 1990-2990€ → agents IA. 2 Sommets/an.

### Funnel Studeria (extrait J1-J2-J3)
Live gratuit 3h → "coût de l'inaction" → session stratégique 45min → offre payante. Urgence : "100 places", replay expire 48h.

### Stack observé en live
| Outil | Usage | Coût |
|-------|-------|------|
| Apify | Scraper posts LinkedIn viraux + stats engagement | 5 crédits/mois gratuit |
| Clay | Sourcing prospects B2B + signal faible (prise de poste <12 mois) | Gratuit 100 lignes/mois |
| Airtable | CRM/ERP connecté Claude via MCP | Gratuit (version de base) |
| Unipile | Prospection multicanal LinkedIn/WhatsApp/email | Payant |
| Lixi | Transcription appels visio (ISO 27001, RGPD) | Payant |
| Xfield | Générateur images/vidéos IA centralisé | 29-39€/mois |
| Notion | Stockage outputs (briefs, posts, veille) | Gratuit |
| Make.com | Automatisation workflow | Payant |
| N8N | Alternative open-source Make | Gratuit (self-hosted) |

### Méthode création de skill Claude (reproduite par Jarvis)
1. Faire la tâche manuellement avec Claude, étape par étape
2. Feedback à chaque étape ("as-tu compris ?")
3. Une fois validé : "capitalise sur ce qu'on vient de faire pour créer un skill nommé [X]"
4. Claude reformule → valider → skill créée
5. Invocable par son nom dans toute conversation Claude

### Patterns agents extraits
- **Agent veille quotidienne** : tâche programmée 7h, scrape sources secteur → brief PDF + Notion. ROI : 3-4h/semaine.
- **Agent brief commercial** : lit CRM + agenda + emails → brief PDF par RDV (contexte, décideur, 5 questions, offre recommandée). ROI : 2-3h/jour.
- **Agent propale** : transcript Lixi → skill → devis + propale PDF charte graphique. ROI : remplace 45min-2h.
- **Agent contenu LinkedIn** : Apify (top 10 posts viraux) → Airtable → 5 posts générés dans la voix de l'auteur.
- **Agent vidéo produit** : image produit + description → Claude Code + Xfield → vidéo 8s format vertical, voix FR. Coût : ~20 crédits Xfield.
- **Stack prospection** : Clay → CSV → Airtable (scoring auto) → message personnalisé → Unipile (envoi LinkedIn/email).

### Concepts clés retenus
- **RAG** = données propriétaires de l'entreprise branchées sur l'IA → argument différenciant NexAdmin
- **Anatomie agent** : cerveau (LLM) + bras (automatisations) + bouche (canaux de sortie) + mémoire (BDD)
- **Framework 70/30** : vente = 70% préparation (délégable IA) + 30% exécution (humain)
- **Framework 24h** (Valrand Mouliberto) : 4 questions → quel problème, qui sont mes clients, quel modèle de revenu, quel canal d'acquisition → V1 en 24h
- **"Celui qui n'a pas honte de sa V1 a sorti sa version trop tard"**
- **Personal branding** (Sixtine Mouliberto) : LinkedIn uniquement pour B2B, format écrit > vidéo, 2-3 posts/semaine, IA aide sur le fond pas le storytelling

### Ce qui n'est pas utile pour NexAdmin
- Lixi → pour commerciaux en visio, pas artisans BTP
- Clay/LinkedIn pour prospecter des artisans → ils ne sont pas sur LinkedIn
- La partie consultant IA → hors scope (un seul business actif)

---

## HISTORIQUE PROJETS (archivés / ne jamais mentionner)
- PayFlow AI : mis en pause
- Ebook Gumroad : supprimé
- Amiens prospection : supprimé
- Car rental : supprimé
- Formations : supprimé

---

## COMMENT REPRENDRE APRÈS VACANCES

1. Ouvrir une nouvelle session Claude
2. Coller ce fichier ou le lien GitHub : `github.com/Bilal915-maker/nexadmin/blob/main/gideon-skills/`
3. Lire les 4 skills dans `/gideon-skills/`
4. Reprendre sur NexAdmin — objectif : premier artisan BTP payant

### État NexAdmin au moment de la sauvegarde (juillet 2026)
- Stack déployé sur Vercel ✓
- Schéma Supabase complet ✓
- Landing HTML statique ✓
- 3 skills Claude créées et sauvegardées sur GitHub ✓
- **Pas encore de client payant** → c'est l'objectif au retour
- Prochaine étape logique : prospection artisans BTP Amiens en direct

---

## SESSIONS BILAL (nommage)
Bilal nomme ses sessions Claude par projet (ex: "BTP 1", "BTP 2") pour éviter le mélange de contexte.
