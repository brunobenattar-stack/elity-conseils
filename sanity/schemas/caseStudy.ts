import { defineField, defineType } from "sanity";

// Etude de cas : fonctionne comme un "blog". Le client cree une nouvelle
// entree ici pour ajouter une carte dans la section Cas clients.
export default defineType({
  name: "caseStudy",
  title: "Étude de cas",
  type: "document",
  fields: [
    defineField({
      name: "sector",
      title: "Secteur / titre de la carte",
      type: "string",
      description: "Ex. : Garage automobile",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "meta",
      title: "Sous-titre (taille, CA, lieu)",
      type: "string",
      description: "Ex. : 5 collaborateurs · CA 1 M€/an · La Réunion",
    }),
    defineField({
      name: "tag",
      title: "Étiquette",
      type: "string",
      description: "Ex. : Offre Elity Dirigeant",
    }),
    defineField({
      name: "sectorCategory",
      title: "Catégorie de secteur (pour le filtre)",
      type: "string",
      description: "Ex. : Automobile, Hôtellerie, BTP, Commerce…",
    }),
    defineField({
      name: "date",
      title: "Date du cas (pour le tri)",
      type: "date",
      options: { dateFormat: "DD/MM/YYYY" },
    }),
    defineField({
      name: "cover",
      title: "Image de la carte (optionnelle)",
      type: "image",
      options: { hotspot: true },
      description: "Affichée en haut de la carte si renseignée.",
    }),
    defineField({
      name: "link",
      title: "Lien de redirection (optionnel)",
      type: "url",
      description: "Si renseigné, un clic sur la carte ouvre ce lien au lieu de la lecture.",
    }),
    defineField({
      name: "metrics",
      title: "Chiffres clés",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Valeur", type: "string" },
            { name: "label", title: "Libellé", type: "string" },
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),
    defineField({
      name: "phases",
      title: "Étapes du cas",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "eyebrow", title: "Surtitre", type: "string" },
            { name: "title", title: "Titre", type: "string" },
            { name: "text", title: "Texte", type: "text", rows: 3 },
          ],
          preview: {
            select: { title: "title", subtitle: "eyebrow" },
          },
        },
      ],
    }),
    defineField({
      name: "quote",
      title: "Citation / témoignage",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "author",
      title: "Auteur de la citation",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
      description: "Plus le nombre est petit, plus la carte apparaît en premier.",
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
    select: { title: "sector", subtitle: "tag" },
  },
});
