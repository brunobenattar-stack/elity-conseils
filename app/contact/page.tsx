import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";
import { getContact, getSettings } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Contact : échange confidentiel avec Elity Conseils, La Réunion",
  description:
    "Contactez Elity Conseils pour un premier échange confidentiel sur votre projet de cession ou de rachat. Sans engagement. Réponse sous 24h.",
};

export default async function ContactPage() {
  const [contact, settings] = await Promise.all([getContact(), getSettings()]);
  return <ContactPageClient contact={contact} settings={settings} />;
}
