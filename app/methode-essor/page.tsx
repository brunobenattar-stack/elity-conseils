import Link from "next/link";
import type { Metadata } from "next";
import PageLead from "@/components/PageLead";
import Reveal from "@/components/Reveal";
import CtaFinal from "@/components/CtaFinal";
import VideoParallaxBg from "@/components/VideoParallaxBg";
import { IconLoupe, IconHandshake, IconChart, IconTrophy } from "@/components/icons";
import { getEssor } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Méthode ESSOR : accompagnement de dirigeant(e) de TPE/PME à La Réunion",
  description:
    "ESSOR : une méthode en 4 étapes (Constate, Consolide, Maîtrise, Réalise) pour vous accompagner à piloter sereinement votre TPE/PME. Audit stratégique, optimisation, indicateurs, projets concrets.",
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
    name: "Constater",
    baseline: "Voir clair avant d'agir.",
    Icon: IconLoupe,
    what:
      "Un audit complet de l'entreprise : forces, faiblesses et potentiel. On cartographie ce qui fonctionne, ce qui freine, et ce que vous ne voyez plus.",
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
    name: "Consolider",
    baseline: "Renforcer la base avant d'accélérer.",
    Icon: IconHandshake,
    what:
      "On optimise ce qui marche déjà et on corrige ce qui freine, avant de chercher à grandir. Stabiliser les fondations évite des mois de croissance brouillonne.",
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
    name: "Maîtriser",
    baseline: "Décider aux indicateurs, plus à l'instinct.",
    Icon: IconChart,
    what:
      "On installe le tableau de bord du dirigeant : des chiffres clairs, des décisions éclairées, un cap tenu mois après mois. Vous reprenez la main.",
    deliverables: [
      "Construction du tableau de bord stratégique mensuel.",
      "Rituel mensuel structuré avec rapport d'activité.",
      "Anticipation des décisions clés à 3, 6 et 12 mois.",
      "Cadre d'arbitrage face aux opportunités et aux risques.",
    ],
    shift:
      "Vous décidez sur des faits, plus sur des intuitions. Les choix difficiles deviennent plus simples parce qu'ils sont préparés.",
  },
  {
    num: "04",
    name: "Réaliser",
    baseline: "Concrétiser les projets qui comptent.",
    Icon: IconTrophy,
    what:
      "On transforme la maîtrise en résultat : croissance, recrutements, valorisation de l'actif ou mise en vente. Ce qui semblait flou devient un projet exécutable.",
    deliverables: [
      "Conduite des projets stratégiques (croissance, recrutement, M&A).",
      "Préparation à la valorisation et à la cession le cas échéant.",
      "Bilan annuel ou semestriel approfondi.",
      "Continuité d'accompagnement entre les séances mensuelles.",
    ],
    shift:
      "Vous ne dirigez plus dans la réaction. Vous avancez vers un cap que vous avez choisi, et que vous tenez.",
  },
];

