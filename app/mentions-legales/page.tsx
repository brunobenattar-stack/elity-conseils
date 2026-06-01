import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Elity Conseils.",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Mentions légales" }]}
        title={<>Mentions légales</>}
        subtitle="Informations légales relatives au site Elity Conseils."
      />

      <section className="section">
        <div className="container">
          <Reveal className="legal-page">
            <h2>Éditeur du site</h2>
            <p>
              <strong>Elity Conseils</strong><br />
              Bruno Benattar, conseil en cession d'entreprise<br />
              La Réunion, France<br />
              Téléphone : <a href="tel:+262692188928">+262 692 18 89 28</a><br />
              Email : <a href="mailto:contact@elityconseils.re">contact@elityconseils.re</a>
            </p>

            <h2>Directeur de la publication</h2>
            <p>Bruno Benattar.</p>

            <h2>Hébergement</h2>
            <p>
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
              <a href="https://vercel.com">vercel.com</a>
            </p>

            <h2>Partenariat</h2>
            <p>
              Elity Conseils opère en partenariat avec <strong>Procom Océan Indien</strong>, réseau national Transactions Commerces & Entreprises, pour la mise en transaction des dossiers de cession.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, logos, identité visuelle, photographies, infographies) sont protégés par les lois en vigueur sur la propriété intellectuelle. Toute reproduction, représentation, modification ou exploitation sans autorisation préalable est interdite.
            </p>

            <h2>Limitations de responsabilité</h2>
            <p>
              Les informations diffusées sur ce site sont communiquées à titre informatif. Elity Conseils ne peut être tenu responsable d'éventuelles erreurs, omissions ou des conséquences résultant de l'utilisation de ces informations.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Le présent site est soumis au droit français. Tout litige relatif à son utilisation relève de la compétence des tribunaux français.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
