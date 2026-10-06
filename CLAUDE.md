# CLAUDE.md : site anti-agence-web.fr (Anti-Agence)

Dernière mise à jour : 2026-10-06
Porteur du projet : Mathis Bricourt (GitHub : webtechmathis-ops, repo `anti-agence`)
Domaine : anti-agence-web.fr
Activité : freelance création de site internet, SEO et GEO, Vernon (Eure, 27)

> Ce fichier prime pour ce repo. Le `CLAUDE.md` du Bureau (`~/Desktop/CLAUDE.md`) concerne le site WEYU et ne s'applique pas ici, sauf ses principes généraux (zéro invention, plan avant création, preview avant production).

## 1. Règles absolues

1. **Zéro invention.** Aucun chiffre, résultat client, avis, note, logo client, référence, tarif ou délai qui ne figure pas dans la section 4. Information manquante : commentaire `<!-- A CONFIRMER : ... -->` dans le code, jamais publié tel quel, et question à Mathis.
2. **Plan avant création.** Proposer, attendre la validation de Mathis, puis construire. Pas de nouveau repo, projet d'hébergement, domaine ou DNS sans accord explicite.
3. **Aucune mise en production sans validation écrite.** Toujours une preview d'abord.
4. **Ne jamais casser une URL indexée.** Les URLs de la section 6 restent identiques. Tout changement passe par une 301 dans `public/_redirects` (Netlify). Le sitemap est généré par `@astrojs/sitemap`.
5. **Aucun secret dans le repo** (tokens, clés API, mots de passe). `.env*`, `.vercel/`, `.netlify/`, `node_modules/` dans `.gitignore`.
6. **Allégations commerciales prudentes.** Pas de "n°1", "meilleur", "classement indépendant", note étoilée ou pourcentage de résultat sans preuve fournie par Mathis (voir section 5). Recommandation de prudence, pas un avis juridique.
7. **Rédaction** : français, le visiteur est vouvoyé, Mathis parle au "je" (freelance solo, plus de "nous" ni de "nos experts"), pas de tiret long (utiliser : , ou -), pas de jargon non expliqué, corriger les fautes au passage.
8. **Commits petits et clairs.** Pas de push sur `main` sans accord. Le repo n'a encore aucun commit (voir section 3).
9. **Lancer le skill `preflight` après chaque page modifiée** (`npm run build` puis contrôle de `dist/`).

## 2. Contexte

Site vitrine d'un freelance qui se positionne "anti-agence" : le prix et la proximité d'un indépendant, la qualité d'une équipe. Cibles : artisans, commerçants, restaurateurs et traiteurs, hôtels et spas de Vernon et de l'Eure.

Accroche existante : "Plus rapide qu'une agence. Plus efficace qu'un freelance. Plus haut sur Google."
Objectifs : être trouvé sur "création site internet Vernon", "SEO Vernon", "freelance SEO Eure" ; être cité par les moteurs IA (ChatGPT, Perplexity, Google AI Overviews) ; convertir en demandes de devis.

## 3. État technique du repo (au 2026-10-06)

- **Socle Astro 7 en place** (`src/`, `public/`, `astro.config.mjs`). Accueil refait (`src/pages/index.astro`), les 11 autres pages restent à migrer.
- **Ancien export WordPress/Divi déplacé dans `legacy/`** : source de contenu uniquement, ni servi ni buildé. À supprimer du repo une fois toutes les pages migrées.
- `wp-content/` et `wp-includes/` retirés de l'index git (l'export complet reste dans `../anti-agence.zip`, 187 Mo). Images utiles extraites, renommées sans "vannes", dans `src/assets/`.
- **Aucun commit** pour l'instant.
- Logo : `src/assets/brand/logo-anti-agence.png` (lettrage "ANTI AGENCE" bleu `#5271ff`, rogné). Favicon redessiné en SVG (`public/favicon.svg`, 2 quarts de cercle + 2 pastilles), `apple-touch-icon.png`, `og-default.jpg` (1200x630).
- npm : le cache `~/.npm` a des fichiers root, installer avec `npm install --cache <dossier temporaire>` ou corriger les droits (`sudo chown -R $(whoami) ~/.npm`).
- Baseline de l'ancien site (2026-10-06) : 12 pages, 234 erreurs, 18 alertes. Nouveau build : 1 page, 0 alerte, 9 erreurs = uniquement les liens vers les pages pas encore migrées.

