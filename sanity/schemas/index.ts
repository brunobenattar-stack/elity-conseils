import { type SchemaTypeDefinition } from "sanity";

import caseStudy from "./caseStudy";
import offer from "./offer";
import faqItem from "./faqItem";
import pageText from "./pageText";
import article from "./article";
import heroSection from "./heroSection";
import aboutPage from "./aboutPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudy, offer, faqItem, pageText, article, heroSection, aboutPage],
};
