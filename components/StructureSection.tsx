import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import StructureSteps from "./StructureSteps";
import OfferCard, { type OfferCardData } from "./OfferCard";
import { IconLoupe, IconCompass, IconDocument, IconChart, IconTrophy } from "./icons";

// Offre "Elity Structure" : structuration de groupe (holding, SCI, sociétés d'exploitation).
// Contenu repris de la plaquette PDF fournie par Bruno (septembre 2026).

// Cartes reprises du bloc "Ce qui coûte cher" de l'accueil (problem-card ivoire / doré en alternance).
const PAINS = [
  {
    eyebrow: "Organisation",
    variant: "ivory",
    title: "Tout est mélangé",
    desc: "Perso, pro et immobilier : rien n'est séparé.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <circle cx="24" cy="32" r="14" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="40" cy="32" r="14" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    eyebrow: "Fiscalité",
    variant: "dark",
    title: "Vous payez trop d'impôts",
    desc: "Sans holding, une part de vos bénéfices part au fisc.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M14 20l12 12 8-8 16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 40h8v-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 50h40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    eyebrow: "Protection",
    variant: "ivory",
    title: "Votre patrimoine est exposé",
    desc: "En cas de coup dur, vos biens personnels sont exposés.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M32 10l18 7v13c0 12-8 20-18 24-10-4-18-12-18-24V17l18-7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M24 26l16 16M40 26L24 42" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    eyebrow: "Transmission",
    variant: "dark",
    title: "Votre transmission n'est pas prête",
    desc: "Vendre ou transmettre vous coûtera plus cher.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <rect x="14" y="22" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M24 22v-6h16v6" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M32 30v8M32 42v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    num: "01",
    title: "Diagnostic",
    baseline: "Comprendre votre situation.",
    desc: "Nous analysons vos sociétés, votre patrimoine et vos objectifs.",
    Icon: IconLoupe,
  },
  {
    num: "02",
    title: "Architecture",
    baseline: "Dessiner le bon schéma.",
    desc: "Nous dessinons le bon schéma : holding, SCI, sociétés.",
    Icon: IconCompass,
  },
  {
    num: "03",
    title: "Rédaction",
    baseline: "Des actes sur mesure.",
    desc: "Tous les statuts et actes, rédigés sur mesure.",
    Icon: IconDocument,
  },
  {
    num: "04",
    title: "Déploiement",
    baseline: "On s'occupe de tout.",
    desc: "Immatriculation, banques, transfert des actifs : on gère tout.",
    Icon: IconChart,
  },
  {
    num: "05",
    title: "Activation",
    baseline: "Vous prenez la main.",
    desc: "Votre groupe tourne. Nous vous apprenons à le piloter.",
    Icon: IconTrophy,
  },
] as const;

const FORMULES: OfferCardData[] = [
  {
    id: "structure-essentielle",
    name: "Essentielle",
    pitch: "Holding + 1 société d'exploitation.",
    features: [
      "Audit et schéma de la holding",
      "Statuts et immatriculation",
      "Flux financiers mis en place",
      "Formation au pilotage",
      "Suivi jusqu'à l'activation",
    ],
    meta: "Durée : 2 à 4 mois",
    details:
      "Séparer, optimiser, protéger : l'essentiel.",
  },
  {
    id: "structure-premium",
    name: "Premium",
    pitch: "Holding + SCI + plusieurs sociétés.",
    chip: "Recommandée",
    featured: true,
    features: [
      "Tout le contenu Essentielle",
      "Holding, SCI et sociétés créées",
      "Immobilier logé dans une SCI",
      "Rémunération du dirigeant optimisée",
      "Flux entre sociétés organisés",
      "Préparation à la cession",
    ],
    meta: "Durée : 4 à 9 mois",
    details:
      "Un groupe complet, prêt à être transmis.",
  },
];

// En-tête de sous-partie : libellé dans une petite pastille dorée, titre centré dessous.
function SubHead({ label, title }: { label: string; title: ReactNode }) {
  return (
    <Reveal className="structure-head">
      <span className="structure-head-label">{label}</span>
      <h3 className="structure-head-title">{title}</h3>
    </Reveal>
  );
}

export default function StructureSection() {
  return (
    <section className="section structure-section" id="structure">
      <div className="container">
        <Reveal className="section-header center">
          <span className="offer-pill"><span className="offer-pill-num">2</span><span>Elity Structure · Structuration de groupe</span></span>
          <div className="section-sep" style={{ marginInline: "auto" }} />
          <h2 className="section-title">Construire le bon socle.<br /><em>Protéger, optimiser, transmettre.</em></h2>
          <p className="section-body" style={{ marginInline: "auto", textAlign: "center" }}>
            Holding, SCI, sociétés : nous créons la structure de votre groupe, <strong>de A à Z</strong>.
          </p>
        </Reveal>

        {/* Constat : même cartes que "Ce qui coûte cher" (accueil) */}
        <SubHead label="Vous vous reconnaissez ?" title={<>Quatre signes qu&apos;il est temps <em>de structurer.</em></>} />

        <div className="problem-cards-scroller structure-pains">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} className={`problem-card problem-card-${p.variant}`} delay={(i * 100) as 0 | 100 | 200 | 300}>
              <div className="problem-card-deco" aria-hidden="true">{p.icon}</div>
              <div className="problem-card-body">
                <span className="problem-eyebrow">{p.eyebrow}</span>
                <h4 className="problem-titre">{p.title}</h4>
                <p className="problem-desc">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Méthode : ronds sur une frise, défilement horizontal */}
        <SubHead label="Notre méthode" title={<>5 étapes pour <em>structurer votre groupe.</em></>} />

        <Reveal>
          <StructureSteps
            label="Les 5 étapes Elity Structure"
            steps={STEPS.map(({ Icon, ...s }) => ({ ...s, icon: <Icon /> }))}
          />
        </Reveal>

        <SubHead label="Engagement" title={<>Deux <em>formules.</em></>} />

        <div className="offers-deck offers-deck-2">
          {FORMULES.map((offer, i) => (
            <Reveal key={offer.id} delay={((i + 1) * 100) as 100 | 200}>
              <OfferCard offer={offer} />
            </Reveal>
          ))}
        </div>

        {/* Parcours : mêmes cartes que "La même rigueur, pour chaque projet" (page Approche) */}
        <SubHead label="Le parcours Elity" title={<>Structurer, puis <em>piloter.</em></>} />

        <div className="approche-dual structure-parcours">
          <Reveal className="approche-dual-card" delay={100}>
            <span className="structure-parcours-num" aria-hidden="true">1</span>
            <span className="approche-dual-eyebrow">Étape 1 · Elity Structure</span>
            <h4 className="approche-dual-title">Construire le bon socle</h4>
            <p className="approche-dual-text">Nous créons votre groupe, de A à Z.</p>
            <Link href="/contact" className="approche-row-cta">
              Prendre contact <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <Reveal className="approche-dual-card" delay={200}>
            <span className="structure-parcours-num" aria-hidden="true">2</span>
            <span className="approche-dual-eyebrow">Étape 2 · Elity Dirigeant</span>
            <h4 className="approche-dual-title">Piloter dans la durée</h4>
            <p className="approche-dual-text">Nous le pilotons avec vous, chaque mois.</p>
            <Link href="#pilotage" className="approche-row-cta">
              Voir l&apos;accompagnement <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        <Reveal className="essor-decision structure-decision">
          <p className="essor-decision-quote">
            La bonne structure protège aujourd&apos;hui <em>et valorise demain.</em>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
