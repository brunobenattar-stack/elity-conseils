import Reveal from "./Reveal";
import {
  IconLoupe,
  IconTarget,
  IconDocument,
  IconBroadcast,
  IconHandshake,
} from "./icons";

const STEPS = [
  {
    num: "01",
    title: "Diagnostic stratégique",
    desc: "Nous analysons votre entreprise, vos objectifs et votre environnement. Identification des forces, faiblesses et leviers de valeur réels.",
    Icon: IconLoupe,
  },
  {
    num: "02",
    title: "Positionnement & Valorisation",
    desc: "Nous définissons le positionnement optimal et une valorisation réaliste et argumentée auprès des bons acquéreurs.",
    Icon: IconTarget,
  },
  {
    num: "03",
    title: "Préparation & Optimisation",
    desc: "Nous structurons les informations clés, préparons le dossier de présentation et optimisons les leviers de valeur identifiés.",
    Icon: IconDocument,
  },
  {
    num: "04",
    title: "Mise en vente stratégique",
    desc: "Nous ciblons les bons acquéreurs, pilotons le processus avec discrétion et gérons chaque interaction avec méthode.",
    Icon: IconBroadcast,
  },
  {
    num: "05",
    title: "Négociation & Accompagnement",
    desc: "Nous sécurisons les conditions de la cession et vous accompagnons jusqu'à la signature et au-delà.",
    Icon: IconHandshake,
  },
] as const;

export default function ApprocheSteps() {
  return (
    <div className="steps">
      {STEPS.map((s, i) => (
        <Reveal key={s.num} as="article" className="step" delay={(100 * (i + 1)) as 100 | 200 | 300 | 400 | 500}>
          <span className="step-num">{s.num}</span>
          <div className="step-icon">
            <s.Icon />
          </div>
          <h3 className="step-title">{s.title}</h3>
          <p className="step-desc">{s.desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

export { STEPS as APPROCHE_STEPS };
