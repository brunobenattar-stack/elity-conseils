import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaFinal from "@/components/CtaFinal";
import { IconCompass, IconTarget, IconDiamond } from "@/components/icons";
import { getAbout } from "@/sanity/queries";

const ABOUT_FALLBACK = {
  label: "À propos · le parcours",
  name: "Bruno Benattar,",
  nameEm: "chef d'entreprise devenu conseil.",
  role: "Franchisé Procomm depuis 2015, à La Réunion.",
  paragraphs: [
    "Chef d'entreprise toute ma vie, j'ai vécu de l'intérieur toutes les problématiques qui vont avec. C'est ce qui me permet de parler le même langage que les dirigeants que j'accompagne. J'aime les écouter, les aider, et les voir réussir.",
    "Après un parcours dans l'immobilier de luxe à l'Ile Maurice, je suis entré dans la transaction d'entreprise en 2013 en aidant mon père à céder son restaurant. J'ai découvert la franchise Procomm, disponible sur les Iles Mascareignes, j'ai suivi la formation d'intégration et signé la franchise le 1er juillet 2015. Ce réseau d'une quinzaine de cabinets en France nous apporte du poids, de la rigueur et une formation continue.",
    "Compte tenu des difficultés à faire financer les reprises de société, nous avons mis en place le service d'accompagnement à la cession en amont de la mise en vente, pour optimiser les chances de cession. Formaliser cette préparation sous Elity Conseils est devenu une évidence : une entreprise bien préparée se vend mieux, plus vite, et dans de meilleures conditions.",
  ],
  values: [
    { name: "Écoute", desc: "Comprendre le projet de vie avant de proposer." },
    { name: "Intégrité", desc: "Jamais de surévaluation, jamais de mensonge." },
    { name: "Persévérance", desc: "Tenir le cap quand les autres abandonnent." },
  ],
};

const VALUE_ICONS = [IconCompass, IconTarget, IconDiamond];

export const metadata: Metadata = {
  title: "À Propos : Bruno Benattar, conseil en cession et transmission",
  description:
    "Bruno Benattar, franchisé Procomm depuis 2015 et fondateur d'Elity Conseils à La Réunion. Accompagnement stratégique en cession, acquisition et accompagnement de dirigeant(e)s de TPE/PME.",
};

export default async function AProposPage() {
  const sanityAbout = await getAbout();
  const a = {
    label: sanityAbout?.label?.trim() || ABOUT_FALLBACK.label,
    name: sanityAbout?.name?.trim() || ABOUT_FALLBACK.name,
    nameEm: sanityAbout?.nameEm?.trim() || ABOUT_FALLBACK.nameEm,
    role: sanityAbout?.role?.trim() || ABOUT_FALLBACK.role,
    paragraphs:
      sanityAbout?.paragraphs && sanityAbout.paragraphs.length > 0
        ? sanityAbout.paragraphs
        : ABOUT_FALLBACK.paragraphs,
    values:
      sanityAbout?.values && sanityAbout.values.length > 0
        ? sanityAbout.values
        : ABOUT_FALLBACK.values,
  };

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
              <span className="section-label">{a.label}</span>
              <div className="section-sep" />
              <h2 className="apropos-name">{a.name}<br /><em>{a.nameEm}</em></h2>
              <p className="apropos-role">{a.role}</p>

              <div className="apropos-body">
                {a.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="values">
                {a.values.map((v, i) => {
                  const Icon = VALUE_ICONS[i] ?? IconCompass;
                  return (
                    <Reveal className="value" delay={((i + 1) * 100) as 100 | 200 | 300} key={i}>
                      <Icon />
                      <div className="value-name">{v.name}</div>
                      <div className="value-desc">{v.desc}</div>
                    </Reveal>
                  );
                })}
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
