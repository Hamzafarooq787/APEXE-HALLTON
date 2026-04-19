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
        <div className="flex justify-between items-center h-24 px-6 md:px-12 max-w-[1920px] mx-auto">
          <Link href="/" className="text-2xl font-black tracking-tighter text-blue-900 font-headline">
            APEXE HALLTON
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="font-headline tracking-tight font-medium text-blue-900 border-b-2 border-blue-900 pb-1">Home</Link>
            <Link href="/about" className="font-headline tracking-tight font-medium text-slate-500 hover:text-blue-900 transition-colors">About Us</Link>
            <Link href="/services" className="font-headline tracking-tight font-medium text-slate-500 hover:text-blue-900 transition-colors">Services</Link>
            <Link href="/projects" className="font-headline tracking-tight font-medium text-slate-500 hover:text-blue-900 transition-colors">Projects</Link>
            <Link href="/contact" className="font-headline tracking-tight font-medium text-slate-500 hover:text-blue-900 transition-colors">Contact Us</Link>
          </div>
          <button className="hidden md:block bg-primary text-on-primary px-8 py-3 font-headline font-bold uppercase tracking-wider text-xs scale-95 active:scale-90 transition-transform hover:bg-primary-container">
            Get a Quote
          </button>
          <button className="md:hidden p-2 text-primary" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={closeMenu}></div>
          <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-2xl flex flex-col p-6 pt-24 gap-6">
            <Link href="/" className="font-headline text-xl font-bold text-blue-900 border-b pb-2" onClick={closeMenu}>Home</Link>
            <Link href="/about" className="font-headline text-xl text-slate-600 hover:text-blue-900" onClick={closeMenu}>About Us</Link>
            <Link href="/services" className="font-headline text-xl text-slate-600 hover:text-blue-900" onClick={closeMenu}>Services</Link>
            <Link href="/projects" className="font-headline text-xl text-slate-600 hover:text-blue-900" onClick={closeMenu}>Projects</Link>
            <Link href="/contact" className="font-headline text-xl text-slate-600 hover:text-blue-900" onClick={closeMenu}>Contact Us</Link>
            <button className="mt-6 bg-primary text-on-primary px-6 py-3 font-headline font-bold uppercase tracking-wider text-xs">Get a Quote</button>
          </div>
        </div>
      )}
    </>
  );
}