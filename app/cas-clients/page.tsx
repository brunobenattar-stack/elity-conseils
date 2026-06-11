import type { Metadata } from "next";
import CasClientsHub, { type CaseStudy } from "@/components/CasClientsHub";
import { getCaseStudies, getArticles } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Cas clients & Actualités — Elity Conseils La Réunion",
  description:
    "Études de cas anonymisées et actualités d'Elity Conseils : cessions, redressements et accompagnements de dirigeant(e)s de TPE/PME à La Réunion.",
};

// Études de cas par défaut (utilisées tant qu'aucune n'existe dans Sanity).
const FALLBACK_CASES: CaseStudy[] = [
  {
    sector: "Garage automobile",
    meta: "TPE · 5 salariés · CA 1 M€ · La Réunion",
    tag: "Elity Dirigeant",
    summary:
      "Une entreprise au bord de la faillite redressée en 24 mois : rentabilité retrouvée, dirigeant à nouveau rémunéré, 5 emplois préservés.",
    metrics: [
      { value: "24 mois", label: "d'accompagnement" },
      { value: "5 emplois", label: "préservés" },
      { value: "Rentabilité", label: "retrouvée" },
    ],
    phases: [
      {
        eyebrow: "La situation",
        title: "Au bord de la faillite",
        text: "Garage automobile, 5 salariés, 1 M€ de CA à La Réunion. Grosses difficultés financières, un dirigeant qui ne se rémunère plus, des emplois menacés.",
      },
      {
        eyebrow: "Notre intervention",
        title: "Elity Dirigeant, méthode ESSOR",
        text: "Pas une cession, un redressement. Audit complet, tableau de bord mensuel pour suivre trésorerie et marges, plan d'action mois après mois.",
      },
      {
        eyebrow: "Le résultat",
        title: "Une entreprise sauvée",
        text: "En 24 mois, la rentabilité est revenue. Le dirigeant peut à nouveau se rémunérer, et les cinq emplois ont été préservés.",
      },
    ],
    quote:
      "Merci pour l'écoute et le soutien. Nous avons pu redresser l'entreprise en 24 mois.",
    author: "Le dirigeant accompagné",
  },
  {
    sector: "Résidence hôtelière",
    meta: "Cession · 2 associés · 18 mois · La Réunion",
    tag: "Cession Elity + Procomm",
    summary:
      "Deux associés en conflit depuis dix ans, une cession finalisée à 5 M€ après 18 mois de persévérance, et une réconciliation à la clé.",
    metrics: [
      { value: "18 mois", label: "de persévérance" },
      { value: "5 M€", label: "de cession" },
      { value: "2 associés", label: "réconciliés" },
    ],
    phases: [
      {
        eyebrow: "La situation",
        title: "Deux associés en conflit",
        text: "En 2017, deux associés en désaccord depuis dix ans souhaitent céder leur résidence hôtelière. Le dossier est jugé impossible, même le notaire pensait qu'on perdait notre temps.",
      },
      {
        eyebrow: "Notre intervention",
        title: "Tenir le cap, 18 mois durant",
        text: "Un accompagnement patient et structuré de la transaction : valorisation défendable, recherche d'acquéreurs, médiation entre les associés, sécurisation de chaque condition.",
      },
      {
        eyebrow: "Le résultat",
        title: "Bien plus qu'une transaction",
        text: "La cession est finalisée à 5 M€. Et au-delà du prix, la mission a permis un soulagement entre deux hommes que leur propre affaire avait éloignés.",
      },
    ],
    quote: "C'est pour ça que je fais ce métier.",
    author: "Bruno Benattar",
  },
];

export default async function CasClientsPage() {
  const [sanityCases, articles] = await Promise.all([
    getCaseStudies(),
    getArticles(),
  ]);

  const cases: CaseStudy[] = sanityCases.length
    ? sanityCases.map((c) => ({
        sector: c.sector,
        meta: c.meta ?? "",
        tag: c.tag ?? "",
        summary: c.meta ?? "",
        metrics: c.metrics ?? [],
        phases: (c.phases ?? []).map((p) => ({
          eyebrow: p.eyebrow ?? "",
          title: p.title ?? "",
          text: p.text ?? "",
        })),
        quote: c.quote ?? "",
        author: c.author ?? "",
      }))
    : FALLBACK_CASES;

  return <CasClientsHub cases={cases} articles={articles} />;
}
