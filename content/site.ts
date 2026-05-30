/**
 * Central, non-technical-friendly site data.
 * Company facts, navigation, and contact details live here so copy can be
 * edited without touching component code.
 */

export const site = {
  name: "Mouse Wall",
  legalName: "Mouse Wall LLC",
  tagline: "Organic, human-safe rodent deterrent for vehicles.",
  description:
    "Mouse Wall is a human-safe, naturally scented rodent deterrent for vehicles, applied through auto service shops during routine service. A tool, not magic — it improves your odds in the age-old turf war between man and mouse.",
  // Used for metadata / sitemap / Open Graph. Override with NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mousewall.com",
  founded: "Backed by 50+ years in the auto service trade.",
  contact: {
    addressLine: "2479 Route 122E",
    city: "Grafton",
    state: "VT",
    zip: "05146",
    phone: "802.952.8703",
    phoneHref: "+18029528703",
    email: "info@mousewall.com",
    // Approximate coordinates for Grafton, VT (used for the map + JSON-LD geo).
    geo: { lat: 43.1745, lng: -72.6101 },
  },
  external: {
    cdcHantavirus: "https://www.cdc.gov/hantavirus/",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "The Mouse Problem", href: "/the-mouse-problem" },
  { label: "Pricing", href: "/pricing" },
  { label: "For Shops", href: "/for-shops" },
  { label: "Contact", href: "/contact" },
] as const;

export const primaryCta = { label: "Become a Dealer", href: "/contact" };
