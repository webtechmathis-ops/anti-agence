import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Articles de blog : chaque article soutient UNE page business (champ `money`) sans viser sa requête principale.
// Carte des intentions : CLAUDE.md, section 6.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60), // balise <title>
      description: z.string().min(120).max(160),
      h1: z.string(),
      crumb: z.string().max(40), // libellé court du fil d'Ariane
      chapo: z.string(),
      category: z.enum(['artisans', 'commercants', 'restaurateurs-traiteurs', 'hotels-spas', 'seo', 'geo', 'tarifs']),
      intent: z.string(), // requête visée, pour contrôler la non-cannibalisation
      money: z.object({ href: z.string(), label: z.string(), pitch: z.string() }),
      published: z.coerce.date(),
      modified: z.coerce.date(),
      readingMinutes: z.number(),
      hero: image(),
      heroAlt: z.string(),
      tldr: z.array(z.string()).min(3).max(5),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).min(3),
      related: z.array(z.string()).default([]),
    }),
});

export const collections = { blog };
