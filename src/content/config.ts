import { defineCollection, z } from "astro:content";

/* =========================
   Collection : Work
========================= */
const work = defineCollection({
  schema: z.object({
    title: z.string(),

    // safe si certains anciens work n'ont pas ce champ
    description: z.string().optional(),

    publishDate: z.coerce.date(),

    tags: z.array(z.string()).default([]),

    // cover optionnelle (si galerie suffisante)
    img: z.string().optional(),
    img_alt: z.string().optional(),

    // Galerie pour la fiche projet (carousel)
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
        })
      )
      .default([]),

    // Navigation circulaire RNCP : slugs des skills (/skills/*.md)
    relatedSkills: z.array(z.string()).default([]),

    // Optionnels
    card: z.string().optional(),

    // enum "large" (inclut slide) => compatible avec tes contenus existants
    type: z.enum(["projet", "etude", "rpa", "dev", "autre", "slide"]).optional(),

    /* =========================
       ✅ Champs premium (optionnels / safe)
    ========================= */
    featured: z.boolean().default(false),

    // Contexte “jury friendly”
    role: z.string().optional(),
    context: z.string().optional(),
    duration: z.string().optional(),
    team: z.string().optional(),

    // Liens projet (preuve tangible)
    links: z
      .object({
        repo: z.string().url().optional(),
        repoFrontend: z.string().url().optional(),
        repoBackend: z.string().url().optional(),
        demo: z.string().url().optional(),
        doc: z.string().url().optional(),
      })
      .default({}),
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