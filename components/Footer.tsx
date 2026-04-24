import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Architectural Design",
  "Structural Engineering",
  "Project Management",
  "Interior Fit-Out",
  "Building Surveying",
];

export default function Footer() {
  return (
    <footer className="bg-[#001f3f] w-full">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#002b4c] via-[#316192] to-[#002b4c]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/apexe-hallton-logo.png"
              alt="APEXE HALLTON logo"
              width={160}
              height={64}
              className="h-14 w-auto object-contain brightness-0 invert mb-5"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The UK&apos;s premier authority in architectural engineering and
              large-scale construction solutions. Property. Purpose. Excellence.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/apexe-hallton"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-[#316192] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/apexehallton"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-[#316192] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/apexehallton"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-[#316192] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-5 after:block after:w-8 after:h-0.5 after:bg-[#316192] after:mt-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#316192] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-5 after:block after:w-8 after:h-0.5 after:bg-[#316192] after:mt-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-slate-400 text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#316192] flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-5 after:block after:w-8 after:h-0.5 after:bg-[#316192] after:mt-2">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#316192] text-xl mt-0.5 flex-shrink-0">location_on</span>
                <span className="text-slate-400 text-sm leading-relaxed">
                  19 May Avenue<br />Stoke-on-Trent, ST6 6EN<br />United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#316192] text-xl flex-shrink-0">mail</span>
                <a
                  href="mailto:sales@apexehallton.co.uk"
                  className="text-slate-400 text-sm hover:text-white transition-colors break-all"
                >
                  sales@apexehallton.co.uk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#316192] text-xl flex-shrink-0">public</span>
                <a
                  href="https://apexehallton.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  apexehallton.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-slate-500 text-xs tracking-wide">
            &copy; 2026 APEXE HALLTON LTD. All rights reserved. Architectural Authority in Engineering.
          </p>
          <p className="text-slate-500 text-xs">
            Designed by{" "}
            <a
              href="https://linkedo.co.uk/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Linkedo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
