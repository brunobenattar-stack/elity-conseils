import { defineField, defineType } from "sanity";

// Singleton : textes de la page Cas clients / Actualites (hors cartes).
export default defineType({
  name: "casClientsPage",
  title: "Page Cas clients / Actualités",
  type: "document",
  groups: [
    { name: "intro", title: "En-tête", default: true },
    { name: "cta", title: "Bloc final (avant footer)" },
  ],
  fields: [
    defineField({ name: "introLabel", title: "Surtitre", type: "string", group: "intro" }),
    defineField({ name: "introTitle1", title: "Titre (ligne 1)", type: "string", group: "intro" }),
    defineField({ name: "introTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "intro" }),
    defineField({ name: "ctaTitle1", title: "Bloc final : titre (début)", type: "string", group: "cta" }),
    defineField({ name: "ctaTitle2", title: "Bloc final : titre (partie italique)", type: "string", group: "cta" }),
    defineField({ name: "ctaText", title: "Bloc final : texte", type: "text", rows: 2, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Page Cas clients / Actualités" }) },
});
