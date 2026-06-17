import { defineField, defineType } from "sanity";

// Singleton : textes d'en-tete de la page "Offres".
// Les offres elles-memes (cartes) restent gerees dans "Offres".
export default defineType({
  name: "offersPage",
  title: "Page Offres (en-tête)",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Titre de la page", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "text", rows: 3 }),
  ],
  preview: { prepare: () => ({ title: "Page Offres (en-tête)" }) },
});
