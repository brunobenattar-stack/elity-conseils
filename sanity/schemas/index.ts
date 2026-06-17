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

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    approchePage,
    offersPage,
    essorPage,
    aboutPage,
    caseStudy,
    article,
    offer,
    faqItem,
  ],
};
