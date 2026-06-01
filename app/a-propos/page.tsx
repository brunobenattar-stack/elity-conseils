import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CompassVisual from "@/components/CompassVisual";
import CtaStrip from "@/components/CtaStrip";
import { IconCompass, IconTarget, IconDiamond } from "@/components/icons";

export const metadata: Metadata = {
  title: "À Propos : Bruno Benattar, conseil en cession et transmission",
  description:
    "Bruno Benattar, franchisé Procomm depuis 2015 et fondateur d'Elity Conseils à La Réunion. Accompagnement stratégique en cession, acquisition et pilotage de dirigeants de TPE/PME.",
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
                  Chef d'entreprise toute ma vie, j'ai vécu de l'intérieur toutes les problématiques qui vont avec. C'est ce qui me permet de parler le même langage que les dirigeants que j'accompagne. J'aime les écouter, les aider, et les voir réussir.
                </p>
                <p>
                  Après un parcours dans l'immobilier de luxe à l'Ile Maurice, je suis entré dans la transaction d'entreprise en 2013 en aidant mon père à céder son restaurant. J'ai découvert la franchise Procomm, disponible sur les Iles Mascareignes, j'ai suivi la formation d'intégration et signé la franchise le 1er juillet 2015. Ce réseau d'une quinzaine de cabinets en France nous apporte du poids, de la rigueur et une formation continue.
                </p>
                <p>
                  Pendant plus de dix ans, la préparation à la cession était offerte contre une prise de mandat exclusif : chronophage, rémunération incertaine. C'est quand plusieurs vendeurs ont commencé à me demander combien cela leur coûterait que j'ai formalisé cette prestation sous Elity Conseils. L'idée de la développer à plus grande échelle est venue naturellement.
                </p>
              </div>

              <div className="values">
                <Reveal className="value" delay={100}>
                  <IconCompass />
                  <div className="value-name">Écoute</div>
                  <div className="value-desc">Comprendre le projet de vie avant de proposer.</div>
                </Reveal>
                <Reveal className="value" delay={200}>
                  <IconTarget />
                  <div className="value-name">Intégrité</div>
                  <div className="value-desc">Jamais de surévaluation, jamais de mensonge.</div>
                </Reveal>
                <Reveal className="value" delay={300}>
                  <IconDiamond />
                  <div className="value-name">Persévérance</div>
                  <div className="value-desc">Tenir le cap quand les autres abandonnent.</div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Ma mission au quotidien</span>
            <div className="section-sep" />
            <h2 className="section-title">Analyser, accompagner,<br /><em>répondre à vos enjeux.</em></h2>
            <p className="section-body" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
              J'analyse le projet du dirigeant, je lui propose de l'accompagner pour répondre à ses enjeux et objectifs. Ce que je fais, et que les autres ne font pas aussi bien : écouter le projet de vie, produire une synthèse et un premier signal de valeur, puis comprendre, structurer, sécuriser, valoriser — et commercialiser avec Procomm Océan Indien.
            </p>
            <p className="section-body" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
              Ce qu'un dirigeant retient de notre collaboration : professionnalisme, efficacité, empathie. Et surtout : <em>j'ai pris le temps d'écouter.</em>
            </p>
          </Reveal>

          <Reveal className="apropos-avantages">
            {[
              ["Connaissance du marché", "Une lecture fine des transactions récentes à La Réunion et dans l'Océan Indien."],
              ["Leads qualifiés", "Une base d'acquéreurs potentiels constituée sur plus de dix ans de transactions."],
              ["Expertise de valorisation", "Une méthode calée sur la capacité de remboursement réelle, comme un banquier."],
            ].map(([titre, desc]) => (
              <div key={titre} className="apropos-avantage">
                <div className="apropos-avantage-titre">{titre}</div>
                <div className="apropos-avantage-desc">{desc}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Une mission marquante</span>
            <div className="section-sep" />
            <h2 className="section-title">Parfois, tenir bon<br /><em>change tout.</em></h2>
            <p className="section-body" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
              En 2017, j'ai accompagné deux associés en conflit depuis dix ans pour céder leur résidence hôtelière. La transaction a duré 18 mois. Même le notaire me disait que je perdais mon temps, que l'un des deux associés ne signerait jamais. J'ai finalisé la cession à 5 M€. Et au-delà du prix, j'ai permis un soulagement entre deux hommes que leur propre affaire avait éloignés.
            </p>
            <p className="section-body" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center", fontStyle: "italic" }}>
              C'est pourquoi je fais ce travail.
            </p>
          </Reveal>
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
