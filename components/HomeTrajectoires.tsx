"use client";

// Section Trajectoires : cession / rachat — split 2 colonnes
// Remplace l'ancien Manifeste. Asseoit le double positionnement.

import Link from "next/link";
import Reveal from "./Reveal";

type Trajectoire = {
  eyebrow: string;
  title: string;
  titleEm: string;
  points: string[];
  href: string;
  cta: string;
};

const TRAJECTOIRES: Trajectoire[] = [
  {
    eyebrow: "Vous cédez",
    title: "Transmettre",
    titleEm: "dans la juste valeur.",
    points: [
      "Valorisation argumentée, pas une fourchette générique.",
      "Acquéreurs ciblés, discrétion préservée.",
      "Négociation menée jusqu'à la signature et au-delà.",
    ],
    href: "/offres",
    cta: "Accompagnement cession",
  },
  {
    eyebrow: "Vous reprenez",
    title: "Acquérir",
    titleEm: "sans angle mort.",
    points: [
      "Cibles qualifiées, screening confidentiel.",
      "Audit de valeur et de risques avant offre.",
      "Structuration financière et closing accompagnés.",
    ],
    href: "/offres",
    cta: "Accompagnement rachat",
  },
];

export default function HomeTrajectoires() {
  return (
    <section className="section trajectoires-section">
      <div className="container">
        <Reveal className="trajectoires-intro">
          <h2 className="trajectoires-headline">
            <span className="trajectoires-num">2</span> trajectoires,{" "}
            <span className="trajectoires-num">1</span> exigence.
          </h2>
          <p className="trajectoires-sub">
            Céder ou reprendre : même rigueur de méthode.
          </p>
        </Reveal>

        <div className="trajectoires-grid">
          {TRAJECTOIRES.map((t, i) => (
            <Reveal
              key={t.eyebrow}
              className={`trajectoire-card trajectoire-card-${i === 0 ? "ivory" : "gold"}`}
              delay={i === 0 ? 0 : 200}
            >
              <div className="trajectoire-card-deco" aria-hidden="true">
                {i === 0 ? (
                  /* Vous cédez : bâtiment + flèche de transmission (cession d'entreprise) */
                  <svg viewBox="0 0 64 64" fill="none">
                    <rect x="8" y="26" width="30" height="28" rx="2" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M8 26L23 12l15 14" stroke="currentColor" strokeWidth="1.2" />
                    <rect x="17" y="38" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="1" />
                    <path d="M44 34h16M52 26l8 8-8 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  /* Vous reprenez : loupe sur bâtiment (identification & acquisition de cible) */
                  <svg viewBox="0 0 64 64" fill="none">
                    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M37 37l18 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    <rect x="14" y="20" width="20" height="16" rx="1.5" stroke="currentColor" strokeWidth="0.9" />
                    <path d="M14 20L24 12l10 8" stroke="currentColor" strokeWidth="0.9" />
                    <path d="M19 28h10M19 32h6" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <span className="trajectoire-eyebrow">{t.eyebrow}</span>
              <h3 className="trajectoire-title">
                {t.title}
                <br />
                <em>{t.titleEm}</em>
              </h3>
              <ul className="trajectoire-points">
                {t.points.map((p, j) => (
                  <li key={j}>
                    <span className="trajectoire-bullet" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link href={t.href} className="trajectoire-cta">
                {t.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="trajectoires-offres-cta">
          <Link href="/offres" className="trajectoires-offres-btn">
            Voir nos accompagnements
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <Reveal className="trajectoires-note">
          <p>
            Pas encore prêt à céder ?{" "}
            <Link href="/offres#pilotage" className="trajectoires-note-link">
              Elity Conseils propose aussi un pilotage mensuel
            </Link>{" "}
            pour les dirigeants qui veulent structurer et valoriser leur entreprise sur le long terme, avant de décider.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
