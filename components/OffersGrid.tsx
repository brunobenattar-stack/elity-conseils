import Reveal from "./Reveal";
import { IconHandshake, IconKnight, IconDiamond } from "./icons";

export default function OffersGrid() {
  return (
    <div className="offers-grid">
      <Reveal as="article" className="offer offer-classique" delay={100}>
        <span className="offer-badge">Classique</span>
        <div className="offer-icon">
          <IconHandshake />
        </div>
        <p className="offer-pitch">Pour vendre simplement.</p>
        <div className="offer-sep" />

        <p className="offer-mission-label">Notre mission</p>
        <ul className="offer-list">
          <li>Mise en vente de votre entreprise</li>
          <li>Diffusion auprès du réseau d'acquéreurs qualifiés Procom</li>
          <li>Organisation des visites</li>
          <li>Négociation et accompagnement jusqu'à la signature</li>
        </ul>

        <p className="offer-for">
          <strong>Pour qui ?</strong>
          Dirigeants souhaitant vendre leur entreprise avec un accompagnement axé sur la mise en relation et la négociation.
        </p>
        <div className="offer-footer">
          Mise en transaction :<br />Procom Océan Indien
        </div>
      </Reveal>

      <Reveal as="article" className="offer offer-strategique" delay={200}>
        <span className="offer-badge">Stratégique</span>
        <div className="offer-icon">
          <IconKnight />
        </div>
        <p className="offer-pitch">Pour vendre intelligemment.</p>
        <div className="offer-sep" />

        <p className="offer-mission-label">Notre mission</p>
        <ul className="offer-list">
          <li>Diagnostic complet de votre entreprise</li>
          <li>Positionnement stratégique</li>
          <li>Valorisation réaliste et argumentée</li>
          <li>Préparation du dossier de cession (teaser, mémorandum, data room)</li>
          <li>Recherche d'acquéreurs ciblés</li>
          <li>Conseil et accompagnement jusqu'à la décision</li>
        </ul>

        <p className="offer-for">
          <strong>Pour qui ?</strong>
          Dirigeants souhaitant sécuriser, valoriser et optimiser leur cession grâce à une préparation stratégique.
        </p>
        <div className="offer-footer">
          Structuration stratégique : Elity Conseils<br />
          + Mise en transaction : Procom Océan Indien
        </div>
      </Reveal>

      <Reveal as="article" className="offer offer-premium" delay={300}>
        <div className="offer-ribbon">Recommandée</div>
        <span className="offer-badge">Premium</span>
        <div className="offer-icon">
          <IconDiamond />
        </div>
        <p className="offer-pitch">Pour vendre dans les meilleures conditions.</p>
        <div className="offer-sep" />

        <p className="offer-mission-label">Notre mission</p>
        <ul className="offer-list">
          <li>Stratégie de cession sur-mesure</li>
          <li>Structuration et valorisation complète</li>
          <li>Valorisation et optimisation du dossier</li>
          <li>Mise en vente confidentielle</li>
          <li>Négociation et sécurisation des conditions</li>
          <li>Accompagnement du dirigeant jusqu'à la finalisation et au-delà</li>
        </ul>

        <p className="offer-for">
          <strong>Pour qui ?</strong>
          Dirigeants souhaitant être accompagnés de A à Z avec une approche premium, personnalisée et confidentielle.
        </p>
        <div className="offer-footer">
          Structuration stratégique : Elity Conseils<br />
          + Mise en transaction : Procom Océan Indien
        </div>
      </Reveal>
    </div>
  );
}
