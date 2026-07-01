"use client";
import { useState } from "react";

export default function TestPage() {
  const [form, setForm] = useState({ email: "", password: "", companyName: "", sector: "Plomberie" });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult({ ok: res.ok, data });
    } catch (err: any) {
      setResult({ ok: false, data: { error: err.message } });
    }
    setLoading(false);
  }

  const inp: React.CSSProperties = { width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #ddd", fontSize: 14, marginBottom: 12, boxSizing: "border-box" };
  const btn: React.CSSProperties = { width: "100%", background: "#0F1923", color: "white", border: "none", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 700, cursor: "pointer" };

  return (
    <div style={{ maxWidth: 480, margin: "60px auto", padding: 24, background: "white", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,.08)" }}>
      <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>🧪 Test inscription</h1>
      <p style={{ color: "#888", fontSize: 13, marginBottom: 24 }}>Vérifie que la connexion Supabase fonctionne</p>
      <form onSubmit={submit}>
        <input placeholder="Email" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={inp} />
        <input placeholder="Mot de passe (6+ car.)" type="password" required minLength={6} value={form.password} onChange={e => setForm({...form, password: e.target.value})} style={inp} />
        <input placeholder="Nom entreprise" required value={form.companyName} onChange={e => setForm({...form, companyName: e.target.value})} style={inp} />
        <select value={form.sector} onChange={e => setForm({...form, sector: e.target.value})} style={inp}>
          <option>Plomberie</option>
          <option>Électricité</option>
          <option>Carrelage</option>
          <option>Maçonnerie</option>
        </select>
        <button type="submit" disabled={loading} style={btn}>{loading ? "En cours..." : "Créer le compte →"}</button>
      </form>
      {result && (
        <div style={{ marginTop: 20, padding: 16, borderRadius: 10, background: result.ok ? "#e8fff4" : "#ffe5e5", border: `1px solid ${result.ok ? "#1DB967" : "#FF4444"}` }}>
          <strong>{result.ok ? "✅ Succès !" : "❌ Erreur"}</strong>
          <pre style={{ fontSize: 11, marginTop: 8, whiteSpace: "pre-wrap", wordBreak: "break-all" }}>{JSON.stringify(result.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
