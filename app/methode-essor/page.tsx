import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaStrip from "@/components/CtaStrip";
import { IconLoupe, IconHandshake, IconChart, IconTrophy } from "@/components/icons";

export const metadata: Metadata = {
  title: "Méthode ESSOR : Le cadre de pilotage Elity Dirigeant",
  description:
    "ESSOR : une méthode en 4 étapes (Constate, Consolide, Maîtrise, Réalise) pour piloter sereinement une TPE/PME. Audit stratégique, optimisation, indicateurs, projets concrets.",
};

type Step = {
  num: string;
  name: string;
  baseline: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  what: string;
  deliverables: string[];
  shift: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    name: "Constate",
    baseline: "Voir clair avant d'agir.",
    Icon: IconLoupe,
    what:
      "Un audit complet : financier, organisationnel, commercial, humain. L'objectif n'est pas de juger, mais de cartographier ce qui fonctionne, ce qui freine, et le potentiel inexploité que vous ne voyez plus parce que vous y êtes immergé.",
    deliverables: [
      "Diagnostic global de l'entreprise (forces, faiblesses, opportunités).",
      "Cartographie des indicateurs clés réellement pilotables.",
      "Identification des dépendances critiques (clients, savoir-faire, dirigeant).",
      "Restitution écrite et discussion approfondie.",
    ],
    shift:
      "Vous repartez avec une lecture neuve de votre entreprise. Pas une critique : une photographie honnête sur laquelle bâtir.",
  },
  {
    num: "02",
    name: "Consolide",
    baseline: "Renforcer la base avant d'accélérer.",
    Icon: IconHandshake,
    what:
      "Consolider, c'est optimiser ce qui marche déjà et corriger ce qui freine, avant de chercher à grandir. La plupart des dirigeants veulent accélérer alors que leurs fondations méritent d'abord d'être stabilisées. Cette étape évite des mois de croissance brouillonne.",
    deliverables: [
      "Optimisation des process opérationnels essentiels.",
      "Renforcement de la structure financière (BFR, marges, trésorerie).",
      "Clarification de l'organisation et des responsabilités.",
      "Plan d'action mensuel sur les chantiers prioritaires.",
    ],
    shift:
      "L'entreprise gagne en lisibilité, en marge et en sérénité opérationnelle. Le dirigeant cesse d'éteindre des feux.",
  },
  {
    num: "03",
    name: "Maîtrise",
    baseline: "Piloter aux indicateurs, plus à l'instinct.",
    Icon: IconChart,
    what:
      "À ce stade, on installe le tableau de bord du dirigeant. Pas un outil de comptable : un cockpit mensuel qui rend visible ce qui crée vraiment de la valeur. Vous reprenez la main sur les décisions parce que les chiffres parlent.",
    deliverables: [
      "Construction du tableau de bord stratégique mensuel.",
      "Rituel de pilotage mensuel structuré avec rapport d'activité.",
      "Anticipation des décisions clés à 3, 6 et 12 mois.",
      "Cadre d'arbitrage face aux opportunités et aux risques.",
    ],
    shift:
      "Vous décidez sur des faits, plus sur des intuitions. Les choix difficiles deviennent plus simples parce qu'ils sont préparés.",
  },
  {
    num: "04",
    name: "Réalise",
    baseline: "Concrétiser les projets qui comptent.",
    Icon: IconTrophy,
    what:
      "L'étape où l'on transforme la maîtrise en résultat. Croissance, recrutement stratégique, ouverture d'un nouveau marché, valorisation en vue d'une cession : ce qui semblait flou hier devient un projet exécutable, jalonné, sécurisé.",
    deliverables: [
      "Pilotage des projets stratégiques (croissance, recrutement, M&A).",
      "Préparation à la valorisation et à la cession le cas échéant.",
      "Bilan annuel ou semestriel approfondi.",
      "Continuité d'accompagnement entre les séances mensuelles.",
    ],
    shift:
      "Vous ne dirigez plus dans la réaction. Vous avancez vers un cap que vous avez choisi, et que vous tenez.",
  },
];

