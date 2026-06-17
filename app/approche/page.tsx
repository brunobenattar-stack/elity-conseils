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
  const t = (v: string | undefined, d: string) => (v && v.trim() ? v.trim() : d);

  const label = t(a?.label, "La méthode Elity en 5 étapes");
  const heading = t(a?.heading, "Cinq étapes pour préparer et valoriser votre entreprise avant la cession.");
  const intro = a?.intro?.trim() || "";

  const steps = a?.steps && a.steps.length > 0
    ? a.steps.map((s, i) => ({
        num: STEPS[i % STEPS.length].num,
        image: STEPS[i % STEPS.length].image,
        eyebrow: t(s.eyebrow, STEPS[i % STEPS.length].eyebrow),
        title: t(s.title, STEPS[i % STEPS.length].title),
        desc: t(s.desc, STEPS[i % STEPS.length].desc),
        points: s.points && s.points.length ? s.points : STEPS[i % STEPS.length].points,
      }))
    : STEPS;

  const acqPoints = a?.acquisitionPoints && a.acquisitionPoints.length
    ? a.acquisitionPoints
    : ["Audit indépendant de la cible", "Vérification de la valorisation", "Analyse des dépendances et des risques", "Sécurisation des conditions de reprise"];
  const accPoints = a?.accompagnementPoints && a.accompagnementPoints.length
    ? a.accompagnementPoints
    : ["Diagnostic complet de l'entreprise", "Tableau de bord mensuel", "Plan d'action et bilans réguliers", "Méthode ESSOR sur 12 ou 24 mois"];

  const team = a?.team && a.team.length > 0
    ? a.team
    : [
        { role: "Stratégie & cession", name: "Bruno Benattar", text: "Chef d'entreprise devenu conseil. Il pilote la stratégie, la valorisation et la relation avec les dirigeant(e)s, de la cession à l'accompagnement au long cours." },
        { role: "Rigueur & chiffres", name: "Thierry Le Lidec", text: "Associé de formation comptable. Il ancre chaque décision dans les chiffres : trésorerie, marges, indicateurs, pour décider sur des faits." },
        { role: "Équipes & organisation", name: "Sarah Moraschetti", text: "Pôle ressources humaines. Elle audite l'organisation pour placer chacun(e) au bon rôle, optimiser le travail des équipes et améliorer l'ambiance au service de l'entreprise." },
      ];

  return (
    <>
      <section className="section section-cream section-first">
        <div className="container">
          <Reveal className="approche-intro">
            <span className="approche-intro-label">{label}</span>
            <h2 className="approche-intro-title">{heading}</h2>
            {intro && <p className="approche-intro-sub">{intro}</p>}
          </Reveal>
          <div className="approche-flow">
            {steps.map((s, i) => (
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
            <span className="section-label">{t(a?.dualLabel, "Pas seulement la cession")}</span>
            <div className="section-sep" style={{ marginInline: "auto" }} />
            <h2 className="section-title">{t(a?.dualTitle1, "La même rigueur,")}<br /><em>{t(a?.dualTitle2, "pour chaque projet.")}</em></h2>
          </Reveal>

          <div className="approche-dual">
            <Reveal className="approche-dual-card" delay={100}>
              <span className="approche-dual-eyebrow">{t(a?.acquisitionEyebrow, "Vous rachetez")}</span>
              <h3 className="approche-dual-title">{t(a?.acquisitionTitle, "L'approche acquisition")}</h3>
              <p className="approche-dual-text">
                {t(a?.acquisitionText, "Avant de reprendre, on sécurise. On audite la cible en toute discrétion, on vérifie que la valeur affichée tient la route et on identifie les zones de risque.")}
              </p>
              <ul className="approche-dual-points">
                {acqPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <Link href="/contact" className="approche-row-cta">
                Prendre contact <span aria-hidden="true">→</span>
              </Link>
            </Reveal>

            <Reveal className="approche-dual-card" delay={200}>
              <span className="approche-dual-eyebrow">{t(a?.accompagnementEyebrow, "Vous dirigez")}</span>
              <h3 className="approche-dual-title">{t(a?.accompagnementTitle, "L'approche accompagnement")}</h3>
              <p className="approche-dual-text">
                {t(a?.accompagnementText, "Pas de projet de cession dans l'immédiat ? On vous accompagne à piloter votre entreprise au mois le mois avec la méthode ESSOR, pour reprendre le contrôle et préparer l'avenir.")}
              </p>
              <ul className="approche-dual-points">
                {accPoints.map((p) => <li key={p}>{p}</li>)}
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
            <span className="section-label">{t(a?.teamLabel, "Bien plus qu'un directeur financier")}</span>
            <div className="section-sep" style={{ marginInline: "auto" }} />
            <h2 className="section-title">{t(a?.teamTitle1, "Une équipe derrière")}<br /><em>{t(a?.teamTitle2, "chaque décision.")}</em></h2>
            <p className="section-body" style={{ marginInline: "auto", textAlign: "center" }}>
              {t(a?.teamIntro, "Un accompagnement Elity ne se limite pas aux chiffres. On regarde votre entreprise dans son ensemble : les équipes, l'organisation, le marketing. L'objectif : que chacun(e) soit à la bonne place, que le travail soit fluide, et que tout aille dans le sens de l'entreprise et de sa rentabilité.")}
            </p>
          </Reveal>

          <div className="approche-team">
            {team.map((m, i) => (
              <Reveal className="approche-team-card" delay={(((i % 3) + 1) * 100) as 100 | 200 | 300} key={i}>
                <span className="approche-team-role">{m.role}</span>
                <h3 className="approche-team-name">{m.name}</h3>
                <p className="approche-team-text">{m.text}</p>
              </Reveal>
            ))}
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
