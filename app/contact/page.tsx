import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact : échange confidentiel avec Elity Conseils, La Réunion",
  description:
    "Contactez Elity Conseils pour un premier échange confidentiel sur votre projet de cession ou de rachat. Sans engagement. Réponse sous 24h.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
