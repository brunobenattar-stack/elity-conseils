import Link from "next/link";
import Reveal from "./Reveal";
import OfferCard, { type OfferCardData } from "./OfferCard";
import OfferChapter from "./OfferChapter";

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
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Conception du schéma de groupe optimal : holding animatrice, SCI patrimoniale, société(s) d'exploitation. Une structure sur mesure.",
  },
  {
    num: "03",
    title: "Rédaction",
    desc: "Rédaction de l'ensemble des statuts et documents constitutifs. Chaque acte est rédigé, vérifié et adapté à votre situation.",
  },
  {
    num: "04",
    title: "Déploiement",
    desc: "Immatriculation, ouverture des comptes bancaires, transfert des actifs, mise en conformité. Nous gérons tout à vos côtés.",
  },
  {
    num: "05",
    title: "Activation",
    desc: "Votre groupe est opérationnel. Formation au pilotage, rémunération du dirigeant optimisée, flux financiers entre entités définis.",
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
        <OfferChapter
          num={2}
          kicker="Elity Structure"
          title="Structuration de groupe"
          subtitle={<>Construire le bon socle. <em>Protéger, optimiser, transmettre.</em></>}
        >
          Vous avez une ou plusieurs sociétés, un patrimoine immobilier, des revenus qui pourraient être mieux optimisés.
          Elity Structure conçoit et met en place la structure de groupe adaptée à votre situation, <strong>de A à Z, jusqu&apos;à l&apos;immatriculation</strong>.
        </OfferChapter>

        <Reveal className="structure-block-head">
          <span className="structure-block-label">Le constat</span>
          <h3 className="structure-block-title">Aujourd&apos;hui, <em>tout est encore mélangé.</em></h3>
        </Reveal>

        <div className="structure-pains">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} as="article" className="structure-pain" delay={((i + 1) * 100) as 100 | 200 | 300 | 400}>
              <div className="structure-pain-icon" aria-hidden="true">{p.icon}</div>
              <h4 className="structure-pain-title">{p.title}</h4>
              <p className="structure-pain-desc">{p.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="structure-block-head">
          <span className="structure-block-label">Notre méthode</span>
          <h3 className="structure-block-title">5 étapes pour <em>structurer votre groupe.</em></h3>
        </Reveal>

        <ol className="structure-timeline">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} as="li" className="structure-tl-step" delay={(100 * (i + 1)) as 100 | 200 | 300 | 400 | 500}>
              <span className="structure-tl-dot" aria-hidden="true" />
              <span className="structure-tl-num">{s.num}</span>
              <h4 className="structure-tl-title">{s.title}</h4>
              <p className="structure-tl-desc">{s.desc}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="structure-block-head">
          <span className="structure-block-label">Engagement</span>
          <h3 className="structure-block-title">Deux <em>formules.</em></h3>
        </Reveal>

        <div className="offers-deck offers-deck-2">
          {FORMULES.map((offer, i) => (
            <Reveal key={offer.id} delay={((i + 1) * 100) as 100 | 200}>
              <OfferCard offer={offer} />
            </Reveal>
          ))}
        </div>

        <Reveal className="structure-parcours">
          <span className="structure-block-label">Le parcours Elity</span>
          <div className="structure-parcours-flow">
            <div className="structure-parcours-step">
              <span className="structure-parcours-tag">Offre 2</span>
              <span className="structure-parcours-name">Elity <em>Structure</em></span>
              <p>Nous concevons et mettons en place votre groupe, de A à Z.</p>
            </div>
            <div className="structure-parcours-line" aria-hidden="true"><span>→</span></div>
            <Link href="#pilotage" className="structure-parcours-step">
              <span className="structure-parcours-tag">Offre 3</span>
              <span className="structure-parcours-name">Elity <em>Dirigeant</em></span>
              <p>Nous pilotons votre groupe avec vous, chaque mois, dans la durée.</p>
            </Link>
          </div>
          <blockquote className="structure-quote">
            La bonne structure, c&apos;est celle qui protège aujourd&apos;hui et <em>valorise demain.</em>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
