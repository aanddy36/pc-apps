import { z, defineCollection } from "astro:content";

const globalSchema = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    group: z.string(),
  }),
});

export const collections = {
  theServices: globalSchema,
};
