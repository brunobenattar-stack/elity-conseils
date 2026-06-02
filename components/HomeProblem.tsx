"use client";

import Reveal from "./Reveal";

const DELAYS = [0, 100, 200, 300] as const;
type RevealDelay = (typeof DELAYS)[number];

const RISQUES: {
  num: string;
  eyebrow: string;
  titre: string;
  desc: string;
  delay: RevealDelay;
  variant: "ivory" | "dark";
  icon: React.ReactNode;
}[] = [
  {
    num: "01",
    eyebrow: "Valorisation",
    titre: "Vendre en dessous de la valeur réelle",
    desc: "Sans dossier argumenté, le prix s'aligne sur l'instinct de l'acheteur. L'écart peut représenter plusieurs années de bénéfices.",
    delay: 0,
    variant: "ivory",
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="1.2" />
        <path d="M22 36l6-8 6 6 8-12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M38 24h6v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    eyebrow: "Repreneur",
    titre: "Tomber sur le mauvais acquéreur",
    desc: "Un repreneur sans capacité financière ou sans projet solide met en danger vos salariés, votre réputation et vos garanties post-cession.",
    delay: 100,
    variant: "dark",
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <circle cx="24" cy="20" r="10" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 52c0-10 7-16 16-16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="44" cy="44" r="12" stroke="currentColor" strokeWidth="1.2" />
        <path d="M40 44l2 2 6-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    eyebrow: "Discrétion",
    titre: "Perdre le contrôle de l'information",
    desc: "Une vente mal gérée se sait. Salariés, concurrents, fournisseurs alertés trop tôt — l'entreprise se fragilise avant même la signature.",
    delay: 200,
    variant: "dark",
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M32 12C18 12 8 32 8 32s10 20 24 20 24-20 24-20S46 12 32 12z" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 10l44 44" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    eyebrow: "Clauses",
    titre: "Signer sans comprendre ce qu'on signe",
    desc: "Garantie d'actif-passif, earn-out, non-concurrence : mal négociées, ces clauses peuvent effacer une partie du prix des années après la vente.",
    delay: 300,
    variant: "ivory",
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <rect x="14" y="8" width="36" height="48" rx="3" stroke="currentColor" strokeWidth="1.2" />
        <path d="M22 20h20M22 28h20M22 36h12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <circle cx="46" cy="48" r="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
        <path d="M43 48l2 2 4-4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HomeProblem() {
  return (
    <section className="section problem-section">
      <div className="container">
        <Reveal className="problem-intro">
          <h2 className="problem-headline">
            Ce qui coûte cher quand{" "}
            <em>on s&apos;y prend mal.</em>
          </h2>
          <p className="problem-sub">
            La plupart des dirigeants sous-estiment la complexité d&apos;une transmission. Voici ce qui arrive quand elle n&apos;est pas préparée.
          </p>
        </Reveal>

        <div className="problem-cards-grid">
          {RISQUES.map((r) => (
            <Reveal
              key={r.num}
              className={`problem-card problem-card-${r.variant}`}
              delay={r.delay}
            >
              <div className="problem-card-deco" aria-hidden="true">
                {r.icon}
              </div>
              <span className="problem-eyebrow">{r.eyebrow}</span>
              <h3 className="problem-titre">
                {r.titre}
              </h3>
              <p className="problem-desc">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
