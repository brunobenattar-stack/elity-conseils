"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import CtaFinal from "./CtaFinal";
import type { SanityArticle } from "@/sanity/queries";

export type CaseStudy = {
  sector: string;
  meta: string;
  tag: string;
  metrics: { value: string; label: string }[];
  phases: { eyebrow: string; title: string; text: string }[];
  quote: string;
  author: string;
  summary: string;
};

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

type OverlayContent =
  | { kind: "case"; data: CaseStudy }
  | { kind: "article"; data: SanityArticle }
  | null;

export default function CasClientsHub({
  cases,
  articles,
}: {
  cases: CaseStudy[];
  articles: SanityArticle[];
}) {
  const [tab, setTab] = useState<"cas" | "actus">("cas");
  const [overlay, setOverlay] = useState<OverlayContent>(null);
  const [year, setYear] = useState<string>("all");

  // Ouvre l'onglet Actualités si on arrive avec #actualites (depuis la navbar)
  useEffect(() => {
    const applyHash = () => {
      if (typeof window === "undefined") return;
      if (window.location.hash === "#actualites") setTab("actus");
      else if (window.location.hash === "#cas") setTab("cas");
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  // Bloque le scroll de fond quand l'overlay est ouvert
  useEffect(() => {
    document.body.style.overflow = overlay ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [overlay]);

  // Fermer avec Échap
  useEffect(() => {
    if (!overlay) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOverlay(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [overlay]);

  const years = Array.from(
    new Set(articles.map((a) => a.date?.slice(0, 4)).filter(Boolean) as string[])
  ).sort((a, b) => b.localeCompare(a));

  const filteredArticles = (
    year === "all" ? articles : articles.filter((a) => a.date?.startsWith(year))
  )
    .slice()
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

  const switchTab = (t: "cas" | "actus") => {
    setTab(t);
    // place l'ancre en haut de la zone blog
    requestAnimationFrame(() => {
      document
        .getElementById("blog-zone")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <section className="section section-cream section-first">
        <div className="container">
          <Reveal className="case-intro">
            <span className="case-intro-label">Cas clients &amp; actualités</span>
            <h2 className="case-intro-title">
              Ce que nous faisons,<br />
              <em>et ce que ça change.</em>
            </h2>
          </Reveal>

          {/* Toggle façon page Offres */}
          <div
            className="blog-toggle"
            role="tablist"
            aria-label="Choisir entre études de cas et actualités"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === "cas"}
              className={`blog-toggle-btn${tab === "cas" ? " active" : ""}`}
              onClick={() => switchTab("cas")}
            >
              Études de cas
            </button>
            <span className="blog-toggle-divider" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "actus"}
              className={`blog-toggle-btn${tab === "actus" ? " active" : ""}`}
              onClick={() => switchTab("actus")}
            >
              Actualités
            </button>
          </div>

          <div id="blog-zone" className="blog-zone">
            {tab === "cas" ? (
              <div className="blog-grid">
                {cases.map((c, i) => (
                  <Reveal
                    key={c.sector}
                    delay={(((i % 3) + 1) * 100) as 100 | 200 | 300}
                  >
                    <article className="blog-card">
                      <div className="blog-card-body">
                        <div className="blog-card-meta">
                          <span className="blog-card-cat">{c.tag}</span>
                        </div>
                        <h3 className="blog-card-title">{c.sector}</h3>
                        <p className="blog-card-sub">{c.meta}</p>
                        <p className="blog-card-excerpt">{c.summary}</p>
                        <button
                          type="button"
                          className="blog-card-cta"
                          onClick={() => setOverlay({ kind: "case", data: c })}
                        >
                          En savoir plus <span aria-hidden="true">→</span>
                        </button>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            ) : articles.length === 0 ? (
              <Reveal className="blog-empty">
                <p>Les premières actualités arrivent bientôt. Revenez prochainement.</p>
              </Reveal>
            ) : (
              <>
                {years.length > 1 && (
                  <div className="blog-filter" aria-label="Filtrer par année">
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
                  </div>
                )}
                <div className="blog-grid">
                  {filteredArticles.map((a, i) => (
                    <Reveal
                      key={a.slug || a.title}
                      delay={(((i % 3) + 1) * 100) as 100 | 200 | 300}
                    >
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
                          {a.excerpt && (
                            <p className="blog-card-excerpt">{a.excerpt}</p>
                          )}
                          <button
                            type="button"
                            className="blog-card-cta"
                            onClick={() => setOverlay({ kind: "article", data: a })}
                          >
                            En savoir plus <span aria-hidden="true">→</span>
                          </button>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <CtaFinal
        title={
          <>
            Votre situation ressemble <em>à l&apos;une des leurs ?</em>
          </>
        }
        text="Premier échange confidentiel et sans engagement, pour identifier le bon accompagnement."
        secondaryLabel="Voir nos offres"
        secondaryHref="/offres"
      />

      {/* Overlay de lecture plein écran */}
      {overlay && (
        <div
          className="blog-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setOverlay(null)}
        >
          <div className="blog-overlay-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="blog-overlay-close"
              aria-label="Fermer"
              onClick={() => setOverlay(null)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            {overlay.kind === "case" ? (
              <CaseReader data={overlay.data} />
            ) : (
              <ArticleReader data={overlay.data} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

function CaseReader({ data: c }: { data: CaseStudy }) {
  return (
    <article className="blog-reader">
      <span className="blog-reader-tag">{c.tag}</span>
      <h2 className="blog-reader-title">{c.sector}</h2>
      <p className="blog-reader-sub">{c.meta}</p>

      <div className="blog-reader-metrics">
        {c.metrics.map((m) => (
          <div key={m.label} className="blog-reader-metric">
            <span className="blog-reader-metric-val">{m.value}</span>
            <span className="blog-reader-metric-lbl">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="blog-reader-body">
        {c.phases.map((p) => (
          <div key={p.eyebrow} className="blog-reader-phase">
            <span className="blog-reader-phase-eyebrow">{p.eyebrow}</span>
            <h3 className="blog-reader-phase-title">{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>

      {c.quote && (
        <blockquote className="blog-reader-quote">
          <span aria-hidden="true">&ldquo;</span>
          {c.quote}
          <cite>{c.author}</cite>
        </blockquote>
      )}
    </article>
  );
}

function ArticleReader({ data: a }: { data: SanityArticle }) {
  return (
    <article className="blog-reader">
      <div className="blog-reader-meta">
        <time dateTime={a.date}>{formatDate(a.date)}</time>
        {a.category && (
          <span className="blog-reader-cat">
            {CATEGORY_LABELS[a.category] ?? a.category}
          </span>
        )}
      </div>
      <h2 className="blog-reader-title">{a.title}</h2>
      {a.coverUrl && (
        <div
          className="blog-reader-cover"
          style={{ backgroundImage: `url(${a.coverUrl})` }}
          role="img"
          aria-label={a.title}
        />
      )}
      {a.excerpt && <p className="blog-reader-lead">{a.excerpt}</p>}
      {a.body ? (
        <div className="blog-reader-body">
          {a.body.split("\n").filter(Boolean).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      ) : (
        <p className="blog-reader-body">{a.excerpt}</p>
      )}
    </article>
  );
}
