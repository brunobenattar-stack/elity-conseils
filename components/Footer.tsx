import Link from "next/link";
import Logo from "./Logo";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 18H6V10h2.5v8zM7.2 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18 18h-2.5v-4c0-1-.4-1.6-1.3-1.6-.8 0-1.2.5-1.4 1V18H10V10h2.5v1c.4-.6 1.3-1.4 2.6-1.4 1.9 0 2.9 1 2.9 3.3V18z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid footer-grid-v3">
          <div className="footer-brand">
            <Logo />
            <p className="footer-tagline">Structurer aujourd&apos;hui. Valoriser demain.</p>
            <p className="footer-partner">En partenariat avec Procomm Océan Indien</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/brunobenattar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Bruno Benattar">
                <LinkedInIcon />
              </a>
              <a href="https://www.facebook.com/ElityConseil" target="_blank" rel="noopener noreferrer" aria-label="Facebook Elity Conseil">
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/approche">Notre Approche</Link></li>
              <li><Link href="/offres">Nos Offres</Link></li>
              <li><Link href="/offres#pilotage">Accompagnement mensuel</Link></li>
              <li><Link href="/methode-essor">Méthode ESSOR</Link></li>
              <li><Link href="/cas-clients">Cas clients</Link></li>
              <li><Link href="/actualites">Actualités</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/a-propos">À Propos</Link></li>
              <li><Link href="/nos-partenaires">Nos Partenaires</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-col-contact">
            <h4>Nous contacter</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:contact@elityconseils.re">
                  <span className="footer-contact-ico" aria-hidden="true"><MailIcon /></span>
                  <span>contact@elityconseils.re</span>
                </a>
              </li>
            </ul>
            <Link href="/contact" scroll={true} className="footer-contact-cta">
              Entamer un échange
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Elity Conseils, Approche Stratégique. Tous droits réservés.</p>
          <div className="legal">
            <Link href="/confidentialite">Confidentialité</Link>
            <Link href="/mentions-legales">Mentions légales</Link>
          </div>
        </div>

        <div className="footer-credit">
          <span className="footer-credit-line" aria-hidden="true" />
          <span>
            Créé par{" "}
            <a
              href="https://fondationstudio.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Fondation Studio.fr
            </a>
          </span>
          <span className="footer-credit-line" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}
