"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { brand } from "@/lib/siteCopy";
import { navLinks } from "@/lib/nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src="/images/logo.png"
            alt={`Logo ${brand.name}`}
            width={44}
            height={44}
            className="rounded-md ring-1 ring-black/10 shrink-0 object-cover"
            priority
          />
          <span className="flex flex-col min-w-0">
            <span className="font-heading text-lg font-bold text-primary leading-tight tracking-tight">{brand.name}</span>
            <span className="text-[11px] text-secondary font-semibold hidden sm:block">Astreinte dépannage 7j/7</span>
          </span>
        </Link>
        <nav className="hidden lg:flex flex-wrap items-center justify-end gap-x-4 text-sm">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-primary/80 hover:text-primary font-medium">
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={brand.phoneHref}
          className="hidden md:inline rounded-lg bg-secondary text-white px-3 py-2.5 text-sm font-bold hover:opacity-90 shrink-0 shadow-sm"
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
        <div className="lg:hidden border-t border-black/10 bg-cream px-4 py-4 flex flex-col gap-2">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-primary font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href={brand.phoneHref} className="text-secondary font-bold">
            Appeler {brand.phone}
          </a>
        </div>
      )}
    </header>
  );
}
