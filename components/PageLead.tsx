import type { ReactNode } from "react";

type Stat = { value: string; label: string };

type Props = {
  label: string;
  title: ReactNode;
  text?: ReactNode;
  stats?: Stat[];
  center?: boolean;
};

/**
 * En-tete de page : entree directe dans le contenu, sans bandeau-heros.
 * S'utilise comme premier element d'une section (souvent .section-first
 * pour degager la navbar). Leger, pas de grande photo sombre.
 */
export default function PageLead({ label, title, text, stats, center }: Props) {
  return (
    <div className={center ? "page-lead page-lead-center" : "page-lead"}>
      <span className="page-lead-label">
        <span className="page-lead-tick" aria-hidden="true" />
        {label}
      </span>
      <h1 className="page-lead-title">{title}</h1>
      {text && <p className="page-lead-text">{text}</p>}
      {stats && stats.length > 0 && (
        <div className="page-lead-stats">
          {stats.map((s) => (
            <div key={s.label} className="page-lead-stat">
              <span className="page-lead-stat-val">{s.value}</span>
              <span className="page-lead-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
