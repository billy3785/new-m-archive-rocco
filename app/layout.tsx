import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madonna Archive — Curator Portal",
  description: "Private curator workspace for archive cleanup, review, canon status, and evidence coverage.",
  other: {
    "codex-preview": "Madonna Archive Curator Portal",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
