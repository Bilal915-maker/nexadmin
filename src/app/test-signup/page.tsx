"use client";

import { useState } from "react";

export default function TestSignupPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    companyName: "",
    sector: "Plomberie / Chauffage",
    phone: "",
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult({ status: res.status, data });
    } catch (err: any) {
      setResult({ error: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 480, margin: "60px auto", padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
        🧪 Test — Créer un compte NexAdmin
      </h1>
      <p style={{ color: "#666", marginBottom: 24, fontSize: 14 }}>
        Page de test pour vérifier que l'inscription fonctionne réellement
        avec la base de données.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          placeholder="Email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
        />
        <input
          placeholder="Mot de passe (min 6 caractères)"
          type="password"
          required
          minLength={6}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={inputStyle}
        />
        <input
          placeholder="Nom de l'entreprise"
          required
          value={form.companyName}
          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
          style={inputStyle}
        />
        <select
          value={form.sector}
          onChange={(e) => setForm({ ...form, sector: e.target.value })}
          style={inputStyle}
        >
          <option>Plomberie / Chauffage</option>
          <option>Électricité</option>
          <option>Carrelage / Revêtements</option>
          <option>Maçonnerie</option>
        </select>
        <input
          placeholder="Téléphone (optionnel)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={inputStyle}
        />
        <button type="submit" disabled={loading} style={btnStyle}>
          {loading ? "Création en cours..." : "Créer le compte test"}
        </button>
      </form>

      {result && (
        <div
          style={{
            marginTop: 24,
            padding: 16,
            borderRadius: 12,
            background: result.data?.success ? "#E8FFF4" : "#FFE5E5",
            border: `1px solid ${result.data?.success ? "#1DB967" : "#FF4444"}`,
          }}
        >
          <strong>{result.data?.success ? "✅ Succès !" : "❌ Erreur"}</strong>
          <pre style={{ fontSize: 12, marginTop: 8, whiteSpace: "pre-wrap" }}>
            {JSON.stringify(result.data ?? result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1.5px solid #E4E4E0",
  fontSize: 14,
  fontFamily: "inherit",
};

const btnStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: 10,
  border: "none",
  background: "#0F1923",
  color: "white",
  fontWeight: 700,
  fontSize: 14,
  cursor: "pointer",
};
