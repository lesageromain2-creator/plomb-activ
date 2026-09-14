import type { Metadata } from "next";
import { Barlow, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalTrustBand from "@/components/LocalTrustBand";

const fontHeading = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});
const fontBody = Open_Sans({ subsets: ["latin"], variable: "--font-body" });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "PLOMB'ACTIV — Plombier à Caluire-et-Cuire",
  description:
    "Plombier de proximité à Caluire-et-Cuire (69300). Dépannage, réseaux, sanitaires, salle de bain, détartrage. Devis gratuit. Rayon 10 km : Lyon, Villeurbanne, Monts d'Or.",
  keywords: [
    "plombier Caluire",
    "plombier Caluire-et-Cuire",
    "dépannage plomberie",
    "PLOMB'ACTIV",
  ],
  openGraph: {
    title: "PLOMB'ACTIV — Plombier à Caluire-et-Cuire",
    description: "Artisan local, devis gratuit, intervention dans un rayon de 10 km.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col min-h-0">{children}</main>
        <LocalTrustBand />
        <Footer />
      </body>
    </html>
  );
}
