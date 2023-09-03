import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://scristobal.github.io',
    base: '/unicorn-website',
    integrations: [tailwind({ config: { applyBaseStyles: true } }), mdx()],
    experimental: {},
    image: { service: sharpImageService() }
});
