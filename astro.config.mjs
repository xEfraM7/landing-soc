import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://landing-soc.local',
  server: {
    port: 4321,
    host: true,
  },
});
