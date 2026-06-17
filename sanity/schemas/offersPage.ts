import { defineField, defineType } from "sanity";

const offerObject = {
  type: "object",
  fields: [
    { name: "name", title: "Nom de l'offre", type: "string" },
    {
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Cession d'entreprise", value: "cession" },
          { title: "Acquisition d'entreprise", value: "acquisition" },
          { title: "Pilotage mensuel", value: "pilotage" },
        ],
        layout: "radio",
      },
    },
    { name: "pitch", title: "Accroche courte", type: "string" },
    { name: "chip", title: "Badge (optionnel)", type: "string" },
    { name: "featured", title: "Mise en avant ?", type: "boolean", initialValue: false },
    { name: "features", title: "Ce que contient l'offre", type: "array", of: [{ type: "string" }] },
    { name: "meta", title: "Mention en pied de carte", type: "string" },
    { name: "details", title: "Description détaillée", type: "text", rows: 5 },
  ],
  preview: { select: { title: "name", subtitle: "category" } },
};

// Singleton : page Offres complete (texte d'en-tete + toutes les offres).
export default defineType({
  name: "offersPage",
  title: "Page Offres",
  type: "document",
  groups: [
    { name: "cession", title: "En-tête : Cession & rachat", default: true },
    { name: "offers", title: "Offres cession / acquisition" },
    { name: "pilotageHead", title: "En-tête : Accompagnement" },
    { name: "pilotage", title: "Formules d'accompagnement" },
    { name: "cta", title: "Bloc final (avant footer)" },
  ],
  fields: [
    // En-tete section cession
    defineField({ name: "cessionLabel", title: "Surtitre", type: "string", group: "cession" }),
    defineField({ name: "cessionTitle1", title: "Titre (ligne 1)", type: "string", group: "cession" }),
    defineField({ name: "cessionTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "cession" }),
    defineField({ name: "cessionBody", title: "Paragraphe", type: "text", rows: 2, group: "cession" }),
    // Offres cession / acquisition
    defineField({ name: "offers", title: "Offres (cession & acquisition)", type: "array", of: [offerObject], group: "offers" }),
    // En-tete section pilotage
    defineField({ name: "pilotageLabel", title: "Surtitre", type: "string", group: "pilotageHead" }),
    defineField({ name: "pilotageTitle1", title: "Titre (ligne 1)", type: "string", group: "pilotageHead" }),
    defineField({ name: "pilotageTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "pilotageHead" }),
    defineField({ name: "pilotageBody", title: "Paragraphe", type: "text", rows: 2, group: "pilotageHead" }),
    // Formules pilotage
    defineField({ name: "pilotage", title: "Formules d'accompagnement mensuel", type: "array", of: [offerObject], group: "pilotage" }),
    defineField({ name: "ctaTitle1", title: "Bloc final : titre (1re partie)", type: "string", group: "cta" }),
    defineField({ name: "ctaTitle2", title: "Bloc final : titre (partie italique)", type: "string", group: "cta" }),
    defineField({ name: "ctaText", title: "Bloc final : texte", type: "text", rows: 2, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Page Offres" }) },
});
