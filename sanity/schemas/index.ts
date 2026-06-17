import { type SchemaTypeDefinition } from "sanity";

import caseStudy from "./caseStudy";
import offer from "./offer";
import faqItem from "./faqItem";
import article from "./article";
import homePage from "./homePage";
import aboutPage from "./aboutPage";
import approchePage from "./approchePage";
import essorPage from "./essorPage";
import contactPage from "./contactPage";
import casClientsPage from "./casClientsPage";
import siteSettings from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    approchePage,
    essorPage,
    aboutPage,
    contactPage,
    casClientsPage,
    caseStudy,
    article,
    offer,
    faqItem,
    siteSettings,
  ],
};
