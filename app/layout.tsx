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
  metadataBase: new URL("https://elityconseil.re"),
  alternates: { canonical: "/" },
  title: {
    default: "Elity Conseils : Cabinet de Conseil en Cession d'Entreprise | La Réunion",
    template: "%s | Elity Conseils",
  },
  description:
    "Elity Conseils, cabinet de conseil en cession d'entreprise à La Réunion. Approche stratégique, confidentielle et sur-mesure pour valoriser et céder votre entreprise dans les meilleures conditions. Partenaire Procomm Océan Indien.",
  keywords: [
    "cession entreprise",
    "vente entreprise",
    "La Réunion",
    "conseil dirigeant",
    "valorisation entreprise",
    "Procomm Océan Indien",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Elity Conseils",
              description:
                "Cabinet de conseil en cession, acquisition et accompagnement de dirigeant(e) à La Réunion. Approche stratégique pour valoriser et céder votre entreprise.",
              url: "https://elityconseil.re",
              telephone: "+262692188928",
              email: "contact@elityconseils.re",
              founder: { "@type": "Person", name: "Bruno Ben Attar" },
              address: {
                "@type": "PostalAddress",
                streetAddress: "15 Ruelle 46",
                addressLocality: "Saint-Leu",
                postalCode: "97436",
                addressRegion: "La Réunion",
                addressCountry: "RE",
              },
              areaServed: "La Réunion, Océan Indien",
              vatID: "FR93902290147",
              taxID: "90229014700013",
            }),
          }}
        />
        <ContentProvider>
          <LenisProvider>
            <SiteChrome>{children}</SiteChrome>
          </LenisProvider>
        </ContentProvider>
      </body>
    </html>
  );
}
