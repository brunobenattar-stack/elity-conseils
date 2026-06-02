import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Bricolage_Grotesque } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import LenisProvider from "@/components/LenisProvider";
import { ContentProvider } from "@/lib/ContentProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elity-conseils.com"),
  title: {
    default: "Elity Conseils : Cabinet de Conseil en Cession d'Entreprise | La Réunion",
    template: "%s | Elity Conseils",
  },
  description:
    "Elity Conseils, cabinet de conseil en cession d'entreprise à La Réunion. Approche stratégique, confidentielle et sur-mesure pour valoriser et céder votre entreprise dans les meilleures conditions. Partenaire Procom Océan Indien.",
  keywords: [
    "cession entreprise",
    "vente entreprise",
    "La Réunion",
    "conseil dirigeant",
    "valorisation entreprise",
    "Procom Océan Indien",
    "cabinet conseil",
    "transmission entreprise",
  ],
  authors: [{ name: "Bruno Benattar" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Elity Conseils",
    title: "Elity Conseils : Structurer votre cession avant de la lancer",
    description:
      "Approche stratégique pour valoriser votre entreprise et la céder dans les meilleures conditions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-elity.png",
    apple: "/logo-elity.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${montserrat.variable} ${bricolage.variable}`}>
      <body>
        <ContentProvider>
          <LenisProvider>
            <SiteChrome>{children}</SiteChrome>
          </LenisProvider>
        </ContentProvider>
      </body>
    </html>
  );
}