export default async function MethodeEssorPage() {
  const e = await getEssor();
  const t = (v: string | undefined, d: string) => (v && v.trim() ? v.trim() : d);
  const intro = t(e?.intro, "De l'état des lieux à la performance, en 12 ou 24 mois. Quatre étapes pour décider les yeux ouverts.");

  const steps = e?.steps && e.steps.length > 0
    ? e.steps.map((s, i) => ({
        num: STEPS[i % STEPS.length].num,
        Icon: STEPS[i % STEPS.length].Icon,
        name: t(s.name, STEPS[i % STEPS.length].name),
        baseline: t(s.baseline, STEPS[i % STEPS.length].baseline),
        what: t(s.what, STEPS[i % STEPS.length].what),
        deliverables: s.deliverables && s.deliverables.length ? s.deliverables : STEPS[i % STEPS.length].deliverables,
        shift: t(s.shift, STEPS[i % STEPS.length].shift),
      }))
    : STEPS;

  const fitYes = e?.fitYes && e.fitYes.length ? e.fitYes : ["Vous êtes dans l'opérationnel et perdez le recul", "Vous traversez une période où votre entreprise stagne", "Vous préparez une cession à 18-36 mois", "Vous venez de racheter et voulez structurer"];
  const fitNo = e?.fitNo && e.fitNo.length ? e.fitNo : ["Vous cherchez une solution miracle en quelques semaines", "Vous voulez tout déléguer à un tiers", "Vous n'êtes pas prêt(e) à investir 3-4h par mois", "Vous attendez qu'on décide à votre place"];
  const origineSteps = e?.origineSteps && e.origineSteps.length ? e.origineSteps : [
    { title: "Le terrain", text: "Adaptée de l'expérience de Bruno comme chef d'entreprise, au plus près des vraies contraintes." },
    { title: "La rigueur", text: "Affinée avec Thierry Le Lidec, son associé de formation comptable, pour ancrer chaque décision dans les chiffres." },
    { title: "Depuis 2021", text: "Appliquée à l'accompagnement des TPE/PME, avant une vente ou après un rachat." },
  ];
  const origineIcons = [IconLoupe, IconChart, IconTrophy];

  return (
    <>
      <section className="section section-cream section-first">
        <div className="container">
          <PageLead
            label="Méthode ESSOR"
            title={
              <>
                Méthode <em>ESSOR.</em>
              </>
            }
            text={intro}
          />

          <div className="essor-grid">
            {steps.map((s, i) => (
              <Reveal key={s.num} className="essor-card" delay={(((i % 2) + 1) * 100) as 100 | 200}>
                <div className="essor-card-inner">
                  <div className="essor-card-left">
                    <div className="essor-card-top">
                      <div className="essor-card-icon" aria-hidden="true">
                        <s.Icon />
                      </div>
                    </div>
                    <h3 className="essor-card-name">{s.name}</h3>
                    <p className="essor-card-baseline">{s.baseline}</p>
                  </div>
                  <div className="essor-card-right">
                    <p className="essor-card-what">{s.what}</p>
                    <ul className="essor-card-deliv-list">
                      {s.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                    <p className="essor-card-shift-text">{s.shift}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">{t(e?.fitLabel, "Pour qui")}</span>
            <div className="section-sep" style={{ marginInline: "auto" }} />
            <h2 className="section-title">{t(e?.fitTitle1, "À qui la méthode ESSOR")}<br /><em>{t(e?.fitTitle2, "convient vraiment.")}</em></h2>
          </Reveal>
          <div className="essor-fit-layout essor-fit-layout-2col">
            <div className="essor-fit-cols">
              <Reveal className="essor-fit-card essor-fit-card-yes" delay={100}>
                <span className="essor-fit-card-head">
                  <span className="essor-fit-card-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {t(e?.fitYesTitle, "C'est pour vous si…")}
                </span>
                <ul>
                  {fitYes.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </Reveal>

              <Reveal className="essor-fit-card essor-fit-card-no" delay={200}>
                <span className="essor-fit-card-head">
                  <span className="essor-fit-card-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /></svg>
                  </span>
                  {t(e?.fitNoTitle, "Ce n'est pas pour vous si…")}
                </span>
                <ul>
                  {fitNo.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-photo origine-section">
        <VideoParallaxBg />
        <div className="container">
          <div className="origine-layout">
            <Reveal className="origine-intro">
              <span className="section-label">{t(e?.origineLabel, "Origine de la méthode")}</span>
              <div className="section-sep" />
              <h2 className="section-title">{t(e?.origineTitle1, "Née du terrain,")}<br /><em>{t(e?.origineTitle2, "pas d'un livre.")}</em></h2>
              <p className="origine-lead">
                {t(e?.origineLead, "ESSOR n'est pas sortie d'un manuel. Elle s'est forgée sur le terrain, affinée année après année, au contact réel des dirigeants et de leurs décisions.")}
              </p>
              <Link href="/contact" className="btn btn-ghost">
                Échanger sur votre situation <span aria-hidden="true">→</span>
              </Link>
            </Reveal>

            <div className="origine-steps">
              {origineSteps.map((o, i) => {
                const Ico = origineIcons[i % origineIcons.length];
                return (
                  <Reveal className="origine-step" delay={(((i % 3) + 1) * 100) as 100 | 200 | 300} key={i}>
                    <span className="origine-step-ico" aria-hidden="true"><Ico /></span>
                    <div>
                      <h3>{o.title}</h3>
                      <p>{o.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section essor-decision-section">
        <div className="container">
          <Reveal className="essor-decision">
            <span className="essor-decision-eyebrow">{t(e?.convictionEyebrow, "La conviction Elity")}</span>
            <p className="essor-decision-quote">
              {t(e?.convictionQuote, "Une bonne décision ne tombe pas du ciel.")}
            </p>
            <p className="essor-decision-sub">
              <em>{t(e?.convictionSub, "Elle se prépare, elle se construit, mois après mois.")}</em>
            </p>
            <Link href="/offres#pilotage" className="btn btn-ghost">
              Voir les formules d&apos;accompagnement mensuel
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaFinal
        title={
          <>
            {t(e?.ctaTitle1, "ESSOR appliqué")} <em>{t(e?.ctaTitle2, "à votre entreprise ?")}</em>
          </>
        }
        text={t(e?.ctaText, "Premier échange confidentiel, sans engagement. On regarde ensemble si la méthode vous correspond.")}
        secondaryLabel="Voir les formules"
        secondaryHref="/offres#pilotage"
      />
    </>
  );
}
