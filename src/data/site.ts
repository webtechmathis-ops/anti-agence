// Source unique des faits publiés (voir CLAUDE.md section 4). Ne rien ajouter ici sans validation de Mathis.

export const SITE = {
  name: 'Anti-Agence',
  url: 'https://anti-agence-web.fr',
  owner: 'Mathis Bricourt',
  role: 'Freelance création de site internet, SEO et GEO',
  email: 'webtech.mathis@gmail.com',
  phone: '07 70 17 89 33',
  phoneHref: 'tel:+33770178933',
  city: 'Vernon',
  area: 'Vernon et l’Eure (27), Normandie',
  quoteDelay: '24 h',
  ctaLabel: 'Rencontrons-nous !',
  ctaHref: '/contact-et-devis/',
} as const;

export const NAV = [
  { label: 'Services', href: '/#services' },
  { label: 'Métiers', href: '/#metiers' },
  { label: 'Tarifs', href: '/tarifs/' },
  { label: 'FAQ', href: '/faq-seo-vernon/' },
  { label: 'Le GEO', href: '/geo-definition-seo/' },
] as const;

export const METIERS = [
  { label: 'Artisans', href: '/artisans/', line: 'Plombiers, électriciens, menuisiers, maçons : être appelé avant le concurrent.' },
  { label: 'Commerçants', href: '/commercants/', line: 'Fleuristes, boutiques, coiffeurs : faire venir du monde en magasin.' },
  { label: 'Restaurateurs et traiteurs', href: '/restaurateurs-traiteurs/', line: 'Carte, réservations, avis : remplir les tables du soir.' },
  { label: 'Hôtels et spas', href: '/hotels-spas/', line: 'Plus de réservations en direct et une présence soignée sur Google.' },
] as const;

export const SERVICES = [
  { title: 'Création de site internet', text: 'Un site rapide, clair sur mobile, qui explique ce que vous faites et donne envie d’appeler. Vous payez ce dont vous avez besoin, pas les frais d’une agence.' },
  { title: 'Référencement naturel (SEO)', text: 'Remonter sur Google pour les recherches de vos clients à Vernon et dans l’Eure, puis y rester.' },
  { title: 'GEO, visibilité dans les IA', text: 'Structurer vos contenus pour être cité quand on demande conseil à ChatGPT, Perplexity ou Google AI Overviews.' },
  { title: 'Google Ads et Meta Ads', text: 'Des campagnes pour des résultats immédiats, en complément du SEO, avec un budget que vous maîtrisez.' },
  { title: 'Netlinking', text: 'Obtenir des liens depuis d’autres sites pour renforcer votre autorité. Je m’occupe du jargon, vous voyez les résultats.' },
  { title: 'Suivi et bilans', text: 'Des rapports simples sur vos visites, vos positions et vos demandes de contact, expliqués sans graphiques inutiles.' },
] as const;

export const METHODE = [
  { title: 'J’écoute et je fixe la stratégie', text: 'On parle de votre métier, de vos clients et de votre zone. J’en tire les recherches à viser et le site qu’il vous faut.' },
  { title: 'Je construis un site optimisé', text: 'Vitrine ou e-commerce, le site est pensé pour le mobile, la vitesse et le référencement dès la mise en ligne.' },
  { title: 'Je fais grandir votre visibilité', text: 'Audits, contenus, fiche Google Business Profile, liens : je suis vos résultats dans la durée.' },
] as const;

// Tarifs : copie exacte de /tarifs/ (prix « à partir de »).
export const SITES = [
  { name: 'One-page', pages: '1 page', price: 840, note: 'Hébergement et nom de domaine 1 an inclus' },
  { name: 'One-five', pages: '1 à 5 pages', price: 1240, note: 'Le plus populaire' },
  { name: 'Five-more', pages: '5 à 10 pages', price: 1740, note: 'Galeries, témoignages, FAQ' },
  { name: 'E-commerce', pages: 'Boutique en ligne', price: 2540, note: 'Paiement, livraison, formation' },
] as const;

export const formatPrice = (n: number) => `${n.toLocaleString('fr-FR').replace(/ /g, ' ')} €`;

export const FAQ_ACCUEIL = [
  {
    q: 'Combien coûte un site internet à Vernon ?',
    a: 'Un site One-page démarre à 840 €, un site vitrine de 1 à 5 pages à 1 240 €, et une boutique en ligne à 2 540 €. Le détail des formules et des options est sur la page tarifs. Le devis personnalisé arrive sous 24 h.',
  },
  {
    q: 'Vaut-il mieux faire du SEO ou de la publicité Google Ads ?',
    a: 'Les deux se complètent. Google Ads apporte des visites tout de suite mais s’arrête quand le budget est coupé. Le SEO construit une visibilité durable. Pour un artisan ou un commerce avec un budget serré, le SEO local est souvent le meilleur investissement sur la durée.',
  },
  {
    q: 'Combien de temps pour être visible sur Google ?',
    a: 'Les premiers résultats SEO arrivent en général entre 3 et 6 mois. Sur des recherches locales peu concurrentielles, cela peut aller plus vite, et une fiche Google Business Profile bien remplie peut générer des appels en quelques semaines.',
  },
  {
    q: 'Mon site sera-t-il adapté aux mobiles ?',
    a: 'Oui. Tous les sites sont conçus d’abord pour le téléphone, puis pour la tablette et l’ordinateur.',
  },
  {
    q: 'Je n’ai ni textes ni photos, est-ce un problème ?',
    a: 'Pas du tout. Je peux rédiger vos textes et retoucher vos photos pour un rendu professionnel.',
  },
] as const;
