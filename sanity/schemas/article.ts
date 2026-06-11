import { defineField, defineType } from "sanity";

// Article / actualité : alimente la page Actualités (blog).
// Le client crée une entrée ici pour publier une actualité, filtrable par date.
export default defineType({
  name: "article",
  title: "Actualité",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Identifiant d'URL",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Date de publication",
      type: "date",
      options: { dateFormat: "DD/MM/YYYY" },
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Actualité", value: "actualite" },
          { title: "Conseil", value: "conseil" },
          { title: "Marché Océan Indien", value: "marche" },
          { title: "Événement", value: "evenement" },
        ],
        layout: "radio",
      },
      initialValue: "actualite",
    }),
    defineField({
      name: "excerpt",
      title: "Résumé (chapô)",
      type: "text",
      rows: 3,
      description: "Court résumé affiché dans la liste des actualités.",
    }),
    defineField({
      name: "cover",
      title: "Image de couverture",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "Contenu",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  orderings: [
    {
      title: "Date (récent → ancien)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "date", media: "cover" },
  },
});
