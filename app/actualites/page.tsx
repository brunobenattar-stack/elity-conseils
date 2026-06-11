import type { Metadata } from "next";
import { getArticles } from "@/sanity/queries";
import ActualitesList from "@/components/ActualitesList";

export const metadata: Metadata = {
  title: "Actualités — Elity Conseils La Réunion",
  description:
    "Conseils aux dirigeant(e)s, lecture du marché de l'Océan Indien et actualités du cabinet Elity Conseils. Filtrables par date.",
};

export default async function ActualitesPage() {
  const articles = await getArticles();
  return <ActualitesList articles={articles} />;
}
