// Utilitaires du blog : les 2 guides piliers (pages hors collection) + accès unifié aux articles.
import { getCollection, type CollectionEntry } from 'astro:content';

export interface PostLink { href: string; title: string; chapo: string; category: string; date: Date }

export const PILLARS: PostLink[] = [
  {
    href: '/quest-ce-que-le-referencement-seo/',
    title: 'Qu’est-ce que le référencement SEO ? Le guide complet',
    chapo: 'Fonctionnement de Google, SEO technique, contenu, liens, SEO local : les bases, sans jargon.',
    category: 'seo',
    date: new Date('2026-04-21'),
  },
  {
    href: '/geo-definition-seo/',
    title: 'GEO : définition et différence avec le SEO',
    chapo: 'Comment fonctionne le Generative Engine Optimization pour être cité par les IA.',
    category: 'geo',
    date: new Date('2026-04-25'),
  },
];

export const postHref = (p: CollectionEntry<'blog'>) => `/blog/${p.id}/`;

export async function allPosts(): Promise<PostLink[]> {
  const posts = await getCollection('blog');
  return posts
    .map((p) => ({ href: postHref(p), title: p.data.h1, chapo: p.data.chapo, category: p.data.category, date: p.data.published }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

/** Résout une liste de slugs (articles ou piliers) en liens. */
export async function resolveLinks(slugs: string[]): Promise<PostLink[]> {
  const all = [...(await allPosts()), ...PILLARS];
  return slugs
    .map((s) => all.find((p) => p.href === `/blog/${s}/` || p.href === `/${s}/`))
    .filter((p): p is PostLink => Boolean(p));
}
