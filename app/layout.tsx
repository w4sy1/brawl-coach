import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brawl Coach",
  description: "Multilingual Brawl Stars companion.",
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
