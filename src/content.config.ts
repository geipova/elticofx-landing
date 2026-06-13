import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Segmento principal de Contexto/Tono de comunicación.txt al que apunta el post
    segment: z.enum([
      'traders-retail',
      'ib',
      'academias',
      'fondos',
      'networkers',
      'inversores',
      'general',
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    // Muestra la calculadora de ingresos por IB al final del post
    calculator: z.boolean().default(false),
    // Preguntas frecuentes -> se renderizan en el post y como FAQPage schema (JSON-LD)
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
