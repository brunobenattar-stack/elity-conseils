import { redirect } from "next/navigation";

// Les actualités vivent désormais sur la page Cas clients (onglet Actualités).
export default function ActualitesRedirectPage() {
  redirect("/cas-clients#actualites");
}
