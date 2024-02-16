import { z, defineCollection } from "astro:content";

const globalSchema = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    group: z.string(),
    image: z.string(),
    description: z.string(),
    articleTitle1: z.string(),
    articleText1: z.string(),
    articleTitle2: z.string().optional(),
    articleText2: z.string().optional(),
    articleText3: z.string().optional(),
    articleListTitle: z.string(),
    articleItems: z.array(z.string()),
  }),
});

export const collections = {
  theServices: globalSchema,
};
