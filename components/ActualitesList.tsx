"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import CtaFinal from "./CtaFinal";
import type { SanityArticle } from "@/sanity/queries";

const CATEGORY_LABELS: Record<string, string> = {
  actualite: "Actualité",
  conseil: "Conseil",
  marche: "Marché Océan Indien",
  evenement: "Événement",
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function ActualitesList({ articles }: { articles: SanityArticle[] }) {
  const [year, setYear] = useState<string>("all");

  // Années disponibles, du plus récent au plus ancien
  const years = useMemo(() => {
    const set = new Set<string>();
    for (const a of articles) {
      if (a.date) set.add(a.date.slice(0, 4));
    }
    return Array.from(set).sort((x, y) => y.localeCompare(x));
  }, [articles]);

  const filtered = useMemo(() => {
    const list = year === "all" ? articles : articles.filter((a) => a.date?.startsWith(year));
    return [...list].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  }, [articles, year]);

  return (
    <>
      <section className="section section-cream section-first">
        <div className="container">
          <Reveal className="case-intro">
            <span className="case-intro-label">Actualités</span>
            <h2 className="case-intro-title">
              Le journal <em>d&apos;Elity.</em>
            </h2>
            <Link href="/cas-clients" className="blog-back-link">
              <span aria-hidden="true">←</span> Retour aux cas clients
            </Link>
          </Reveal>

          {articles.length === 0 ? (
            <Reveal className="blog-empty">
              <p>Les premières actualités arrivent bientôt. Revenez prochainement.</p>
            </Reveal>
          ) : (
            <>
              {/* Filtre par année */}
              {years.length > 1 && (
                <Reveal className="blog-filter" role="tablist" aria-label="Filtrer par année">
                  <button
                    type="button"
                    className={`blog-filter-btn${year === "all" ? " active" : ""}`}
                    onClick={() => setYear("all")}
                  >
                    Toutes
                  </button>
                  {years.map((y) => (
                    <button
                      key={y}
                      type="button"
                      className={`blog-filter-btn${year === y ? " active" : ""}`}
                      onClick={() => setYear(y)}
                    >
                      {y}
                    </button>
                  ))}
                </Reveal>
              )}

              <div className="blog-grid">
                {filtered.map((a, i) => (
                  <Reveal key={a.slug || a.title} delay={(((i % 3) + 1) * 100) as 100 | 200 | 300}>
                    <article className="blog-card">
                      {a.coverUrl && (
                        <div
                          className="blog-card-cover"
                          style={{ backgroundImage: `url(${a.coverUrl})` }}
                          role="img"
                          aria-label={a.title}
                        />
                      )}
                      <div className="blog-card-body">
                        <div className="blog-card-meta">
                          <time dateTime={a.date}>{formatDate(a.date)}</time>
                          {a.category && (
                            <span className="blog-card-cat">
                              {CATEGORY_LABELS[a.category] ?? a.category}
                            </span>
                          )}
                        </div>
                        <h3 className="blog-card-title">{a.title}</h3>
                        {a.excerpt && <p className="blog-card-excerpt">{a.excerpt}</p>}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CtaFinal
        title={
          <>
            Une question sur votre entreprise ?<br /><em>Parlons-en.</em>
          </>
        }
        text="Premier échange confidentiel et sans engagement."
        secondaryLabel="Voir nos offres"
        secondaryHref="/offres"
      />
    </>
  );
}
