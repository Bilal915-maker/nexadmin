"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Redirige vers la landing statique
    window.location.href = "/landing";
  }, []);
  
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center", 
      justifyContent: "center",
      fontFamily: "Inter, sans-serif",
      background: "#0F1923",
      color: "white"
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 14, color: "#1DB967", marginBottom: 16, fontWeight: 700 }}>
          ● NexAdmin
        </div>
        <div style={{ fontSize: 16, color: "#888" }}>Chargement...</div>
      </div>
    </div>
  );
}
