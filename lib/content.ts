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
    eyebrow: "Conseil en cession · Pilotage dirigeant · La Réunion",
    titleLine1: "Céder ou piloter,",
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
      name: "Transaction",
      pitch: "La mise en transaction.",
      chip: "",
      price: "",
      priceSuffix: "",
      features: [
        "Mise en vente de votre entreprise",
        "Diffusion réseau Procom qualifié",
        "Organisation des visites",
        "Suivi des candidats acquéreurs",
        "Négociation jusqu'à la signature",
      ],
      meta: "Mise en transaction : Procom Océan Indien",
      featured: false,
      variant: "default",
      ctaLabel: "Prendre rendez-vous",
      ctaHref: "/contact",
    },
    {
      id: "strategique",
      name: "Structuration",
      pitch: "Préparer avant de transmettre.",
      chip: "",
      price: "",
      priceSuffix: "",
      features: [
        "Diagnostic complet d'entreprise",
        "Positionnement stratégique",
        "Valorisation argumentée",
        "Dossier de cession structuré",
        "Recherche d'acquéreurs ciblés",
      ],
      meta: "Elity Conseils + Procom Océan Indien",
      featured: false,
      variant: "cream",
      ctaLabel: "Prendre rendez-vous",
      ctaHref: "/contact",
    },
    {
      id: "premium",
      name: "Accompagnement",
      pitch: "L'accompagnement de bout en bout.",
      chip: "",
      price: "",
      priceSuffix: "",
      features: [
        "Stratégie de cession sur-mesure",
        "Structuration et valorisation complète",
        "Mise en vente confidentielle",
        "Négociation et sécurisation des conditions",
        "Accompagnement jusqu'à la finalisation et au-delà",
      ],
      meta: "Elity Conseils + Procom Océan Indien",
      featured: false,
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
