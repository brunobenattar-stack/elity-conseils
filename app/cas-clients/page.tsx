import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaFinal from "@/components/CtaFinal";

export const metadata: Metadata = {
  title: "Cas clients & Actualités — Elity Conseils La Réunion",
  description:
    "Découvrez les études de cas anonymisées et les actualités d'Elity Conseils : cessions, redressements et accompagnements de dirigeant(e)s de TPE/PME à La Réunion.",
};

export default function CasClientsHubPage() {
  return (
    <>
      <section className="section section-cream section-first">
        <div className="container">
          <Reveal className="case-intro">
            <span className="case-intro-label">Cas clients &amp; actualités</span>
            <h2 className="case-intro-title">
              Ce que nous faisons,<br /><em>et ce que ça change.</em>
            </h2>
          </Reveal>

          {/* Deux portes d'entrée : études de cas + actualités */}
          <div className="blog-hub-grid">
            <Reveal delay={100}>
              <Link href="/cas-clients/etudes" className="blog-hub-card">
                <span className="blog-hub-card-tag">Études de cas</span>
                <h3 className="blog-hub-card-title">Des résultats concrets</h3>
                <p className="blog-hub-card-text">
                  Des dossiers anonymisés : redressements, cessions et accompagnements de dirigeant(e)s. Les chiffres, la méthode, le résultat.
                </p>
                <span className="blog-hub-card-cta">
                  Voir les études de cas <span aria-hidden="true">→</span>
                </span>
              </Link>
            </Reveal>

            <Reveal delay={200}>
              <Link href="/actualites" className="blog-hub-card">
                <span className="blog-hub-card-tag">Actualités</span>
                <h3 className="blog-hub-card-title">Le journal d&apos;Elity</h3>
                <p className="blog-hub-card-text">
                  Conseils aux dirigeant(e)s, lecture du marché de l&apos;Océan Indien et actualités du cabinet, filtrables par date.
                </p>
                <span className="blog-hub-card-cta">
                  Lire les actualités <span aria-hidden="true">→</span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Une mission marquante (déplacée depuis À propos) */}
      <section className="section section-cream apropos-story-section">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Une mission marquante</span>
            <div className="section-sep" style={{ marginInline: "auto" }} />
            <h2 className="section-title">Bien plus <em>qu&apos;une transaction.</em></h2>
          </Reveal>
          <Reveal className="apropos-story">
            <div className="apropos-story-body">
              <p>
                En 2017, Bruno a accompagné deux associés en conflit depuis dix ans pour céder leur résidence hôtelière. La transaction a duré 18 mois, et même le notaire lui disait qu&apos;il perdait son temps. La cession a été finalisée à <strong>5 M€</strong>.
              </p>
              <p>
                Et au-delà du prix, cette mission a permis un soulagement entre deux hommes que leur propre affaire avait éloignés. <em>C&apos;est pour ça que nous faisons ce métier.</em>
              </p>
            </div>
            <div className="apropos-story-meta">
              <span><strong>18 mois</strong> de persévérance</span>
              <span><strong>5 M€</strong> de cession</span>
              <span><strong>2 associés</strong> réconciliés</span>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaFinal
        title={
          <>
            Votre situation ressemble <em>à l&apos;une des leurs ?</em>
          </>
        }
        text="Premier échange confidentiel et sans engagement, pour identifier le bon accompagnement."
        secondaryLabel="Voir nos offres"
        secondaryHref="/offres"
      />
    </>
  );
}
