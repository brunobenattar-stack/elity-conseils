import type { StructureResolver } from "sanity/structure";

// Types geres comme "singleton" : un seul document, edite directement (pas de liste).
export const SINGLETON_TYPES = new Set([
  "homePage",
  "approchePage",
  "offersPage",
  "essorPage",
  "aboutPage",
]);

// Organisation du menu du Studio : un element par page du site.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenu du site")
    .items([
      S.listItem()
        .id("homePage")
        .title("Accueil")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .id("approchePage")
        .title("Approche")
        .child(S.document().schemaType("approchePage").documentId("approchePage")),
      S.listItem()
        .id("offersPage")
        .title("Offres (en-tête de page)")
        .child(S.document().schemaType("offersPage").documentId("offersPage")),
      S.listItem()
        .id("essorPage")
        .title("Méthode ESSOR")
        .child(S.document().schemaType("essorPage").documentId("essorPage")),
      S.listItem()
        .id("aboutPage")
        .title("À propos")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.divider(),
      S.listItem()
        .title("Cas clients (cartes)")
        .child(S.documentTypeList("caseStudy").title("Études de cas")),
      S.listItem()
        .title("Actualités (articles)")
        .child(S.documentTypeList("article").title("Actualités")),
      S.listItem()
        .title("Offres (cartes)")
        .child(S.documentTypeList("offer").title("Offres")),
      S.listItem()
        .title("FAQ (questions)")
        .child(S.documentTypeList("faqItem").title("Questions FAQ")),
    ]);