## 4. Faits sources (seule base autorisée)

### Identité et contact (pages existantes)
- Marque : Anti-Agence ("(Anti) agence web"), domaine anti-agence-web.fr.
- Personne : Mathis Bricourt, consultant SEO & GEO freelance.
- Email : webtech.mathis@gmail.com. Téléphone (mentions légales) : 07 70 17 89 33.
- Zone : Vernon, Eure, Normandie.
- Promesse contact : "Votre devis en 24h".

### Offres et tarifs (`/tarifs/`, tous "à partir de")
| Offre | Prix |
|---|---|
| Site One-page | 840 € |
| Site One-five (1 à 5 pages), "le plus populaire" | 1 240 € |
| Site Five-more (5 à 10 pages) | 1 740 € |
| Site E-commerce | 2 540 € |
| Package Essentiel (vitrine 1-5 p. + réservation) | 1 540 € |
| Package Avancé (vitrine 1-10 p. + réservation + SEO avancé) | 2 040 € |
| Pack Audit SEO | 240 € |
| Pack Essentiel SEO, "le plus populaire" | 1 240 € |
| Pack Avancé SEO | 1 740 € |
| Pack Ads (Meta & Google) | 2 540 € |
| Option Logo & charte graphique | 190 € |
| Option Réservation en ligne | 290 € |
| Option Optimisation SEO (1 à 5 mots-clés) | 300 € |
| Option Blog & Actualités | dès 540 € |
| Option Réseaux sociaux (2 posts + 4 stories / semaine) | dès 440 €/mois |
| Page supplémentaire | 35 €/page ou sur devis |

Inclus site One-page : design responsive, SSL, formulaire de contact, intégration des contenus, hébergement et nom de domaine 1 an.

### Services présentés (accueil)
Référencement naturel SEO & GEO, campagnes Google Ads, création de site, netlinking, accompagnement global, bilan de performances. Méthode en 3 étapes : écoute et stratégie locale, site optimisé, référencement et suivi continu.

## 5. Allégations à valider ou retirer avant publication

**Décision du 2026-10-06 : tout ce qui suit est retiré de la refonte.** Réintégration possible seulement quand Mathis fournit la preuve (capture, source, période, accord du client), affichée avec son contexte.
1. `/meilleur-freelance-seo-geo-vernon/` : "Freelance #1 à Vernon", "le plus expérimenté de Vernon", "Classement indépendant", note 5/5. Un classement rédigé par le prestataire classé n'est pas indépendant : risque de pratique commerciale trompeuse et de perte de confiance. Proposition : page comparative honnête (critères, méthode) ou page "pourquoi un freelance plutôt qu'une agence".
2. "+100 % CA en 3 mois (site bien-être)", "+150 % trafic (spa hôtel 4★)", "7+ ans d'expérience", référence "Cdiscount" : preuves et autorisation de citer ?
3. "Nos experts", "experts basés à Vannes", "nous" : activité solo ou équipe ? Le site vient visiblement d'un clone Vannes (textes et noms d'images).
4. Mentions légales : "Société Bricourt mathis" (statut réel ? micro-entreprise ?), SIRET absent, hébergeur Hostinger à mettre à jour après migration, "aucune donnée collectée" alors que Google Analytics est chargé.
5. "Offres spéciales pour nos premiers clients" (bandeau) : toujours valable ?
6. Tarifs contradictoires dans les pages métier et la FAQ : "one-page dès 850 €" (FAQ) contre 840 € (tarifs), "site vitrine dès 1 500 € SEO inclus" (artisans, commerçants, restaurateurs), "2 000 à 4 000 €" (hôtels), "jusqu'à 4 000 €" (artisans). Seule la page tarifs fait foi tant que Mathis n'a pas tranché.
7. "30 à 40 % moins cher qu'une agence", "plus de 70 % des consommateurs / recherches locales" : chiffres non sourcés, retirés.
8. Restes du clone Vannes : "Morbihan", "basés à Vannes", "experts basés à Vannes", "tout la France" (hôtels).

## 6. Architecture SEO / GEO

