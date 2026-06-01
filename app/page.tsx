// PAGE HOME — V5 CONCEPT A COMPLET "Le Compas qui guide"

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
      <StickyCompass />

      {/* 1+2. HERO + TRAJECTOIRES */}
      <div id="section-hero" className="hero-parallax-zone">
        <HomeHero />
        <HomeTrajectoires />
      </div>

      {/* 3. APPROCHE */}
      <div id="section-approche">
        <HomeStepsHorizontal />
      </div>

      {/* 4. OFFRES */}
      <section id="section-offres" className="section offres-dark">
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
            <p style={{ color: "var(--text-muted)", fontSize: "15px", maxWidth: 420, margin: "0 auto 8px", textAlign: "center", lineHeight: 1.6 }}>
              Elity Conseils structure votre stratégie.<br />
              Procomm Océan Indien réalise la transaction.
            </p>
          </Reveal>

          <HomeOffersCards />

          {/* Note acquisition */}
          <Reveal>
            <div className="offres-acquisition-note">
              <div className="offres-acquisition-note-inner">
                <div>
                  <span className="offres-acquisition-eyebrow">Vous souhaitez acquérir ?</span>
                  <p className="offres-acquisition-text">
                    Vous souhaitez acquérir une entreprise ? Elity Conseils vous accompagne dans la définition de votre stratégie d&apos;acquisition : identification de cibles, audit de valeur, structuration du projet.
                  </p>
                </div>
                <Link href="/contact" className="offres-acquisition-cta">
                  En parler
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="offers-deck-cta-wrap">
            <Link href="/offres" className="btn btn-ghost">
              Voir le détail des offres
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4 bis. TEASER PILOTAGE */}
      <section id="section-pilotage" className="home-pilotage-teaser">
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

      {/* 5. CABINET */}
      <div id="section-cabinet">
        <HomeBrunoParallax />
      </div>

      {/* 6. ÉTUDE DE CAS */}
      <section id="section-cas" className="section cas-home-section">
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

          <Reveal>
            <div className="cas-home-card">
              {/* En-tête badges */}
              <div className="cas-home-header">
                <div className="cas-home-badge-row">
                  <span className="cas-home-sector">Garage automobile</span>
                  <span className="cas-home-tag">Elity Dirigeant</span>
                  <span className="cas-home-size">TPE · 5 collaborateurs · CA 1 M€ · La Réunion</span>
                </div>
              </div>

              {/* Citation principale */}
              <div className="cas-home-quote-wrap">
                <span className="cas-home-quote-mark" aria-hidden="true">&ldquo;</span>
                <blockquote className="cas-home-quote">
                  Merci pour l&apos;écoute et le soutien. Nous avons pu redresser l&apos;entreprise en 24 mois.
                </blockquote>
                <cite className="cas-home-cite">Le dirigeant &mdash; anonymisé</cite>
              </div>

              {/* Séparateur */}
              <div className="cas-home-divider" aria-hidden="true" />

              {/* Métriques + contexte */}
              <div className="cas-home-bottom">
                <div className="cas-home-metrics">
                  <div className="cas-home-metric">
                    <span className="cas-home-metric-val">24</span>
                    <span className="cas-home-metric-unit">mois</span>
                    <span className="cas-home-metric-lbl">Pour redresser</span>
                  </div>
                  <div className="cas-home-metric">
                    <span className="cas-home-metric-val">5</span>
                    <span className="cas-home-metric-unit">emplois</span>
                    <span className="cas-home-metric-lbl">Préservés</span>
                  </div>
                  <div className="cas-home-metric">
                    <span className="cas-home-metric-val">✓</span>
                    <span className="cas-home-metric-unit">&nbsp;</span>
                    <span className="cas-home-metric-lbl">Rentabilité retrouvée</span>
                  </div>
                </div>
                <div className="cas-home-context">
                  <p><strong>Départ :</strong> Entreprise au bord de la faillite. Dirigeant sans rémunération, 5 emplois menacés.</p>
                  <p><strong>Méthode :</strong> Accompagnement mensuel ESSOR sur 24 mois — audit, tableau de bord, plans d&apos;action.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link href="/cas-clients" className="btn btn-ghost">
                Voir tous les cas clients
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section id="section-cta" className="cta-photo">
        <div className="container">
          <Reveal>
            <h2>
              Cession ou rachat ?<br />
              <em>Parlons-en.</em>
            </h2>
            <p>Premier échange confidentiel et sans engagement.</p>
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
