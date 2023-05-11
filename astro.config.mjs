import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({ config: { applyBaseStyles: false } }), mdx()],
    experimental: {
        assets: true
    },
    image: {
        service: sharpImageService()
    }
});
