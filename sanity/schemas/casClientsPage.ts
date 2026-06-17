import { defineField, defineType } from "sanity";

const ICON_LIST = [
  { title: "Aucune", value: "" },
  { title: "Boussole (stratégie)", value: "compass" },
  { title: "Poignée de main (cession)", value: "handshake" },
  { title: "Courbe de croissance", value: "growth" },
  { title: "Bouclier (sécurisation)", value: "shield" },
  { title: "Document / dossier", value: "document" },
  { title: "Bâtiment / entreprise", value: "building" },
  { title: "Cible (objectif)", value: "target" },
  { title: "Ampoule (idée)", value: "bulb" },
];

const STATUT_FIELD = {
  name: "statut",
  title: "Statut de publication",
  type: "string",
  description: "Publié = visible. Brouillon ou Archivé = masqué du site.",
  options: {
    list: [
      { title: "Publié (visible)", value: "publie" },
      { title: "Brouillon (masqué)", value: "brouillon" },
      { title: "Archivé (masqué)", value: "archive" },
    ],
    layout: "radio",
  },
  initialValue: "publie",
};

const caseObject = {
  type: "object",
  fields: [
    STATUT_FIELD,
    { name: "sector", title: "Secteur / titre de la carte", type: "string" },
    { name: "meta", title: "Sous-titre (taille, CA, lieu)", type: "string" },
    { name: "tag", title: "Étiquette", type: "string" },
    { name: "sectorCategory", title: "Catégorie de secteur (filtre)", type: "string" },
    { name: "date", title: "Date du cas (tri)", type: "date", options: { dateFormat: "DD/MM/YYYY" } },
    { name: "cover", title: "Image de la carte", type: "image", options: { hotspot: true } },
    { name: "icon", title: "Icône (si pas d'image)", type: "string", options: { list: ICON_LIST } },
    { name: "link", title: "Lien de redirection (optionnel)", type: "url" },
    {
      name: "metrics", title: "Chiffres clés", type: "array",
      of: [{ type: "object", fields: [{ name: "value", title: "Valeur", type: "string" }, { name: "label", title: "Libellé", type: "string" }], preview: { select: { title: "value", subtitle: "label" } } }],
    },
    {
      name: "phases", title: "Étapes du cas", type: "array",
      of: [{ type: "object", fields: [{ name: "eyebrow", title: "Surtitre", type: "string" }, { name: "title", title: "Titre", type: "string" }, { name: "text", title: "Texte", type: "text", rows: 3 }], preview: { select: { title: "title", subtitle: "eyebrow" } } }],
    },
    { name: "quote", title: "Citation / témoignage", type: "text", rows: 3 },
    { name: "author", title: "Auteur de la citation", type: "string" },
  ],
  preview: { select: { title: "sector", subtitle: "tag" } },
};

const articleObject = {
  type: "object",
  fields: [
    STATUT_FIELD,
    { name: "title", title: "Titre", type: "string" },
    { name: "date", title: "Date de publication", type: "date", options: { dateFormat: "DD/MM/YYYY" } },
    {
      name: "category", title: "Catégorie", type: "string",
      options: { list: [{ title: "Actualité", value: "actualite" }, { title: "Conseil", value: "conseil" }, { title: "Marché Océan Indien", value: "marche" }, { title: "Événement", value: "evenement" }], layout: "radio" },
      initialValue: "actualite",
    },
    { name: "excerpt", title: "Court résumé", type: "text", rows: 3, description: "Petit texte affiché sur la carte." },
    { name: "cover", title: "Image de couverture", type: "image", options: { hotspot: true } },
    { name: "icon", title: "Icône (si pas d'image)", type: "string", options: { list: ICON_LIST } },
    { name: "body", title: "Contenu", type: "array", of: [{ type: "block" }] },
    { name: "link", title: "Lien de redirection (optionnel)", type: "url" },
  ],
  preview: { select: { title: "title", subtitle: "date", media: "cover" } },
};

// Singleton : page Cas clients / Actualites complete (texte + cartes).
export default defineType({
  name: "casClientsPage",
  title: "Page Cas clients / Actualités",
  type: "document",
  groups: [
    { name: "intro", title: "En-tête", default: true },
    { name: "cases", title: "Études de cas (cartes)" },
    { name: "articles", title: "Actualités (cartes)" },
    { name: "cta", title: "Bloc final (avant footer)" },
  ],
  fields: [
    defineField({ name: "introLabel", title: "Surtitre", type: "string", group: "intro" }),
    defineField({ name: "introTitle1", title: "Titre (ligne 1)", type: "string", group: "intro" }),
    defineField({ name: "introTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "intro" }),
    defineField({ name: "cases", title: "Études de cas", type: "array", of: [caseObject], group: "cases" }),
    defineField({ name: "articles", title: "Actualités", type: "array", of: [articleObject], group: "articles" }),
    defineField({ name: "ctaTitle1", title: "Bloc final : titre (début)", type: "string", group: "cta" }),
    defineField({ name: "ctaTitle2", title: "Bloc final : titre (partie italique)", type: "string", group: "cta" }),
    defineField({ name: "ctaText", title: "Bloc final : texte", type: "text", rows: 2, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Page Cas clients / Actualités" }) },
});
