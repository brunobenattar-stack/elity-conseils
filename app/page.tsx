// PAGE HOME — V5 CONCEPT A COMPLET "Le Compas qui guide"

import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import HomeProblem from "@/components/HomeProblem";
import HomeStepsHorizontal from "@/components/HomeStepsHorizontal";
import HomeBrunoParallax from "@/components/HomeBrunoParallax";
import CessionOffers from "@/components/CessionOffers";
import MagneticButton from "@/components/MagneticButton";
import { getHero } from "@/sanity/queries";
import { defaultContent } from "@/lib/content";

export default async function HomePage() {
  const sanityHero = await getHero();
  // Sanity prioritaire, repli sur le contenu par defaut champ par champ.
  const hero = { ...defaultContent.hero };
  if (sanityHero) {
    (Object.keys(hero) as (keyof typeof hero)[]).forEach((k) => {
      const v = sanityHero[k];
      if (typeof v === "string" && v.trim() !== "") hero[k] = v;
    });
  }

  return (
    <>
      {/* 1+2. HERO + PROBLÈME */}
      <div id="section-hero" className="hero-parallax-zone">
        <HomeHero hero={hero} />
        <HomeProblem />
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

          <CessionOffers compact />

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
                Un regard extérieur pour{" "}
                <em>garder le cap sereinement.</em>
              </h2>
              <p className="home-pilotage-desc">
                Avant ou indépendamment d&apos;une cession, Elity devient le partenaire stratégique des dirigeant(e)s de TPE/PME : on vous accompagne à piloter votre entreprise, un cadre clair pour décider sur des faits, garder le cap et préparer l&apos;avenir. Méthode ESSOR, formules 12 ou 24 mois.
              </p>
            </div>
            <Link href="/offres#pilotage" className="home-pilotage-cta">
              Voir l&apos;offre Accompagnement
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
            <h2 className="section-title">
              Un exemple{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold-main)", fontFamily: "var(--serif)" }}>
                concret.
              </em>
            </h2>
          </Reveal>

          <Reveal>
            <div className="cas-home-card">
              {/* En-tête : secteur + offre */}
              <div className="cas-home-header">
                <div className="cas-home-identity">
                  <span className="cas-home-sector">Garage automobile</span>
                  <span className="cas-home-offer">Offre Elity Dirigeant</span>
                </div>
              </div>

              {/* Infos entreprise centrées */}
              <div className="cas-home-infos">
                <span className="cas-home-info-item">5 collaborateurs</span>
                <span className="cas-home-info-sep" aria-hidden="true" />
                <span className="cas-home-info-item">CA 1 M€/an</span>
                <span className="cas-home-info-sep" aria-hidden="true" />
                <span className="cas-home-info-item">La Réunion</span>
              </div>

              {/* Séparateur */}
              <div className="cas-home-divider" aria-hidden="true" />

              {/* Résultats : 2 chiffres */}
              <div className="cas-home-metrics-top">
                <div className="cas-home-metric">
                  <span className="cas-home-metric-line">
                    <span className="cas-home-metric-val">24</span>
                    <span className="cas-home-metric-unit">mois</span>
                  </span>
                  <span className="cas-home-metric-lbl">d&apos;accompagnement</span>
                </div>
                <div className="cas-home-metric">
                  <span className="cas-home-metric-line">
                    <span className="cas-home-metric-val">5</span>
                    <span className="cas-home-metric-unit">emplois</span>
                  </span>
                  <span className="cas-home-metric-lbl">préservés</span>
                </div>
              </div>

              {/* Résultat principal pleine largeur */}
              <div className="cas-home-metric cas-home-metric-check">
                <span className="cas-home-metric-check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="cas-home-metric-lbl">Rentabilité retrouvée</span>
              </div>

              {/* Description */}
              <div className="cas-home-summary">
                <p>
                  Entreprise au bord de la faillite, dirigeant sans rémunération, 5 emplois menacés.
                  Un accompagnement ESSOR sur 24 mois : trésorerie stabilisée, gestion structurée, rentabilité retrouvée.
                </p>
                <cite className="cas-home-cite">Témoignage anonymisé</cite>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link href="/cas-clients" className="btn btn-ghost">
                En savoir plus
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
              Cession, rachat ou accompagnement ?<br />
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
