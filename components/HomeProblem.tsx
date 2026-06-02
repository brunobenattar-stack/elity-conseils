"use client";

import Reveal from "./Reveal";

const DELAYS = [0, 100, 200, 300] as const;
type RevealDelay = (typeof DELAYS)[number];

const RISQUES: { num: string; titre: string; desc: string; delay: RevealDelay }[] = [
  {
    num: "01",
    titre: "Une valorisation sous-estimée",
    desc: "Sans dossier argumenté, le prix proposé reflète l'instinct de l'acheteur, pas la valeur réelle de votre entreprise. L'écart peut représenter plusieurs années de bénéfices.",
    delay: 0,
  },
  {
    num: "02",
    titre: "Un repreneur mal qualifié",
    desc: "Un acquéreur sans capacité financière ou sans projet solide met en danger vos salariés, votre réputation et vos garanties post-cession.",
    delay: 100,
  },
  {
    num: "03",
    titre: "Une discrétion compromise",
    desc: "Une vente mal gérée se sait. Salariés, concurrents, fournisseurs : l'information fuite avant la signature et fragilise l'entreprise au pire moment.",
    delay: 200,
  },
  {
    num: "04",
    titre: "Des clauses qui reviennent vous chercher",
    desc: "Garantie d'actif-passif, earn-out, clause de non-concurrence : mal négociées, ces clauses peuvent effacer une partie du prix des années après la vente.",
    delay: 300,
  },
];

export default function HomeProblem() {
  return (
    <section className="section problem-section">
      <div className="container">
        <Reveal className="problem-intro">
          <span className="section-label">Ce qui coûte cher quand on s&apos;y prend mal</span>
          <div className="section-sep" />
          <h2 className="section-title">
            Céder sans préparation,{" "}
            <em style={{ fontStyle: "normal", color: "var(--gold-main)", fontFamily: "var(--display)", fontWeight: 400 }}>
              c&apos;est risqué.
            </em>
          </h2>
          <p className="problem-sub">
            La plupart des dirigeants sous-estiment la complexité d&apos;une transmission. Voici ce qui se passe quand elle n&apos;est pas préparée.
          </p>
        </Reveal>

        <div className="problem-grid">
          {RISQUES.map((r, i) => (
            <Reveal key={r.num} className="problem-card" delay={r.delay}>
              <span className="problem-num" aria-hidden="true">{r.num}</span>
              <h3 className="problem-titre">{r.titre}</h3>
              <p className="problem-desc">{r.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="problem-solution">
          <div className="problem-solution-inner">
            <span className="problem-solution-label">La réponse Elity Conseils</span>
            <p className="problem-solution-text">
              Un conseil indépendant, de la valorisation à la signature. Pas d&apos;honoraires liés à la transaction : notre seul intérêt est le vôtre.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
