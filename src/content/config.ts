import { defineCollection, z } from "astro:content";

/* =========================
   Collection : Work
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
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),

    organization: z.string(),
    url: z.string().optional(),

    role: z.string().optional(),
    status: z.string().optional(),
    location: z.string().optional(),
    mode: z.string().optional(),
    logo: z.string().optional(),
    highlight: z.string().optional(),

    about: z.string().optional(),
    mission: z.string().optional(),
    positioning: z.string().optional(),
    keyAchievements: z.array(z.string()).default([]),

    skills: z.array(z.string()).default([]),
    relatedWorks: z.array(z.string()).default([]),
  }),
});

/* =========================
   Collection : Skills (Compétences)
========================= */
const skills = defineCollection({
  schema: z.object({
    title: z.string(),
    type: z.enum(["technique", "humaine"]),
    level: z.number().min(1).max(10),
    summary: z.string(),

    evidence: z
      .array(
        z.object({
          title: z.string(),
          context: z.string().optional(),
          result: z.string().optional(),
          link: z.string().url().optional(),
        })
      )
      .default([]),

    selfCritique: z.string().optional(),
    growth: z.array(z.string()).default([]),

    relatedWorks: z.array(z.string()).default([]),
  }),
});

/* =========================
   Export des collections
========================= */
export const collections = {
  work,
  parcours,
  skills,
};
