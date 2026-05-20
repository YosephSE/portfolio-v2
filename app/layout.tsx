import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yosephk.com"),
  title: "Yoseph Kedir",
  description:
    "Yoseph Kedir is a software engineer who builds accessible, inclusive products and digital experiences for the web.",
  openGraph: {
    title: "Yoseph Kedir",
    description:
      "Yoseph Kedir is a software engineer who builds accessible, inclusive products and digital experiences for the web.",
    url: "/",
    siteName: "Yoseph Kedir",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoseph Kedir",
    description:
      "Yoseph Kedir is a software engineer who builds accessible, inclusive products and digital experiences for the web.",
  },
  icons: {
    icon: [
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x192", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="group/spotlight relative">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
