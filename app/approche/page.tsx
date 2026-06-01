import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaStrip from "@/components/CtaStrip";
import { APPROCHE_STEPS } from "@/components/ApprocheSteps";

export const metadata: Metadata = {
  title: "Notre Approche : Méthode en 5 étapes",
  description:
    "Découvrez la méthode Elity Conseils : diagnostic stratégique, positionnement, préparation, mise en vente et négociation. Une approche en 5 étapes pour structurer votre cession.",
};

const DETAILS: Record<string, string[]> = {
  "01": [
    "Audit interne complet : finances, organisation, clientèle, dépendances clés.",
    "Cartographie des forces, faiblesses et opportunités.",
    "Identification des leviers de valeur cachés ou sous-exploités.",
  ],
  "02": [
    "Définition du positionnement optimal pour la mise en marché.",
    "Construction d'une valorisation réaliste, argumentée et défendable.",
    "Profilage des acquéreurs cibles : industriels, financiers, repreneurs individuels.",
  ],
  "03": [
    "Structuration du dossier de présentation (teaser, mémorandum, data room).",
    "Mise en avant des points forts, lissage des points sensibles.",
    "Optimisation des leviers identifiés au diagnostic.",
  ],
  "04": [
    "Ciblage précis des acquéreurs adaptés à votre situation.",
    "Pilotage discret du processus de mise en relation.",
    "Filtrage des intentions sérieuses, gestion méthodique des échanges.",
  ],
  "05": [
    "Négociation sur les conditions économiques, juridiques et humaines.",
    "Accompagnement jusqu'à la signature, et au-delà si besoin.",
    "Coordination avec les avocats, experts-comptables et notaires.",
  ],
};

export default function ApprochePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Notre Approche" }]}
        title={
          <>
            Ce n'est pas une question de timing.<br />
            <em>C'est une question de préparation.</em>
          </>
        }
        subtitle="Avant de mettre votre entreprise en vente, nous l'analysons, la structurons et la valorisons pour que chaque acquéreur voie immédiatement son potentiel."
        meta="5 étapes · 1 méthode"
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-label">Méthode Elity</span>
            <div className="section-sep" />
            <h2 className="section-title">Une cession se prépare, ne se déclenche pas.</h2>
            <p className="section-body">
              Chaque cession est unique. Notre méthode n'est pas un cadre rigide : c'est un fil conducteur qui s'adapte à votre situation, votre marché et vos objectifs. Voici les cinq étapes qui jalonnent un processus réussi.
            </p>
          </Reveal>

          {APPROCHE_STEPS.map((s, i) => (
            <Reveal key={s.num} className="step-detail" delay={(100 * (i + 1)) as 100 | 200 | 300 | 400 | 500}>
              <span className="num">{s.num}</span>
              <div className="icon-wrap">
                <s.Icon />
              </div>
              <div className="body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {DETAILS[s.num].map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal>
            <p className="pull-quote">
              La préparation n'est pas une charge.<br />
              <em>C'est le meilleur investissement avant la cession.</em>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title={
          <>
            Prêt à structurer<br />
            <em>votre cession dès aujourd'hui ?</em>
          </>
        }
        text="Premier échange confidentiel et sans engagement pour évaluer où vous en êtes et identifier les leviers à activer."
      />
    </>
  );
}
