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
import MagneticButton from "@/components/MagneticButton";
import StickyCompass from "@/components/StickyCompass";

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
            <span className="section-label">Nos offres · Cession & Acquisition</span>
            <div className="section-sep" style={{ marginLeft: "auto", marginRight: "auto" }} />
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Trois niveaux,{" "}
              <em style={{ fontStyle: "normal", color: "var(--gold-main)", fontFamily: "var(--display)", fontWeight: 400 }}>
                un seul standard.
              </em>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", maxWidth: 520, margin: "0 auto 8px", textAlign: "center" }}>
              Que vous souhaitiez céder ou acquérir une entreprise, Elity Conseils structure votre stratégie. Procomm Océan Indien réalise la transaction.
            </p>
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

      {/* 6. ÉTUDE DE CAS */}
      <section className="section cas-home-section" style={{ background: "linear-gradient(160deg, #0a0907 0%, #131009 50%, #0a0907 100%)", borderTop: "1px solid var(--gold-border)", borderBottom: "1px solid var(--gold-border)" }}>
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Étude de cas</span>
            <div className="section-sep" />
            <h2 className="section-title">
              Un exemple{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold-main)", fontFamily: "var(--serif)" }}>
                concret.
              </em>
            </h2>
          </Reveal>

          <Reveal className="cas-home-card">
            <div className="cas-home-card-meta">
              <span className="cas-home-sector">Garage automobile</span>
              <span className="cas-home-size">TPE · 5 collaborateurs · CA 1 M€ · La Réunion</span>
            </div>

            <div className="cas-home-body">
              <div className="cas-home-block">
                <h4>Situation initiale</h4>
                <p>Entreprise au bord de la faillite. Grosses difficultés financières, dirigeant incapable de se rémunérer, 5 emplois menacés.</p>
              </div>
              <div className="cas-home-block">
                <h4>Intervention</h4>
                <p>Accompagnement Elity Dirigeant sur 24 mois — méthode ESSOR. Audit complet, tableau de bord mensuel, plan d'action structuré.</p>
              </div>
              <div className="cas-home-block cas-home-result">
                <h4>Résultat</h4>
                <p>Entreprise rentable en 24 mois. Le dirigeant peut à nouveau se rémunérer. Les 5 emplois ont été préservés.</p>
                <div className="cas-home-metrics">
                  <div className="cas-home-metric"><span className="cas-home-metric-val">24 mois</span><span className="cas-home-metric-lbl">Durée</span></div>
                  <div className="cas-home-metric"><span className="cas-home-metric-val">5</span><span className="cas-home-metric-lbl">Emplois sauvés</span></div>
                </div>
              </div>
            </div>

            <blockquote className="cas-home-quote">
              &ldquo;Merci pour l&apos;écoute et le soutien. Nous avons pu redresser l&apos;entreprise en 24 mois.&rdquo;
              <cite>Le dirigeant — anonymisé</cite>
            </blockquote>
          </Reveal>

          <Reveal>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/cas-clients" className="btn btn-ghost">
                Voir tous les cas clients
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
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
