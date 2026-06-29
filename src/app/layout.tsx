export const metadata = {
  title: "NexAdmin",
  description: "Agent IA pour artisans BTP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "Inter, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
