import { z, defineCollection } from 'astro:content';

const team = defineCollection({
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            position: z.string(),
            about: z.string(),
            photo: image()
        })
});

export const articles = defineCollection({
    schema: z.object({
        heading: z.string(),
        date: z.string(),
        summary: z.string()
    })
});

export const collections = {
    team,
    articles
};
