// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';
import astroReveal from 'astro-reveal';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), astroReveal()],
  vite: {
    plugins: [tailwindcss()]
  }
});