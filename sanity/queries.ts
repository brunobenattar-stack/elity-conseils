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
  icon?: string;
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
  icon?: string;
  body?: string;
  link?: string;
};

export type SanityHero = {
  eyebrow?: string;
  titleLine1?: string;
  titleEm?: string;
  sub?: string;
  cta1Label?: string;
  cta1Href?: string;
  cta2Label?: string;
  cta2Href?: string;
  chip1Label?: string;
  chip1Sub?: string;
  chip2Num?: string;
  chip2Label?: string;
  chip2Sub?: string;
};

export type SanityAbout = {
  label?: string;
  name?: string;
  nameEm?: string;
  role?: string;
  paragraphs?: string[];
  values?: { name?: string; desc?: string }[];
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
      sector, meta, tag, sectorCategory, date, link, icon,
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

export function getHero() {
  return safeFetch<SanityHero | null>(
    `*[_type == "heroSection"][0]{
      eyebrow, titleLine1, titleEm, sub,
      cta1Label, cta1Href, cta2Label, cta2Href,
      chip1Label, chip1Sub, chip2Num, chip2Label, chip2Sub
    }`,
    null
  );
}

export function getAbout() {
  return safeFetch<SanityAbout | null>(
    `*[_type == "aboutPage"][0]{
      label, name, nameEm, role, paragraphs,
      values[]{ name, desc }
    }`,
    null
  );
}

export function getArticles() {
  return safeFetch<SanityArticle[]>(
    `*[_type == "article"] | order(date desc){
      title, "slug": slug.current, date, category, excerpt, link, icon,
      "coverUrl": cover.asset->url,
      "body": pt::text(body)
    }`,
    []
  );
}
