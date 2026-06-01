// FROM-SCRATCH : aucun résultat MCP "Steps" n'allait à 80%
// Justification : MCP a retourné des stepper-cards (anti-pattern design-god #2 anti-cartes).
// Layout éditorial compact, alternance image gauche/droite, num oversized.
// V2 : compact (padding réduit, listes supprimées, descriptions raccourcies).

import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    label: "Diagnostic",
    title: "Comprendre avant de proposer.",
    desc: "Forces, faiblesses, dépendances et leviers de valeur cachés. Sans angle mort.",
    visualTag: "Lecture stratégique",
    image: "url('/etape-diagnostic.png')",
  },
  {
    num: "02",
    label: "Positionnement",
    title: "Définir la juste valeur.",
    desc: "Positionnement défendable, valorisation argumentée, profilage des bons acquéreurs.",
    visualTag: "Valeur défendable",
    image: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80&auto=format&fit=crop')",
  },
  {
    num: "03",
    label: "Préparation",
    title: "Structurer le dossier.",
    desc: "Teaser, mémorandum, data room. Chaque pièce raconte clairement la valeur.",
    visualTag: "Dossier qui parle",
    image: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&auto=format&fit=crop')",
  },
  {
    num: "04",
    label: "Mise en vente",
    title: "Cibler avec discrétion.",
    desc: "Acquéreurs ciblés, interactions pilotées, confidentialité préservée du début à la fin.",
    visualTag: "Discrétion totale",
    image: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80&auto=format&fit=crop')",
  },
  {
    num: "05",
    label: "Négociation",
    title: "Sécuriser jusqu'au bout.",
    desc: "Conditions économiques et juridiques négociées. Accompagnement jusqu'à la signature et au-delà.",
    visualTag: "Conditions sécurisées",
    image: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80&auto=format&fit=crop')",
  },
] as const;

export default function HomeApprocheEditorial() {
  return (
    <div className="approche-edito">
      {STEPS.map((s, i) => (
        <Reveal
          key={s.num}
          className="approche-edito-step"
          delay={((i % 3) * 100) as 0 | 100 | 200}
        >
          <div className="approche-edito-text">
            <div className="approche-edito-num">{s.num}</div>
            <div className="approche-edito-label">{s.label}</div>
            <h3 className="approche-edito-title">{s.title}</h3>
            <p className="approche-edito-desc">{s.desc}</p>
          </div>

          <div
            className="approche-edito-visual"
            style={{ "--step-bg": s.image } as React.CSSProperties}
          >
            <span className="approche-edito-visual-tag">{s.visualTag}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
