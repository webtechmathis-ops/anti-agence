---
name: preflight
description: Contrôle avant commit ou déploiement du site Astro anti-agence-web.fr (sur dist/ après build). Vérifie title, meta description, canonical absolu, H1 unique, alt et dimensions d'images, JSON-LD valide, liens internes, ressources manquantes, restes WordPress, mots interdits. À lancer après toute modification de page et avant chaque preview.
---

# Preflight anti-agence-web.fr

1. Construire puis contrôler la sortie statique depuis la racine du repo :
   ```
   npm run build
   python3 -I .claude/skills/preflight/scripts/check_site.py dist
   ```
   (Pour auditer l'ancien export : `python3 -I .claude/skills/preflight/scripts/check_site.py legacy`.)
2. Corriger toutes les lignes `[ERREUR]` (bloquantes). Traiter les `[ALERTE]` ou justifier pourquoi on les garde.
3. Compléter à la main ce que le script ne voit pas :
   - Rendu mobile 375 px et desktop 1440 px (skill `run` ou navigateur), pas de scroll horizontal.
   - Contraste AA du texte sur l'accent, focus visible au clavier, `prefers-reduced-motion` respecté par les animations (marquee, reveals).
   - Une seule intention par page, maillage vers `/tarifs/` et `/contact-et-devis/`.
   - Aucune allégation non validée (voir CLAUDE.md section 5).
4. Revue UI finale : skill `web-design-guidelines` sur les fichiers `src/` modifiés.
5. Rapporter le résumé du script tel quel (nombre d'erreurs et d'alertes), sans l'arrondir.

Tant que des pages ne sont pas migrées, les liens vers elles sortent en `lien interne cassé` : c'est attendu, mais à lister dans le rapport. Les règles et constantes (domaine, longueurs, mots interdits) sont en tête de `scripts/check_site.py`.
