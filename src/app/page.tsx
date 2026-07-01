export default function Home() {
  return (
    <main style={{ padding: "60px 20px", maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>NexAdmin</h1>
      <p style={{ color: "#666", marginBottom: 32 }}>Administration automatisée pour artisans BTP</p>
      <a href="/test" style={{ background: "#0F1923", color: "white", padding: "12px 28px", borderRadius: 100, textDecoration: "none", fontWeight: 700 }}>
        Créer un compte test →
      </a>
    </main>
  );
}
