// PAGE HOME — V5 CONCEPT A COMPLET "Le Compas qui guide"
// Phase 1 : sticky compass + manifeste BlurText + scroll horizontal sticky
// Phase 2 : parallax Bruno + count-up massifs + témoignages 3D + magnetic CTA

import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import HomeTrajectoires from "@/components/HomeTrajectoires";
import HomeStepsHorizontal from "@/components/HomeStepsHorizontal";
import HomeBrunoParallax from "@/components/HomeBrunoParallax";
import HomeOffersCards from "@/components/HomeOffersCards";
import HomeTemoignages3D from "@/components/HomeTemoignages3D";
import MagneticButton from "@/components/MagneticButton";
import StickyCompass from "@/components/StickyCompass";
import CompassLogo from "@/components/CompassLogo";

export default function HomePage() {
  return (
    <>
      {/* Compas sticky qui guide le scroll — signature Concept A */}
      <StickyCompass />

      {/* 1+2. HERO + TRAJECTOIRES — zone parallax partagée */}
      <div className="hero-parallax-zone">
        <HomeHero />
        <HomeTrajectoires />
      </div>

      {/* 3. APPROCHE (Steps) */}
      <HomeStepsHorizontal />

      {/* 4. OFFRES — entre Approche et Cabinet */}
      <section className="section offres-dark">
        <div className="container">
          <Reveal className="offers-deck-intro">
            <span className="section-label">Nos offres</span>
            <div className="section-sep" style={{ marginLeft: "auto", marginRight: "auto" }} />
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Trois offres,{" "}
              <em style={{ fontStyle: "normal", color: "var(--gold-main)", fontFamily: "var(--display)", fontWeight: 400 }}>
                un seul standard.
              </em>
            </h2>
          </Reveal>

          <HomeOffersCards />

          <Reveal className="offers-deck-cta-wrap">
            <Link href="/offres" className="btn btn-ghost">
              Voir le détail des 3 offres
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4 bis. TEASER PILOTAGE — la 2e activité du cabinet */}
      <section className="home-pilotage-teaser">
        <div className="container">
          <Reveal className="home-pilotage-inner">
            <div>
              <span className="home-pilotage-eyebrow">Pas (encore) de projet de cession ?</span>
              <h2 className="home-pilotage-title">
                Le cabinet accompagne aussi les dirigeants{" "}
                <em>mensuellement.</em>
              </h2>
              <p className="home-pilotage-desc">
                Avant, ou indépendamment d&apos;une cession, nous proposons un pilotage mensuel pour les dirigeants de TPE/PME qui veulent un partenaire stratégique régulier. Méthode ESSOR, formules 12 ou 24 mois.
              </p>
            </div>
            <Link href="/offres#pilotage" className="home-pilotage-cta">
              Voir l&apos;offre Pilotage
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5. CABINET (Bruno — éditorial) */}
      <HomeBrunoParallax />

      {/* 6. TÉMOIGNAGES — Carrousel type Apple */}
      <section
        className="section temoignages-section"
        style={{
          background:
            "linear-gradient(160deg, #0a0907 0%, #131009 50%, #0a0907 100%)",
          borderTop: "1px solid var(--gold-border)",
          borderBottom: "1px solid var(--gold-border)",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        {/* Watermark boussole blanche — fond éditorial qui renforce le concept "Le Compas qui guide" */}
        <div className="temoignages-watermark" aria-hidden="true">
          <CompassLogo size={640} color="#ffffff" />
        </div>

        <div className="container">
          <Reveal className="temoignages-header-row">
            <div className="temoignages-header-label">
              <span className="section-label">Avis Google</span>
              <div className="section-sep" />
            </div>
            <h2 className="section-title temoignages-header-title">
              Ce qu&apos;ils en{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold-main)", fontFamily: "var(--serif)" }}>
                disent vraiment.
              </em>
            </h2>
          </Reveal>
        </div>

        <Reveal>
          <HomeTemoignages3D />
        </Reveal>
      </section>

      {/* 7. CTA FINAL — Cession ou rachat */}
      <section className="cta-photo">
        <div className="container">
          <Reveal>
            <h2>
              Cession ou rachat ?<br />
              <em>Parlons-en.</em>
            </h2>
            <p>
              Premier échange confidentiel et sans engagement.
            </p>
            <div className="cta-photo-btns">
              <MagneticButton href="/contact">
                Entamer un échange
                <span aria-hidden="true">→</span>
              </MagneticButton>
              <Link href="/approche" className="cta-photo-btn-secondary">
                <span>Découvrir la méthode</span>
                <span className="cta-photo-btn-secondary-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
