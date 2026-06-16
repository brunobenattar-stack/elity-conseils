import Link from "next/link";
import Image from "next/image";

// Logo du footer : meme lockup image que le header, mais version avec contours blancs.
export default function LogoMark() {
  return (
    <Link href="/" className="logo" aria-label="Elity Conseils, Accueil">
      <Image
        src="/logo-elity-full-bordered.png"
        alt="Elity Conseils"
        width={1280}
        height={500}
        className="logo-lockup"
      />
    </Link>
  );
}