URLs existantes (à conserver) :
| URL | Rôle | Requête cible |
|---|---|---|
| `/` | Accueil, offre, preuves, méthode, CTA | création site internet Vernon, agence web Vernon |
| `/tarifs/` | Tableau des formules | tarif site internet Vernon |
| `/artisans/` | Page métier | site internet artisan Vernon |
| `/commercants/` | Page métier | site internet commerçant Vernon |
| `/restaurateurs-traiteurs/` | Page métier | site restaurant Vernon |
| `/hotels-spas/` | Page métier | SEO hôtel spa Vernon |
| `/meilleur-freelance-seo-geo-vernon/` | Page expertise freelance (à reformuler, section 5) | freelance SEO Vernon |
| `/faq-seo-vernon/` | FAQ locale | questions SEO Vernon |
| `/geo-definition-seo/` | Article pilier GEO | GEO définition |
| `/quest-ce-que-le-referencement-seo/` | Article pilier SEO | qu'est-ce que le SEO |
| `/contact-et-devis/` | Conversion | devis site internet |
| `/mentions-legales/` | Légal | aucune |

Pages à proposer (après accord) : `/a-propos/` (E-E-A-T, Mathis), `/realisations/` (seulement avec projets réels autorisés), `/politique-de-confidentialite/`, page 404.
À supprimer avec 301 : `/category/*` (archives WordPress vides).

