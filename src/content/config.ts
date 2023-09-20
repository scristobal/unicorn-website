import { z, defineCollection } from 'astro:content';

const team = defineCollection({
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            position: z.union([z.literal('PhD Student'), z.literal('Postdoctoral'), z.literal('Professor')]),
            photo: image()
        })
});

export const news = defineCollection({
    schema: z.object({
        heading: z.string(),
        date: z.date(),
        summary: z.string()
    })
});

export const collections = { team, news };
