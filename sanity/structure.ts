import type { StructureResolver } from "sanity/structure";

// Types geres comme "singleton" : un seul document, edite directement (pas de liste).
export const SINGLETON_TYPES = new Set([
  "homePage",
  "approchePage",
  "offersPage",
  "essorPage",
  "casClientsPage",
  "aboutPage",
  "contactPage",
  "siteSettings",
]);

// Menu du Studio : un element par page du site (texte ET cartes dans le meme fichier).
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenu du site")
    .items([
      S.listItem().id("homePage").title("Accueil")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem().id("approchePage").title("Approche")
        .child(S.document().schemaType("approchePage").documentId("approchePage")),
      S.listItem().id("offersPage").title("Offres")
        .child(S.document().schemaType("offersPage").documentId("offersPage")),
      S.listItem().id("essorPage").title("Méthode ESSOR")
        .child(S.document().schemaType("essorPage").documentId("essorPage")),
      S.listItem().id("casClientsPage").title("Cas clients & Actualités")
        .child(S.document().schemaType("casClientsPage").documentId("casClientsPage")),
      S.listItem().id("aboutPage").title("À propos")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem().id("contactPage").title("Contact")
        .child(S.document().schemaType("contactPage").documentId("contactPage")),
      S.divider(),
      S.listItem().title("FAQ (questions)")
        .child(S.documentTypeList("faqItem").title("Questions FAQ")),
      S.divider(),
      S.listItem().id("siteSettings").title("Coordonnées & réglages")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
    ]);
