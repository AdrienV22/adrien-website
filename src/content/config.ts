import { defineCollection, z } from "astro:content";

/* =========================
   Collection : Work (déjà existante)
========================= */
const work = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

/* =========================
   Collection : Parcours
   (Expériences / Formations / Certifications)
========================= */
const parcours = defineCollection({
	schema: z.object({
	  title: z.string(),
	  type: z.enum(["experience", "formation", "certification"]),
	  period: z.string(),
	  organization: z.string(),
  
	  role: z.string().optional(),
	  status: z.string().optional(),
	  location: z.string().optional(),
	  mode: z.string().optional(),
	  logo: z.string().optional(),
	  highlight: z.string().optional(),
  
	  url: z.string().optional(), // ← AJOUT ICI
  
	  skills: z.array(z.string()).default([]),
	  relatedWorks: z.array(z.string()).default([]),
	}),
  });
  

/* =========================
   Export des collections
========================= */
export const collections = {
  work,
  parcours,
};
