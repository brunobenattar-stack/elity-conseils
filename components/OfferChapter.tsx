import type { ReactNode } from "react";
import Reveal from "./Reveal";

// En-tête de chapitre de la page Offres : gros numéro + titre très grand.
export default function OfferChapter({
  num,
  kicker,
  title,
  subtitle,
  children,
}: {
  num: number;
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Reveal className="offer-chapter">
      <div className="offer-chapter-num" aria-hidden="true">{num}</div>
      <div className="offer-chapter-text">
        <span className="offer-chapter-kicker">
          Offre {num}
          <span className="offer-chapter-kicker-sep" aria-hidden="true" />
          {kicker}
        </span>
        <h2 className="offer-chapter-title">{title}</h2>
        {subtitle && <p className="offer-chapter-sub">{subtitle}</p>}
        {children && <div className="offer-chapter-body">{children}</div>}
      </div>
    </Reveal>
  );
}
