import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

type Props = {
  title?: ReactNode;
  text?: ReactNode;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/**
 * Section CTA finale : exactement la meme que sur la page d'accueil
 * (.cta-photo, juste avant le footer). Reutilisee sur toutes les pages
 * sauf Contact pour une cloture coherente sur tout le site.
 */
export default function CtaFinal({
  title,
  text = "Premier échange confidentiel et sans engagement.",
  secondaryLabel = "Découvrir la méthode",
  secondaryHref = "/approche",
}: Props) {
  return (
    <section className="cta-photo">
      <div className="container">
        <Reveal>
          <h2>
            {title ?? (
              <>
                Cession ou rachat ?<br />
                <em>Parlons-en.</em>
              </>
            )}
          </h2>
          <p>{text}</p>
          <div className="cta-photo-btns">
            <MagneticButton href="/contact">
              Entamer un échange
              <span aria-hidden="true">→</span>
            </MagneticButton>
            <Link href={secondaryHref} className="cta-photo-btn-secondary">
              <span>{secondaryLabel}</span>
              <span className="cta-photo-btn-secondary-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
