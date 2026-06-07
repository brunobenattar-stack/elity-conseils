import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaFinal from "@/components/CtaFinal";

export const metadata: Metadata = {
  title: "Notre Approche : 5 étapes pour préparer votre cession à La Réunion",
  description:
    "Avant la mise en vente, Elity Conseils structure et valorise votre entreprise : diagnostic, positionnement, préparation, mise en relation et négociation. La transaction est réalisée par Procomm Océan Indien.",
};

type Step = {
  num: string;
  eyebrow: string;
  title: string;
  desc: string;
  points: string[];
  image: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    eyebrow: "Diagnostic",
    title: "On regarde la réalité en face",
    desc: "Un audit complet pour cartographier vos forces, vos dépendances et les leviers de valeur que vous ne voyez plus.",
    points: ["Finances, organisation, clientèle", "Forces, faiblesses, opportunités", "Leviers de valeur cachés"],
    image: "/etape-01-diagnostic.jpg",
  },
  {
    num: "02",
    eyebrow: "Valorisation",
    title: "On fixe un prix défendable",
    desc: "Une valorisation calée sur la capacité de remboursement réelle, comme un banquier. Pas de surévaluation.",
    points: ["Positionnement de mise en marché", "Valorisation argumentée", "Profils d'acquéreurs ciblés"],
    image: "/etape-02-positionnement.jpg",
  },
  {
    num: "03",
    eyebrow: "Préparation",
    title: "On rend l'entreprise lisible",
    desc: "Un dossier qui met en avant vos points forts et lisse les points sensibles avant la rencontre des acquéreurs.",
    points: ["Teaser, mémorandum, data room", "Points forts valorisés", "Leviers du diagnostic activés"],
    image: "/etape-03-preparation.jpg",
  },
  {
    num: "04",
    eyebrow: "Mise en relation",
    title: "On cible les bons acquéreurs",
    desc: "La mise en marché est confiée à Procomm Océan Indien, avec discrétion. Seules les intentions sérieuses avancent.",
    points: ["Ciblage précis via le réseau Procomm", "Pilotage discret du processus", "Filtrage des intentions"],
    image: "/etape-04-vente.jpg",
  },
  {
    num: "05",
    eyebrow: "Signature",
    title: "On sécurise jusqu'au bout",
    desc: "Des conditions négociées et sécurisées, jusqu'à la signature et au-delà si besoin.",
    points: ["Conditions économiques et juridiques", "Accompagnement jusqu'à la signature", "Coordination avocats et notaires"],
    image: "/etape-05-negociation.jpg",
  },
];

export default function ApprochePage() {
  return (
    <>
      <section className="section section-cream section-first">
        <div className="container">
          <Reveal className="approche-intro">
            <span className="approche-intro-label">La méthode Elity en 5 étapes</span>
            <h2 className="approche-intro-title">
              Cinq étapes pour préparer et valoriser votre entreprise <em>avant la cession.</em>
            </h2>
          </Reveal>
          <div className="approche-flow">
            {STEPS.map((s, i) => (
              <Reveal
                key={s.num}
                className={`approche-row${i % 2 === 1 ? " approche-row-rev" : ""}`}
              >
                <div
                  className="approche-row-media"
                  style={{ backgroundImage: `url(${s.image})` }}
                >
                  <span className="approche-row-num">{s.num}</span>
                </div>
                <div className="approche-row-body">
                  <span className="approche-row-eyebrow">{s.eyebrow}</span>
                  <h3 className="approche-row-title">{s.title}</h3>
                  <p className="approche-row-desc">{s.desc}</p>
                  <ul className="approche-row-points">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="approche-row-cta">
                    Prendre contact <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition + Accompagnement */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Pas seulement la cession</span>
            <div className="section-sep" style={{ marginInline: "auto" }} />
            <h2 className="section-title">La même rigueur,<br /><em>pour chaque projet.</em></h2>
          </Reveal>

          <div className="approche-dual">
            <Reveal className="approche-dual-card" delay={100}>
              <span className="approche-dual-eyebrow">Vous rachetez</span>
              <h3 className="approche-dual-title">L&apos;approche acquisition</h3>
              <p className="approche-dual-text">
                Avant de reprendre, on sécurise. On audite la cible en toute discrétion, on vérifie que la valeur affichée tient la route et on identifie les zones de risque.
              </p>
              <ul className="approche-dual-points">
                <li>Audit indépendant de la cible</li>
                <li>Vérification de la valorisation</li>
                <li>Analyse des dépendances et des risques</li>
                <li>Sécurisation des conditions de reprise</li>
              </ul>
              <Link href="/contact" className="approche-row-cta">
                Prendre contact <span aria-hidden="true">→</span>
              </Link>
            </Reveal>

            <Reveal className="approche-dual-card" delay={200}>
              <span className="approche-dual-eyebrow">Vous dirigez</span>
              <h3 className="approche-dual-title">L&apos;approche accompagnement</h3>
              <p className="approche-dual-text">
                Pas de projet de cession dans l&apos;immédiat ? On pilote votre entreprise au mois le mois avec la méthode ESSOR, pour reprendre le contrôle et préparer l&apos;avenir.
              </p>
              <ul className="approche-dual-points">
                <li>Diagnostic complet de l&apos;entreprise</li>
                <li>Tableau de bord de pilotage mensuel</li>
                <li>Plan d&apos;action et bilans réguliers</li>
                <li>Méthode ESSOR sur 12 ou 24 mois</li>
              </ul>
              <Link href="/methode-essor" className="approche-row-cta">
                Découvrir la méthode ESSOR <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaFinal
        title={
          <>
            Prêt à structurer <em>votre cession ?</em>
          </>
        }
        secondaryLabel="Voir nos offres"
        secondaryHref="/offres"
      />
    </>
  );
}
