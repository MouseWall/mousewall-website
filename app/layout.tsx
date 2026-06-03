import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { ScrollReveal } from "@/components/ScrollReveal";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} — Human-Safe Rodent Deterrent for Vehicles`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "rodent deterrent",
    "mouse deterrent for cars",
    "vehicle rodent protection",
    "cabin air filter mouse",
    "auto service shop",
    "peppermint mouse deterrent",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.legalName} — Human-Safe Rodent Deterrent for Vehicles`,
    description: site.description,
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — Human-Safe Rodent Deterrent for Vehicles`,
    description: site.description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <LocalBusinessJsonLd />
        <ScrollReveal />
      </body>
    </html>
  );
}
