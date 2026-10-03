import Link from "next/link";
import Reveal from "./Reveal";
import OfferCard, { type OfferCardData } from "./OfferCard";
import { IconLoupe, IconCompass, IconDocument, IconChart, IconTrophy } from "./icons";

// Offre "Elity Structure" : structuration de groupe (holding, SCI, sociétés d'exploitation).
// Contenu repris de la plaquette PDF fournie par Bruno (septembre 2026).

const PAINS = [
  {
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
    title: "Vous sur-payez l'impôt",
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
    title: "Transmission non préparée",
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
    desc: "Audit complet de votre situation : structures existantes, fiscalité, patrimoine immobilier, revenus, objectifs à court, moyen et long terme.",
    Icon: IconLoupe,
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Conception du schéma de groupe optimal : holding animatrice, SCI patrimoniale, société(s) d'exploitation. Une structure sur mesure.",
    Icon: IconCompass,
  },
  {
    num: "03",
    title: "Rédaction",
    desc: "Rédaction de l'ensemble des statuts et documents constitutifs. Chaque acte est rédigé, vérifié et adapté à votre situation.",
    Icon: IconDocument,
  },
  {
    num: "04",
    title: "Déploiement",
    desc: "Immatriculation, ouverture des comptes bancaires, transfert des actifs, mise en conformité. Nous gérons tout à vos côtés.",
    Icon: IconChart,
  },
  {
    num: "05",
    title: "Activation",
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
          <span className="section-label">Elity Structure · Structuration de groupe</span>
          <div className="section-sep" style={{ marginInline: "auto" }} />
          <h2 className="section-title">Construire le bon socle.<br /><em>Protéger, optimiser, transmettre.</em></h2>
          <p className="section-body" style={{ marginInline: "auto", textAlign: "center" }}>
            Vous avez une ou plusieurs sociétés, un patrimoine immobilier, des revenus qui pourraient être mieux optimisés.
            Elity Structure conçoit et met en place la structure de groupe adaptée à votre situation, <strong>de A à Z, jusqu&apos;à l&apos;immatriculation</strong>.
          </p>
        </Reveal>

        <div className="structure-pains">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} as="article" className="structure-pain" delay={((i + 1) * 100) as 100 | 200 | 300 | 400}>
              <div className="structure-pain-icon" aria-hidden="true">{p.icon}</div>
              <div>
                <h3 className="structure-pain-title">{p.title}</h3>
                <p className="structure-pain-desc">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="structure-subhead">
          <span className="section-label">Notre méthode</span>
          <h3 className="structure-subtitle">5 étapes pour <em>structurer votre groupe</em></h3>
        </Reveal>

        <div className="steps structure-steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} as="article" className="step" delay={(100 * (i + 1)) as 100 | 200 | 300 | 400 | 500}>
              <span className="step-num">{s.num}</span>
              <div className="step-icon">
                <s.Icon />
              </div>
              <h4 className="step-title">{s.title}</h4>
              <p className="step-desc">{s.desc}</p>
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

        <Reveal className="structure-parcours">
          <span className="section-label">Le parcours Elity</span>
          <div className="structure-parcours-flow">
            <div className="structure-parcours-step">
              <span className="structure-parcours-name">Elity <strong>Structure</strong></span>
              <p>Nous concevons et mettons en place votre groupe, de A à Z.</p>
            </div>
            <span className="structure-parcours-arrow" aria-hidden="true">→</span>
            <Link href="#pilotage" className="structure-parcours-step structure-parcours-link">
              <span className="structure-parcours-name">Elity <strong>Dirigeant</strong></span>
              <p>Nous pilotons votre groupe avec vous, chaque mois, dans la durée.</p>
            </Link>
          </div>
          <blockquote className="structure-quote">
            « La bonne structure, c&apos;est celle qui protège aujourd&apos;hui et <em>valorise demain.</em> »
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
