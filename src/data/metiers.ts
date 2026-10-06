// Contenu des pages métier. Repris de l'ancien site, nettoyé (CLAUDE.md section 5) :
// plus de statistiques non sourcées, plus de "40 % moins cher", plus de Vannes / Morbihan, prix alignés sur tarifs.ts.
import type { ImageMetadata } from 'astro';
import imgArtisan from '../assets/metiers/artisan-electricien.webp';
import imgCommercant from '../assets/metiers/commercant-fleuriste.webp';
import imgRestaurant from '../assets/metiers/restaurant-chef.webp';
import imgSpa from '../assets/metiers/spa-sauna.webp';
import { OFFRE } from './site';

const OFFRE_TXT = `Toutes les prestations sont à -${OFFRE.remise} % en ce moment.`;

export interface Metier {
  slug: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  lead: string;
  image: ImageMetadata;
  imageAlt: string;
  introAsk: string;
  introTitle: string;
  intro: string[];
  services: { title: string; items: string[] }[];
  typesTitle: string;
  types: string[];
  formule: { label: string; id: string; price: number; why: string };
  faq: { q: string; a: string }[];
}

const FAQ_PHOTOS = {
  q: 'Je n’ai ni photos ni textes, est-ce un problème ?',
  a: 'Pas du tout. Je peux rédiger vos textes et retoucher vos photos pour un rendu professionnel, et mettre en valeur vos réalisations et vos avis clients.',
};
const FAQ_DELAI = {
  q: 'En combien de temps mon site sera-t-il en ligne ?',
  a: 'Comptez 2 à 4 semaines pour un site vitrine complet, selon le nombre de pages et la rapidité à réunir les contenus.',
};
const FAQ_SEO_DELAI = {
  q: 'En combien de temps voit-on des résultats sur Google ?',
  a: 'Les premiers résultats SEO arrivent en général entre 3 et 6 mois, selon la concurrence. Une fiche Google Business Profile bien remplie peut générer des appels plus rapidement.',
};

