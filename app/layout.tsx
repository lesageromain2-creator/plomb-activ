import type { Metadata } from "next";
import { Barlow, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalTrustBand from "@/components/LocalTrustBand";
import BrandCard from "@/components/BrandCard";
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
    default: "Plombier Caluire-et-Cuire et Lyon | PLOMB'ACTIV",
    template: "%s | PLOMB'ACTIV",
  },
  description:
    "Appelez directement nos experts chez PLOMB'ACTIV au 06 67 44 79 29. Dépannage plomberie, chauffage et clim à Caluire-et-Cuire, Lyon, Villeurbanne et le Grand Lyon. Devis gratuit.",
  authors: [{ name: "PLOMB'ACTIV" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "PLOMB'ACTIV",
    title: "Plombier Caluire-et-Cuire et Lyon | PLOMB'ACTIV",
    description:
      "Appelez directement nos experts chez PLOMB'ACTIV au 06 67 44 79 29. Plomberie, chauffage, clim. Caluire, Lyon, Grand Lyon. Devis gratuit.",
    images: [{ url: "/images/chantier/hero-landing-v3.jpg", width: 1920, height: 1080, alt: "PLOMB'ACTIV, pose de chauffe-eau Caluire Lyon" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  verification: {
    google: "aqpn7M3cGn6N6rg19DzZpuTRFav1A93IdTsIlP87eC4",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="antialiased bg-cream text-gray-900 min-h-screen flex flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1 flex flex-col min-h-0">{children}</main>
        <LocalTrustBand />
        <BrandCard />
        <Footer />
        <StickyCall />
      </body>
    </html>
  );
}
