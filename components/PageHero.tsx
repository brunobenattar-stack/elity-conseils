import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

type Props = {
  crumbs?: Crumb[];
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: string;
  side?: ReactNode;
};

export default function PageHero({
  crumbs = [],
  label,
  title,
  subtitle,
  meta,
  side,
}: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-grid">
          <div>
            {crumbs.length > 0 && (
              <nav className="page-hero-crumb" aria-label="Fil d'Ariane">
                <span className="line" />
                <Link href="/">Accueil</Link>
                {crumbs.map((c, i) => (
                  <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                    <span className="sep">/</span>
                    {c.href ? <Link href={c.href}>{c.label}</Link> : <span className="current">{c.label}</span>}
                  </span>
                ))}
              </nav>
            )}
            {label && !crumbs.length && (
              <div className="page-hero-crumb">
                <span className="line" />
                <span>{label}</span>
              </div>
            )}
            <h1 className="page-hero-title">{title}</h1>
            {subtitle && <p className="page-hero-sub">{subtitle}</p>}
          </div>

          <div className="page-hero-side">
            {meta && <span className="page-hero-meta">{meta}</span>}
            {side}
          </div>
        </div>
      </div>
    </section>
  );
}
