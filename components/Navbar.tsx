"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Resources", href: "/resources" },
  { label: "Community", href: "/#community" },
  { label: "Contact", href: "/contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center shrink-0">
  <Image
    src="/logo.png"
    alt="Engineering Career Foundation logo"
    width={160}
    height={160}
    className="h-12 w-auto"
    priority
  />
</a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-navy">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-gold transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/join"
          className="hidden lg:inline-block rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
        >
          Join Us
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 px-6 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-navy font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            className="block w-full text-center rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white"
          >
            Join Us
          </a>
        </div>
      )}
    </header>
  );
}
