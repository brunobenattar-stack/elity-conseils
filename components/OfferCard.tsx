import Link from "next/link";

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);

export type OfferCardData = {
  id: string;
  name: string;
  pitch: string;
  chip?: string;
  features: string[];
  meta: string;
  details: string;
  variant?: "default" | "cream";
  featured?: boolean;
};

export default function OfferCard({ offer }: { offer: OfferCardData }) {
  return (
    <article
      className={`offer-card-shell offer-card-${offer.variant ?? "default"} ${offer.featured ? "featured" : ""}`}
    >
      <div className="offer-card-head">
        <div className="offer-card-top">
          <div className="offer-card-title-block">
            <h3 className="offer-card-name">{offer.name}</h3>
            <p className="offer-card-pitch">{offer.pitch}</p>
          </div>
          {offer.chip && <span className="offer-card-chip">{offer.chip}</span>}
        </div>

        <Link href="/contact" className="offer-card-cta">
          Prendre contact
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="offer-card-body">
        <ul className="offer-card-features">
          {offer.features.map((f, i) => (
            <li key={`${offer.id}-${i}`}>
              <Check />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <p className="offer-card-detail-text">{offer.details}</p>

        <div className="offer-card-footer-meta">{offer.meta}</div>
      </div>
    </article>
  );
}
