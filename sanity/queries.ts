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

export type SanityApproche = {
  label?: string;
  heading?: string;
  intro?: string;
  steps?: { eyebrow?: string; title?: string; desc?: string; points?: string[] }[];
  dualLabel?: string;
  dualTitle1?: string;
  dualTitle2?: string;
  acquisitionEyebrow?: string;
  acquisitionTitle?: string;
  acquisitionText?: string;
  acquisitionPoints?: string[];
  accompagnementEyebrow?: string;
  accompagnementTitle?: string;
  accompagnementText?: string;
  accompagnementPoints?: string[];
  teamLabel?: string;
  teamTitle1?: string;
  teamTitle2?: string;
  teamIntro?: string;
  team?: { role?: string; name?: string; text?: string }[];
};

export type SanityEssor = {
  intro?: string;
  steps?: { name?: string; baseline?: string; what?: string; deliverables?: string[]; shift?: string }[];
  fitLabel?: string;
  fitTitle1?: string;
  fitTitle2?: string;
  fitYesTitle?: string;
  fitYes?: string[];
  fitNoTitle?: string;
  fitNo?: string[];
  origineLabel?: string;
  origineTitle1?: string;
  origineTitle2?: string;
  origineLead?: string;
  origineSteps?: { title?: string; text?: string }[];
  convictionEyebrow?: string;
  convictionQuote?: string;
  convictionSub?: string;
};

export type SanityOffersPage = {
  heading?: string;
  intro?: string;
};

export type SanityContact = {
  label?: string;
  title1?: string;
  title2?: string;
  sub?: string;
  formTitle?: string;
  projectOptions?: string[];
  consentText?: string;
  submitLabel?: string;
  reassurance?: string;
  successTitle?: string;
  successText?: string;
};

export type SanitySettings = {
  email?: string;
  phone?: string;
  linkedin?: string;
  facebook?: string;
  footerTagline?: string;
  footerPartner?: string;
};

export type SanityAbout = {
  label?: string;
  name?: string;
  nameEm?: string;
  role?: string;
  paragraphs?: string[];
  values?: { name?: string; desc?: string }[];
};

export type SanityHome = {
  heroEyebrow?: string;
  heroTitleLine1?: string;
  heroTitleEm?: string;
  heroSub?: string;
  heroCta1Label?: string;
  heroCta1Href?: string;
  heroCta2Label?: string;
  heroCta2Href?: string;
  problemTitle1?: string;
  problemTitle2?: string;
  problemSub?: string;
  problemCards?: { eyebrow?: string; titre?: string; desc?: string }[];
  problemCtaLabel?: string;
  stepsLabel?: string;
  stepsTitle1?: string;
  stepsTitle2?: string;
  steps?: { label?: string; title?: string; desc?: string }[];
  manifesteEyebrow?: string;
  manifesteLine1?: string;
  manifesteLine2?: string;
  manifesteLine3?: string;
  manifesteSub?: string;
  stats?: { prefix?: string; value?: number; suffix?: string; label?: string }[];
  cabinetEyebrow?: string;
  cabinetName?: string;
  cabinetRole?: string;
  cabinetDesc?: string;
  cabinetReassurance?: string;
  temoignages?: { text?: string; name?: string; context?: string }[];
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
    `*[_type == "caseStudy" && (statut == "publie" || !defined(statut))] | order(order asc){
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

export function getApproche() {
  return safeFetch<SanityApproche | null>(
    `*[_type == "approchePage"][0]{
      label, heading, intro,
      steps[]{ eyebrow, title, desc, points },
      dualLabel, dualTitle1, dualTitle2,
      acquisitionEyebrow, acquisitionTitle, acquisitionText, acquisitionPoints,
      accompagnementEyebrow, accompagnementTitle, accompagnementText, accompagnementPoints,
      teamLabel, teamTitle1, teamTitle2, teamIntro, team[]{ role, name, text }
    }`,
    null
  );
}

export function getEssor() {
  return safeFetch<SanityEssor | null>(
    `*[_type == "essorPage"][0]{
      intro, steps[]{ name, baseline, what, deliverables, shift },
      fitLabel, fitTitle1, fitTitle2, fitYesTitle, fitYes, fitNoTitle, fitNo,
      origineLabel, origineTitle1, origineTitle2, origineLead, origineSteps[]{ title, text },
      convictionEyebrow, convictionQuote, convictionSub
    }`,
    null
  );
}

export function getOffersPage() {
  return safeFetch<SanityOffersPage | null>(
    `*[_type == "offersPage"][0]{ heading, intro }`,
    null
  );
}

export function getContact() {
  return safeFetch<SanityContact | null>(
    `*[_type == "contactPage"][0]{
      label, title1, title2, sub, formTitle, projectOptions,
      consentText, submitLabel, reassurance, successTitle, successText
    }`,
    null
  );
}

export function getSettings() {
  return safeFetch<SanitySettings | null>(
    `*[_type == "siteSettings"][0]{ email, phone, linkedin, facebook, footerTagline, footerPartner }`,
    null
  );
}

export function getHome() {
  return safeFetch<SanityHome | null>(
    `*[_type == "homePage"][0]{
      heroEyebrow, heroTitleLine1, heroTitleEm, heroSub,
      heroCta1Label, heroCta1Href, heroCta2Label, heroCta2Href,
      problemTitle1, problemTitle2, problemSub,
      problemCards[]{ eyebrow, titre, desc }, problemCtaLabel,
      stepsLabel, stepsTitle1, stepsTitle2, steps[]{ label, title, desc },
      manifesteEyebrow, manifesteLine1, manifesteLine2, manifesteLine3, manifesteSub,
      stats[]{ prefix, value, suffix, label },
      cabinetEyebrow, cabinetName, cabinetRole, cabinetDesc, cabinetReassurance,
      temoignages[]{ text, name, context }
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
    `*[_type == "article" && (statut == "publie" || !defined(statut))] | order(date desc){
      title, "slug": slug.current, date, category, excerpt, link, icon,
      "coverUrl": cover.asset->url,
      "body": pt::text(body)
    }`,
    []
  );
}
