import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaFinal from "@/components/CtaFinal";
import VideoParallaxBg from "@/components/VideoParallaxBg";
import { getCaseStudies } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Études de cas : dossiers clients anonymisés à La Réunion",
  description:
    "Des résultats concrets : redressements, cessions et accompagnements de dirigeant(e)s de TPE/PME accompagnés par Elity Conseils. Dossiers anonymisés.",
};

type CaseStudy = {
  sector: string;
  meta: string;
  tag: string;
  metrics: { value: string; label: string }[];
  phases: { eyebrow: string; title: string; text: string }[];
  quote: string;
  author: string;
};

// Contenu par defaut, utilise tant qu'aucune etude de cas n'existe dans Sanity.
const FALLBACK_CASES: CaseStudy[] = [
  {
    sector: "Garage automobile",
    meta: "TPE · 5 salariés · CA 1 M€ · La Réunion",
    tag: "Elity Dirigeant",
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
    quote: "Merci pour l'écoute et le soutien. Nous avons pu redresser l'entreprise en 24 mois.",
    author: "Le dirigeant accompagné",
  },
];

export default async function EtudesDeCasPage() {
  const sanityCases = await getCaseStudies();
  const CASES: CaseStudy[] = sanityCases.length
    ? sanityCases.map((c) => ({
        sector: c.sector,
        meta: c.meta ?? "",
        tag: c.tag ?? "",
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

  return (
    <>
      <section className="section section-cream section-first">
        <div className="container">
          <Reveal className="case-intro">
            <span className="case-intro-label">Études de cas · dossiers anonymisés</span>
            <h2 className="case-intro-title">
              Des résultats <em>concrets.</em>
            </h2>
            <Link href="/cas-clients" className="blog-back-link">
              <span aria-hidden="true">←</span> Retour aux cas clients
            </Link>
          </Reveal>

          <div className="case-list">
            {CASES.map((c) => (
              <Reveal key={c.sector} className="case-card-big">
                <VideoParallaxBg />
                <div className="case-card-big-content">
                <div className="case-card-big-head">
                  <div>
                    <span className="case-card-big-sector">{c.sector}</span>
                    <span className="case-card-big-meta">{c.meta}</span>
                  </div>
                  <span className="case-card-big-tag">{c.tag}</span>
                </div>

                <div className="case-card-big-metrics">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="case-big-metric">
                      <span className="case-big-metric-val">{m.value}</span>
                      <span className="case-big-metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="case-card-big-phases">
                  {c.phases.map((p) => (
                    <div key={p.eyebrow} className="case-big-phase">
                      <span className="case-big-phase-eyebrow">{p.eyebrow}</span>
                      <h3 className="case-big-phase-title">{p.title}</h3>
                      <p className="case-big-phase-text">{p.text}</p>
                    </div>
                  ))}
                </div>

                <blockquote className="case-card-big-quote">
                  <span className="case-card-big-quote-mark" aria-hidden="true">&ldquo;</span>
                  {c.quote}
                  <cite>{c.author}</cite>
                </blockquote>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal
        title={
          <>
            Votre situation ressemble <em>à ce cas ?</em>
          </>
        }
        text="Premier échange confidentiel et sans engagement, pour identifier le bon accompagnement."
        secondaryLabel="Découvrir Elity Dirigeant"
        secondaryHref="/offres#pilotage"
      />
    </>
  );
}
