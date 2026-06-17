import { defineField, defineType } from "sanity";

// Singleton : page "Approche" (5 étapes de la cession).
export default defineType({
  name: "approchePage",
  title: "Page Approche",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Titre de la page", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "text", rows: 3 }),
    defineField({
      name: "steps",
      title: "Étapes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Nom de l'étape", type: "string" },
            { name: "title", title: "Titre", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 3 },
            { name: "bullets", title: "Points clés", type: "array", of: [{ type: "string" }] },
          ],
          preview: { select: { title: "label", subtitle: "title" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Page Approche" }) },
});
