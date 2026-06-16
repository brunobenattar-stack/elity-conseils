import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Elity Conseils, Accueil">
      <Image
        src="/logo-elity-full.png"
        alt="Elity Conseils, Approche stratégique"
        width={956}
        height={362}
        className="logo-lockup"
        priority
      />
    </Link>
  );
}
