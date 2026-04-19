import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "APEXE HALLTON LTD | Architectural Authority in Engineering",
  description: "Reliable Construction Services Across the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
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
        <footer className="bg-blue-950 w-full py-16 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
            <div className="col-span-1">
              <div className="text-xl font-bold text-white uppercase tracking-widest mb-6">APEXE HALLTON</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The UK's premier authority in architectural engineering and large-scale construction solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-tight">Contact Us</h4>
              <a href="mailto:sales@apexehallton.co.uk" className="text-slate-400 hover:text-white text-sm transition-all hover:translate-x-1 inline-block">
                Email: sales@apexehallton.co.uk
              </a>
              <p className="text-slate-400 text-sm mt-2">Address: 19 MAY AVENUE, ST6 6EN</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-tight">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-all hover:translate-x-1 inline-block">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-all hover:translate-x-1 inline-block">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-tight">Social</h4>
              <div className="flex space-x-4">
                <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer">corporate_fare</span>
                <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer">construction</span>
                <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer">account_balance</span>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex justify-between items-center">
            <p className="text-slate-400 text-sm tracking-wide">
              © 2024 APEXE HALLTON LTD. Architectural Authority in Engineering.
            </p>
          </div>
        </footer>

        {/* WhatsApp FAB */}
        <a
          href="https://wa.me/440000000000"
          className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform rounded-full"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.435 5.634 1.435h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}