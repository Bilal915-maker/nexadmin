export const metadata = {
  title: "NexAdmin — Administration automatisée pour artisans BTP",
  description: "Agent IA pour artisans BTP",
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
