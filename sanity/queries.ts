import { client } from "./client";

// Requetes GROQ + helpers de lecture. Toutes les fonctions sont tolerantes :
// si Sanity est injoignable ou vide, elles renvoient null/[] et le site
// retombe sur son contenu par defaut (aucune page ne casse).

export type SanityCaseStudy = {
  sector: string;
  meta?: string;
  tag?: string;
  sectorCategory?: string;
  date?: string;
  coverUrl?: string;
  link?: string;
  metrics?: { value: string; label: string }[];
  phases?: { eyebrow?: string; title?: string; text?: string }[];
  quote?: string;
  author?: string;
};

export type SanityOffer = {
  name: string;
  category: "cession" | "acquisition" | "pilotage";
  pitch?: string;
  chip?: string;
  featured?: boolean;
  features?: string[];
  price?: string;
  details?: string;
  meta?: string;
};

export type SanityFaqItem = {
  question: string;
  answer: string;
  group?: "cession" | "dirigeant" | "pratique";
};

export type SanityPageText = {
  key: string;
  eyebrow?: string;
  heading?: string;
  body?: string;
};

export type SanityArticle = {
  title: string;
  slug: string;
  date: string;
  category?: string;
  excerpt?: string;
  coverUrl?: string;
  body?: string;
  link?: string;
};

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  try {
    const data = await client.fetch<T>(query, {}, { next: { revalidate: 60 } });
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

export function getCaseStudies() {
  return safeFetch<SanityCaseStudy[]>(
    `*[_type == "caseStudy"] | order(order asc){
      sector, meta, tag, sectorCategory, date, link,
      "coverUrl": cover.asset->url,
      metrics, phases, quote, author
    }`,
    []
  );
}

export function getOffers() {
  return safeFetch<SanityOffer[]>(
    `*[_type == "offer"] | order(order asc){
      name, category, pitch, chip, featured, features, price, details, meta
    }`,
    []
  );
}

export function getFaqItems() {
  return safeFetch<SanityFaqItem[]>(
    `*[_type == "faqItem"] | order(order asc){ question, answer, group }`,
    []
  );
}

export function getPageTexts() {
  return safeFetch<SanityPageText[]>(
    `*[_type == "pageText"]{ key, eyebrow, heading, body }`,
    []
  );
}

export function getArticles() {
  return safeFetch<SanityArticle[]>(
    `*[_type == "article"] | order(date desc){
      title, "slug": slug.current, date, category, excerpt, link,
      "coverUrl": cover.asset->url,
      "body": pt::text(body)
    }`,
    []
  );
}
