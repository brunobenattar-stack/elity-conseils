import Link from "next/link";
import Reveal from "./Reveal";
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
    desc: "Perso et pro, immobilier et exploitation : aucune séparation claire des actifs et des risques.",
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
    desc: "Sans holding ni optimisation fiscale, vous laissez des sommes considérables au fisc chaque année.",
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
    desc: "En cas de difficulté, tout est attaquable. Aucune protection entre vos actifs personnels et professionnels.",
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
    desc: "Sans structure adaptée, la cession ou la transmission de votre entreprise sera coûteuse et complexe.",
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
    desc: "Audit complet de votre situation : structures existantes, fiscalité, patrimoine immobilier, revenus, objectifs à court, moyen et long terme.",
    Icon: IconLoupe,
  },
  {
    num: "02",
    title: "Architecture",
    baseline: "Dessiner le bon schéma.",
    desc: "Conception du schéma de groupe optimal : holding animatrice, SCI patrimoniale, société(s) d'exploitation. Une structure sur mesure.",
    Icon: IconCompass,
  },
  {
    num: "03",
    title: "Rédaction",
    baseline: "Des actes sur mesure.",
    desc: "Rédaction de l'ensemble des statuts et documents constitutifs. Chaque acte est rédigé, vérifié et adapté à votre situation.",
    Icon: IconDocument,
  },
  {
    num: "04",
    title: "Déploiement",
    baseline: "On s'occupe de tout.",
    desc: "Immatriculation, ouverture des comptes bancaires, transfert des actifs, mise en conformité. Nous gérons tout à vos côtés.",
    Icon: IconChart,
  },
  {
    num: "05",
    title: "Activation",
    baseline: "Vous prenez la main.",
    desc: "Votre groupe est opérationnel. Formation au pilotage, rémunération du dirigeant optimisée, flux financiers entre entités définis.",
    Icon: IconTrophy,
  },
] as const;

const FORMULES: OfferCardData[] = [
  {
    id: "structure-essentielle",
    name: "Essentielle",
    pitch: "Holding + 1 société d'exploitation.",
    features: [
      "Audit de situation complet",
      "Conception du schéma holding",
      "Rédaction des statuts de la holding",
      "Immatriculation de la holding",
      "Mise en place des flux financiers",
      "Formation au pilotage du groupe",
      "Accompagnement jusqu'à l'activation",
    ],
    meta: "Durée : 2 à 4 mois",
    details:
      "Une structure simple pour séparer votre patrimoine, optimiser votre fiscalité et protéger vos actifs.",
  },
  {
    id: "structure-premium",
    name: "Premium",
    pitch: "Holding + SCI + plusieurs sociétés.",
    chip: "Recommandée",
    featured: true,
    features: [
      "Audit de situation complet",
      "Conception du schéma de groupe complet",
      "Rédaction des statuts holding + SCI + sociétés",
      "Immatriculation de toutes les entités",
      "Structuration du patrimoine immobilier (SCI)",
      "Optimisation de la rémunération dirigeant",
      "Mise en place des flux inter-sociétés",
      "Formation au pilotage du groupe",
      "Préparation à la cession ou transmission",
      "Accompagnement jusqu'à l'activation complète",
    ],
    meta: "Durée : 4 à 9 mois",
    details:
      "Une structure complète pour un groupe structuré, optimisé et prêt pour la transmission.",
  },
];


export default function StructureSection() {
  return (
    <section className="section structure-section" id="structure">
      <div className="container">
        <Reveal className="section-header center">
          <span className="offer-pill"><span className="offer-pill-num">2</span><span>Elity Structure · Structuration de groupe</span></span>
          <div className="section-sep" style={{ marginInline: "auto" }} />
          <h2 className="section-title">Construire le bon socle.<br /><em>Protéger, optimiser, transmettre.</em></h2>
          <p className="section-body" style={{ marginInline: "auto", textAlign: "center" }}>
            Vous avez une ou plusieurs sociétés, un patrimoine immobilier, des revenus qui pourraient être mieux optimisés.
            Elity Structure conçoit et met en place la structure de groupe adaptée à votre situation, <strong>de A à Z, jusqu&apos;à l&apos;immatriculation</strong>.
          </p>
        </Reveal>

        {/* Constat : même cartes que "Ce qui coûte cher" (accueil) */}
        <Reveal className="structure-subhead">
          <span className="section-label">Vous vous reconnaissez ?</span>
          <h3 className="structure-subtitle">Quatre signes qu&apos;il est temps <em>de structurer</em></h3>
        </Reveal>

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

        {/* Méthode : mêmes cartes que la page Méthode ESSOR */}
        <Reveal className="structure-subhead">
          <span className="section-label">Notre méthode</span>
          <h3 className="structure-subtitle">5 étapes pour <em>structurer votre groupe</em></h3>
        </Reveal>

        <div className="essor-grid structure-steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} className="essor-card" delay={(((i % 2) + 1) * 100) as 100 | 200}>
              <div className="essor-card-inner">
                <div className="essor-card-left">
                  <div className="essor-card-top">
                    <div className="essor-card-icon" aria-hidden="true">
                      <s.Icon />
                    </div>
                    <span className="essor-card-step">Étape {s.num}</span>
                  </div>
                  <h4 className="essor-card-name">{s.title}</h4>
                  <p className="essor-card-baseline">{s.baseline}</p>
                </div>
                <div className="essor-card-right">
                  <p className="essor-card-what">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="structure-subhead">
          <span className="section-label">Engagement</span>
          <h3 className="structure-subtitle">Deux <em>formules</em></h3>
        </Reveal>

        <div className="offers-deck offers-deck-2">
          {FORMULES.map((offer, i) => (
            <Reveal key={offer.id} delay={((i + 1) * 100) as 100 | 200}>
              <OfferCard offer={offer} />
            </Reveal>
          ))}
        </div>

        {/* Parcours : mêmes cartes que "La même rigueur, pour chaque projet" (page Approche) */}
        <Reveal className="structure-subhead">
          <span className="section-label">Le parcours Elity</span>
          <h3 className="structure-subtitle">Structurer, puis <em>piloter.</em></h3>
        </Reveal>

        <div className="approche-dual structure-parcours">
          <Reveal className="approche-dual-card" delay={100}>
            <span className="approche-dual-eyebrow">Étape 1 · Elity Structure</span>
            <h4 className="approche-dual-title">Construire le bon socle</h4>
            <p className="approche-dual-text">Nous concevons et mettons en place votre groupe, de A à Z, jusqu&apos;à l&apos;immatriculation.</p>
            <Link href="/contact" className="approche-row-cta">
              Prendre contact <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <Reveal className="approche-dual-card" delay={200}>
            <span className="approche-dual-eyebrow">Étape 2 · Elity Dirigeant</span>
            <h4 className="approche-dual-title">Piloter dans la durée</h4>
            <p className="approche-dual-text">Nous pilotons votre groupe avec vous, chaque mois, avec la méthode ESSOR.</p>
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