export default function MethodeEssorPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Méthode ESSOR" }]}
        title={
          <>
            ESSOR.<br />
            <em>Le cadre de pilotage du dirigeant.</em>
          </>
        }
        subtitle="Une méthode en quatre étapes pour passer de la réaction quotidienne au pilotage maîtrisé. ESSOR structure l'accompagnement Elity Dirigeant et donne aux décideurs de TPE/PME ce qui leur manque le plus : du recul, du cadre, et une trajectoire claire."
        meta="4 étapes · 1 méthode"
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Pourquoi ESSOR</span>
            <div className="section-sep" />
            <h2 className="section-title">Diriger une TPE/PME,<br />ce n&apos;est pas suivre un manuel.</h2>
            <p className="section-body" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
              C&apos;est arbitrer en permanence avec des informations incomplètes, sous pression du quotidien. ESSOR n&apos;impose pas un modèle. C&apos;est un fil conducteur qui s&apos;adapte à votre entreprise et qui transforme l&apos;arbitrage subi en pilotage choisi.
            </p>
          </Reveal>

          <div className="essor-grid">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} className="essor-card" delay={(((i % 2) + 1) * 100) as 100 | 200}>
                <div className="essor-card-head">
                  <span className="essor-card-num">{s.num}</span>
                  <div className="essor-card-icon" aria-hidden="true">
                    <s.Icon />
                  </div>
                </div>
                <h3 className="essor-card-name">{s.name}</h3>
                <p className="essor-card-baseline">{s.baseline}</p>
                <p className="essor-card-what">{s.what}</p>

                <div className="essor-card-deliv">
                  <span className="essor-card-deliv-label">Ce qu&apos;on construit ensemble</span>
                  <ul>
                    {s.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>

                <div className="essor-card-shift">
                  <span className="essor-card-shift-label">Ce que ça change</span>
                  <p>{s.shift}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="essor-compare">
            <Reveal className="essor-compare-head">
              <span className="section-label">Ce que ESSOR n&apos;est pas</span>
              <div className="section-sep" />
              <h2 className="section-title">Une méthode de partenaire,<br />pas une posture d&apos;expert.</h2>
            </Reveal>

            <div className="essor-compare-grid">
              <Reveal className="essor-vs essor-vs-not" delay={100}>
                <div className="essor-vs-head">Ce n&apos;est pas</div>
                <ul>
                  <li>Du coaching personnel ou du développement individuel.</li>
                  <li>Un audit ponctuel suivi d&apos;un rapport sans suite.</li>
                  <li>Un cabinet de conseil qui vend des slides.</li>
                  <li>Un service que votre expert-comptable rend déjà.</li>
                </ul>
              </Reveal>

              <Reveal className="essor-vs essor-vs-is" delay={200}>
                <div className="essor-vs-head">C&apos;est</div>
                <ul>
                  <li>Un partenaire mensuel qui pilote avec vous, dans la durée.</li>
                  <li>Un cadre structuré qui produit du livrable à chaque séance.</li>
                  <li>Un regard extérieur engagé sur les décisions concrètes.</li>
                  <li>Le chaînon manquant entre comptabilité, stratégie et exécution.</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="essor-fit">
            <span className="section-label">Pour qui</span>
            <div className="section-sep" />
            <h2 className="section-title">ESSOR fonctionne quand…</h2>
            <div className="essor-fit-grid">
              <div className="essor-fit-block">
                <h4>Vous reconnaissez l&apos;une de ces situations</h4>
                <ul>
                  <li>Vous dirigez seul une TPE/PME et vous manquez de partenaire stratégique.</li>
                  <li>Vous êtes dans l&apos;opérationnel et vous perdez le recul.</li>
                  <li>Vous traversez un plateau de stagnation que vous ne savez pas comment franchir.</li>
                  <li>Vous préparez une cession à 18-36 mois et vous voulez maximiser la valeur.</li>
                </ul>
              </div>
              <div className="essor-fit-block essor-fit-block-not">
                <h4>ESSOR n&apos;est pas pour vous si…</h4>
                <ul>
                  <li>Vous cherchez une solution miracle en quelques semaines.</li>
                  <li>Vous voulez déléguer entièrement le pilotage à un tiers.</li>
                  <li>Vous n&apos;êtes pas prêt à investir 3-4 heures de réflexion par mois.</li>
                  <li>Vous attendez d&apos;un consultant qu&apos;il prenne les décisions à votre place.</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal>
            <p className="pull-quote">
              Une bonne décision ne tombe pas du ciel.<br />
              <em>Elle se prépare, elle se pilote.</em>
            </p>
          </Reveal>
          <Reveal>
            <div className="essor-cta-bridge">
              <Link href="/offres#pilotage" className="btn btn-ghost">
                Voir les formules de pilotage mensuel
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title={
          <>
            Envie de découvrir<br />
            <em>la méthode appliquée à votre cas&nbsp;?</em>
          </>
        }
        text="Premier échange confidentiel de 45 min à 1 h, sans engagement. Nous regardons ensemble si ESSOR correspond à votre rythme et à vos enjeux."
      />
    </>
  );
}
