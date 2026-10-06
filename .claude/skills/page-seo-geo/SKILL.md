---
name: page-seo-geo
description: Gabarit et checklist pour créer ou refondre une page Astro du site anti-agence-web.fr (SEO local Vernon, GEO pour les moteurs IA, UX de conversion). À utiliser avant d'écrire ou de réécrire n'importe quelle page dans src/pages/.
---

# Créer ou refondre une page anti-agence-web.fr

Lire d'abord `CLAUDE.md` (règles, faits autorisés, design system). Ne jamais inventer un chiffre, un avis, un client ou une référence.

## 1. Cadrage (avant d'écrire)
- Intention unique de la page et requête principale (ex : "création site internet artisan Vernon").
- URL : conserver l'URL existante (`src/pages/<slug>/index.astro`). Toute nouvelle URL ou suppression = redirection 301 dans `public/_redirects`.
- Contenu source : la page correspondante de l'ancien export (`legacy/<slug>/index.html`), à nettoyer et réécrire selon CLAUDE.md section 5.
- Réutiliser les composants existants (`Marquee`, `FaqList`, `Breadcrumb`) et les classes globales (`.display`, `.h2`, `.h3`, `.ask`, `.lead`, `.btn-*`, `.link`, `.wrap`) avant d'en créer de nouveaux.
- Persona visé (artisan, commerçant, restaurateur, hôtel/spa) et action attendue (devis, appel, email).

## 2. `<head>` via `BaseLayout`
Chaque page utilise `src/layouts/BaseLayout.astro` :
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
const schema = [ /* nœuds spécifiques à la page : Service, FAQPage, Article... */ ];
---
<BaseLayout
  title="Création site internet artisan à Vernon | Anti-Agence"  // 50-60 car.
  description="..."                                               // 120-160 car., bénéfice + CTA
  path="/artisans/"                                               // slash final obligatoire
  ogImage="/og/artisans.jpg"
  breadcrumb={[{ name: 'Accueil', path: '/' }, { name: 'Artisans', path: '/artisans/' }]}
  schema={schema}
>
  ...
</BaseLayout>
```
Le layout doit produire : `<html lang="fr">`, charset, viewport sans blocage du zoom, title, meta description, canonical absolu (`new URL(path, Astro.site)`), Open Graph complet (`og:url` et `og:image` absolus), `twitter:card`, favicon SVG, preload de la police display, un seul `<script type="application/ld+json">` contenant un `@graph` qui fusionne les nœuds globaux et ceux de la page (via `set:html={JSON.stringify(graph)}`).

## 3. Données structurées (un seul `@graph` par page)
- Partout : `WebSite`, `Organization` ou `ProfessionalService` (même `@id` : `https://anti-agence-web.fr/#org`), `WebPage`, `BreadcrumbList`.
- `Person` (`@id` `https://anti-agence-web.fr/#mathis`) lié comme `founder` et comme `author` des articles.
- Pages service : `Service` avec `provider` = `#org`, `areaServed` = Vernon / Eure. Prix seulement s'ils figurent dans la page tarifs.
- Articles : `Article` avec `author`, `datePublished`, `dateModified` visibles aussi dans la page.
- FAQ : balisage `FAQPage` autorisé, mais les questions doivent être visibles dans la page.
- Interdit : `AggregateRating` ou `Review` auto-attribués, adresse inventée, horaires inventés.

## 4. Structure de contenu (SEO + GEO)
1. Fil d'Ariane visible.
2. Un seul H1, explicite (pas de jeu de mots seul).
3. Paragraphe "réponse directe" juste sous le H1 : 40-60 mots qui répondent à la requête (qui, quoi, où, pour qui, combien). C'est le passage que les IA citent.
4. H2 formulés comme des questions ou des bénéfices concrets. Les surtitres décoratifs sont des `<p class="eyebrow">`, jamais des H5/H6.
5. Au moins un format extractible : liste à puces, tableau comparatif ou étapes numérotées.
6. Preuves : uniquement celles validées dans CLAUDE.md section 5. Sinon, pas de preuve plutôt qu'une preuve fausse.
7. FAQ de 4 à 8 questions réelles de clients locaux.
8. Bloc auteur (Mathis, rôle, lien vers la page à propos) sur les pages éditoriales.
9. CTA principal répété : haut de page, milieu, fin. Un seul libellé principal sur tout le site.
10. Maillage : 3 liens internes contextuels minimum (tarifs, contact, page métier ou article lié), ancres descriptives.

## 5. UX et accessibilité
- Mobile d'abord, 16 px de gouttière minimum, cibles tactiles 44 px.
- Contraste AA, focus visible, navigation clavier complète, `aria-label` sur les boutons icône.
- Animations désactivées sous `prefers-reduced-motion: reduce`.
- Images : composant `<Image>` d'`astro:assets` depuis `src/assets/` (WebP/AVIF et dimensions automatiques), `alt` descriptif, `loading="eager"` + `fetchpriority="high"` sur l'image LCP seulement.
- Pas de jQuery ni de framework UI : composants `.astro`, styles scoped + tokens globaux, `<script>` Astro minimal si nécessaire.

## 6. Finir
- Le sitemap est généré au build. Mettre à jour `public/llms.txt` si la page est nouvelle ou change d'intention.
- Données réutilisées (tarifs, FAQ) : les lire depuis `src/data/`, ne pas les recopier en dur.
- Lancer le skill `preflight`.
