// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const people = defineCollection({
    schema: z.object({
        name: z.string(),
        position: z.string(),
        about: z.string(),
        image: z.string()
    })
});

const news = defineCollection({
    schema: z.object({
        heading: z.string()
    })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    people,
    news
};
