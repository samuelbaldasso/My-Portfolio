import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #b8f23d 0%, #89c91d 100%)",
          color: "#11130d",
          fontSize: 84,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: -2,
        }}
      >
        SB
      </div>
    ),
    { ...size },
  );
}
