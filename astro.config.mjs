import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({ config: { applyBaseStyles: true } }), mdx(), prefetch({ throttle: 3 })],
    experimental: {},
    image: { service: sharpImageService() }
});
