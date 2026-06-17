import { defineField, defineType } from "sanity";

// Singleton : textes editoriaux principaux de la page A propos.
export default defineType({
  name: "aboutPage",
  title: "Page À propos",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Surtitre", type: "string", description: "Ex. : À propos · le parcours" }),
    defineField({ name: "name", title: "Nom / titre", type: "string", description: "Ex. : Bruno Benattar," }),
    defineField({ name: "nameEm", title: "Titre (partie en italique)", type: "string", description: "Ex. : chef d'entreprise devenu conseil." }),
    defineField({ name: "role", title: "Ligne de rôle", type: "string", description: "Ex. : Franchisé Procomm depuis 2015, à La Réunion." }),
    defineField({
      name: "paragraphs",
      title: "Paragraphes du parcours",
      type: "array",
      of: [{ type: "text", rows: 4 }],
      description: "Chaque entrée est un paragraphe affiché dans la bio.",
    }),
    defineField({
      name: "values",
      title: "Valeurs (3 blocs)",
      type: "array",
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
  ],
  preview: {
    prepare: () => ({ title: "Page À propos" }),
  },
});
