import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ateliers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ateliers' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      description: z.string(),
      duree: z.string(), // ex "3 heures"
      niveau: z.enum(['débutant', 'intermédiaire', 'confirmé', 'tous niveaux']),
      prix: z.number(), // en euros
      places: z.number(), // nombre max de participants
      dates: z.array(z.date()).optional(),
      image: image().optional(),
      stripeLink: z.string().url().optional(),
      ordre: z.number().default(100),
      publie: z.boolean().default(true),
    }),
});

const creations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/creations' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      description: z.string(),
      prix: z.number(),
      categorie: z.enum(['vêtement', 'accessoire', 'décoration', 'autre']),
      image: image(),
      galerie: z.array(image()).optional(),
      stripeLink: z.string().url().optional(),
      disponible: z.boolean().default(true),
      ordre: z.number().default(100),
    }),
});

export const collections = { ateliers, creations };
