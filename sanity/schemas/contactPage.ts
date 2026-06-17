import { defineField, defineType } from "sanity";

// Singleton : textes de la page Contact.
export default defineType({
  name: "contactPage",
  title: "Page Contact",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Surtitre", type: "string" }),
    defineField({ name: "title1", title: "Titre (ligne 1)", type: "string" }),
    defineField({ name: "title2", title: "Titre (ligne 2, italique)", type: "string" }),
    defineField({ name: "sub", title: "Sous-titre", type: "text", rows: 2 }),
    defineField({ name: "formTitle", title: "Titre du formulaire", type: "string" }),
    defineField({
      name: "projectOptions",
      title: "Choix de projet (boutons radio)",
      type: "array",
      of: [{ type: "string" }],
      description: "Les 3 intentions proposées au visiteur.",
    }),
    defineField({ name: "consentText", title: "Texte de consentement (case à cocher)", type: "text", rows: 2 }),
    defineField({ name: "submitLabel", title: "Bouton d'envoi : texte", type: "string" }),
    defineField({ name: "reassurance", title: "Ligne de réassurance sous le bouton", type: "string" }),
    defineField({ name: "successTitle", title: "Message de succès : titre", type: "string" }),
    defineField({ name: "successText", title: "Message de succès : texte", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Page Contact" }) },
});
