// src/content.config.ts
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'; 
import { glob } from 'astro/loaders';

const materialDocente = defineCollection({
  // Apunto el loader directamente a la carpeta del submódulo
  loader: glob({ pattern: "**/*.md", base: "./src/content/material-docente" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

// Exporto una ÚNICA colección con el nombre exacto de la carpeta
export const collections = {
  'material-docente': materialDocente,
};