import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";

const pixeloid = localFont({
  src: "../../public/fonts/PixeloidSans.ttf",
  variable: "--font-pixel",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-ibm",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? process.env.VERCEL_URL.startsWith("http")
      ? process.env.VERCEL_URL
      : `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ASX // Forensic Unit",
  description:
    "Authentication layer for the age of synthetic deception. Detection • Verification • Investigation",
  openGraph: {
    title: "ASX // Forensic Unit",
    description: "Autonomous neural defense protocol for digital trust.",
    url: siteUrl,
    siteName: "ASX Global",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASX // Forensic Unit",
    description: "Authentication layer for the age of synthetic deception.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${pixeloid.variable} ${ibmPlexMono.variable} bg-black text-white antialiased selection:bg-blue-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
