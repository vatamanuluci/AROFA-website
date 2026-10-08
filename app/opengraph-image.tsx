import { ImageResponse } from "next/og"

export const alt = "AROFA - ferestre, uși și sisteme de umbrire"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#101820",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 110, height: 110, display: "flex", alignItems: "center", justifyContent: "center", background: "#087fc3", color: "white", fontSize: 74, fontWeight: 800 }}>A</div>
          <div style={{ fontSize: 92, fontWeight: 800 }}>AROFA</div>
        </div>
        <div style={{ fontSize: 34, color: "#d8e1e8" }}>Ferestre, uși și sisteme de umbrire</div>
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ width: 100, height: 8, background: "#087fc3" }} />
          <div style={{ width: 100, height: 8, background: "#ffd400" }} />
          <div style={{ width: 100, height: 8, background: "#e51b2b" }} />
        </div>
      </div>
    </div>,
    size,
  )
}
