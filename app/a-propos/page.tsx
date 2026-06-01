import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CompassVisual from "@/components/CompassVisual";
import CtaStrip from "@/components/CtaStrip";
import { IconCompass, IconTarget, IconDiamond } from "@/components/icons";

export const metadata: Metadata = {
  title: "À Propos : Bruno Benattar, conseil en cession",
  description:
    "Bruno Benattar, conseil en cession d'entreprise à La Réunion, franchisé Procom depuis 2013. Plus de 12 ans d'expérience auprès des dirigeants de TPE et PME.",
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "À Propos" }]}
        title={
          <>
            Bruno Benattar.<br />
            <em>Le cap, la méthode, l'écoute.</em>
          </>
        }
        subtitle="Chef d'entreprise, franchisé Procom depuis 2015, Bruno Benattar accompagne les dirigeants de La Réunion dans la préparation stratégique de leur cession ou acquisition, et dans le pilotage de leur entreprise via Elity Dirigeant."
        meta="La Réunion · depuis 2015"
      />

      <section className="section">
        <div className="container">
          <div className="apropos-split">
            <Reveal>
              <CompassVisual size="medium" />
            </Reveal>

            <Reveal className="apropos-content" delay={200}>
              <span className="section-label">À Propos</span>
              <div className="section-sep" />
              <h2 className="apropos-name">Bruno Benattar</h2>
              <p className="apropos-role">Conseil en cession d'entreprise, franchisé Procom depuis 2015.</p>

              <div className="apropos-body">
                <p>
                  Chef d'entreprise toute ma vie, j'ai vécu de l'intérieur toutes les problématiques qui vont avec. C'est ce qui me permet de parler le même langage que les dirigeants que j'accompagne.
                </p>
                <p>
                  Après un parcours dans l'immobilier de luxe à l'Ile Maurice, je suis entré dans la transaction d'entreprise en 2013 en aidant mon père à céder son restaurant. J'ai découvert la franchise Procom, disponible sur les Iles Mascareignes, et j'en suis franchisé depuis le 1er juillet 2015. Ce réseau d'une quinzaine de cabinets en France nous donne du poids, de la formation continue et de la rigueur.
                </p>
                <p>
                  Après plus de dix ans, j'ai créé Elity Conseils pour formaliser la mission qui précède toute transaction : accompagner le dirigeant dans l'élaboration de sa stratégie de cession ou d'acquisition. C'est Procom Océan Indien qui réalise ensuite la transaction. Deux structures, une continuité d'accompagnement.
                </p>
              </div>

              <div className="values">
                <Reveal className="value" delay={100}>
                  <IconCompass />
                  <div className="value-name">Orientation</div>
                  <div className="value-desc">La direction juste, la décision éclairée.</div>
                </Reveal>
                <Reveal className="value" delay={200}>
                  <IconTarget />
                  <div className="value-name">Stratégie</div>
                  <div className="value-desc">Une approche sur-mesure et rigoureuse.</div>
                </Reveal>
                <Reveal className="value" delay={300}>
                  <IconDiamond />
                  <div className="value-name">Excellence</div>
                  <div className="value-desc">L'engagement d'un résultat optimal.</div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Notre différence</span>
            <div className="section-sep" />
            <h2 className="section-title">Ce que vous voyez<br />n'est pas ce que voit un acquéreur.</h2>
            <p className="section-body" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
              La perception crée la valeur. Nous vous aidons à construire la perception qu'un bon acquéreur doit avoir de votre entreprise.
            </p>
          </Reveal>

          <Reveal className="vs-table">
            <div className="vs-col vs-col-bad">
              <div className="vs-col-head">Entreprise mal préparée</div>
              {[
                ["Perception floue", "Les acquéreurs ne comprennent pas la réelle valeur."],
                ["Négociation subie", "Le prix devient le seul point de discussion."],
                ["Risques perçus élevés", "Doutes, incertitudes, freins à l'investissement."],
                ["Acquéreurs opportunistes", "Peu d'intérêt, beaucoup de conditions."],
                ["Valorisation réduite", "Le potentiel n'est pas reconnu, la valeur baisse."],
              ].map(([n, d]) => (
                <div key={n} className="vs-item">
                  <div className="vs-name"><span className="marker">✕</span> {n}</div>
                  <div className="vs-text">{d}</div>
                </div>
              ))}
              <p className="vs-col-footer">Vendre devient difficile.<br />La valeur se réduit.</p>
            </div>

            <div className="vs-col vs-col-good">
              <div className="vs-col-head">Entreprise bien préparée</div>
              {[
                ["Perception claire", "Les acquéreurs comprennent et se projettent."],
                ["Négociation maîtrisée", "Le prix reflète la valeur, pas l'inverse."],
                ["Risques maîtrisés", "Confiance, sécurité, décision facilitée."],
                ["Acquéreurs qualifiés", "Intérêt réel, projets solides, vision long terme."],
                ["Valorisation optimisée", "Le potentiel est reconnu, la valeur augmente."],
              ].map(([n, d]) => (
                <div key={n} className="vs-item">
                  <div className="vs-name"><span className="marker">✓</span> {n}</div>
                  <div className="vs-text">{d}</div>
                </div>
              ))}
              <p className="vs-col-footer">Vendre devient naturel.<br />La valeur se réalise.</p>
            </div>

            <div className="vs-center" aria-hidden="true">vs</div>
          </Reveal>

          <Reveal className="vs-callout">
            <p>La préparation n'est pas une charge. C'est le meilleur investissement avant la cession.</p>
            <p>Préparer aujourd'hui, c'est maximiser demain.</p>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title={
          <>
            Envie d'échanger<br />
            <em>directement avec Bruno&nbsp;?</em>
          </>
        }
        text="Le premier rendez-vous est confidentiel et sans engagement. Nous prenons le temps qu'il faut pour comprendre votre situation."
      />
    </>
  );
}
