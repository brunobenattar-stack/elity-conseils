import { defineField, defineType } from "sanity";

// Singleton : tous les textes editoriaux de la page d'accueil
// (hors hero, gere separement, et hors offres, gerees dans "Offres").
export default defineType({
  name: "homePage",
  title: "Page d'accueil (sections)",
  type: "document",
  groups: [
    { name: "hero", title: "Bloc principal (hero)", default: true },
    { name: "problem", title: "Section Problèmes" },
    { name: "steps", title: "Section Approche (étapes)" },
    { name: "offres", title: "Section Offres (aperçu)" },
    { name: "pilotage", title: "Encart Accompagnement" },
    { name: "cabinet", title: "Section Cabinet (Bruno)" },
    { name: "casHome", title: "Étude de cas (aperçu)" },
    { name: "cta", title: "Bloc final (avant footer)" },
  ],
  fields: [
    // --- Hero (bloc principal d'accueil) ---
    defineField({ name: "heroEyebrow", title: "Surtitre", type: "string", group: "hero" }),
    defineField({ name: "heroTitleLine1", title: "Titre (1re partie)", type: "string", group: "hero" }),
    defineField({ name: "heroTitleEm", title: "Titre (partie dorée)", type: "string", group: "hero" }),
    defineField({ name: "heroSub", title: "Sous-titre", type: "text", rows: 3, group: "hero" }),
    defineField({ name: "heroCta1Label", title: "Bouton principal : texte", type: "string", group: "hero" }),
    defineField({ name: "heroCta1Href", title: "Bouton principal : lien", type: "string", group: "hero" }),
    defineField({ name: "heroCta2Label", title: "Bouton secondaire : texte", type: "string", group: "hero" }),
    defineField({ name: "heroCta2Href", title: "Bouton secondaire : lien", type: "string", group: "hero" }),
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
    // --- Section Offres (apercu sur l'accueil) ---
    defineField({ name: "offresLabel", title: "Surtitre", type: "string", group: "offres" }),
    defineField({ name: "offresTitle1", title: "Titre (1re partie)", type: "string", group: "offres" }),
    defineField({ name: "offresTitle2", title: "Titre (partie dorée)", type: "string", group: "offres" }),
    defineField({ name: "offresSub", title: "Sous-texte", type: "text", rows: 2, group: "offres" }),
    // --- Encart Accompagnement (teaser pilotage) ---
    defineField({ name: "pilotageEyebrow", title: "Surtitre", type: "string", group: "pilotage" }),
    defineField({ name: "pilotageTitle1", title: "Titre (1re partie)", type: "string", group: "pilotage" }),
    defineField({ name: "pilotageTitle2", title: "Titre (partie italique)", type: "string", group: "pilotage" }),
    defineField({ name: "pilotageDesc", title: "Description", type: "text", rows: 3, group: "pilotage" }),
    defineField({ name: "pilotageCtaLabel", title: "Texte du bouton", type: "string", group: "pilotage" }),
    // --- Cabinet / Bruno ---
    defineField({ name: "cabinetEyebrow", title: "Surtitre", type: "string", group: "cabinet" }),
    defineField({ name: "cabinetName", title: "Nom / titre", type: "string", group: "cabinet" }),
    defineField({ name: "cabinetRole", title: "Ligne de rôle", type: "string", group: "cabinet" }),
    defineField({ name: "cabinetDesc", title: "Description", type: "text", rows: 4, group: "cabinet" }),
    defineField({ name: "cabinetReassurance", title: "Ligne de réassurance", type: "string", group: "cabinet" }),
    // --- Etude de cas (apercu sur l'accueil) ---
    defineField({ name: "casHomeLabel", title: "Surtitre", type: "string", group: "casHome" }),
    defineField({ name: "casHomeTitle1", title: "Titre (1re partie)", type: "string", group: "casHome" }),
    defineField({ name: "casHomeTitle2", title: "Titre (partie dorée)", type: "string", group: "casHome" }),
    defineField({ name: "casHomeSector", title: "Carte : secteur", type: "string", group: "casHome" }),
    defineField({ name: "casHomeOffer", title: "Carte : offre", type: "string", group: "casHome" }),
    defineField({ name: "casHomeSummary", title: "Carte : résumé", type: "text", rows: 3, group: "casHome" }),
    // --- Bloc final (CtaFinal) ---
    defineField({ name: "ctaTitle1", title: "Titre (1re partie)", type: "string", group: "cta" }),
    defineField({ name: "ctaTitle2", title: "Titre (partie italique)", type: "string", group: "cta" }),
    defineField({ name: "ctaText", title: "Texte", type: "text", rows: 2, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Page d'accueil (sections)" }) },
});
