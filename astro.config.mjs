// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://francocossatti.github.io',
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Urbanist",
    cssVariable: "--font-urbanist"
  },
  {
   provider: fontProviders.fontsource(),
   name: "Open Sans",
   cssVariable: "--font-open-sans" 
  }],
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});