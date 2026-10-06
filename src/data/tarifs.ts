// Tarifs : seule source de prix du site (copie de l'ancienne page /tarifs/, prix « à partir de »).
// Les pages métier, la FAQ, le JSON-LD et l'accueil lisent ce fichier.
import { OFFRE, offreFin } from './site';

export interface Formule {
  id: string;
  name: string;
  pitch: string;
  price: number;
  unit?: string;
  pages?: string;
  badge?: string;
  note?: string;
  includes: string[];
}

export const SITES: Formule[] = [
  {
    id: 'one-page',
    name: 'One-page',
    pitch: 'Une présence en ligne simple et percutante.',
    pages: '1 page',
    price: 840,
    note: 'Hébergement et nom de domaine 1 an inclus',
    includes: [
      'Design moderne et responsive, adapté à tous les écrans',
      'Certificat de sécurité SSL',
      'Présentation claire de votre activité et de vos services sur une page',
      'Intégration de vos contenus (textes, images, vidéos)',
      'Formulaire de contact simple et efficace',
      'Hébergement et nom de domaine pendant 1 an',
    ],
  },
  {
    id: 'one-five',
    name: 'One-five',
    pitch: 'Pour les entreprises qui veulent gagner en visibilité.',
    pages: '1 à 5 pages',
    price: 1240,
    badge: 'Le plus populaire',
    note: 'Le plus populaire',
    includes: [
      'Tout ce que comprend le site One-page',
      'Plusieurs pages : accueil, services, à propos, contact…',
      'Navigation fluide et information bien hiérarchisée',
      'Formulaire de contact avancé',
    ],
  },
  {
    id: 'five-more',
    name: 'Five-more',
    pitch: 'La solution complète pour présenter vos services.',
    pages: '5 à 10 pages',
    price: 1740,
    note: 'Galeries, témoignages, FAQ',
    includes: [
      'Tout ce que comprend le site One-five',
      'Structure développée pour détailler offres, services ou réalisations',
      'Galeries photos, témoignages ou FAQ',
      'Navigation plus complète pour vos visiteurs',
    ],
  },
  {
    id: 'e-commerce',
    name: 'E-commerce',
    pitch: 'Conçu pour vendre en ligne.',
    pages: 'Boutique en ligne',
    price: 2540,
    note: 'Paiement, livraison, formation',
    includes: [
      'Tout ce que comprend le site Five-more',
      'Boutique en ligne complète',
      'Solutions de livraison et moyens de paiement adaptés',
      'Formation à la gestion de la boutique pour être autonome',
    ],
  },
];

export const PACKAGES: Formule[] = [
  {
    id: 'package-essentiel',
    name: 'Package Essentiel',
    pitch: 'Site vitrine + réservation en ligne.',
    price: 1540,
    includes: [
      'Tout ce que comprend un site vitrine de 1 à 5 pages',
      'Module de réservation en ligne simple et efficace',
      'Mises en page pensées pour une navigation agréable',
      'Réglages techniques de base pour un site rapide',
    ],
  },
  {
    id: 'package-avance',
    name: 'Package Avancé',
    pitch: 'Site vitrine + réservation en ligne + SEO avancé.',
    price: 2040,
    includes: [
      'Tout ce que comprend un site vitrine de 1 à 10 pages',
      'Module de réservation avancé et personnalisé',
      'Architecture claire et intuitive',
      'Optimisation SEO pour être visible sur Google',
    ],
  },
];

