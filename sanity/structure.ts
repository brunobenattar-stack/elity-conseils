import type { StructureResolver } from "sanity/structure";

// Types geres comme "singleton" : un seul document, edite directement (pas de liste).
export const SINGLETON_TYPES = new Set(["heroSection"]);

// Organisation du menu du Studio pour le client.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenu du site")
    .items([
      S.listItem()
        .id("heroSection")
        .title("Accueil : bloc principal (hero)")
        .child(
          S.document().schemaType("heroSection").documentId("heroSection")
        ),
      S.divider(),
      S.listItem()
        .title("Études de cas")
        .child(S.documentTypeList("caseStudy").title("Études de cas")),
      S.listItem()
        .title("Actualités")
        .child(S.documentTypeList("article").title("Actualités")),
      S.listItem()
        .title("Offres")
        .child(S.documentTypeList("offer").title("Offres")),
      S.listItem()
        .title("FAQ")
        .child(S.documentTypeList("faqItem").title("Questions FAQ")),
      S.listItem()
        .title("Textes des pages")
        .child(S.documentTypeList("pageText").title("Textes des pages")),
    ]);
