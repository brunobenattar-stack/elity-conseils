"use client";

// Section Cabinet — minimaliste : photo + description + 1 CTA
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
              Franchisé Procom · La Réunion · 2013
            </p>
          </div>

          {/* Photo : colonne gauche sur desktop, sous le nom sur mobile */}
          <div className="cabinet-simple-photo">
            <div className="cabinet-simple-photo-frame" />
          </div>

          {/* Contenu : stat + CTA */}
          <div className="cabinet-simple-content">
            <p className="cabinet-simple-stat">100+</p>
            <p className="cabinet-simple-stat-label">dirigeants accompagnés</p>
            <Link href="/a-propos" className="cabinet-simple-cta">
              En savoir plus
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
