// src/content.config.ts
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'; 
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

// Registro cada carpeta de módulo como una colección
export const collections = {
  'pare': docs,
  'sad': docs,
  'ede': docs,
  'ada': docs,
};