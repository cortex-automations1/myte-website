import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "MYTE Technology";
  const subtitle =
    searchParams.get("subtitle") ??
    "Enterprise IT Security. Personal Service.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1a1a2e",
          padding: "60px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#38b6ff",
            letterSpacing: "0.05em",
          }}
        >
          MYTE
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              maxWidth: 900,
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#9ca3af",
              maxWidth: 700,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <div style={{ fontSize: 18, color: "#9ca3af" }}>mytetech.com</div>
        </div>

        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundColor: "#38b6ff",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
