// Content schema partagé entre le site et la page admin.
// Les valeurs par défaut ci-dessous correspondent au copy actuellement en place.

export type HeroContent = {
  eyebrow: string;
  titleLine1: string;
  titleEm: string;
  sub: string;
  cta1Label: string;
  cta1Href: string;
  cta2Label: string;
  cta2Href: string;
  chip1Label: string;
  chip1Sub: string;
  chip2Num: string;
  chip2Label: string;
  chip2Sub: string;
};

export type OfferVariant = "default" | "cream";

export type Offer = {
  id: string;
  name: string;
  pitch: string;
  chip: string;
  price: string;
  priceSuffix: string;
  features: string[];
  meta: string;
  featured: boolean;
  variant: OfferVariant;
  ctaLabel: string;
  ctaHref: string;
};

export type ContentData = {
  hero: HeroContent;
  offers: Offer[];
};

export const defaultContent: ContentData = {
  hero: {
    eyebrow: "La Réunion",
    titleLine1: "Céder, reprendre,",
    titleEm: "structurer avant d'agir.",
    sub: "Elity Conseils accompagne les dirigeants dans l'élaboration de leur stratégie de cession ou d'acquisition. Elity Dirigeant les aide à piloter leur entreprise avec méthode et recul.",
    cta1Label: "Entamer un échange",
    cta1Href: "/contact",
    cta2Label: "Découvrir notre approche",
    cta2Href: "/approche",
    chip1Label: "Confidentialité totale",
    chip1Sub: "Premier échange sans engagement",
    chip2Num: "10+",
    chip2Label: "Années d'expérience",
    chip2Sub: "Franchisé Procom depuis 2015",
  },
  offers: [
    {
      id: "classique",
      name: "Classique",
      pitch: "Pour vendre simplement.",
      chip: "",
      price: "",
      priceSuffix: "",
      features: [
        "Mise en vente de votre entreprise",
        "Diffusion réseau d'acquéreurs qualifiés",
        "Organisation des visites",
        "Négociation et accompagnement jusqu'à la signature",
      ],
      meta: "Mise en transaction : Procomm Océan Indien",
      featured: false,
      variant: "default",
      ctaLabel: "Prendre rendez-vous",
      ctaHref: "/contact",
    },
    {
      id: "strategique",
      name: "Stratégique",
      pitch: "Pour vendre intelligemment.",
      chip: "",
      price: "",
      priceSuffix: "",
      features: [
        "Diagnostic complet de votre entreprise",
        "Positionnement stratégique",
        "Valorisation réaliste et argumentée",
        "Préparation du dossier de cession (teaser, mémorandum, data room)",
        "Recherche d'acquéreurs ciblés",
        "Conseil et accompagnement jusqu'à la décision",
      ],
      meta: "Structuration stratégique : Elity Conseils",
      featured: false,
      variant: "cream",
      ctaLabel: "Prendre rendez-vous",
      ctaHref: "/contact",
    },
    {
      id: "premium",
      name: "Premium",
      pitch: "Pour vendre dans les meilleures conditions.",
      chip: "Recommandée",
      price: "",
      priceSuffix: "",
      features: [
        "Stratégie de cession sur-mesure",
        "Structuration et valorisation complète",
        "Valorisation et optimisation du dossier",
        "Mise en vente confidentielle",
        "Négociation et sécurisation des conditions",
        "Accompagnement du dirigeant jusqu'à la finalisation et au-delà",
      ],
      meta: "Elity Conseils + Procomm Océan Indien",
      featured: true,
      variant: "default",
      ctaLabel: "Prendre rendez-vous",
      ctaHref: "/contact",
    },
  ],
};

export const CONTENT_STORAGE_KEY = "elity-admin-content-v4";

// Merge deep-ish : on garde la structure des défauts pour tout champ manquant
// (utile quand on enrichit le schéma sans casser les overrides existants).
const VALID_VARIANTS: ReadonlyArray<OfferVariant> = ["default", "cream"];

function normalizeOffer(base: Offer, override: Partial<Offer>): Offer {
  const merged: Offer = { ...base, ...override };
  // Tout variant inconnu (legacy "gold", import JSON corrompu, etc.) repasse en "default"
  if (!VALID_VARIANTS.includes(merged.variant)) {
    merged.variant = "default";
  }
  return merged;
}

export function mergeContent(base: ContentData, override: Partial<ContentData> | null | undefined): ContentData {
  if (!override) return base;
  const merged: ContentData = {
    hero: { ...base.hero, ...(override.hero ?? {}) },
    offers: Array.isArray(override.offers) && override.offers.length > 0
      ? override.offers.map((o, i) => normalizeOffer(base.offers[i] ?? base.offers[0], o))
      : base.offers,
  };
  return merged;
}