export const METIERS_PAGES: Metier[] = [
  {
    slug: 'artisans',
    label: 'Artisans',
    metaTitle: 'Site internet et SEO pour artisans à Vernon | Anti-Agence',
    metaDescription: 'Plombier, électricien, menuisier, maçon dans l’Eure : un site qui fait sonner le téléphone et une fiche Google visible à Vernon. Vitrine dès 1 240 €.',
    h1: 'Création de site internet et SEO pour artisans à Vernon',
    kicker: 'Artisans du bâtiment et de l’habitat',
    lead: 'Plombier, électricien, menuisier, maçon ou couvreur dans l’Eure ? Je crée votre site et je le fais remonter sur Google pour que les particuliers de Vernon vous appellent, vous. Site vitrine de 1 à 5 pages à partir de 1 240 €.',
    image: imgArtisan,
    imageAlt: 'Électricien qui intervient sur un tableau électrique',
    introAsk: 'Pourquoi un site quand on a déjà du bouche-à-oreille ?',
    introTitle: 'Un site utile pour vos clients.',
    intro: [
      'Avant d’appeler un artisan, beaucoup de particuliers cherchent sur Google, regardent les avis et comparent deux ou trois sites. Si vous n’apparaissez pas, l’appel part ailleurs.',
      'Un site bien conçu et visible localement, c’est plus d’appels, plus de demandes de devis, et une image professionnelle qui rassure avant même le premier rendez-vous.',
    ],
    services: [
      {
        title: 'Un site internet professionnel',
        items: [
          'Site vitrine moderne, pensé d’abord pour le téléphone',
          'Vos services, vos réalisations et vos avis clients bien présentés',
          'Formulaire de contact et bouton d’appel direct sur mobile',
          'Hébergement sécurisé et maintenance',
        ],
      },
      {
        title: 'Le référencement local',
        items: [
          'Optimisation sur les recherches locales, comme « plombier Vernon » ou « menuisier Eure »',
          'Création et gestion de votre fiche Google Business Profile',
          'Contenus qui parlent de votre zone d’intervention',
          'Suivi mensuel des positions et des appels',
        ],
      },
      {
        title: 'La publicité locale',
        items: [
          'Campagnes Google Ads ciblées sur votre secteur',
          'Publicités Facebook et Instagram géolocalisées',
          'Analyse des résultats et ajustements réguliers',
        ],
      },
    ],
    typesTitle: 'Les métiers que j’accompagne',
    types: [
      'Plombiers, électriciens, chauffagistes',
      'Menuisiers, charpentiers, couvreurs',
      'Maçons, peintres, plaquistes, carreleurs',
      'Jardiniers, paysagistes, ferronniers, serruriers',
    ],
    formule: {
      label: 'One-five',
      id: 'one-five',
      price: 1240,
      why: 'Accueil, services, réalisations, contact : assez de pages pour montrer votre travail et être trouvé sur plusieurs métiers.',
    },
    faq: [
      {
        q: 'Combien coûte un site pour un artisan ?',
        a: 'Un site One-page démarre à 840 € et un site vitrine de 1 à 5 pages à 1 240 €. Le prix dépend du nombre de pages et des fonctionnalités. ' + OFFRE_TXT,
      },
      {
        q: 'Mon site sera-t-il adapté aux mobiles ?',
        a: 'Oui. Tous les sites sont conçus d’abord pour le téléphone, là où vos clients vous cherchent le plus souvent entre deux tâches.',
      },
      FAQ_PHOTOS,
      {
        q: 'Pourrai-je modifier mon site moi-même ?',
        a: 'Oui, vous pourrez mettre à jour vos textes, vos réalisations ou vos tarifs. Et si vous préférez, je m’occupe des mises à jour.',
      },
      {
        q: 'Le référencement Google est-il compris ?',
        a: 'Chaque site est construit pour le référencement : structure technique propre, textes orientés vers les recherches de vos clients. L’optimisation SEO locale poussée (fiche Google, suivi des positions) est proposée en option ou dans les packs SEO.',
      },
      {
        q: 'Travaillez-vous avec des artisans hors de Vernon ?',
        a: 'Oui, partout dans l’Eure et au-delà. Le référencement local autour de Vernon reste ma spécialité.',
      },
      FAQ_DELAI,
    ],
  },
  {
    slug: 'commercants',
    label: 'Commerçants',
    metaTitle: 'Site internet et SEO pour commerçants à Vernon | Anti-Agence',
    metaDescription: 'Fleuriste, coiffeur, boutique, boulangerie à Vernon : un site clair, une fiche Google visible et du click & collect si besoin. Sites dès 840 €.',
    h1: 'Création de site internet et SEO pour commerçants à Vernon',
    kicker: 'Boutiques et commerces de proximité',
    lead: 'Fleuriste, salon de coiffure, boutique ou boulangerie à Vernon ? Votre site et votre fiche Google comptent autant que votre vitrine. Je les rends clairs, rapides et visibles quand vos clients cherchent un commerce près de chez eux.',
    image: imgCommercant,
    imageAlt: 'Devanture de fleuriste garnie de bouquets',
    introAsk: 'Votre vitrine suffit-elle encore ?',
    introTitle: 'Attirez plus de monde en boutique.',
    intro: [
      'Avant de se déplacer, vos clients vérifient vos horaires, regardent vos produits et lisent vos avis en ligne. Votre présence sur internet est devenue une deuxième vitrine.',
      'Un site clair, rapide et bien référencé localement, c’est plus de visites, plus de ventes et une image qui donne confiance.',
    ],
    services: [
      {
        title: 'Un site internet professionnel',
        items: [
          'Site élégant et pensé pour le mobile',
          'Vos produits, vos photos et vos avis clients mis en valeur',
          'Click & collect ou commande en ligne si vous le souhaitez',
          'Horaires, adresse et itinéraire Google Maps en évidence',
        ],
      },
      {
        title: 'Le référencement local',
        items: [
          'Optimisation sur les recherches locales, comme « fleuriste Vernon » ou « boutique déco Eure »',
          'Gestion de votre fiche Google Business Profile',
          'Contenus optimisés pour votre secteur',
          'Suivi mensuel de votre positionnement',
        ],
      },
      {
        title: 'Le marketing local',
        items: [
          'Campagnes Google Ads géolocalisées',
          'Gestion des avis clients et de votre e-réputation',
          'Emailing et promotions locales',
          'Fiches à jour sur les annuaires et les réseaux sociaux',
        ],
      },
    ],
    typesTitle: 'Les commerces que j’accompagne',
    types: [
      'Boutiques de mode et prêt-à-porter',
      'Fleuristes, bijouteries, concept stores',
      'Boulangeries, pâtisseries, chocolateries',
      'Salons de coiffure, instituts de beauté, tatoueurs',
      'Opticiens, cavistes, magasins bio',
    ],
    formule: {
      label: 'One-five',
      id: 'one-five',
      price: 1240,
      why: 'Produits, horaires, accès, contact : l’essentiel pour être trouvé et donner envie de passer la porte. E-commerce dès 2 540 € pour vendre en ligne.',
    },
    faq: [
      {
        q: 'Combien coûte un site pour un commerce ?',
        a: 'Un site One-page démarre à 840 €, un site vitrine de 1 à 5 pages à 1 240 €, et une boutique en ligne à 2 540 €. ' + OFFRE_TXT,
      },
      {
        q: 'Puis-je vendre mes produits en ligne ?',
        a: 'Oui : commande en ligne ou click & collect, adaptés à vos besoins et à votre stock, avec la formule e-commerce.',
      },
      FAQ_PHOTOS,
      {
        q: 'Mon commerce apparaîtra-t-il sur Google Maps ?',
        a: 'C’est l’objectif du référencement local : une fiche Google Business Profile complète et un site cohérent avec votre adresse et vos horaires vous rendent visible sur Google et Google Maps.',
      },
      FAQ_DELAI,
    ],
  },
  {
    slug: 'restaurateurs-traiteurs',
    label: 'Restaurateurs et traiteurs',
    metaTitle: 'Site internet et SEO pour restaurants à Vernon | Anti-Agence',
    metaDescription: 'Restaurant, bar, traiteur à Vernon : un site qui donne faim, la réservation en ligne et une fiche Google soignée pour remplir la salle.',
    h1: 'Site internet et SEO pour restaurants et traiteurs à Vernon',
    kicker: 'Restaurants, bars et traiteurs',
    lead: 'Restaurant, bar, brasserie, food truck ou traiteur à Vernon ? Je crée un site qui donne faim, avec votre carte et la réservation en ligne, et je soigne votre visibilité sur Google et Google Maps pour remplir la salle.',
    image: imgRestaurant,
    imageAlt: 'Chef qui dresse des assiettes en cuisine',
    introAsk: 'Où vos clients choisissent-ils leur restaurant ?',
    introTitle: 'Sur leur téléphone, avant de sortir.',
    intro: [
      'Une grande partie des clients choisit son restaurant après une recherche sur Google ou Google Maps. Un site lent, mal référencé ou illisible sur mobile, c’est une table qui reste vide.',
      'Je m’occupe du site, de la fiche Google et des avis pour que votre établissement ressorte quand on cherche où manger à Vernon.',
    ],
    services: [
      {
        title: 'Un site qui donne faim',
        items: [
          'Vos photos, votre carte et vos menus mis en valeur',
          'Réservation en ligne (TheFork, Zenchef ou module intégré)',
          'Navigation rapide sur mobile et tablette',
          'Textes et balises optimisés pour le référencement',
        ],
      },
      {
        title: 'Le référencement local',
        items: [
          'Audit SEO de votre site actuel',
          'Positionnement sur « restaurant Vernon », « brasserie centre-ville Vernon »…',
          'Optimisation technique : vitesse, structure, sécurité',
          'Pages par type de cuisine, lieu ou ambiance',
        ],
      },
      {
        title: 'Fiche Google et avis clients',
        items: [
          'Photos, menu, horaires et événements à jour',
          'Réponses aux avis clients, positifs comme négatifs',
          'Suivi mensuel : clics, appels, itinéraires, réservations',
        ],
      },
      {
        title: 'Traiteurs et événements',
        items: [
          'Pages dédiées à vos prestations',
          'Visibilité sur « traiteur mariage Vernon », « cocktail entreprise Eure »',
          'Demandes de devis en ligne simplifiées',
          'Photos, menus et témoignages clients',
        ],
      },
    ],
    typesTitle: 'Les établissements que j’accompagne',
    types: [
      'Restaurants et tables gastronomiques',
      'Brasseries, bars et bars à vins',
      'Food trucks',
      'Traiteurs et organisateurs d’événements',
    ],
    formule: {
      label: 'Package Essentiel',
      id: 'package-essentiel',
      price: 1540,
      why: 'Un site vitrine de 1 à 5 pages avec la réservation en ligne intégrée : la carte, les photos et le bouton « Réserver » au même endroit.',
    },
    faq: [
      {
        q: 'Combien coûte un site de restaurant ?',
        a: 'Un site vitrine de 1 à 5 pages démarre à 1 240 €, et le Package Essentiel avec réservation en ligne à 1 540 €. ' + OFFRE_TXT,
      },
      FAQ_SEO_DELAI,
      {
        q: 'Faut-il répondre aux avis négatifs sur Google ?',
        a: 'Oui. Une réponse calme et professionnelle rassure les futurs clients et compte pour le référencement local. Je vous aide à y répondre.',
      },
      FAQ_PHOTOS,
    ],
  },
  {
    slug: 'hotels-spas',
    label: 'Hôtels et spas',
    metaTitle: 'Site et SEO pour hôtels et spas à Vernon | Anti-Agence',
    metaDescription: 'Hôtel, chambre d’hôtes, spa dans l’Eure : un site élégant, un moteur de réservation et un SEO qui augmente les réservations en direct.',
    h1: 'Site internet et SEO pour hôtels et spas à Vernon',
    kicker: 'Hôtels, chambres d’hôtes et spas',
    lead: 'Hôtel, chambre d’hôtes ou spa dans l’Eure ? Je crée un site élégant qui donne envie de réserver, et je travaille votre référencement pour obtenir plus de réservations en direct et dépendre moins des plateformes comme Booking.',
    image: imgSpa,
    imageAlt: 'Cliente qui se détend dans un sauna en bois',
    introAsk: 'Pourquoi miser sur les réservations en direct ?',
    introTitle: 'Une présence en ligne à la hauteur de votre établissement.',
    intro: [
      'Les voyageurs comparent sur Google avant de réserver. Si votre établissement n’apparaît pas en bonne place, ils passent par une plateforme, ou chez un concurrent.',
      'Un site soigné, rapide et bien référencé vous apporte des réservations en direct, sans commission, et valorise votre image sur la durée.',
    ],
    services: [
      {
        title: 'Le référencement local et national',
        items: [
          'Audit complet de votre présence en ligne',
          'Mots-clés ciblés, comme « hôtel avec spa Vernon » ou « week-end détente Normandie »',
          'Optimisation technique : vitesse, balises, structure',
          'Contenus : pages séjour, spa, restaurant, blog',
        ],
      },
      {
        title: 'Un site hôtelier qui donne envie de réserver',
        items: [
          'Design haut de gamme, pensé d’abord pour le mobile',
          'Moteur de réservation intégré et suivi des conversions',
          'Textes rédigés pour le SEO et pour vos visiteurs',
          'Chambres, soins, offres et photos mis en avant',
        ],
      },
      {
        title: 'Visibilité locale et e-réputation',
        items: [
          'Optimisation de votre fiche Google Business Profile',
          'Gestion et réponse aux avis clients',
          'Suivi mensuel : clics, itinéraires, appels',
        ],
      },
    ],
    typesTitle: 'Les établissements que j’accompagne',
    types: [
      'Hôtels indépendants',
      'Chambres d’hôtes et gîtes',
      'Spas, instituts et centres de bien-être',
    ],
    formule: {
      label: 'Package Avancé',
      id: 'package-avance',
      price: 2040,
      why: 'Un site de 1 à 10 pages, un module de réservation avancé et personnalisé, et l’optimisation SEO pour être visible sur Google.',
    },
    faq: [
      {
        q: 'Combien coûte un site pour un hôtel ou un spa ?',
        a: 'Le Package Essentiel (site + réservation en ligne) démarre à 1 540 € et le Package Avancé (réservation avancée + SEO) à 2 040 €. Les besoins spécifiques, comme un site multilingue, sont chiffrés sur devis. ' + OFFRE_TXT,
      },
      FAQ_SEO_DELAI,
      {
        q: 'Travaillez-vous uniquement à Vernon ?',
        a: 'Non. J’accompagne des établissements partout en France, avec une connaissance particulière de l’Eure et de la Normandie.',
      },
      FAQ_PHOTOS,
    ],
  },
];
