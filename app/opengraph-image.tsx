import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#061a37",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#ffffff",
              color: "#061a37",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            GN
          </div>
          <div style={{ display: "flex", gap: 10, fontSize: 30, fontWeight: 700 }}>
            <span>GN</span>
            <span style={{ opacity: 0.8 }}>Pré-moldados</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            <span>Qualidade que sustenta,</span>
            <span style={{ color: "#96c8ff" }}>confiança que constrói.</span>
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.75)" }}>
            {`Lajes · Blocos EPS · Pingadeiras · Pré-moldados em ${site.address.locality}`}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
          {site.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