export const SEO: Formule[] = [
  {
    id: 'audit-seo',
    name: 'Audit SEO',
    pitch: 'Faire le point sur votre présence en ligne.',
    price: 240,
    includes: [
      'Analyse complète de l’existant : structure, vitesse, contenu, technique',
      'Points bloquants et axes d’amélioration prioritaires',
      'Rapport détaillé et compréhensible, prêt à être utilisé',
      'Recommandations concrètes',
      'Audit premium (e-commerce et autres) sur devis',
    ],
  },
  {
    id: 'seo-essentiel',
    name: 'Essentiel SEO',
    pitch: 'Pour gagner en visibilité sur Google.',
    price: 1240,
    badge: 'Le plus populaire',
    includes: [
      'Audit complet du site',
      'Mise en place des optimisations recommandées',
      'Amélioration technique et sémantique',
      'Accompagnement pour un site plus performant et visible',
    ],
  },
  {
    id: 'seo-avance',
    name: 'Avancé SEO',
    pitch: 'Une stratégie complète sur 3 mois.',
    price: 1740,
    includes: [
      'Audit approfondi avec analyse des concurrents et du marché',
      'Optimisation technique poussée et refonte du maillage interne',
      'Contenus optimisés : 4 articles par mois pendant 3 mois',
      'Suivi sur 3 mois : reporting des indicateurs et coaching',
    ],
  },
  {
    id: 'ads',
    name: 'Ads (Meta et Google)',
    pitch: 'Des campagnes pour des résultats immédiats.',
    price: 2540,
    includes: [
      'Création et gestion de campagnes sur Meta, Google, ou les deux',
      'Suivi et reporting mensuel ou hebdomadaire',
      'Optimisation des performances, budget publicitaire dès 10 € par jour',
      'Option : page d’atterrissage dédiée pour 50 €',
    ],
  },
];

export const OPTIONS = [
  { name: 'Logo et charte graphique', price: 190, text: 'Un logo sur mesure avec jusqu’à 3 retouches, et une charte graphique élaborée à partir de votre brief.' },
  { name: 'Réservation en ligne', price: 290, text: 'Un module de réservation simple, avec une courte formation pour le gérer en autonomie.' },
  { name: 'Optimisation SEO', price: 300, text: 'Une optimisation ciblée de votre site sur 1 à 5 mots-clés stratégiques.' },
  { name: 'Blog et actualités', price: 540, from: true, text: 'Une page blog moderne et un article intégré par semaine pour animer votre site et nourrir votre SEO.' },
  { name: 'Réseaux sociaux', price: 440, from: true, unit: '/mois', text: 'Animation de Facebook, Instagram et Pinterest : 2 posts et 4 stories par semaine.' },
  { name: 'Page supplémentaire', price: 35, unit: '/page', text: 'Des pages en plus selon vos besoins, ou sur devis pour un ensemble.' },
] as const;

export const FAQ_TARIFS = [
  {
    q: 'Quelle différence entre un site One-page et un site One-five ?',
    a: 'Le One-page regroupe toutes les informations sur une seule page qui défile. Le One-five (1 à 5 pages) organise mieux le contenu (accueil, services, à propos, contact) et facilite la navigation.',
  },
  {
    q: 'Pourquoi choisir un site Five-more plutôt qu’un plus petit ?',
    a: 'Il convient si vous avez plusieurs services, produits ou réalisations à détailler. Il laisse plus de place pour structurer l’information et donne une image plus complète de votre activité.',
  },
  {
    q: 'À partir de quand ai-je besoin d’un site e-commerce ?',
    a: 'Dès que vous voulez vendre vos produits ou services directement en ligne, avec un panier et un paiement sécurisé.',
  },
  {
    q: 'Les sites sont-ils adaptés aux mobiles et tablettes ?',
    a: 'Oui, tous les sites sont responsives : ils s’adaptent aux ordinateurs, smartphones et tablettes.',
  },
  {
    q: 'Peut-on ajouter des options comme le SEO ou des fonctionnalités spécifiques ?',
    a: 'Oui : optimisation SEO, prise de rendez-vous, formulaires avancés, blog ou évolutions futures sont possibles sur chaque formule.',
  },
  {
    q: 'Comment fonctionnent la remise et le parrainage ?',
    a: `La remise de ${OFFRE.remise} % s’applique à toutes les prestations jusqu’au ${offreFin}. Le parrainage, lui, est permanent : si un client vous a recommandé, vous avez ${OFFRE.parrainage} % de remise (cumulables avec l’offre en cours), et votre parrain a ${OFFRE.parrainage} % sur sa prochaine prestation.`,
  },
] as const;
