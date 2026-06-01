"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import Link from "next/link";
import { useIsMobile } from "./useIsMobile";

const PROJECT_OPTIONS = [
  { value: "cession", label: "Je souhaite céder mon entreprise" },
  { value: "reprise", label: "Je souhaite reprendre une entreprise" },
  { value: "pilotage", label: "Je cherche un accompagnement mensuel" },
] as const;

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="1.5" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export default function ContactPageClient() {
  const isMobile = useIsMobile(768);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sent, setSent] = useState(false);
  const [project, setProject] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, [isMobile]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setSent(true);
  };

  return (
    <div className="contact-page-wrap">
      {/* Vidéo background plein écran */}
      <div className="contact-video-bg" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src={isMobile ? "/hero-video-mobile.mp4" : "/hero-video-desktop.mp4"}
        />
        <div className="contact-video-overlay" />
      </div>

      <div className="contact-page-inner">
        {/* Colonne gauche — infos de contact */}
        <div className="contact-info-col">
          <span className="section-label" style={{ color: "var(--gold-main)" }}>Contact</span>
          <h1 className="contact-page-title">
            Parlons de<br />
            <em>votre projet.</em>
          </h1>
          <p className="contact-page-sub">
            Premier échange confidentiel, sans engagement. Nous prenons le temps de comprendre votre situation avant tout.
          </p>

          <div className="contact-info-items">
            <a href="tel:+262692188928" className="contact-info-item">
              <span className="contact-info-ico"><PhoneIcon /></span>
              <div>
                <span className="contact-info-label">Téléphone</span>
                <span className="contact-info-value">+262 692 18 89 28</span>
              </div>
            </a>
            <a href="mailto:contact@elityconseils.re" className="contact-info-item">
              <span className="contact-info-ico"><MailIcon /></span>
              <div>
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">contact@elityconseils.re</span>
              </div>
            </a>
          </div>

        </div>

        {/* Colonne droite — formulaire */}
        <div className="contact-form-col">
          {sent ? (
            <div className="contact-success" role="status">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="22" stroke="var(--gold-main)" strokeWidth="1.5" />
                <path d="M14 24l8 8 12-14" stroke="var(--gold-main)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2>Demande envoyée.</h2>
              <p>Nous vous recontactons sous 24h en toute confidentialité.</p>
              <Link href="/" className="contact-success-back">Retour à l&apos;accueil</Link>
            </div>
          ) : (
            <form className="contact-form-v2" onSubmit={onSubmit} noValidate>
              <h2 className="contact-form-title">Votre situation</h2>

              {/* Type de projet */}
              <div className="contact-project-choice">
                {PROJECT_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className={`contact-project-opt ${project === opt.value ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="project"
                      value={opt.value}
                      required
                      onChange={() => setProject(opt.value)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>

              <div className="contact-form-grid">
                <div className="contact-form-field">
                  <label htmlFor="cf-firstname">Prénom</label>
                  <input type="text" id="cf-firstname" name="firstname" placeholder="Votre prénom" required />
                </div>
                <div className="contact-form-field">
                  <label htmlFor="cf-lastname">Nom</label>
                  <input type="text" id="cf-lastname" name="lastname" placeholder="Votre nom" required />
                </div>
                <div className="contact-form-field">
                  <label htmlFor="cf-email">Email</label>
                  <input type="email" id="cf-email" name="email" placeholder="vous@entreprise.com" required />
                </div>
                <div className="contact-form-field">
                  <label htmlFor="cf-phone">Téléphone</label>
                  <input type="tel" id="cf-phone" name="phone" placeholder="+262 692..." required />
                </div>
                <div className="contact-form-field full">
                  <label htmlFor="cf-sector">Secteur d&apos;activité</label>
                  <input type="text" id="cf-sector" name="sector" placeholder="BTP, commerce, services, restauration…" required />
                </div>
                <div className="contact-form-field full">
                  <label htmlFor="cf-message">Votre situation en quelques mots</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    placeholder="Où en êtes-vous ? Quel est votre objectif ? Quel délai envisagez-vous ?"
                    required
                  />
                </div>
              </div>

              <label className="contact-form-check">
                <input type="checkbox" required />
                <span>J&apos;accepte que mes données soient utilisées dans le cadre de mon accompagnement chez Elity Conseils, en toute confidentialité.</span>
              </label>

              <button type="submit" className="contact-form-submit">
                Envoyer ma demande
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
              <p className="contact-form-reassurance">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" style={{ width: 13, height: 13, flexShrink: 0 }}>
                  <rect x="5" y="11" width="14" height="10" rx="1.5" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                Confidentialité garantie par écrit
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
