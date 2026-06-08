import { defineField, defineType } from "sanity";

// Offre : sert pour la cession ET l'acquisition ET le pilotage.
// Le champ "category" determine dans quel onglet/section elle apparait.
export default defineType({
  name: "offer",
  title: "Offre",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom de l'offre",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
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
      validation: (r) => r.required(),
    }),
    defineField({
      name: "pitch",
      title: "Accroche courte",
      type: "string",
      description: "Ex. : Pour vendre simplement.",
    }),
    defineField({
      name: "chip",
      title: "Badge (optionnel)",
      type: "string",
      description: "Ex. : Recommandée. Laisser vide si aucun badge.",
    }),
    defineField({
      name: "featured",
      title: "Offre mise en avant ?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "features",
      title: "Ce que contient l'offre",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "price",
      title: "Prix (optionnel)",
      type: "string",
      description: "Laisser vide pour afficher « Sur devis ».",
    }),
    defineField({
      name: "details",
      title: "Description détaillée",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "meta",
      title: "Mention en pied de carte",
      type: "string",
      description: "Ex. : Elity Conseils + Procomm",
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
