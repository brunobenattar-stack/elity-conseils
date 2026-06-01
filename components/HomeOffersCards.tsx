"use client";

// INSPIRATION : pattern PricingCards de 21st.dev fourni par Tom-Soa
// (carte avec rounded-3xl p-2 + intérieur rounded-2xl p-8, glass effect, ring inset, shadow)
// Adaptation Elity : palette noir/or, contours dorés, ombre dorée, scroll horizontal mobile
// Contenu pilotable depuis /admin via le ContentProvider.

import Link from "next/link";
import { useContent } from "@/lib/ContentProvider";

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);

const Calendar = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 11h18" />
  </svg>
);

export default function HomeOffersCards() {
  const { content } = useContent();
  const offers = content.offers;

  return (
    <>
      <div className="offers-deck">
        {offers.map((offer) => (
          <article
            key={offer.id}
            className={`offer-card-shell offer-card-${offer.variant ?? "default"} ${offer.featured ? "featured" : ""}`}
            data-variant={offer.variant ?? "default"}
          >
            <div className="offer-card-head">
              <div className="offer-card-top">
                <div className="offer-card-title-block">
                  <h3 className="offer-card-name">{offer.name}</h3>
                  <p className="offer-card-pitch">{offer.pitch}</p>
                </div>
                <span className="offer-card-chip">{offer.chip}</span>
              </div>

              {offer.price && (
                <div className="offer-card-price-block">
                  <span className="offer-card-price-value">{offer.price}</span>
                  {offer.priceSuffix && (
                    <span className="offer-card-price-suffix">{offer.priceSuffix}</span>
                  )}
                </div>
              )}

              <Link
                href={offer.ctaHref || "/contact"}
                className="offer-card-cta"
                aria-label={`${offer.ctaLabel || "Échanger"} : offre ${offer.name}`}
              >
                {offer.ctaLabel || "Prendre rendez-vous"}
                <Calendar />
              </Link>
            </div>

            <div className="offer-card-body">
              <ul className="offer-card-features">
                {offer.features.map((f, i) => (
                  <li key={`${offer.id}-feat-${i}`}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="offer-card-footer-meta">{offer.meta}</div>
            </div>
          </article>
        ))}
      </div>

      {/* Indicateur scroll horizontal — visible mobile uniquement */}
      <div className="offers-scroll-hint" aria-hidden="true">
        <span className="offers-scroll-hint-text">Glissez pour voir les autres offres</span>
        <span className="offers-scroll-hint-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </>
  );
}
