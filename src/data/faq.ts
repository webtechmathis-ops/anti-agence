// FAQ générale (/faq-seo-vernon/). Reprise de l'ancienne page, nettoyée :
// prix alignés sur tarifs.ts, statistiques non sourcées retirées.
import { OFFRE } from './site';

export const FAQ_GROUPS = [
  {
    id: 'tarifs',
    title: 'Tarifs et budget',
    items: [
      {
        q: 'Combien coûte un site internet à Vernon ?',
        a: `Chez Anti-Agence, un site One-page démarre à 840 €, un site vitrine de 1 à 5 pages à 1 240 € et une boutique en ligne à 2 540 €. Ce sont des prix de départ, sans les frais fixes d’une agence. En ce moment, toutes les prestations sont à -${OFFRE.remise} %. Le devis personnalisé arrive sous 24 h.`,
      },
      {
        q: 'Vaut-il mieux faire du SEO ou de la publicité Google Ads ?',
        a: 'Les deux sont complémentaires. Google Ads apporte des résultats immédiats mais s’arrête dès que le budget est coupé. Le SEO construit une visibilité durable : une fois bien positionné, le trafic continue sans payer chaque clic. Pour une TPE ou un artisan au budget limité, le SEO local est généralement le meilleur investissement sur la durée.',
      },
      {
        q: 'Peut-on faire du SEO soi-même pour son commerce ?',
        a: 'Oui, en partie : remplir sa fiche Google Business Profile, collecter des avis, publier régulièrement sur son site. Le SEO technique (vitesse, structure, données structurées) et la stratégie de mots-clés gagnent en revanche à être confiés à un professionnel.',
      },
    ],
  },
  {
    id: 'local',
    title: 'Visibilité locale à Vernon',
    items: [
      {
        q: 'Qu’est-ce que le SEO local et pourquoi est-ce important à Vernon ?',
        a: 'Le SEO local regroupe les techniques qui font apparaître une entreprise dans les recherches liées à une zone : « plombier Vernon », « restaurant Vernon », « coiffeur Eure ». Pour un commerce ou un artisan, c’est le levier le plus rentable : vous touchez des gens qui cherchent exactement ce que vous proposez, près de chez eux.',
      },
      {
        q: 'Comment apparaître dans Google Maps à Vernon ?',
        a: 'Pour entrer dans le « pack local » (les 3 résultats affichés sur la carte) : 1. créer et compléter une fiche Google Business Profile (adresse, catégories précises, photos, horaires) ; 2. utiliser des mots-clés locaux dans la description ; 3. collecter des avis clients et répondre à chacun ; 4. publier régulièrement des posts sur la fiche.',
      },
      {
        q: 'Combien de temps faut-il pour être visible sur Google ?',
        a: 'Les premiers résultats SEO apparaissent généralement entre 3 et 6 mois. Sur des requêtes locales peu concurrentielles, cela peut aller plus vite. Une fiche Google Business Profile bien remplie peut générer des résultats en quelques semaines.',
      },
      {
        q: 'Quels mots-clés viser pour une entreprise à Vernon ?',
        a: 'Ceux qui combinent votre métier et la géographie : « [métier] Vernon », « [métier] Eure », « [métier] 27 », « [métier] près de Giverny ». Les questions plus longues, comme « combien coûte un [service] à Vernon », attirent des visiteurs déjà prêts à acheter.',
      },
      {
        q: 'Comment obtenir des avis Google ?',
        a: 'Le plus efficace : demander à chaque client satisfait, en lui envoyant le lien direct vers votre fiche. Ajoutez ce lien dans vos emails, sur vos factures ou via un QR code en boutique. Chaque nouvel avis renforce votre place dans le pack local.',
      },
      {
        q: 'Un artisan ou un commerçant a-t-il vraiment besoin d’un site ?',
        a: 'Oui. Vos clients vérifient en ligne avant de vous appeler ou de se déplacer. Un site professionnel crédibilise votre activité, améliore votre référencement local et vous fait trouver par des clients que le bouche-à-oreille n’atteint pas.',
      },
    ],
  },
  {
    id: 'geo',
    title: 'SEO et GEO',
    items: [
      {
        q: 'Qu’est-ce que le GEO et est-ce utile pour une entreprise à Vernon ?',
        a: 'Le GEO (Generative Engine Optimization) consiste à optimiser ses contenus pour apparaître dans les réponses des IA comme ChatGPT, Perplexity ou Google AI Overviews. Il complète le SEO : quand un client demande à une IA « quelle agence web à Vernon ? », l’objectif est que votre entreprise soit citée.',
      },
      {
        q: 'Le GEO remplace-t-il le SEO ?',
        a: 'Non. Un bon SEO (site rapide, contenus utiles, structure claire) reste la base. Le GEO ajoute des optimisations pour être repris par les moteurs génératifs : réponses directes, données structurées, sources et auteur identifiés.',
      },
    ],
  },
] as const;
