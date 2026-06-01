import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Nos Partenaires : Le réseau de confiance Elity Conseils",
  description:
    "Elity Conseils opère en réseau avec des acteurs spécialisés à La Réunion et dans l'Océan Indien : expertise-comptable, juridique, financement et transmission. Des partenariats sélectionnés pour leur exigence.",
};

type Partner = {
  initials: string;
  name: string;
  specialty: string;
  description: string;
  location: string;
  website?: string;
};

const PARTNERS: Partner[] = [
  {
    initials: "PO",
    name: "Procom Océan Indien",
    specialty: "Expertise-comptable & conseil",
    description:
      "Cabinet d'expertise-comptable de référence à La Réunion. Procom accompagne les dirigeants de TPE/PME sur les volets comptables, fiscaux et financiers. Un partenaire naturel pour garantir la fiabilité des données présentées lors d'une cession ou d'un rachat.",
    location: "La Réunion",
    website: "https://www.procom-oi.re",
  },
];

export default function NosPartenairesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Nos Partenaires" }]}
        title={
          <>
            Un réseau construit<br />
            <em>sur la confiance et l&apos;exigence.</em>
          </>
        }
        subtitle="Elity Conseils ne travaille pas seul. Certaines expertises (juridique, comptable, financement) nécessitent des spécialistes pointus. Nos partenaires sont choisis sur un seul critère : leur capacité à servir vos intérêts avec la même rigueur que nous."
        meta="Partenaires sélectionnés"
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Pourquoi ce réseau</span>
            <div className="section-sep" />
            <h2 className="section-title">Des expertises complémentaires,<br />un seul niveau d&apos;exigence.</h2>
            <p className="section-body" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
              Une cession ou un rachat mobilise des compétences multiples : évaluation financière, audit juridique, conseil fiscal, accompagnement RH. Elity coordonne et sélectionne les bons interlocuteurs, pour que vous n&apos;ayez qu&apos;un seul point d&apos;entrée.
            </p>
          </Reveal>

          <div className="partners-grid">
            {PARTNERS.map((p) => (
              <Reveal key={p.name} className="partner-card">
                <div className="partner-card-logo" aria-hidden="true">
                  <span>{p.initials}</span>
                </div>
                <div className="partner-card-body">
                  <div className="partner-card-top">
                    <div>
                      <h3 className="partner-card-name">{p.name}</h3>
                      <span className="partner-card-tag">{p.specialty}</span>
                    </div>
                    <span className="partner-card-location">{p.location}</span>
                  </div>
                  <p className="partner-card-desc">{p.description}</p>
                  {p.website && (
                    <a
                      href={p.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="partner-card-link"
                    >
                      Visiter le site
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal>
            <p className="pull-quote">
              Bien s&apos;entourer n&apos;est pas une faiblesse.<br />
              <em>C&apos;est une décision de dirigeant.</em>
            </p>
          </Reveal>
          <Reveal>
            <div className="partner-become">
              <span className="section-label">Travailler ensemble</span>
              <div className="section-sep" />
              <h2 className="section-title" style={{ fontSize: "clamp(22px, 2.5vw, 30px)", marginBottom: 16 }}>
                Vous intervenez auprès<br />des dirigeants de TPE/PME ?
              </h2>
              <p className="partner-become-desc">
                Si votre activité est complémentaire à l&apos;accompagnement stratégique (expertise-comptable, juridique, financement, transmission) et que vous partagez la même exigence de service, nous sommes ouverts à une discussion.
              </p>
              <Link href="/contact" className="btn btn-ghost" style={{ marginTop: 28 }}>
                Nous contacter
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title={
          <>
            Une question sur notre réseau<br />
            <em>ou sur une mise en relation&nbsp;?</em>
          </>
        }
        text="Chaque accompagnement est différent. Si vous avez besoin d'un expert spécifique, nous vous orientons vers le bon interlocuteur."
      />
    </>
  );
}
