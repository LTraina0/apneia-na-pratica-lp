import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
