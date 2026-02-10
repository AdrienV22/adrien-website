// src/lib/tags.ts

/* =========================================================
 * Utils
 * ======================================================= */

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

/* =========================================================
 * Skill categories (page Compétences)
 * ======================================================= */

export type SkillCategory = "language" | "technology" | "tool";

/* -------------------------
 * LANGAGES
 * ----------------------- */
const LANGUAGES = new Set([
  "javascript",
  "typescript",
  "python",
  "java",
  "php",
  "c",
  "csharp",
  "cpp",
  "go",
  "rust",
  "kotlin",
  "swift",
  "ruby",
  "sql",
  "bash",
  "powershell",
  "html",
  "css",
]);

/* -------------------------
 * OUTILS
 * ----------------------- */
const TOOLS = new Set([
  "git",
  "github",
  "gitlab",
  "docker",
  "docker-compose",
  "uipath",
  "ssis",
  "jira",
  "trello",
  "figma",
  "postman",
  "swagger",
  "vscode",
  "linux",
  "power-bi",
  "notion",
]);

/* -------------------------
 * TECHNOLOGIES
 * (frameworks, libs, DB, cloud…)
 * ----------------------- */
const TECHNOLOGIES = new Set([
  // Front / fullstack
  "react",
  "angular",
  "vue",
  "svelte",
  "astro",
  "nextjs",
  "nodejs",
  "express",
  "nestjs",

  // Backend / frameworks
  "spring",
  "spring-boot",
  "django",

  // Data
  "postgresql",
  "mysql",
  "mongodb",
  "redis",
  "etl",
  "database",

  // Cloud / plateformes
  "netlify",
  "vercel",
  "aws",
  "azure",
  "gcp",
]);

/* =========================================================
 * Public API
 * ======================================================= */

/**
 * Retourne la catégorie principale d'une compétence
 * - language
 * - technology
 * - tool
 *
 * Safe : fallback = "technology"
 */
export function getSkillCategory(tag: string): SkillCategory {
  const s = slugifyTag(tag);

  if (LANGUAGES.has(s)) return "language";
  if (TOOLS.has(s)) return "tool";
  if (TECHNOLOGIES.has(s)) return "technology";

  // Heuristiques légères (optionnelles mais utiles)
  if (s.includes("sql")) return "language";
  if (s.includes("api")) return "technology";

  return "technology";
}
