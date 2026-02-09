// src/lib/tags.ts
export function slugifyTag(tag: string): string {
    return tag
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")     // enlève accents
      .replace(/&/g, "and")               // évite "&" en URL
      .replace(/[^a-z0-9]+/g, "-")        // tout le reste -> tirets
      .replace(/^-+|-+$/g, "");           // trim tirets
  }
  