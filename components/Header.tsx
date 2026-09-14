"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { brand } from "@/lib/siteCopy";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/urgences", label: "Urgences" },
  { href: "/entretien", label: "Chauffage" },
  { href: "/pac-clim", label: "Clim" },
  { href: "/avis", label: "Avis" },
  { href: "/devis", label: "Devis" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src="/images/logo.png"
            alt={`${brand.name} — logo`}
            width={44}
            height={44}
            className="rounded-full ring-1 ring-primary/20 shrink-0 object-cover"
            priority
          />
          <span className="flex flex-col min-w-0">
            <span className="font-heading text-xl font-semibold text-primary leading-tight">{brand.name}</span>
            <span className="text-[11px] text-gray-500 hidden sm:block">GHOULI Foued — Caluire &amp; Lyon</span>
          </span>
        </Link>
        <nav className="hidden lg:flex flex-wrap items-center justify-end gap-x-4 text-sm">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-700 hover:text-primary font-medium">
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={brand.phoneHref}
          className="hidden md:inline rounded-lg bg-red-600 text-white px-3 py-2 text-sm font-semibold hover:opacity-90 shrink-0"
        >
          {brand.phone}
        </a>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-primary/10 bg-white px-4 py-4 flex flex-col gap-2">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-700 hover:text-primary font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href={brand.phoneHref} className="text-red-600 font-semibold">
            Appeler {brand.phone}
          </a>
          <a href={`mailto:${brand.email}`} className="text-primary font-medium">
            {brand.email}
          </a>
        </div>
      )}
    </header>
  );
}
