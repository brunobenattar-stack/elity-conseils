"use client";

import { useEffect, useRef, useState } from "react";

type Temoin = {
  text: string;
  name: string;
  context: string;
};

const TEMOINS: Temoin[] = [
  {
    text: "L'accompagnement a été précis du début à la fin. Bruno a su identifier ce qui faisait vraiment notre valeur, là où d'autres auraient vu une PME parmi d'autres.",
    name: "Jean-Marc R.",
    context: "Dirigeant cédant, PME BTP, La Réunion",
  },
  {
    text: "On savait qu'on voulait vendre, on ne savait pas comment. Aujourd'hui c'est signé, dans les meilleures conditions.",
    name: "Sylvie M.",
    context: "Commerce alimentaire, 8 collaborateurs",
  },
  {
    text: "La discrétion totale tout au long du processus. Pour nous, c'était indispensable.",
    name: "Patrick L.",
    context: "Société de services, 14 collaborateurs",
  },
  {
    text: "Le diagnostic initial a changé notre regard sur notre propre entreprise. Le repreneur a vu ce que Bruno avait mis en lumière.",
    name: "Hélène D.",
    context: "Société d'ingénierie, 12 collaborateurs",
  },
  {
    text: "Méthode, écoute et calme. Trois qualités qui ont fait la différence quand les discussions se sont tendues.",
    name: "Olivier F.",
    context: "Entreprise industrielle, 26 collaborateurs",
  },
];

const Star = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l2.7 7.6h7.8l-6.3 4.6 2.4 7.5L12 17l-6.6 4.7 2.4-7.5L1.5 9.6h7.8z" />
  </svg>
);

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const GoogleLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18a10.99 10.99 0 0 0 0 9.86l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      fill="#EA4335"
    />
  </svg>
);

export default function HomeTemoignagesSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(".temoin-slide");
    const step = (slide?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <div className="temoins-slider">
      <div className="temoins-track" ref={trackRef}>
        {TEMOINS.map((t, i) => (
          <article key={i} className="temoin-slide">
            <span className="temoin-slide-quote" aria-hidden="true">&ldquo;</span>
            <p className="temoin-slide-text">{t.text}</p>
            <div className="temoin-slide-stars" aria-label="5 étoiles">
              <Star /><Star /><Star /><Star /><Star />
            </div>
            <div className="temoin-slide-signature">
              <span className="temoin-slide-name">{t.name}</span>
              <span className="temoin-slide-context">{t.context}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="temoins-controls">
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-google"
        >
          <GoogleLogo />
          Voir nos avis Google
        </a>
        <div className="temoins-arrows">
          <button
            type="button"
            className="temoins-arrow"
            aria-label="Témoignage précédent"
            disabled={!canScrollLeft}
            onClick={() => scrollBy(-1)}
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            className="temoins-arrow"
            aria-label="Témoignage suivant"
            disabled={!canScrollRight}
            onClick={() => scrollBy(1)}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
