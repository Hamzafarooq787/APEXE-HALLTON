"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,43,76,0.06)]">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto">
          <Link href="/" className="text-sm sm:text-base md:text-xl font-black tracking-tighter text-blue-900 font-headline shrink-0">
            APEXE HALLTON
          </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link href="/" className="font-headline tracking-tight font-medium text-sm text-blue-900 border-b-2 border-blue-900 pb-1">Home</Link>
            <Link href="/about" className="font-headline tracking-tight font-medium text-sm text-slate-500 hover:text-blue-900 transition-colors">About Us</Link>
            <Link href="/services" className="font-headline tracking-tight font-medium text-sm text-slate-500 hover:text-blue-900 transition-colors">Services</Link>
            <Link href="/projects" className="font-headline tracking-tight font-medium text-sm text-slate-500 hover:text-blue-900 transition-colors">Projects</Link>
            <Link href="/contact" className="font-headline tracking-tight font-medium text-sm text-slate-500 hover:text-blue-900 transition-colors">Contact Us</Link>
          </div>
          <button className="hidden md:block bg-primary text-on-primary px-6 py-2.5 font-headline font-bold uppercase tracking-wider text-xs shrink-0 hover:bg-primary-container transition-colors">
            Get a Quote
          </button>
          <button
            className="md:hidden p-1.5 text-primary rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={closeMenu} aria-hidden="true" />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between h-14 sm:h-16 px-5 border-b border-slate-100">
              <span className="text-sm font-black tracking-tighter text-blue-900 font-headline">APEXE HALLTON</span>
              <button
                onClick={closeMenu}
                className="p-1.5 text-slate-500 hover:text-blue-900 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Nav links */}
            <nav className="flex flex-col px-5 py-6 gap-1">
              <Link href="/" className="font-headline text-sm font-bold text-blue-900 py-3 border-b border-slate-100" onClick={closeMenu}>Home</Link>
              <Link href="/about" className="font-headline text-sm text-slate-600 hover:text-blue-900 py-3 border-b border-slate-100 transition-colors" onClick={closeMenu}>About Us</Link>
              <Link href="/services" className="font-headline text-sm text-slate-600 hover:text-blue-900 py-3 border-b border-slate-100 transition-colors" onClick={closeMenu}>Services</Link>
              <Link href="/projects" className="font-headline text-sm text-slate-600 hover:text-blue-900 py-3 border-b border-slate-100 transition-colors" onClick={closeMenu}>Projects</Link>
              <Link href="/contact" className="font-headline text-sm text-slate-600 hover:text-blue-900 py-3 transition-colors" onClick={closeMenu}>Contact Us</Link>
            </nav>
            <div className="px-5">
              <button className="w-full bg-primary text-on-primary py-3 font-headline font-bold uppercase tracking-wider text-xs hover:bg-primary-container transition-colors">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
