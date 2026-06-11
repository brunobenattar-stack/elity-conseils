import { defineField, defineType } from "sanity";

// Texte de page editable : chaque entree cible une section precise du site
// via une "cle" technique (non modifiable par le client) et expose un
// surtitre, un titre et un paragraphe que le client peut reecrire.
export default defineType({
  name: "pageText",
  title: "Texte de page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Repère (interne)",
      type: "string",
      description: "Nom de la section, pour vous y retrouver. Ex. : Accueil, section problème.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "key",
      title: "Clé technique",
      type: "string",
      description: "NE PAS MODIFIER. Identifiant utilisé par le site.",
      readOnly: true,
      validation: (r) => r.required(),
    }),
    defineField({ name: "eyebrow", title: "Surtitre", type: "string" }),
    defineField({ name: "heading", title: "Titre", type: "string" }),
    defineField({ name: "body", title: "Paragraphe", type: "text", rows: 4 }),
  ],
  preview: {
    select: { title: "title", subtitle: "key" },
  },
});
