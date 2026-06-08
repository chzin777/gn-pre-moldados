import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#061a37",
          color: "#ffffff",
          fontSize: 17,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          borderRadius: 6,
          fontFamily: "sans-serif",
        }}
      >
        GN
      </div>
    ),
    { ...size }
  );
}
