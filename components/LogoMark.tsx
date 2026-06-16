import Link from "next/link";
import Image from "next/image";

// Ancien logo (compass + texte HTML) : utilise dans le footer.
export default function LogoMark() {
  return (
    <Link href="/" className="logo" aria-label="Elity Conseils, Accueil">
      <Image
        src="/logo-elity.png"
        alt=""
        width={184}
        height={184}
        className="logo-mark"
      />
      <span className="logo-text">
        <span className="logo-name">ELITY</span>
        <span className="logo-sub">
          <span className="dash" aria-hidden="true" />
          CONSEILS
          <span className="dash" aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}
