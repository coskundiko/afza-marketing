import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';      // ✅ KEEP (official Alpine integration)

import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://afza.ai', // ✅ KEEP (for sitemap URLs)
    vite: {
        plugins: [tailwindcss()] // ✅ KEEP (Tailwind v4)
    },
    integrations: [
        alpinejs(),
        sitemap()
    ],
    output: 'static' // ✅ KEEP (or remove, both work)
});