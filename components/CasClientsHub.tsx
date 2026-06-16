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
  date?: string;
  sectorCategory?: string;
  coverUrl?: string;
  link?: string;
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
  const [caseSector, setCaseSector] = useState<string>("all");
  const [caseSort, setCaseSort] = useState<"recent" | "old">("recent");
  const [caseFrom, setCaseFrom] = useState<string>("");
  const [caseTo, setCaseTo] = useState<string>("");
  const [artCategory, setArtCategory] = useState<string>("all");
  const [artSort, setArtSort] = useState<"recent" | "old">("recent");
  const [artFrom, setArtFrom] = useState<string>("");
  const [artTo, setArtTo] = useState<string>("");

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

  // Bloque le scroll de fond quand l'overlay est ouvert (robuste iOS : on fige
  // la position du body et on la restaure à la fermeture).
  useEffect(() => {
    if (!overlay) return;
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
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

  const CATEGORY_VALUES = ["actualite", "conseil", "marche", "evenement"];
  const articleCategories = CATEGORY_VALUES.filter((cat) =>
    articles.some((a) => a.category === cat)
  );

  const filteredArticles = articles
    .filter((a) => artCategory === "all" || a.category === artCategory)
    .filter((a) => !artFrom || (a.date ?? "") >= artFrom)
    .filter((a) => !artTo || (a.date ?? "") <= artTo)
    .slice()
    .sort((a, b) => {
      const cmp = (b.date ?? "").localeCompare(a.date ?? "");
      return artSort === "recent" ? cmp : -cmp;
    });

  // Filtres études de cas : par secteur + tri par date
  const sectors = Array.from(
    new Set(cases.map((c) => c.sectorCategory).filter(Boolean) as string[])
  );
  const filteredCases = cases
    .filter((c) => caseSector === "all" || c.sectorCategory === caseSector)
    .filter((c) => !caseFrom || (c.date ?? "") >= caseFrom)
    .filter((c) => !caseTo || (c.date ?? "") <= caseTo)
    .slice()
    .sort((a, b) => {
      const cmp = (b.date ?? "").localeCompare(a.date ?? "");
      return caseSort === "recent" ? cmp : -cmp;
    });

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
              <>
                <div className="blog-filter" aria-label="Filtrer les études de cas">
                  {sectors.length > 0 && (
                    <>
                      <button
                        type="button"
                        className={`blog-filter-btn${caseSector === "all" ? " active" : ""}`}
                        onClick={() => setCaseSector("all")}
                      >
                        Tous les secteurs
                      </button>
                      {sectors.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className={`blog-filter-btn${caseSector === s ? " active" : ""}`}
                          onClick={() => setCaseSector(s)}
                        >
                          {s}
                        </button>
                      ))}
                      <span className="blog-filter-sep" aria-hidden="true" />
                    </>
                  )}
                  <button
                    type="button"
                    className={`blog-filter-btn${caseSort === "recent" ? " active" : ""}`}
                    onClick={() => setCaseSort("recent")}
                  >
                    Plus récentes
                  </button>
                  <button
                    type="button"
                    className={`blog-filter-btn${caseSort === "old" ? " active" : ""}`}
                    onClick={() => setCaseSort("old")}
                  >
                    Plus anciennes
                  </button>
                </div>
                <div className="blog-filter blog-filter-dates" aria-label="Filtrer par dates">
                  <label className="blog-date-field">
                    <span>Du</span>
                    <input
                      type="date"
                      value={caseFrom}
                      max={caseTo || undefined}
                      onChange={(e) => setCaseFrom(e.target.value)}
                    />
                  </label>
                  <label className="blog-date-field">
                    <span>Au</span>
                    <input
                      type="date"
                      value={caseTo}
                      min={caseFrom || undefined}
                      onChange={(e) => setCaseTo(e.target.value)}
                    />
                  </label>
                  {(caseFrom || caseTo) && (
                    <button
                      type="button"
                      className="blog-filter-btn"
                      onClick={() => {
                        setCaseFrom("");
                        setCaseTo("");
                      }}
                    >
                      Réinitialiser
                    </button>
                  )}
                </div>
                {filteredCases.length === 0 && (
                  <Reveal className="blog-empty">
                    <p>Aucune étude de cas ne correspond à ces filtres.</p>
                  </Reveal>
                )}

                <div className="blog-grid">
                  {filteredCases.map((c, i) => (
                    <Reveal
                      key={c.sector}
                      delay={(((i % 3) + 1) * 100) as 100 | 200 | 300}
                    >
                      <article className="blog-card">
                        {c.coverUrl && (
                          <div
                            className="blog-card-cover"
                            style={{ backgroundImage: `url(${c.coverUrl})` }}
                            role="img"
                            aria-label={c.sector}
                          />
                        )}
                        <div className="blog-card-body">
                          <div className="blog-card-meta">
                            <span className="blog-card-cat">{c.tag}</span>
                            {c.date && (
                              <time dateTime={c.date}>{formatDate(c.date)}</time>
                            )}
                          </div>
                          <h3 className="blog-card-title">{c.sector}</h3>
                          <p className="blog-card-sub">{c.meta}</p>
                          <p className="blog-card-excerpt">{c.summary}</p>
                          {c.link ? (
                            <a
                              href={c.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="blog-card-cta"
                            >
                              En savoir plus <span aria-hidden="true">→</span>
                            </a>
                          ) : (
                            <button
                              type="button"
                              className="blog-card-cta"
                              onClick={() => setOverlay({ kind: "case", data: c })}
                            >
                              En savoir plus <span aria-hidden="true">→</span>
                            </button>
                          )}
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </>
            ) : articles.length === 0 ? (
              <Reveal className="blog-empty">
                <p>Les premières actualités arrivent bientôt. Revenez prochainement.</p>
              </Reveal>
            ) : (
              <>
                <div className="blog-filter" aria-label="Filtrer les actualités">
                  <button
                    type="button"
                    className={`blog-filter-btn${artCategory === "all" ? " active" : ""}`}
                    onClick={() => setArtCategory("all")}
                  >
                    Toutes
                  </button>
                  {articleCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`blog-filter-btn${artCategory === cat ? " active" : ""}`}
                      onClick={() => setArtCategory(cat)}
                    >
                      {CATEGORY_LABELS[cat] ?? cat}
                    </button>
                  ))}
                  <span className="blog-filter-sep" aria-hidden="true" />
                  <button
                    type="button"
                    className={`blog-filter-btn${artSort === "recent" ? " active" : ""}`}
                    onClick={() => setArtSort("recent")}
                  >
                    Plus récentes
                  </button>
                  <button
                    type="button"
                    className={`blog-filter-btn${artSort === "old" ? " active" : ""}`}
                    onClick={() => setArtSort("old")}
                  >
                    Plus anciennes
                  </button>
                </div>
                <div className="blog-filter blog-filter-dates" aria-label="Filtrer par dates">
                  <label className="blog-date-field">
                    <span>Du</span>
                    <input
                      type="date"
                      value={artFrom}
                      max={artTo || undefined}
                      onChange={(e) => setArtFrom(e.target.value)}
                    />
                  </label>
                  <label className="blog-date-field">
                    <span>Au</span>
                    <input
                      type="date"
                      value={artTo}
                      min={artFrom || undefined}
                      onChange={(e) => setArtTo(e.target.value)}
                    />
                  </label>
                  {(artFrom || artTo) && (
                    <button
                      type="button"
                      className="blog-filter-btn"
                      onClick={() => {
                        setArtFrom("");
                        setArtTo("");
                      }}
                    >
                      Réinitialiser
                    </button>
                  )}
                </div>
                {filteredArticles.length === 0 && (
                  <Reveal className="blog-empty">
                    <p>Aucune actualité ne correspond à ces filtres.</p>
                  </Reveal>
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
                          {a.link ? (
                            <a
                              href={a.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="blog-card-cta"
                            >
                              En savoir plus <span aria-hidden="true">→</span>
                            </a>
                          ) : (
                            <button
                              type="button"
                              className="blog-card-cta"
                              onClick={() => setOverlay({ kind: "article", data: a })}
                            >
                              En savoir plus <span aria-hidden="true">→</span>
                            </button>
                          )}
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
