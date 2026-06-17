import { defineField, defineType } from "sanity";

// Singleton : page "Méthode ESSOR" (4 étapes).
export default defineType({
  name: "essorPage",
  title: "Page Méthode ESSOR",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Titre de la page", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "text", rows: 3 }),
    defineField({
      name: "steps",
      title: "Étapes ESSOR",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Nom de l'étape", type: "string" },
            { name: "title", title: "Titre", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 3 },
            { name: "bullets", title: "Points clés", type: "array", of: [{ type: "string" }] },
            { name: "outcome", title: "Résultat / ce que vous gagnez", type: "text", rows: 2 },
          ],
          preview: { select: { title: "label", subtitle: "title" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Page Méthode ESSOR" }) },
});
