import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Elity Conseils, Accueil">
      <Image
        src="/logo-elity-full.png"
        alt="Elity Conseils"
        width={1280}
        height={500}
        className="logo-lockup"
        priority
      />
    </Link>
  );
}
