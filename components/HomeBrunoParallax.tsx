"use client";

// Section Cabinet - minimaliste : photo + description + 1 CTA
// Mobile : label → nom → photo → role/desc/CTA/reassurance

import Link from "next/link";

export default function HomeBrunoParallax() {
  return (
    <section className="cabinet-simple">
      <div className="container">
        <div className="cabinet-simple-grid">

          {/* Label mobile uniquement (desktop : dans cabinet-simple-header) */}
          <span className="section-label cabinet-simple-eyebrow-mobile" style={{ color: "var(--gold-on-cream)" }}>
            Le cabinet
          </span>

          {/* Nom + role : en haut à droite sur desktop, en haut sur mobile */}
          <div className="cabinet-simple-header">
            <span className="section-label cabinet-simple-eyebrow-desktop" style={{ color: "var(--gold-on-cream)" }}>
              Le cabinet
            </span>
            <h2 className="cabinet-simple-name">
              Bruno Benattar
            </h2>
            <p className="cabinet-simple-role">
              <span className="cabinet-simple-role-line">Franchisé Procomm · La Réunion</span>{" "}
              <span className="cabinet-simple-role-line">depuis 2015</span>
            </p>
          </div>

          {/* Photo : colonne gauche sur desktop, sous le nom sur mobile */}
          <div className="cabinet-simple-photo">
            <div className="cabinet-simple-photo-frame" />
          </div>

          {/* Contenu : description + CTA + reassurance */}
          <div className="cabinet-simple-content">
            <p className="cabinet-simple-desc">
              12 ans aux côtés des dirigeants de TPE et PME, en cession comme en acquisition. Une approche fondée sur l&apos;écoute, la rigueur et la discrétion.
            </p>
            <Link href="/a-propos" className="cabinet-simple-cta">
              En savoir plus
              <span aria-hidden="true">→</span>
            </Link>

            <ul className="cabinet-simple-reassurance">
              <li>
                <span className="cabinet-simple-reassurance-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 2l2.4 7.2H22l-6.2 4.5 2.4 7.3L12 16.5 5.8 21l2.4-7.3L2 9.2h7.6z" />
                  </svg>
                </span>
                <span>100+ dirigeants accompagnés</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
