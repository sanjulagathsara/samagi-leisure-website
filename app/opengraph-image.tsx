import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Samagi Leisure — Sri Lankan hotels, weddings, and stays";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/samagi-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1c3228",
          color: "#f3eee4",
          display: "flex",
          alignItems: "center",
          padding: 80,
          gap: 64,
        }}
      >
        <img src={logoSrc} width={170} height={268} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              letterSpacing: "0.45em",
              fontSize: 16,
              color: "#c4a35a",
              textTransform: "uppercase",
            }}
          >
            Sri Lanka
          </div>
          <div style={{ fontSize: 64, marginTop: 16, fontWeight: 500 }}>
            Samagi Leisure
          </div>
          <div style={{ fontSize: 26, marginTop: 16, opacity: 0.78 }}>
            Hotels · Weddings · Gatherings
          </div>
        </div>
      </div>
    ),
    size,
  );
}
