import { defineField, defineType } from "sanity";

// Singleton : coordonnees et reglages globaux (footer, reseaux).
export default defineType({
  name: "siteSettings",
  title: "Coordonnées & réglages du site",
  type: "document",
  fields: [
    defineField({ name: "email", title: "Email de contact", type: "string", description: "Affiché dans le footer et la page Contact." }),
    defineField({ name: "phone", title: "Téléphone (optionnel)", type: "string" }),
    defineField({ name: "linkedin", title: "Lien LinkedIn", type: "url" }),
    defineField({ name: "facebook", title: "Lien Facebook", type: "url" }),
    defineField({ name: "footerTagline", title: "Footer : accroche", type: "string", description: "Ex. : Structurer aujourd'hui. Valoriser demain." }),
    defineField({ name: "footerPartner", title: "Footer : ligne partenaire", type: "string", description: "Ex. : En partenariat avec Procomm Océan Indien" }),
  ],
  preview: { prepare: () => ({ title: "Coordonnées & réglages du site" }) },
});