Règles :
- Hub-and-spoke : accueil vers pages métier et tarifs ; articles vers services ; chaque page vers `/contact-et-devis/`.
- Local : NAP identique partout (nom, zone, téléphone, email). Pas de pages par ville sans contenu unique (pas de doorway). Google Business Profile : à discuter.
- GEO : paragraphe réponse directe sous chaque H1, définitions claires, tableaux et listes, FAQ visibles, auteur et dates visibles sur les articles, `llms.txt` réécrit proprement (résumé de l'offre + liens), robots.txt qui autorise les crawlers IA (choix à confirmer).
- Données structurées : voir skill `page-seo-geo`. Jamais d'`AggregateRating` auto-attribué.
- Performance : objectif Lighthouse mobile 95+, LCP < 2 s, aucune dépendance jQuery, polices auto-hébergées en woff2.
- Après mise en ligne : Search Console, soumission du sitemap, PageSpeed mobile.

## 7. Direction design (inspiration zee.fr, appliquée sur l'accueil)

Ce qu'on reprend de zee.fr :
- Contraste éditorial fort : fond blanc et sections noires (`#000` / `#141414`), une seule couleur d'accent saturée utilisée avec parcimonie (zee : jaune acide `#E9FF00`).
- Typo display géométrique très grande pour le H1 (zee : Sora), beaucoup de blanc, grille simple.
- Surtitre court + grande phrase affirmative pour chaque section ("Notre terrain de jeu favori ?" puis "Les réseaux sociaux.").
- Bande de texte défilant (déjà présente ici : "Votre succès n'attend pas"), liste horizontale de clients, cartes projets à tags.
- Ton complice avec apartés entre parenthèses et emoji ponctuels ("Moins de Ctrl + C, plus de Ctrl + N"), un seul CTA nommé humainement ("Rencontrons-nous !").

Ce qu'on ne reprend pas : H6 utilisés comme surtitres (mauvais pour le SEO), menu caché en burger sur desktop, carrousels lourds, vidéo autoplay.

Tokens en place (`src/styles/global.css`) :
- Papier `#ffffff`, encre `#000000` (noir pur comme zee), gris texte `#55565e` (7.3:1), filet `#e4e4e7`.
- Bleu marque `#5271ff` : aplats, grands corps, traits, focus. Sur blanc il fait 4.07:1, donc jamais pour du petit texte : utiliser `--blue-ink` `#3350e0` (6.2:1) pour les liens. Texte noir sur bleu : 5.2:1 (section contact, marquee).
- Fond doux `#eef1ff` (section GEO).
- Une seule famille : **Bricolage Grotesque** variable (OFL, auto-hébergée dans `public/fonts/`), axes wght/wdth/opsz. Titres en 800, largeur 78 %, opsz 96 ; texte en opsz 16. Échelle fluide en tokens `--fs-*`.
- Boutons pilule : primaire noir (survol bleu), secondaire contour noir. Un seul libellé de CTA : "Rencontrons-nous !".

Élément signature : le tableau **"Ailleurs / Ici"** du hero, colonne "Ailleurs" barrée d'un trait bleu qui se dessine au chargement (seule animation orchestrée du site). Le réutiliser avec parcimonie, pas sur chaque page.

Règles de mise en page : texte aligné à gauche, une question courte en gris (`.ask`) au-dessus de chaque H2 (jamais un H5/H6, jamais en capitales), sections alternées blanc / noir / bleu, listes à filets plutôt que grilles de cartes, numéros uniquement pour une vraie séquence (méthode en 3 étapes). Marquee avec bouton pause et arrêt sous `prefers-reduced-motion`.

## 8. Stack et déploiement (validé le 2026-10-06)

- **Astro** en sortie statique, sans framework UI (composants `.astro` uniquement, JS minimal en îlots si vraiment utile).
- `astro.config.mjs` : `site: 'https://anti-agence-web.fr'`, `trailingSlash: 'always'`, `build.format: 'directory'` pour garder exactement les URLs actuelles avec slash final. Intégration `@astrojs/sitemap`.
- Structure cible :
  - `src/layouts/BaseLayout.astro` : `<head>` SEO complet (props title, description, path, ogImage, schema), header, footer.
  - `src/components/` : Header, Footer, Breadcrumb, Cta, Marquee, FaqList, PriceCard, Section, etc.
  - `src/pages/` : une page par URL de la section 6 (`src/pages/artisans/index.astro`, ...).
  - `src/data/` : tarifs, FAQ, offres en TS/JSON, source unique réutilisée par les pages et le JSON-LD.
  - `src/styles/` : tokens CSS (custom properties) + styles globaux.
  - `src/assets/` : images optimisées via `astro:assets` (`<Image>` génère WebP/AVIF, width/height).
  - `public/` : `_redirects`, `robots.txt`, `llms.txt`, favicons, polices.
- L'ancien export (HTML racine, sitemaps Yoast, `wp-content/`) sert uniquement de source de contenu pendant la migration, puis sera retiré du repo.
- **Hébergement : Netlify.** Build `npm run build`, dossier publié `dist`. Previews par branche ou par PR. Redirections dans `public/_redirects`. Bascule DNS depuis Hostinger uniquement avec l'accord de Mathis.

## 9. Skills et outils

Projet (`.claude/skills/`) :
- `page-seo-geo` : props du `BaseLayout`, schema, structure de contenu, checklist UX. À charger avant d'écrire une page.
- `preflight` : build puis script de contrôle sur `dist/` (`scripts/check_site.py`) + vérifications manuelles. Après chaque page.

Utilisateur et plugins (déjà installés) :
- Design : `frontend-design` (direction visuelle), `web-design-guidelines` (revue UI finale), `design:design-critique`, `design:accessibility-review`, `design:ux-copy`.
- SEO : `claude-seo:seo-local`, `claude-seo:seo-geo`, `claude-seo:seo-schema`, `claude-seo:seo-content`, `claude-seo:seo-technical`, `searchfit-seo:internal-linking`.
- Vérification visuelle : skill `run` ou Claude in Chrome (375 px et 1440 px).

## 10. Décisions

Prises le 2026-10-06 : stack Astro, hébergement Netlify, accent bleu `#5271ff`, retrait des allégations non prouvées et passage au "je".

Encore ouvertes (demander à Mathis) :
1. Validation du design de l'accueil avant de migrer les autres pages.
2. Statut juridique et SIRET pour les mentions légales.
3. Tarifs contradictoires des pages métier (section 5, point 6).
4. Formulaire de contact (Netlify Forms + anti-spam ?) ou email seul ; prise de RDV (le site avait Simply Schedule Appointments).
5. Mesure d'audience : garder Google Analytics avec bandeau cookies, passer à une solution exemptée CNIL, ou rien.
6. Robots.txt : autoriser ou non les crawlers IA d'entraînement (GPTBot, ClaudeBot, Google-Extended). Les crawlers de recherche IA (OAI-SearchBot, PerplexityBot) sont à autoriser pour le GEO.
7. Projets réels à montrer en réalisations (avec accord des clients).

## 11. Méthode

1. Relire ce fichier, poser les questions encore ouvertes de la section 10.
2. Proposer un plan et une maquette de l'accueil, attendre validation.
3. Initialiser Astro, construire le socle (tokens, BaseLayout, header, footer), puis page par page en reprenant le contenu de l'export.
4. `preflight` + `web-design-guidelines` à chaque page, preview Netlify à chaque étape.
5. Validation de Mathis, puis mise en production et Search Console.
