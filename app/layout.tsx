import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "APEXE HALLTON LTD | Architectural Authority in Engineering",
  description: "Reliable Construction Services Across the UK.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Navbar component - with mobile menu */}
        <Navbar />

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="bg-blue-950 w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4 sm:mb-6">
                <Image
                  src="/images/apexe-hallton-logo.png"
                  alt="APEXE HALLTON logo"
                  width={160}
                  height={64}
                  className="h-14 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                The UK&apos;s premier authority in architectural engineering and large-scale construction solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-tight text-xs sm:text-sm">Contact Us</h4>
              <a href="mailto:sales@apexehallton.co.uk" className="text-slate-400 hover:text-white text-xs sm:text-sm transition-all hover:translate-x-1 inline-block break-all">
                sales@apexehallton.co.uk
              </a>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">19 MAY AVENUE, ST6 6EN</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-tight text-xs sm:text-sm">Social</h4>
              <div className="flex space-x-4">
                <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer text-xl sm:text-2xl">corporate_fare</span>
                <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer text-xl sm:text-2xl">construction</span>
                <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer text-xl sm:text-2xl">account_balance</span>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <p className="text-slate-400 text-xs sm:text-sm tracking-wide">
              &copy; 2024 APEXE HALLTON LTD. Architectural Authority in Engineering.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              Designed By{" "}
              <a
                href="https://linkedo.co.uk/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="font-bold text-white hover:opacity-80 transition-opacity"
              >
                Linkedo
              </a>
            </p>
          </div>
        </footer>


      </body>
    </html>
  );
}
