import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données, Elity Conseils.",
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Confidentialité" }]}
        title={<>Politique de confidentialité</>}
        subtitle="Notre engagement sur la protection et l'usage de vos données."
      />

      <section className="section">
        <div className="container">
          <Reveal className="legal-page">
            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est la <strong>SAS Elity Conseils</strong> (SIREN 902 290 147), représentée par Bruno Ben Attar, dont le siège est situé 15 Ruelle 46, 97436 Saint-Leu, La Réunion. Pour toute question relative à vos données, contactez-nous à <a href="mailto:contact@elityconseils.re">contact@elityconseils.re</a>.
            </p>

            <h2>2. Données collectées</h2>
            <p>Dans le cadre du formulaire de contact, nous collectons les données suivantes :</p>
            <ul>
              <li>Prénom et nom</li>
              <li>Email professionnel</li>
              <li>Numéro de téléphone</li>
              <li>Secteur d'activité</li>
              <li>Description de votre situation (champ libre)</li>
            </ul>

            <h2>3. Finalité du traitement</h2>
            <p>
              Le formulaire de contact sert uniquement à permettre à <strong>Bruno Benattar et son équipe</strong> de vous recontacter, d'échanger sur votre situation et de vous proposer un accompagnement adapté (cession, acquisition ou pilotage). Vos données ne sont utilisées à aucune autre fin : ni démarchage commercial, ni publicité, ni revente.
            </p>

            <h2>4. Confidentialité</h2>
            <p>
              <strong>Vos informations sont strictement confidentielles.</strong> Elles ne sont jamais cédées, vendues ou transmises à des tiers, à l'exception de notre partenaire Procomm Océan Indien lorsque la mise en transaction le nécessite et avec votre accord explicite.
            </p>

            <h2>5. Durée de conservation</h2>
            <p>
              Les données sont conservées pendant la durée de la relation commerciale, puis archivées conformément aux obligations légales. Vous pouvez demander leur suppression à tout moment.
            </p>

            <h2>6. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
            <p>
              Pour exercer ces droits, écrivez à <a href="mailto:contact@elityconseils.re">contact@elityconseils.re</a>.
            </p>

            <h2>7. Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de tracking ni d'outils d'analyse tiers. Aucune donnée comportementale n'est collectée à votre insu.
            </p>

            <h2>8. Sécurité</h2>
            <p>
              Nous mettons en œuvre les mesures techniques et organisationnelles nécessaires pour garantir la sécurité de vos données contre tout accès non autorisé, altération ou divulgation.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
