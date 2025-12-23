import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASX  Digital Trust Layer",
  description: "Detection  Verification • Investigation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
