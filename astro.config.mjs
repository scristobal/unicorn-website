import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import { astroImageTools } from 'astro-imagetools';

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
        sitemap(),
        astroImageTools
    ],
    experimental: {},
    image: {
        service: sharpImageService()
    }
});
