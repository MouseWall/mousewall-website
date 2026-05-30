import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export — no server, no API routes, no private secrets. Deploys
  // free on Vercel (or any static host) as plain HTML/CSS/JS.
  output: "export",
  images: {
    // Static export has no image optimization server, so images are served
    // as-is. next/image still handles sizing/lazy-loading attributes.
    unoptimized: true,
  },
};

export default nextConfig;
