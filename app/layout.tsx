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
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});
const fontBody = Open_Sans({ subsets: ["latin"], variable: "--font-body" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || brand.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Plombier Lyon Caluire | PLOMB'ACTIV — GHOULI Foued urgence dépannage",
    template: "%s | PLOMB'ACTIV Caluire Lyon",
  },
  description:
    "GHOULI Foued, plombier chauffagiste à Caluire-et-Cuire (QVR5+49). Urgence et dépannage Lyon : plomberie, chauffage, climatisation, chaudière, pose et entretien de clim. 07 65 26 65 26 · 5,0/5 Google.",
  keywords: [
    "plombier Lyon",
    "plombier Caluire",
    "plombier Caluire-et-Cuire",
    "dépannage plomberie Lyon",
    "urgence plombier Lyon",
    "chauffagiste Lyon",
    "chauffagiste Caluire",
    "chaudière Lyon",
    "remplacement chaudière Vaillant",
    "climatisation Lyon",
    "pose clim Caluire",
    "entretien clim Lyon",
    "chauffe-eau Lyon",
    "fuite d'eau Lyon",
    "PLOMB'ACTIV",
    "GHOULI Foued",
  ],
  authors: [{ name: "GHOULI Foued" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "PLOMB'ACTIV",
    title: "Plombier Lyon · Caluire — PLOMB'ACTIV, urgence 7j/7",
    description:
      "GHOULI Foued, artisan à Caluire. Plomberie, chauffage, clim, chaudière, dépannage. Appelez le 07 65 26 65 26.",
    images: [{ url: "/images/hero.png", width: 1920, height: 1080, alt: "PLOMB'ACTIV plomberie Caluire Lyon" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col">
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
