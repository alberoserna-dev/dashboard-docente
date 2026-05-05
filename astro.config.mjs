// @ts-check
import { defineConfig } from 'astro/config';
import { remarkCallout } from '@r4ai/remark-callout';

export default defineConfig({
  site: 'https://alberoserna-dev.github.io',
  base: '/dashboard-docente',
  markdown: {
    remarkPlugins: [remarkCallout],
  },
});