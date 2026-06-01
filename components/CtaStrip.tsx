import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  text?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CtaStrip({
  title,
  text,
  ctaLabel = "Entamer un échange",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="cta-strip">
      <div className="container">
        <div className="cta-strip-inner">
          <div>
            <h3>{title}</h3>
            {text && <p>{text}</p>}
          </div>
          <Link href={ctaHref} className="btn btn-primary">
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
