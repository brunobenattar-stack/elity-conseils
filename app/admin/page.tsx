"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { type HeroContent, type Offer, type OfferVariant } from "@/lib/content";
import { useContent } from "@/lib/ContentProvider";

// Passe-code volontairement simple. Modifiable côté serveur en éditant cette ligne.
const ADMIN_PASSCODE = "elity-admin";
const ADMIN_AUTH_KEY = "elity-admin-auth-v1";

type Tab = "hero" | "offers";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(ADMIN_AUTH_KEY);
      if (stored === "1") setAuthed(true);
    } catch {
      /* ignore */
    }
    setAuthReady(true);
  }, []);

  const handleAuthSuccess = useCallback(() => {
    setAuthed(true);
    try {
      window.localStorage.setItem(ADMIN_AUTH_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  const handleLogout = useCallback(() => {
    setAuthed(false);
    try {
      window.localStorage.removeItem(ADMIN_AUTH_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  if (!authReady) {
    return <div className="admin-loading">Chargement…</div>;
  }

  if (!authed) {
    return <AdminGate onSuccess={handleAuthSuccess} />;
  }

  return <AdminPanel onLogout={handleLogout} />;
}

/* -------------------------------------------------------------------------- */
/*  Gate                                                                       */
/* -------------------------------------------------------------------------- */

function AdminGate({ onSuccess }: { onSuccess: () => void }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() === ADMIN_PASSCODE) {
      setError(null);
      onSuccess();
    } else {
      setError("Code incorrect.");
    }
  };

  return (
    <div className="admin-gate-page">
      <form className="admin-gate" onSubmit={submit}>
        <span className="admin-gate-eyebrow">Espace administrateur</span>
        <h1 className="admin-gate-title">
          Elity <em>Conseils</em>
        </h1>
        <p className="admin-gate-desc">
          Saisissez le code d&apos;accès pour modifier le contenu du site.
        </p>
        <label className="admin-gate-field">
          <span>Code d&apos;accès</span>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            autoFocus
            autoComplete="off"
            placeholder="••••••••••"
          />
        </label>
        {error && <p className="admin-gate-error">{error}</p>}
        <button type="submit" className="admin-gate-cta">
          Accéder à l&apos;admin
        </button>
        <Link href="/" className="admin-gate-back">
          ← Revenir au site
        </Link>
      </form>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Panel                                                                      */
/* -------------------------------------------------------------------------- */

function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const { content, setContent, resetContent, hydrated } = useContent();
  const [tab, setTab] = useState<Tab>("hero");
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);

  const pushToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2200);
  }, []);

  useEffect(() => () => {
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
  }, []);

  const updateHero = useCallback(
    (patch: Partial<HeroContent>) => {
      setContent({ ...content, hero: { ...content.hero, ...patch } });
    },
    [content, setContent]
  );

  const updateOffer = useCallback(
    (index: number, patch: Partial<Offer>) => {
      const next = content.offers.map((o, i) => (i === index ? { ...o, ...patch } : o));
      setContent({ ...content, offers: next });
    },
    [content, setContent]
  );

  const addOffer = useCallback(() => {
    const id = `offre-${Date.now()}`;
    const blank: Offer = {
      id,
      name: "Nouvelle offre",
      pitch: "Décrivez l'offre en une phrase.",
      chip: "Nouveau",
      price: "",
      priceSuffix: "",
      features: ["Première prestation incluse"],
      meta: "Elity Conseils",
      featured: false,
      variant: "default",
      ctaLabel: "Prendre rendez-vous",
      ctaHref: "/contact",
    };
    setContent({ ...content, offers: [...content.offers, blank] });
    pushToast("Offre ajoutée.");
  }, [content, setContent, pushToast]);

  const removeOffer = useCallback(
    (index: number) => {
      if (content.offers.length <= 1) {
        pushToast("Au moins une offre doit rester en ligne.");
        return;
      }
      const next = content.offers.filter((_, i) => i !== index);
      setContent({ ...content, offers: next });
      pushToast("Offre supprimée.");
    },
    [content, setContent, pushToast]
  );

  const moveOffer = useCallback(
    (index: number, dir: -1 | 1) => {
      const target = index + dir;
      if (target < 0 || target >= content.offers.length) return;
      const next = [...content.offers];
      const [item] = next.splice(index, 1);
      next.splice(target, 0, item);
      setContent({ ...content, offers: next });
    },
    [content, setContent]
  );

  const resetAll = useCallback(() => {
    const ok = window.confirm(
      "Remettre tout le contenu du site (page d'accueil + offres) sur les textes d'origine ?\n\nVos modifications actuelles seront perdues."
    );
    if (!ok) return;
    resetContent();
    pushToast("Contenu remis à l'origine.");
  }, [resetContent, pushToast]);

  const heroFields: Array<{ key: keyof HeroContent; label: string; type?: "text" | "textarea"; group?: string }> = useMemo(
    () => [
      { key: "eyebrow", label: "Petite ligne au-dessus du titre", group: "Texte principal" },
      { key: "titleLine1", label: "Titre principal : ligne 1", group: "Texte principal" },
      { key: "titleEm", label: "Titre principal : ligne 2 (en italique doré)", group: "Texte principal" },
      { key: "sub", label: "Sous-titre / paragraphe d'introduction", type: "textarea", group: "Texte principal" },
      { key: "cta1Label", label: "Bouton principal : texte affiché", group: "Boutons d'action" },
      { key: "cta1Href", label: "Bouton principal : page de destination", group: "Boutons d'action" },
      { key: "cta2Label", label: "Bouton secondaire : texte affiché", group: "Boutons d'action" },
      { key: "cta2Href", label: "Bouton secondaire : page de destination", group: "Boutons d'action" },
      { key: "chip1Label", label: "Pastille 1 : titre", group: "Pastilles décoratives (visibles sur ordinateur)" },
      { key: "chip1Sub", label: "Pastille 1 : sous-texte", group: "Pastilles décoratives (visibles sur ordinateur)" },
      { key: "chip2Num", label: "Pastille 2 : chiffre mis en avant", group: "Pastilles décoratives (visibles sur ordinateur)" },
      { key: "chip2Label", label: "Pastille 2 : titre", group: "Pastilles décoratives (visibles sur ordinateur)" },
      { key: "chip2Sub", label: "Pastille 2 : sous-texte", group: "Pastilles décoratives (visibles sur ordinateur)" },
    ],
    []
  );

  const heroGroups = useMemo(() => {
    const map = new Map<string, typeof heroFields>();
    heroFields.forEach((f) => {
      const g = f.group ?? "Autres";
      const arr = map.get(g) ?? [];
      arr.push(f);
      map.set(g, arr);
    });
    return Array.from(map.entries());
  }, [heroFields]);

  if (!hydrated) {
    return <div className="admin-loading">Chargement…</div>;
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-header-left">
          <span className="admin-header-eyebrow">Administration</span>
          <h1 className="admin-header-title">
            Elity <em>Conseils</em>
          </h1>
        </div>
        <div className="admin-header-actions">
          <Link href="/" target="_blank" rel="noopener" className="admin-btn admin-btn-ghost">
            <span>Voir le site</span>
            <span aria-hidden="true">↗</span>
          </Link>
          <button type="button" className="admin-btn admin-btn-ghost" onClick={onLogout}>
            Déconnexion
          </button>
        </div>
      </header>

      <div className="admin-intro">
        <div className="admin-intro-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
        </div>
        <div>
          <h2>Comment ça marche</h2>
          <p>
            Modifiez les textes ci-dessous et choisissez l&apos;onglet à modifier. <strong>Tout est enregistré automatiquement</strong> et appliqué immédiatement sur le site. Cliquez sur <em>« Voir le site »</em> en haut à droite pour vérifier le résultat.
          </p>
        </div>
      </div>

      <nav className="admin-tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === "hero"}
          className={`admin-tab ${tab === "hero" ? "active" : ""}`}
          onClick={() => setTab("hero")}
        >
          Page d&apos;accueil
        </button>
        <button
          role="tab"
          aria-selected={tab === "offers"}
          className={`admin-tab ${tab === "offers" ? "active" : ""}`}
          onClick={() => setTab("offers")}
        >
          Offres
        </button>
      </nav>

      <main className="admin-main">
        {tab === "hero" && (
          <section className="admin-section">
            {heroGroups.map(([groupName, fields]) => (
              <div key={groupName} className="admin-card">
                <h2 className="admin-card-title">{groupName}</h2>
                <div className="admin-fields">
                  {fields.map(({ key, label, type }) => (
                    <label key={key} className={`admin-field ${type === "textarea" ? "admin-field-wide" : ""}`}>
                      <span className="admin-field-label">{label}</span>
                      {type === "textarea" ? (
                        <textarea
                          value={content.hero[key]}
                          rows={3}
                          onChange={(e) => updateHero({ [key]: e.target.value } as Partial<HeroContent>)}
                        />
                      ) : (
                        <input
                          type="text"
                          value={content.hero[key]}
                          onChange={(e) => updateHero({ [key]: e.target.value } as Partial<HeroContent>)}
                        />
                      )}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {tab === "offers" && (
          <section className="admin-section">
            {content.offers.map((offer, i) => (
              <OfferEditor
                key={offer.id}
                offer={offer}
                index={i}
                total={content.offers.length}
                onChange={(patch) => updateOffer(i, patch)}
                onRemove={() => removeOffer(i)}
                onMoveUp={() => moveOffer(i, -1)}
                onMoveDown={() => moveOffer(i, 1)}
              />
            ))}
            <button type="button" className="admin-add-offer" onClick={addOffer}>
              + Ajouter une offre
            </button>
          </section>
        )}
      </main>

      <footer className="admin-footer">
        <div className="admin-footer-note">
          Vos modifications sont sauvegardées dans ce navigateur. Si vous changez d&apos;appareil ou videz l&apos;historique, elles seront perdues.
        </div>
        <button type="button" className="admin-footer-reset" onClick={resetAll}>
          Remettre le contenu d&apos;origine
        </button>
      </footer>

      {toast && (
        <div className="admin-toast" role="status">
          {toast}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Offer editor                                                               */
/* -------------------------------------------------------------------------- */

function OfferEditor({
  offer,
  index,
  total,
  onChange,
  onRemove,
  onMoveUp,
  onMoveDown,
}: {
  offer: Offer;
  index: number;
  total: number;
  onChange: (patch: Partial<Offer>) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}) {
  const updateFeature = (i: number, value: string) => {
    const next = offer.features.map((f, idx) => (idx === i ? value : f));
    onChange({ features: next });
  };
  const addFeature = () => onChange({ features: [...offer.features, "Nouvelle prestation"] });
  const removeFeature = (i: number) => {
    if (offer.features.length <= 1) return;
    onChange({ features: offer.features.filter((_, idx) => idx !== i) });
  };
  const moveFeature = (i: number, dir: -1 | 1) => {
    const t = i + dir;
    if (t < 0 || t >= offer.features.length) return;
    const next = [...offer.features];
    const [item] = next.splice(i, 1);
    next.splice(t, 0, item);
    onChange({ features: next });
  };

  return (
    <div className={`admin-card admin-offer ${offer.featured ? "is-featured" : ""}`}>
      <div className="admin-offer-head">
        <div>
          <span className="admin-offer-eyebrow">Offre {index + 1} sur {total}</span>
          <h2 className="admin-card-title">{offer.name || "Offre"}</h2>
        </div>
        <div className="admin-offer-actions">
          <button type="button" className="admin-icon-btn" onClick={onMoveUp} disabled={index === 0} aria-label="Monter dans la liste" title="Monter dans la liste">
            ↑
          </button>
          <button type="button" className="admin-icon-btn" onClick={onMoveDown} disabled={index === total - 1} aria-label="Descendre dans la liste" title="Descendre dans la liste">
            ↓
          </button>
          <button type="button" className="admin-icon-btn admin-icon-btn-danger" onClick={onRemove} aria-label="Supprimer cette offre" title="Supprimer cette offre">
            ✕
          </button>
        </div>
      </div>

      <div className="admin-fields">
        <label className="admin-field">
          <span className="admin-field-label">Nom de l&apos;offre</span>
          <input
            type="text"
            value={offer.name}
            onChange={(e) => onChange({ name: e.target.value })}
          />
        </label>
        <label className="admin-field">
          <span className="admin-field-label">Étiquette (ex : « Recommandée », « Nouveau »)</span>
          <input
            type="text"
            value={offer.chip}
            onChange={(e) => onChange({ chip: e.target.value })}
          />
        </label>
        <label className="admin-field">
          <span className="admin-field-label">Apparence de la carte</span>
          <select
            className="admin-select"
            value={offer.variant ?? "default"}
            onChange={(e) => onChange({ variant: e.target.value as OfferVariant })}
          >
            <option value="default">Fond sombre : bordure dorée (Classique / Premium)</option>
            <option value="cream">Fond crème : ivoire chaud (Stratégique)</option>
          </select>
        </label>
        <label className="admin-field admin-field-wide">
          <span className="admin-field-label">Phrase d&apos;accroche (sous le nom, en italique)</span>
          <input
            type="text"
            value={offer.pitch}
            onChange={(e) => onChange({ pitch: e.target.value })}
          />
        </label>
        <label className="admin-field">
          <span className="admin-field-label">
            Prix (laissez vide pour ne rien afficher)
          </span>
          <input
            type="text"
            value={offer.price}
            placeholder="Ex : 4 500 € · Sur devis · À partir de 9 800 €"
            onChange={(e) => onChange({ price: e.target.value })}
          />
        </label>
        <label className="admin-field">
          <span className="admin-field-label">Petite mention sous le prix</span>
          <input
            type="text"
            value={offer.priceSuffix}
            placeholder="Ex : HT · TVAC · par mission"
            onChange={(e) => onChange({ priceSuffix: e.target.value })}
          />
        </label>
        <label className="admin-field">
          <span className="admin-field-label">Bouton : texte affiché</span>
          <input
            type="text"
            value={offer.ctaLabel}
            onChange={(e) => onChange({ ctaLabel: e.target.value })}
          />
        </label>
        <label className="admin-field">
          <span className="admin-field-label">Bouton : page de destination</span>
          <input
            type="text"
            value={offer.ctaHref}
            onChange={(e) => onChange({ ctaHref: e.target.value })}
          />
        </label>
        <label className="admin-field admin-field-wide">
          <span className="admin-field-label">Mention en bas de la carte</span>
          <input
            type="text"
            value={offer.meta}
            onChange={(e) => onChange({ meta: e.target.value })}
          />
        </label>
      </div>

      <div className="admin-features">
        <div className="admin-features-head">
          <h3>Prestations incluses</h3>
          <button type="button" className="admin-btn admin-btn-ghost admin-btn-small" onClick={addFeature}>
            + Ajouter une ligne
          </button>
        </div>
        <ul className="admin-features-list">
          {offer.features.map((feat, fi) => (
            <li key={fi} className="admin-feature-row">
              <span className="admin-feature-num">{fi + 1}</span>
              <input
                type="text"
                value={feat}
                onChange={(e) => updateFeature(fi, e.target.value)}
              />
              <div className="admin-feature-row-actions">
                <button
                  type="button"
                  className="admin-icon-btn"
                  onClick={() => moveFeature(fi, -1)}
                  disabled={fi === 0}
                  aria-label="Monter cette ligne"
                  title="Monter cette ligne"
                >
                  ↑
                </button>
                <button
                  type="button"
                  className="admin-icon-btn"
                  onClick={() => moveFeature(fi, 1)}
                  disabled={fi === offer.features.length - 1}
                  aria-label="Descendre cette ligne"
                  title="Descendre cette ligne"
                >
                  ↓
                </button>
                <button
                  type="button"
                  className="admin-icon-btn admin-icon-btn-danger"
                  onClick={() => removeFeature(fi)}
                  disabled={offer.features.length <= 1}
                  aria-label="Supprimer cette ligne"
                  title="Supprimer cette ligne"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
