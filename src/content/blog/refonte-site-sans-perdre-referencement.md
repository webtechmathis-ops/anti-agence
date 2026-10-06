---
title: "Refonte de site : ne pas perdre son référencement"
description: "Refonte ou changement de technologie : les étapes pour garder vos positions Google. Inventaire des URL, redirections 301, contenus et contrôles finaux."
h1: "Refonte de site : comment ne pas perdre son référencement"
crumb: "Refonte sans perte SEO"
chapo: "Un nouveau site plus beau qui perd la moitié de ses visites, c’est un scénario fréquent. La bonne nouvelle : il s’évite avec méthode. Voici les étapes pour refaire un site sans casser ce qui marche sur Google."
category: seo
intent: "refonte site perdre référencement"
money:
  href: /tarifs/#seo
  label: "Voir les packs SEO"
  pitch: "Je prépare votre refonte (inventaire, redirections, contrôles) pour que le nouveau site garde ses positions, et je suis les résultats après la mise en ligne."
published: 2026-10-06
modified: 2026-10-06
readingMinutes: 8
hero: ../../assets/blog/chantier-grue.webp
heroAlt: "Silhouette d’un ouvrier et d’une grue de chantier sur un ciel bleu"
tldr:
  - "Une refonte fait perdre du trafic surtout quand des URL changent sans redirection, ou quand du contenu utile disparaît."
  - "Avant tout : faire l’inventaire des pages existantes et de celles qui apportent des visites."
  - "Chaque ancienne URL qui change doit rediriger en 301 vers la nouvelle page équivalente ; c’est ce que recommande Google."
  - "Le jour de la mise en ligne : sitemap, robots.txt, balises, redirections, Search Console."
  - "Les semaines suivantes : surveiller l’indexation, les erreurs et les positions, et corriger vite."
faq:
  - q: "Une refonte fait-elle forcément baisser le référencement ?"
    a: "Non. Une baisse temporaire peut arriver pendant que Google prend en compte les changements, mais une refonte bien préparée (mêmes URL ou redirections 301, contenus conservés, site plus rapide) peut au contraire améliorer les positions."
  - q: "Qu’est-ce qu’une redirection 301 ?"
    a: "C’est une instruction du serveur qui indique qu’une page a déménagé définitivement à une nouvelle adresse. Le visiteur et Google sont envoyés automatiquement vers la nouvelle page."
  - q: "Combien de temps garder les redirections ?"
    a: "Le plus longtemps possible, et au minimum plusieurs mois. Google recommande de les conserver au moins un an ; des liens externes peuvent continuer à pointer vers les anciennes URL bien plus longtemps."
  - q: "Faut-il prévenir Google d’une refonte ?"
    a: "Il n’y a pas de déclaration à faire pour une refonte sur le même domaine. En revanche, soumettez le nouveau sitemap dans Search Console. Pour un changement de nom de domaine, utilisez l’outil de changement d’adresse de Search Console."
related:
  - cout-annuel-site-internet
  - referencement-plusieurs-villes
  - quest-ce-que-le-referencement-seo
---

## Pourquoi une refonte peut-elle faire chuter le trafic ?

Parce que Google a appris où se trouvent vos pages et ce qu’elles contiennent. Si les adresses changent sans redirection, si des contenus disparaissent ou si le nouveau site est mal configuré, les positions acquises se perdent.

Les causes les plus fréquentes :

| Cause | Ce qui se passe |
|---|---|
| URL modifiées sans redirection | Les anciennes pages renvoient une erreur 404, les positions disparaissent |
| Contenus supprimés ou raccourcis | Le site ne répond plus aux recherches qui l’amenaient |
| Balises title et descriptions perdues | Pages moins pertinentes, moins de clics |
| Site de test indexé ou nouveau site bloqué | Doublons, ou site invisible |
| Liens internes cassés | Pages importantes moins accessibles |
| Site plus lent | Moins bonne expérience, notamment sur mobile |

## Que faut-il faire avant la refonte ?

L’inventaire : la liste de toutes les URL actuelles, avec pour chacune son trafic, ses positions et les liens qui pointent vers elle. C’est la base de toute la suite.

1. **Exporter les URL** du site actuel (sitemap, outil d’exploration).
2. **Repérer les pages qui comptent** dans Google Search Console : clics, impressions, requêtes.
3. **Noter les balises** title, meta description et titres H1 de ces pages.
4. **Lister les liens externes** les plus importants vers votre site.
5. **Décider pour chaque page** : garder la même URL, la déplacer avec une redirection, ou la supprimer.

> Le meilleur moment pour sauver son référencement, c’est avant la refonte, pas trois semaines après la chute.
>
> <cite>Mathis Bricourt, consultant SEO et GEO à Vernon</cite>

## Comment préparer le plan de redirections ?

