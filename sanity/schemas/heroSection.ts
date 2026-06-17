import { defineField, defineType } from "sanity";

// Singleton : le bloc d'accueil principal (hero) en haut de la page d'accueil.
// Un seul document de ce type existe ; le client edite ses textes.
export default defineType({
  name: "heroSection",
  title: "Accueil : bloc principal (hero)",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Surtitre", type: "string", description: "Petite ligne au-dessus du titre. Ex. : La Réunion · Ile Maurice · Océan Indien" }),
    defineField({ name: "titleLine1", title: "Titre (1re partie)", type: "string", description: "Ex. : Céder, reprendre," }),
    defineField({ name: "titleEm", title: "Titre (partie en italique doré)", type: "string", description: "Ex. : structurer avant d'agir." }),
    defineField({ name: "sub", title: "Sous-titre / paragraphe", type: "text", rows: 3 }),
    defineField({ name: "cta1Label", title: "Bouton principal : texte", type: "string" }),
    defineField({ name: "cta1Href", title: "Bouton principal : lien", type: "string", description: "Ex. : /contact" }),
    defineField({ name: "cta2Label", title: "Bouton secondaire : texte", type: "string" }),
    defineField({ name: "cta2Href", title: "Bouton secondaire : lien", type: "string", description: "Ex. : /approche" }),
    defineField({ name: "chip1Label", title: "Encart 1 : titre", type: "string" }),
    defineField({ name: "chip1Sub", title: "Encart 1 : sous-texte", type: "string" }),
    defineField({ name: "chip2Num", title: "Encart 2 : chiffre", type: "string", description: "Ex. : 10+" }),
    defineField({ name: "chip2Label", title: "Encart 2 : titre", type: "string" }),
    defineField({ name: "chip2Sub", title: "Encart 2 : sous-texte", type: "string" }),
  ],
  preview: {
    prepare: () => ({ title: "Accueil : bloc principal (hero)" }),
  },
});
