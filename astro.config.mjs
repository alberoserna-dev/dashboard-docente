// @ts-check
import { defineConfig } from 'astro/config';
import { remarkCallout } from '@r4ai/remark-callout';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkCallout],
  },
});