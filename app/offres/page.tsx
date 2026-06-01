import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import OffersGrid from "@/components/OffersGrid";
import CtaStrip from "@/components/CtaStrip";
import { IconLock, IconEye, IconChart } from "@/components/icons";

export const metadata: Metadata = {
  title: "Nos Offres : Cession, rachat et pilotage mensuel du dirigeant",
  description:
    "Deux activités complémentaires : Cession & rachat d'entreprise (3 offres : Classique, Stratégique, Premium) et Pilotage mensuel du dirigeant via la méthode ESSOR (formules 12 ou 24 mois).",
};

export default function OffresPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Nos Offres" }]}
        title={
          <>
            Deux activités, un seul standard.<br />
            <em>Vendre, racheter ou piloter. Sereinement.</em>
          </>
        }
        subtitle="Le cabinet accompagne les dirigeants sur deux moments distincts : la cession ou le rachat d'une entreprise d'un côté, le pilotage mensuel de leur activité de l'autre. Chaque offre s'appuie sur une méthode rigoureuse et une exigence de confidentialité absolue."
        meta="2 activités · 5 formules"
      />

      <section className="section offers-toc-section">
        <div className="container">
          <Reveal className="offers-toc">
            <a href="#cession" className="offers-toc-card">
              <span className="offers-toc-label">Activité 01</span>
              <h3 className="offers-toc-title">Cession & rachat d&apos;entreprise</h3>
              <p className="offers-toc-desc">Trois offres pour vendre ou racheter dans les meilleures conditions, avec le réseau Procom.</p>
              <span className="offers-toc-cta">Voir les 3 offres <span aria-hidden="true">↓</span></span>
            </a>
            <a href="#pilotage" className="offers-toc-card">
              <span className="offers-toc-label">Activité 02</span>
              <h3 className="offers-toc-title">Pilotage mensuel du dirigeant</h3>
              <p className="offers-toc-desc">Deux formules d&apos;accompagnement récurrent pour piloter votre entreprise, méthode ESSOR.</p>
              <span className="offers-toc-cta">Voir les 2 formules <span aria-hidden="true">↓</span></span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 1 — Cession & rachat                                 */}
      {/* ============================================================ */}
      <section className="section offers-cession-section" id="cession">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-label">Activité 01 : Cession & rachat</span>
            <div className="section-sep" />
            <h2 className="section-title">Trois niveaux d&apos;accompagnement.<br /><em>Une approche adaptée à vos enjeux.</em></h2>
            <p className="section-body">
              Du conseil ciblé jusqu&apos;à l&apos;accompagnement premium de A à Z, nos trois offres couvrent toutes les situations de cession et de rachat. Chacune s&apos;appuie sur le réseau national <strong>Procom Océan Indien</strong>.
            </p>
          </Reveal>

          <OffersGrid />

          <div className="offers-band">
            <Reveal className="band-item" delay={100}>
              <IconLock />
              <div>
                <div className="band-title">Confidentialité totale</div>
                <div className="band-desc">Discrétion garantie à chaque étape.</div>
              </div>
            </Reveal>
            <Reveal className="band-item" delay={200}>
              <IconEye />
              <div>
                <div className="band-title">Approche sur-mesure</div>
                <div className="band-desc">Une stratégie adaptée à vos objectifs.</div>
              </div>
            </Reveal>
            <Reveal className="band-item" delay={300}>
              <IconChart />
              <div>
                <div className="band-title">Résultats optimisés</div>
                <div className="band-desc">Valorisation maximale et conditions sécurisées.</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — Pilotage mensuel du dirigeant                    */}
      {/* ============================================================ */}
      <section className="section offers-pilotage-section" id="pilotage">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-label">Activité 02 : Pilotage mensuel</span>
            <div className="section-sep" />
            <h2 className="section-title">Diriger seul, c&apos;est arbitrer<br /><em>dans le brouillard.</em></h2>
            <p className="section-body">
              Vous dirigez une TPE ou une PME et avancez souvent seul, sans véritable partenaire stratégique. Votre comptable gère vos comptes… mais qui pilote réellement avec vous ? Le pilotage mensuel Elity Dirigeant vous offre un cadre structuré pour reprendre la main, avec méthode et continuité, appuyé sur notre <Link href="/methode-essor" className="inline-link">méthode ESSOR</Link>.
            </p>
          </Reveal>

          <div className="pilotage-formules">
            <Reveal className="formule" delay={100}>
              <span className="formule-tag">Formule essentielle</span>
              <h4 className="formule-name">12 mois d&apos;accompagnement</h4>
              <p className="formule-duration">Cycle annuel · Engagement 12 mois</p>
              <ul className="formule-list">
                <li>12 entretiens individuels mensuels (3-4h)</li>
                <li>12 rapports d&apos;activité personnalisés</li>
                <li>12 plans d&apos;action mensuels</li>
                <li>Méthode ESSOR complète (4 étapes)</li>
                <li>Disponibilité entre les séances</li>
                <li>Bilan annuel de progression</li>
              </ul>
              <p className="formule-for"><strong>Pour qui ?</strong> Dirigeants qui veulent structurer leur pilotage et installer un cadre stratégique mensuel.</p>
            </Reveal>

            <Reveal className="formule formule-plus" delay={200}>
              <div className="formule-ribbon">Plus complet</div>
              <span className="formule-tag">Formule performance</span>
              <h4 className="formule-name">24 mois d&apos;accompagnement</h4>
              <p className="formule-duration">Cycle approfondi · Engagement 24 mois</p>
              <ul className="formule-list">
                <li>24 entretiens individuels mensuels (3-4h)</li>
                <li>24 rapports d&apos;activité personnalisés</li>
                <li>24 plans d&apos;action mensuels</li>
                <li>Méthode ESSOR complète (4 étapes)</li>
                <li>2 bilans semestriels approfondis</li>
                <li>Accompagnement stratégique renforcé</li>
                <li>Disponibilités entre les séances</li>
              </ul>
              <p className="formule-for"><strong>Pour qui ?</strong> Dirigeants en phase de croissance, restructuration ou préparation à la cession à 24 mois.</p>
            </Reveal>
          </div>

          <Reveal>
            <div className="pilotage-cta-wrap">
              <Link href="/methode-essor" className="btn btn-ghost">
                Découvrir la méthode ESSOR <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal>
            <p className="offers-quote">Chaque dirigeant est unique. Nos offres s&apos;adaptent à votre situation.</p>
          </Reveal>
          <Reveal>
            <div className="offers-cta-wrap">
              <Link href="/contact" className="btn btn-primary">
                Prendre rendez-vous <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title={
          <>
            Hésitez entre deux offres ?<br />
            <em>Échangeons pour la choisir ensemble.</em>
          </>
        }
        text="Nous prenons 30 minutes pour comprendre votre situation et identifier le format le plus adapté. Sans engagement."
      />
    </>
  );
}
