import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "APEXE HALLTON LTD | Architectural Authority in Engineering",
  description: "Reliable Construction Services Across the UK.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "APEXE HALLTON LTD | Architectural Authority in Engineering",
    description: "Reliable Construction Services Across the UK.",
    url: "https://apexehallton.co.uk",
    siteName: "APEXE HALLTON LTD",
    images: [
      {
        url: "https://apexehallton.co.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "APEXE HALLTON - Property. Purpose. Excellence.",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APEXE HALLTON LTD | Architectural Authority in Engineering",
    description: "Reliable Construction Services Across the UK.",
    images: ["https://apexehallton.co.uk/og-image.png"],
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
        <Footer />


      </body>
    </html>
  );
}
