// src/lib/tags.ts

export function slugifyTag(tag: string) {
  return tag
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export type TagCategory = "frontend" | "backend" | "tooling" | "data" | "cloud" | "other";

const FRONTEND = new Set([
  "javascript", "typescript", "react", "astro", "html", "css", "tailwind",
  "angular", "vue", "svelte", "nextjs", "nodejs" // (nodejs peut être “backend” aussi, mais on garde simple)
]);

const BACKEND = new Set([
  "java", "spring", "spring-boot", "django", "python", "php", "api", "rest",
  "graphql", "express", "nestjs"
]);

const TOOLING = new Set([
  "git", "github", "docker", "uipath", "ssis", "jira", "trello", "figma",
  "power-bi", "vscode", "postman", "linux"
]);

const DATA = new Set([
  "sql", "postgresql", "mysql", "mongodb", "redis", "etl", "database"
]);

const CLOUD = new Set([
  "netlify", "aws", "azure", "gcp", "vercel"
]);

export function tagCategory(tag: string): TagCategory {
  const s = slugifyTag(tag);

  if (FRONTEND.has(s)) return "frontend";
  if (BACKEND.has(s)) return "backend";
  if (DATA.has(s)) return "data";
  if (CLOUD.has(s)) return "cloud";
  if (TOOLING.has(s)) return "tooling";

  // heuristiques simples (au cas où)
  if (s.includes("sql")) return "data";
  if (s.includes("api")) return "backend";

  return "other";
}
