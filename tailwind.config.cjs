const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                alegreya: 'alegreya-sc, serif',
                raleway: 'raleway, sans-serif',
                aleo: 'aleo, serif',
                merriweather: 'Merriweather, serif'
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
