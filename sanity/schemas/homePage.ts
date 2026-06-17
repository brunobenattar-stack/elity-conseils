import { defineField, defineType } from "sanity";

// Singleton : tous les textes editoriaux de la page d'accueil
// (hors hero, gere separement, et hors offres, gerees dans "Offres").
export default defineType({
  name: "homePage",
  title: "Page d'accueil (sections)",
  type: "document",
  groups: [
    { name: "problem", title: "Section Problèmes" },
    { name: "steps", title: "Section Approche (étapes)" },
    { name: "manifeste", title: "Manifeste" },
    { name: "stats", title: "Chiffres clés" },
    { name: "cabinet", title: "Section Cabinet (Bruno)" },
    { name: "temoignages", title: "Témoignages" },
  ],
  fields: [
    // --- Section Problemes ---
    defineField({ name: "problemTitle1", title: "Titre (ligne 1)", type: "string", group: "problem" }),
    defineField({ name: "problemTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "problem" }),
    defineField({ name: "problemSub", title: "Sous-titre", type: "text", rows: 2, group: "problem" }),
    defineField({
      name: "problemCards",
      title: "Cartes (risques)",
      type: "array",
      group: "problem",
      of: [{
        type: "object",
        fields: [
          { name: "eyebrow", title: "Surtitre", type: "string" },
          { name: "titre", title: "Titre", type: "string" },
          { name: "desc", title: "Description", type: "text", rows: 3 },
        ],
        preview: { select: { title: "titre", subtitle: "eyebrow" } },
      }],
    }),
    defineField({ name: "problemCtaLabel", title: "Texte du bouton", type: "string", group: "problem" }),
    // --- Section Approche / etapes ---
    defineField({ name: "stepsLabel", title: "Surtitre", type: "string", group: "steps" }),
    defineField({ name: "stepsTitle1", title: "Titre (ligne 1)", type: "string", group: "steps" }),
    defineField({ name: "stepsTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "steps" }),
    defineField({
      name: "steps",
      title: "Étapes",
      type: "array",
      group: "steps",
      of: [{
        type: "object",
        fields: [
          { name: "label", title: "Nom de l'étape", type: "string" },
          { name: "title", title: "Titre", type: "string" },
          { name: "desc", title: "Description", type: "text", rows: 2 },
        ],
        preview: { select: { title: "label", subtitle: "title" } },
      }],
    }),
    // --- Manifeste ---
    defineField({ name: "manifesteEyebrow", title: "Surtitre", type: "string", group: "manifeste" }),
    defineField({ name: "manifesteLine1", title: "Phrase ligne 1", type: "string", group: "manifeste" }),
    defineField({ name: "manifesteLine2", title: "Phrase ligne 2", type: "string", group: "manifeste" }),
    defineField({ name: "manifesteLine3", title: "Phrase ligne 3 (dorée)", type: "string", group: "manifeste" }),
    defineField({ name: "manifesteSub", title: "Sous-texte", type: "text", rows: 2, group: "manifeste" }),
    // --- Stats ---
    defineField({
      name: "stats",
      title: "Chiffres clés (3)",
      type: "array",
      group: "stats",
      of: [{
        type: "object",
        fields: [
          { name: "prefix", title: "Préfixe (ex. ×)", type: "string" },
          { name: "value", title: "Valeur (nombre)", type: "number" },
          { name: "suffix", title: "Suffixe (ex. mois)", type: "string" },
          { name: "label", title: "Libellé", type: "string" },
        ],
        preview: { select: { title: "value", subtitle: "label" } },
      }],
    }),
    // --- Cabinet / Bruno ---
    defineField({ name: "cabinetEyebrow", title: "Surtitre", type: "string", group: "cabinet" }),
    defineField({ name: "cabinetName", title: "Nom / titre", type: "string", group: "cabinet" }),
    defineField({ name: "cabinetRole", title: "Ligne de rôle", type: "string", group: "cabinet" }),
    defineField({ name: "cabinetDesc", title: "Description", type: "text", rows: 4, group: "cabinet" }),
    defineField({ name: "cabinetReassurance", title: "Ligne de réassurance", type: "string", group: "cabinet" }),
    // --- Temoignages ---
    defineField({
      name: "temoignages",
      title: "Avis / témoignages",
      type: "array",
      group: "temoignages",
      of: [{
        type: "object",
        fields: [
          { name: "text", title: "Témoignage", type: "text", rows: 3 },
          { name: "name", title: "Nom", type: "string" },
          { name: "context", title: "Contexte (rôle, secteur)", type: "string" },
        ],
        preview: { select: { title: "name", subtitle: "context" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Page d'accueil (sections)" }) },
});