En associant chaque ancienne URL qui change à la nouvelle page la plus équivalente, avec une redirection permanente 301. Pas de redirection groupée vers l’accueil pour tout.

Google recommande les redirections permanentes côté serveur pour les changements d’URL ([déplacer un site avec modification des URL](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr)).

| Ancienne URL | Nouvelle URL | Action |
|---|---|---|
| /nos-services/plomberie | /plomberie/ | Redirection 301 |
| /contact.php | /contact/ | Redirection 301 |
| /tarifs/ | /tarifs/ | Inchangée, aucune redirection |
| /promo-noel-2021 | (supprimée) | 301 vers la page la plus proche, ou 410 si rien d’équivalent |

Les URL ci-dessus sont des exemples. Le plus simple reste souvent de garder les mêmes URL quand c’est possible : c’est ce que j’ai fait pour la refonte de ce site.

<figure class="diagram">
  <svg viewBox="0 0 720 200" role="img" aria-labelledby="mig-title mig-desc">
    <title id="mig-title">Les quatre phases d’une refonte sans perte de référencement</title>
    <desc id="mig-desc">Inventaire, plan de redirections, mise en ligne contrôlée, suivi pendant plusieurs semaines.</desc>
    <g font-family="inherit" text-anchor="middle">
      <rect x="10" y="50" width="160" height="100" rx="16" fill="#000"/>
      <text x="90" y="92" fill="#5271ff" font-size="28" font-weight="800">1</text>
      <text x="90" y="122" fill="#fff" font-size="15" font-weight="700">Inventaire</text>
      <rect x="190" y="50" width="160" height="100" rx="16" fill="#000"/>
      <text x="270" y="92" fill="#5271ff" font-size="28" font-weight="800">2</text>
      <text x="270" y="122" fill="#fff" font-size="15" font-weight="700">Redirections</text>
      <rect x="370" y="50" width="160" height="100" rx="16" fill="#000"/>
      <text x="450" y="92" fill="#5271ff" font-size="28" font-weight="800">3</text>
      <text x="450" y="122" fill="#fff" font-size="15" font-weight="700">Mise en ligne</text>
      <rect x="550" y="50" width="160" height="100" rx="16" fill="#5271ff" stroke="#000" stroke-width="2"/>
      <text x="630" y="92" fill="#000" font-size="28" font-weight="800">4</text>
      <text x="630" y="122" fill="#000" font-size="15" font-weight="700">Suivi</text>
    </g>
  </svg>
  <figcaption>Les quatre phases d’une refonte maîtrisée. La phase 4 dure plusieurs semaines.</figcaption>
</figure>

## Que vérifier le jour de la mise en ligne ?

Que le nouveau site est indexable, que les redirections fonctionnent, que les balises sont en place, et que Google reçoit le nouveau sitemap.

| Contrôle | Comment |
|---|---|
| Le site n’est pas bloqué | robots.txt et absence de balise noindex sur les pages à indexer |
| Les redirections répondent en 301 | Tester un échantillon d’anciennes URL, dont les plus importantes |
| Les balises sont reprises | Title, meta description, H1 des pages clés |
| Les canonicals sont corrects | Chaque page pointe vers sa propre URL définitive |
| Le sitemap est à jour | Uniquement les nouvelles URL, soumis dans Search Console |
| Les liens internes fonctionnent | Aucun lien vers une ancienne URL ou une page 404 |
| La version de test est fermée | Protégée par mot de passe ou non indexable |

## Comment suivre les semaines suivantes ?

Dans Google Search Console : la couverture d’indexation, les erreurs 404, les pages qui perdent des clics. Corrigez vite les redirections manquantes et les contenus qui ne répondent plus aux recherches.

Une petite baisse pendant que Google prend en compte les changements n’est pas anormale. Une chute qui dure, surtout sur des pages précises, signale en général une redirection oubliée ou un contenu affaibli. Comparez avec l’inventaire fait au départ.

## Comment profiter de la refonte pour améliorer le référencement ?

En corrigeant ce que l’inventaire a révélé : pages lentes, contenus trop maigres, titres peu clairs, pages en concurrence entre elles. Une refonte est le meilleur moment pour remettre le site à plat.

Les Core Web Vitals donnent des repères officiels pour la vitesse et la stabilité : un LCP de 2,5 secondes maximum, un INP de 200 millisecondes maximum et un CLS de 0,1 maximum ([web.dev](https://web.dev/articles/vitals?hl=fr)). Un nouveau site devrait les respecter sur mobile.

## Quand se faire accompagner ?

Dès que le site a un historique sur Google : des pages qui apportent des visites, des liens, des positions. Plus il y a à perdre, plus la préparation compte.

Je prends en charge l’inventaire, le plan de redirections, les contrôles de mise en ligne et le suivi. Le détail des formules est sur [la page tarifs](/tarifs/#seo), et les bases du référencement sont dans [le guide du SEO](/quest-ce-que-le-referencement-seo/).
