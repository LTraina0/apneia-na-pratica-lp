import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://LTraina0.github.io',
  base: '/apneia-na-pratica-lp',
  server: {
    open: true,
    port: 4321
  },
  vite: {
    server: {
      open: true
    }
  }
});

