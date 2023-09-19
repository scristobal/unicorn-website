import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './const';

// https://astro.build/config
export default defineConfig({
    site: SITE_URL,
    integrations: [
        tailwind({
            config: {
                applyBaseStyles: true
            }
        }),
        mdx(),
        prefetch({
            throttle: 3
        }),
        sitemap()
    ],
    experimental: {},
    image: {
        service: sharpImageService()
    }
});
