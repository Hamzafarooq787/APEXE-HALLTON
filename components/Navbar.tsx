"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Top announcement bar */}
      <div className="w-full bg-primary text-on-primary text-center text-xs py-2 px-4 tracking-wide font-label hidden sm:block">
        Reliable Construction Services Across the UK &mdash;{" "}
        <a href="mailto:sales@apexehallton.co.uk" className="underline underline-offset-2 hover:opacity-80 transition-opacity">
          sales@apexehallton.co.uk
        </a>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_4px_24px_rgba(0,43,76,0.10)] py-0"
            : "bg-white/95 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,43,76,0.05)] py-0"
        }`}
      >
        <div className="flex justify-between items-center h-16 md:h-20 px-4 sm:px-6 md:px-10 lg:px-16 max-w-screen-xl mx-auto">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center" onClick={closeMenu}>
            <Image
              src="/images/apexe-hallton-logo.png"
              alt="APEXE HALLTON logo"
              width={150}
              height={60}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-headline font-medium text-sm px-3 lg:px-4 py-2 transition-colors group ${
                    isActive
                      ? "text-primary"
                      : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {link.label}
                  {/* Active/hover underline */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 bg-primary transition-transform duration-200 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+441234567890"
              className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors text-sm font-label"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="hidden lg:inline">Call Us</span>
            </a>
            <Link
              href="/contact"
              className="bg-primary text-on-primary px-5 py-2.5 font-headline font-bold uppercase tracking-wider text-xs hover:bg-primary-container transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-primary rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/images/apexe-hallton-logo.png"
                alt="APEXE HALLTON logo"
                width={120}
                height={48}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <button
              onClick={closeMenu}
              className="p-1.5 text-slate-400 hover:text-primary rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-2 py-4 flex-1 overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded font-headline text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/5 text-primary border-l-2 border-primary"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Drawer footer CTA */}
          <div className="px-5 py-5 border-t border-slate-100 space-y-3">
            <a
              href="mailto:sales@apexehallton.co.uk"
              className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-xs font-label"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              sales@apexehallton.co.uk
            </a>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center w-full bg-primary text-on-primary py-3 font-headline font-bold uppercase tracking-wider text-xs hover:bg-primary-container transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
