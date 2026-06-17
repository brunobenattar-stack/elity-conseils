import { type SchemaTypeDefinition } from "sanity";

import caseStudy from "./caseStudy";
import offer from "./offer";
import faqItem from "./faqItem";
import article from "./article";
import homePage from "./homePage";
import aboutPage from "./aboutPage";
import approchePage from "./approchePage";
import essorPage from "./essorPage";
import offersPage from "./offersPage";
import contactPage from "./contactPage";
import siteSettings from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    approchePage,
    offersPage,
    essorPage,
    aboutPage,
    contactPage,
    caseStudy,
    article,
    offer,
    faqItem,
    siteSettings,
  ],
};
