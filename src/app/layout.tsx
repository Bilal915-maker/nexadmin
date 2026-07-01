export const metadata = {
  title: "GIDEON Agents IA — Votre employé IA, livré en 48h",
  description: "Agents IA sur mesure pour automatiser l'administratif de votre entreprise, tous secteurs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "Inter, sans-serif", background: "#f5f5f3" }}>
        {children}
      </body>
    </html>
  );
}
