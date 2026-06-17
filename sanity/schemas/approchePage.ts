import { defineField, defineType } from "sanity";

// Singleton : page "Approche" (texte integral).
export default defineType({
  name: "approchePage",
  title: "Page Approche",
  type: "document",
  groups: [
    { name: "intro", title: "En-tête", default: true },
    { name: "steps", title: "5 étapes" },
    { name: "dual", title: "Acquisition / Accompagnement" },
    { name: "team", title: "Équipe" },
    { name: "cta", title: "Bloc final (avant footer)" },
  ],
  fields: [
    defineField({ name: "label", title: "Surtitre", type: "string", group: "intro" }),
    defineField({ name: "heading", title: "Titre de la page", type: "string", group: "intro" }),
    defineField({ name: "intro", title: "Introduction", type: "text", rows: 3, group: "intro" }),
    defineField({
      name: "steps",
      title: "Étapes",
      type: "array",
      group: "steps",
      of: [
        {
          type: "object",
          fields: [
            { name: "eyebrow", title: "Surtitre", type: "string" },
            { name: "title", title: "Titre", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 3 },
            { name: "points", title: "Points clés", type: "array", of: [{ type: "string" }] },
          ],
          preview: { select: { title: "eyebrow", subtitle: "title" } },
        },
      ],
    }),
    // Section "Pas seulement la cession"
    defineField({ name: "dualLabel", title: "Surtitre", type: "string", group: "dual" }),
    defineField({ name: "dualTitle1", title: "Titre (ligne 1)", type: "string", group: "dual" }),
    defineField({ name: "dualTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "dual" }),
    defineField({
      name: "acquisitionEyebrow", title: "Acquisition : surtitre", type: "string", group: "dual",
    }),
    defineField({ name: "acquisitionTitle", title: "Acquisition : titre", type: "string", group: "dual" }),
    defineField({ name: "acquisitionText", title: "Acquisition : texte", type: "text", rows: 3, group: "dual" }),
    defineField({ name: "acquisitionPoints", title: "Acquisition : points", type: "array", of: [{ type: "string" }], group: "dual" }),
    defineField({ name: "accompagnementEyebrow", title: "Accompagnement : surtitre", type: "string", group: "dual" }),
    defineField({ name: "accompagnementTitle", title: "Accompagnement : titre", type: "string", group: "dual" }),
    defineField({ name: "accompagnementText", title: "Accompagnement : texte", type: "text", rows: 3, group: "dual" }),
    defineField({ name: "accompagnementPoints", title: "Accompagnement : points", type: "array", of: [{ type: "string" }], group: "dual" }),
    // Section equipe
    defineField({ name: "teamLabel", title: "Surtitre", type: "string", group: "team" }),
    defineField({ name: "teamTitle1", title: "Titre (ligne 1)", type: "string", group: "team" }),
    defineField({ name: "teamTitle2", title: "Titre (ligne 2, italique)", type: "string", group: "team" }),
    defineField({ name: "teamIntro", title: "Introduction", type: "text", rows: 3, group: "team" }),
    defineField({
      name: "team",
      title: "Membres de l'équipe",
      type: "array",
      group: "team",
      of: [
        {
          type: "object",
          fields: [
            { name: "role", title: "Rôle", type: "string" },
            { name: "name", title: "Nom", type: "string" },
            { name: "text", title: "Description", type: "text", rows: 3 },
          ],
          preview: { select: { title: "name", subtitle: "role" } },
        },
      ],
    }),
    defineField({ name: "ctaTitle1", title: "Bloc final : titre (1re partie)", type: "string", group: "cta" }),
    defineField({ name: "ctaTitle2", title: "Bloc final : titre (partie italique)", type: "string", group: "cta" }),
    defineField({ name: "ctaText", title: "Bloc final : texte", type: "text", rows: 2, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Page Approche" }) },
});
