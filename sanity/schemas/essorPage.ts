import { defineField, defineType } from "sanity";

// Singleton : page "Méthode ESSOR" (texte integral).
export default defineType({
  name: "essorPage",
  title: "Page Méthode ESSOR",
  type: "document",
  groups: [
    { name: "intro", title: "En-tête", default: true },
    { name: "steps", title: "4 étapes ESSOR" },
    { name: "fit", title: "Pour qui" },
    { name: "origine", title: "Origine de la méthode" },
    { name: "conviction", title: "Conviction" },
    { name: "cta", title: "Bloc final (avant footer)" },
  ],
  fields: [
    defineField({ name: "intro", title: "Sous-titre d'introduction", type: "text", rows: 2, group: "intro" }),
    defineField({
      name: "steps",
      title: "Étapes ESSOR",
      type: "array",
      group: "steps",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Nom de l'étape", type: "string" },
            { name: "baseline", title: "Accroche", type: "string" },
            { name: "what", title: "Description", type: "text", rows: 3 },
            { name: "deliverables", title: "Livrables / points", type: "array", of: [{ type: "string" }] },
            { name: "shift", title: "Ce que vous gagnez", type: "text", rows: 2 },
          ],
          preview: { select: { title: "name", subtitle: "baseline" } },
        },
      ],
    }),
    // Pour qui
    defineField({ name: "fitLabel", title: "Surtitre", type: "string", group: "fit" }),
    defineField({ name: "fitTitle1", title: "Titre (ligne 1)", type: "string", group: "fit" }),
    defineField({ name: "fitTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "fit" }),
    defineField({ name: "fitYesTitle", title: "Bloc OUI : titre", type: "string", group: "fit" }),
    defineField({ name: "fitYes", title: "Bloc OUI : points", type: "array", of: [{ type: "string" }], group: "fit" }),
    defineField({ name: "fitNoTitle", title: "Bloc NON : titre", type: "string", group: "fit" }),
    defineField({ name: "fitNo", title: "Bloc NON : points", type: "array", of: [{ type: "string" }], group: "fit" }),
    // Origine
    defineField({ name: "origineLabel", title: "Surtitre", type: "string", group: "origine" }),
    defineField({ name: "origineTitle1", title: "Titre (ligne 1)", type: "string", group: "origine" }),
    defineField({ name: "origineTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "origine" }),
    defineField({ name: "origineLead", title: "Paragraphe d'intro", type: "text", rows: 3, group: "origine" }),
    defineField({
      name: "origineSteps",
      title: "Blocs (le terrain, la rigueur...)",
      type: "array",
      group: "origine",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Titre", type: "string" },
            { name: "text", title: "Texte", type: "text", rows: 2 },
          ],
          preview: { select: { title: "title", subtitle: "text" } },
        },
      ],
    }),
    // Conviction
    defineField({ name: "convictionEyebrow", title: "Surtitre", type: "string", group: "conviction" }),
    defineField({ name: "convictionQuote", title: "Citation", type: "string", group: "conviction" }),
    defineField({ name: "convictionSub", title: "Sous-texte (italique)", type: "string", group: "conviction" }),
    defineField({ name: "ctaTitle1", title: "Bloc final : titre (1re partie)", type: "string", group: "cta" }),
    defineField({ name: "ctaTitle2", title: "Bloc final : titre (partie italique)", type: "string", group: "cta" }),
    defineField({ name: "ctaText", title: "Bloc final : texte", type: "text", rows: 2, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Page Méthode ESSOR" }) },
});
