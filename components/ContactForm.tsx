"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = new FormData(form);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setSent(true);
        requestAnimationFrame(() => {
          document.getElementById("formSuccess")?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        });
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div id="formSuccess" className="form-success" role="status" aria-live="polite">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l3 3 5-6" />
        </svg>
        <h3>Votre demande a bien été envoyée.</h3>
        <p>Nous vous recontacterons sous 24h en toute confidentialité.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="access_key" value="12817e2f-68b1-438e-974d-bc0bdd8d602f" />
      <input type="hidden" name="subject" value="Nouvelle demande de contact - Elity Conseils" />
      <input type="hidden" name="from_name" value="Elity Conseils - Site web" />
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="firstname">Prénom</label>
          <input type="text" id="firstname" name="firstname" placeholder="Votre prénom" required />
        </div>
        <div className="form-field">
          <label htmlFor="lastname">Nom</label>
          <input type="text" id="lastname" name="lastname" placeholder="Votre nom" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email professionnel</label>
          <input type="email" id="email" name="email" placeholder="exemple@entreprise.com" required />
        </div>
        <div className="form-field full">
          <label htmlFor="sector">Secteur d'activité</label>
          <input type="text" id="sector" name="sector" placeholder="BTP, commerce, services, restauration…" required />
        </div>
        <div className="form-field full">
          <label htmlFor="message">Votre situation</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Décrivez brièvement votre projet et où vous en êtes…"
            required
          />
        </div>
      </div>

      <label className="form-checkbox">
        <input type="checkbox" required />
        <span>
          J'accepte que mes données soient utilisées dans le cadre de mon accompagnement chez Elity Conseils.
        </span>
      </label>

      {error && (
        <p className="form-error" role="alert">{error}</p>
      )}

      <button type="submit" className="form-submit" disabled={loading}>
        {loading ? "Envoi en cours…" : "Envoyer ma demande confidentielle"}
      </button>

      <p className="form-note">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="11" width="14" height="10" rx="1.5" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
        Vos informations sont strictement confidentielles.
      </p>
    </form>
  );
}
