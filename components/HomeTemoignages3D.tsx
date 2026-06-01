"use client";

// AVIS GOOGLE — Marquée auto-scroll desktop, snap horizontal mobile
// Cartes compactes sans photo, design propre avec étoiles + texte + signature

import { useRef } from "react";

type Temoin = {
  text: string;
  name: string;
  context: string;
};

const TEMOINS: Temoin[] = [
  {
    text: "L'accompagnement a été précis du début à la fin. Bruno a su identifier ce qui faisait vraiment notre valeur, là où d'autres auraient vu une PME parmi d'autres.",
    name: "Jean-Marc R.",
    context: "Dirigeant cédant, BTP",
  },
  {
    text: "On savait qu'on voulait vendre, on ne savait pas comment. Aujourd'hui c'est signé, dans les meilleures conditions.",
    name: "Sylvie M.",
    context: "Commerce alimentaire",
  },
  {
    text: "La discrétion totale tout au long du processus. Pour nous, c'était indispensable.",
    name: "Patrick L.",
    context: "Société de services",
  },
  {
    text: "Côté repreneur, l'audit a évité deux pièges qu'on n'aurait pas vus seuls. Bruno pose les bonnes questions au bon moment.",
    name: "Hélène D.",
    context: "Reprise d'ingénierie",
  },
  {
    text: "Méthode, écoute et calme. Trois qualités qui ont fait la différence quand les discussions se sont tendues.",
    name: "Olivier F.",
    context: "Industrie",
  },
];

const Star = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l2.7 7.6h7.8l-6.3 4.6 2.4 7.5L12 17l-6.6 4.7 2.4-7.5L1.5 9.6h7.8z" />
  </svg>
);

const GoogleLogo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18a10.99 10.99 0 0 0 0 9.86l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" fill="#EA4335" />
  </svg>
);

function ReviewCard({ t }: { t: Temoin }) {
  return (
    <article className="review-card">
      <div className="review-card-head">
        <GoogleLogo />
        <div className="review-card-stars" aria-label="5 étoiles">
          <Star /><Star /><Star /><Star /><Star />
        </div>
      </div>
      <p className="review-card-text">{t.text}</p>
      <div className="review-card-sig">
        <span className="review-card-name">{t.name}</span>
        <span className="review-card-context">{t.context}</span>
      </div>
    </article>
  );
}

export default function HomeTemoignages3D() {
  // Duplication pour boucle continue (visible côté desktop seulement)
  const loop = [...TEMOINS, ...TEMOINS];

  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".review-card") as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.9;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="reviews-wrap">
      {/* Desktop : marquée auto-scroll en boucle */}
      <div className="reviews-marquee">
        <div className="reviews-marquee-track">
          {loop.map((t, i) => (
            <ReviewCard key={`m-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Mobile : snap horizontal classique */}
      <div className="reviews-mobile-track" ref={trackRef}>
        {TEMOINS.map((t, i) => (
          <ReviewCard key={`s-${i}`} t={t} />
        ))}
      </div>

      {/* Flèches mobile : pagination manuelle */}
      <div className="reviews-mobile-controls">
        <button
          type="button"
          className="reviews-arrow"
          onClick={() => scrollBy(-1)}
          aria-label="Avis précédent"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className="reviews-arrow"
          onClick={() => scrollBy(1)}
          aria-label="Avis suivant"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <div className="reviews-google-bar">
        <a
          href="https://maps.app.goo.gl/QMrt6fnhVb8zUw6C8"
          target="_blank"
          rel="noopener noreferrer"
          className="reviews-google-btn"
        >
          <GoogleLogo />
          Voir tous nos avis Google
          <svg viewBox="0 0 24 24" width="13" height="13" style={{ stroke: "#1a1611", strokeWidth: 2, fill: "none" }} aria-hidden="true">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </div>
  );
}
