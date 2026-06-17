import { defineField, defineType } from "sanity";

// Singleton : page A propos (texte integral).
export default defineType({
  name: "aboutPage",
  title: "Page À propos",
  type: "document",
  groups: [
    { name: "bio", title: "Parcours", default: true },
    { name: "mission", title: "Ma mission" },
    { name: "diff", title: "Pourquoi se faire accompagner" },
    { name: "cta", title: "Bloc final (avant footer)" },
  ],
  fields: [
    // Bio
    defineField({ name: "label", title: "Surtitre", type: "string", group: "bio" }),
    defineField({ name: "name", title: "Nom / titre", type: "string", group: "bio" }),
    defineField({ name: "nameEm", title: "Titre (partie en italique)", type: "string", group: "bio" }),
    defineField({ name: "role", title: "Ligne de rôle", type: "string", group: "bio" }),
    defineField({
      name: "paragraphs",
      title: "Paragraphes du parcours",
      type: "array",
      of: [{ type: "text", rows: 4 }],
      group: "bio",
    }),
    defineField({
      name: "values",
      title: "Valeurs (3 blocs)",
      type: "array",
      group: "bio",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Titre de la valeur", type: "string" },
            { name: "desc", title: "Description", type: "string" },
          ],
          preview: { select: { title: "name", subtitle: "desc" } },
        },
      ],
    }),
    // Section "Ma mission au quotidien"
    defineField({ name: "missionLabel", title: "Surtitre", type: "string", group: "mission" }),
    defineField({ name: "missionTitle1", title: "Titre (ligne 1)", type: "string", group: "mission" }),
    defineField({ name: "missionTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "mission" }),
    defineField({ name: "missionBody", title: "Paragraphe", type: "text", rows: 3, group: "mission" }),
    defineField({
      name: "missionItems",
      title: "Atouts (3 blocs)",
      type: "array",
      group: "mission",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Titre", type: "string" },
            { name: "text", title: "Texte", type: "string" },
          ],
          preview: { select: { title: "title", subtitle: "text" } },
        },
      ],
    }),
    // Section "Pourquoi se faire accompagner" (comparatif)
    defineField({ name: "diffLabel", title: "Surtitre", type: "string", group: "diff" }),
    defineField({ name: "diffTitle1", title: "Titre (ligne 1)", type: "string", group: "diff" }),
    defineField({ name: "diffTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "diff" }),
    defineField({ name: "diffBody", title: "Paragraphe", type: "text", rows: 2, group: "diff" }),
    defineField({ name: "diffBadTitle", title: "Colonne « Mal préparée » : titre", type: "string", group: "diff" }),
    defineField({ name: "diffBad", title: "Colonne « Mal préparée » : points", type: "array", of: [{ type: "string" }], group: "diff" }),
    defineField({ name: "diffBadFoot", title: "Colonne « Mal préparée » : conclusion", type: "string", group: "diff" }),
    defineField({ name: "diffGoodTitle", title: "Colonne « Bien préparée » : titre", type: "string", group: "diff" }),
    defineField({ name: "diffGood", title: "Colonne « Bien préparée » : points", type: "array", of: [{ type: "string" }], group: "diff" }),
    defineField({ name: "diffGoodFoot", title: "Colonne « Bien préparée » : conclusion", type: "string", group: "diff" }),
    // Bloc CTA final (avant footer)
    defineField({ name: "ctaTitle1", title: "Titre (ligne 1)", type: "string", group: "cta" }),
    defineField({ name: "ctaTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "cta" }),
    defineField({ name: "ctaText", title: "Texte", type: "text", rows: 2, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Page À propos" }) },
});
