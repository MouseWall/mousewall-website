import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";
export const alt = `${site.legalName} — human-safe rodent deterrent for vehicles`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social card, generated at build time. Used for Open Graph + Twitter.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(150deg, #1172B9 0%, #0C5589 55%, #08385C 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#C0392B",
            }}
          />
          <div
            style={{
              fontSize: "34px",
              fontWeight: 800,
              letterSpacing: "2px",
            }}
          >
            MOUSE WALL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "68px", fontWeight: 800, lineHeight: 1.05 }}>
            Stop costly rodent damage before it starts.
          </div>
          <div style={{ fontSize: "30px", color: "#cddcf3" }}>
            Organic, human-safe vehicle deterrent — applied at the shop.
          </div>
        </div>

        <div style={{ fontSize: "24px", color: "#aac0e4" }}>
          A tool, not magic — it improves your odds. · mousewall.com
        </div>
      </div>
    ),
    { ...size },
  );
}
