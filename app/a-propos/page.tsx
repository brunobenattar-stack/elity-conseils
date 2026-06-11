import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaFinal from "@/components/CtaFinal";
import { IconCompass, IconTarget, IconDiamond } from "@/components/icons";

export const metadata: Metadata = {
  title: "À Propos : Bruno Benattar, conseil en cession et transmission",
  description:
    "Bruno Benattar, franchisé Procomm depuis 2015 et fondateur d'Elity Conseils à La Réunion. Accompagnement stratégique en cession, acquisition et accompagnement de dirigeant(e)s de TPE/PME.",
};

export default function AProposPage() {
  return (
    <>
      <section className="section section-first">
        <div className="container">
          <div className="apropos-split">
            <div
              className="apropos-photo"
              style={{ backgroundImage: "url(/bruno-portrait.jpg)" }}
              role="img"
              aria-label="Bruno Benattar"
            />

            <Reveal className="apropos-content" delay={200}>
              <span className="section-label">À propos · le parcours</span>
              <div className="section-sep" />
              <h2 className="apropos-name">Bruno Benattar,<br /><em>chef d&apos;entreprise devenu conseil.</em></h2>
              <p className="apropos-role">Franchisé Procomm depuis 2015, à La Réunion.</p>

              <div className="apropos-body">
                <p>
                  Chef d&apos;entreprise toute ma vie, j&apos;ai vécu de l&apos;intérieur toutes les problématiques qui vont avec. C&apos;est ce qui me permet de parler le même langage que les dirigeants que j&apos;accompagne. J&apos;aime les écouter, les aider, et les voir réussir.
                </p>
                <p>
                  Après un parcours dans l&apos;immobilier de luxe à l&apos;Ile Maurice, je suis entré dans la transaction d&apos;entreprise en 2013 en aidant mon père à céder son restaurant. J&apos;ai découvert la franchise Procomm, disponible sur les Iles Mascareignes, j&apos;ai suivi la formation d&apos;intégration et signé la franchise le 1er juillet 2015. Ce réseau d&apos;une quinzaine de cabinets en France nous apporte du poids, de la rigueur et une formation continue.
                </p>
                <p>
                  Pendant plus de dix ans, la préparation à la cession était offerte contre une prise de mandat exclusif : chronophage, rémunération incertaine. C&apos;est quand plusieurs vendeurs ont commencé à me demander combien cela leur coûterait que j&apos;ai formalisé cette prestation sous Elity Conseils. L&apos;idée de la développer à plus grande échelle est venue naturellement.
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

      <section
        className="section section-photo apropos-mission"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,8,8,0.74), rgba(8,8,8,0.82)), url(/mission-bg.jpg)",
        }}
      >
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Ma mission au quotidien</span>
            <div className="section-sep" style={{ marginInline: "auto" }} />
            <h2 className="section-title">Analyser, accompagner,<br /><em>répondre à vos enjeux.</em></h2>
            <p className="section-body" style={{ marginInline: "auto", textAlign: "center" }}>
              J&apos;écoute le projet de vie du dirigeant, je structure, je sécurise, je valorise. Et surtout : <em>je prends le temps d&apos;écouter.</em>
            </p>
          </Reveal>

          <div className="apropos-mission-grid">
            <Reveal className="apropos-mission-item" delay={100}>
              <span className="apropos-mission-icon" aria-hidden="true"><IconCompass /></span>
              <h3>Connaissance du marché</h3>
              <p>Une lecture fine des transactions récentes de l&apos;Océan Indien.</p>
            </Reveal>
            <Reveal className="apropos-mission-item" delay={200}>
              <span className="apropos-mission-icon" aria-hidden="true"><IconTarget /></span>
              <h3>Leads qualifiés</h3>
              <p>Une base d&apos;acquéreurs bâtie sur plus de dix ans de transactions.</p>
            </Reveal>
            <Reveal className="apropos-mission-item" delay={300}>
              <span className="apropos-mission-icon" aria-hidden="true"><IconDiamond /></span>
              <h3>Valorisation juste</h3>
              <p>Calée sur la capacité de remboursement réelle, comme un banquier.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Pourquoi se faire accompagner</span>
            <div className="section-sep" style={{ marginInline: "auto" }} />
            <h2 className="section-title">Ce que vous voyez<br /><em>n&apos;est pas ce que voit un acquéreur.</em></h2>
            <p className="section-body" style={{ marginInline: "auto", textAlign: "center" }}>
              La perception crée la valeur. Nous construisons celle qu&apos;un bon acquéreur doit avoir de votre entreprise.
            </p>
          </Reveal>

          <div className="diff-deck">
            <Reveal className="diff-card diff-card-bad" delay={100}>
              <span className="diff-card-tag">
                <span className="diff-card-tag-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /></svg>
                </span>
                Mal préparée
              </span>
              <ul>
                <li>Perception floue de la valeur</li>
                <li>Négociation subie, prix tiré vers le bas</li>
                <li>Risques perçus élevés</li>
                <li>Acquéreurs opportunistes</li>
              </ul>
              <p className="diff-card-foot">Vendre devient difficile.</p>
            </Reveal>
            <Reveal className="diff-card diff-card-good" delay={200}>
              <span className="diff-card-tag">
                <span className="diff-card-tag-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                Bien préparée
              </span>
              <ul>
                <li>Perception claire, acquéreurs qui se projettent</li>
                <li>Négociation maîtrisée, prix qui reflète la valeur</li>
                <li>Risques maîtrisés, décision facilitée</li>
                <li>Acquéreurs qualifiés, vision long terme</li>
              </ul>
              <p className="diff-card-foot">Vendre devient naturel.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaFinal
        title={
          <>
            Envie d&apos;échanger<br /><em>avec Bruno ?</em>
          </>
        }
        text="Le premier rendez-vous est confidentiel et sans engagement. On prend le temps de comprendre votre situation."
        secondaryLabel="Voir nos offres"
        secondaryHref="/offres"
      />
    </>
  );
}
