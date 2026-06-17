import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaFinal from "@/components/CtaFinal";
import { getApproche } from "@/sanity/queries";

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

export default async function ApprochePage() {
  const a = await getApproche();
  const heading = a?.heading?.trim() || "Cinq étapes pour préparer et valoriser votre entreprise avant la cession.";
  const intro = a?.intro?.trim() || "";
  return (
    <>
      <section className="section section-cream section-first">
        <div className="container">
          <Reveal className="approche-intro">
            <span className="approche-intro-label">La méthode Elity en 5 étapes</span>
            <h2 className="approche-intro-title">{heading}</h2>
            {intro && <p className="approche-intro-sub">{intro}</p>}
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
                Pas de projet de cession dans l&apos;immédiat ? On vous accompagne à piloter votre entreprise au mois le mois avec la méthode ESSOR, pour reprendre le contrôle et préparer l&apos;avenir.
              </p>
              <ul className="approche-dual-points">
                <li>Diagnostic complet de l&apos;entreprise</li>
                <li>Tableau de bord mensuel</li>
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

      {/* Plus loin qu'un DAF : l'équipe Elity */}
      <section className="section section-cream">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Bien plus qu&apos;un directeur financier</span>
            <div className="section-sep" style={{ marginInline: "auto" }} />
            <h2 className="section-title">Une équipe derrière<br /><em>chaque décision.</em></h2>
            <p className="section-body" style={{ marginInline: "auto", textAlign: "center" }}>
              Un accompagnement Elity ne se limite pas aux chiffres. On regarde votre entreprise dans son ensemble : les équipes, l&apos;organisation, le marketing. L&apos;objectif : que chacun(e) soit à la bonne place, que le travail soit fluide, et que tout aille dans le sens de l&apos;entreprise et de sa rentabilité.
            </p>
          </Reveal>

          <div className="approche-team">
            <Reveal className="approche-team-card" delay={100}>
              <span className="approche-team-role">Stratégie &amp; cession</span>
              <h3 className="approche-team-name">Bruno Benattar</h3>
              <p className="approche-team-text">
                Chef d&apos;entreprise devenu conseil. Il pilote la stratégie, la valorisation et la relation avec les dirigeant(e)s, de la cession à l&apos;accompagnement au long cours.
              </p>
            </Reveal>
            <Reveal className="approche-team-card" delay={200}>
              <span className="approche-team-role">Rigueur &amp; chiffres</span>
              <h3 className="approche-team-name">Thierry Le Lidec</h3>
              <p className="approche-team-text">
                Associé de formation comptable. Il ancre chaque décision dans les chiffres : trésorerie, marges, indicateurs, pour décider sur des faits.
              </p>
            </Reveal>
            <Reveal className="approche-team-card" delay={300}>
              <span className="approche-team-role">Équipes &amp; organisation</span>
              <h3 className="approche-team-name">Sarah Moraschetti</h3>
              <p className="approche-team-text">
                Pôle ressources humaines. Elle audite l&apos;organisation pour placer chacun(e) au bon rôle, optimiser le travail des équipes et améliorer l&apos;ambiance au service de l&apos;entreprise.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaFinal
        title={
          <>
            Cession, rachat ou accompagnement ?<br /><em>Parlons-en.</em>
          </>
        }
        text="Premier échange confidentiel et sans engagement."
        secondaryLabel="Voir nos offres"
        secondaryHref="/offres"
      />
    </>
  );
}
