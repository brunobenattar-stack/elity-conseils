import { type SchemaTypeDefinition } from "sanity";

import faqItem from "./faqItem";
import homePage from "./homePage";
import aboutPage from "./aboutPage";
import approchePage from "./approchePage";
import essorPage from "./essorPage";
import offersPage from "./offersPage";
import contactPage from "./contactPage";
import casClientsPage from "./casClientsPage";
import siteSettings from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    approchePage,
    offersPage,
    essorPage,
    casClientsPage,
    aboutPage,
    contactPage,
    faqItem,
    siteSettings,
  ],
};
