import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Elity Conseils, Accueil">
      <Image
        src="/logo-elity.png"
        alt=""
        width={38}
        height={38}
        className="logo-mark"
        priority
      />
      <span className="logo-text">
        <span className="logo-name">ELITY</span>
        <span className="logo-sub">CONSEILS</span>
      </span>
    </Link>
  );
}
