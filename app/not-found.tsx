import Link from "next/link";
import CompassVisual from "@/components/CompassVisual";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="line" />
              <span>Erreur 404</span>
            </div>
            <h1 className="hero-title">
              Cette page n'existe pas.<br />
              <em>Mais le cap, lui, reste clair.</em>
            </h1>
            <p className="hero-sub">
              La page que vous cherchez a peut-être été déplacée, ou n'a jamais existé. Revenons à l'essentiel.
            </p>
            <div className="hero-divider" />
            <div className="hero-ctas">
              <Link href="/" className="btn btn-primary">
                Retour à l'accueil <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="btn-underline">
                Nous contacter
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <CompassVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
