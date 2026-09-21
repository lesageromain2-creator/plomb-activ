import type { Metadata } from "next";
import { Barlow, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalTrustBand from "@/components/LocalTrustBand";
import JsonLd from "@/components/JsonLd";
import StickyCall from "@/components/StickyCall";
import { brand } from "@/lib/siteCopy";

const fontHeading = Barlow({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
});
const fontBody = Open_Sans({ subsets: ["latin"], variable: "--font-body" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || brand.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Plombier Caluire-et-Cuire Lyon | PLOMB'ACTIV — dépannage, chaudière, clim",
    template: "%s | PLOMB'ACTIV Caluire",
  },
  description:
    "PLOMB'ACTIV, plombier à Caluire-et-Cuire (130 Grande rue de Saint Clair). Recherche de fuite, débouchage, ballon ECS, chaudière gaz, split. 06 67 44 79 29. Fiche Google 5,0/5.",
  keywords: [
    "plombier Caluire-et-Cuire",
    "plombier Lyon",
    "plombier Caluire",
    "dépannage plomberie Lyon",
    "urgence plombier Lyon",
    "recherche de fuite Lyon",
    "débouchage canalisation Caluire",
    "chauffagiste Caluire",
    "chaudière gaz Lyon",
    "ballon eau chaude Caluire",
    "climatisation split Lyon",
    "dégât des eaux Lyon",
    "PLOMB'ACTIV",
  ],
  authors: [{ name: "PLOMB'ACTIV" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "PLOMB'ACTIV",
    title: "Plombier Caluire & Lyon — PLOMB'ACTIV, dépannage 7j/7",
    description:
      "PLOMB'ACTIV. Recherche de fuite, sanitaires, ECS, chaudière, clim. 130 Grande rue de Saint Clair, Caluire. 06 67 44 79 29.",
    images: [{ url: "/images/chantier/hero.jpg", width: 1200, height: 800, alt: "PLOMB'ACTIV plomberie Caluire" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="antialiased bg-cream text-gray-900 min-h-screen flex flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1 flex flex-col min-h-0">{children}</main>
        <LocalTrustBand />
        <Footer />
        <StickyCall />
      </body>
    </html>
  );
}
