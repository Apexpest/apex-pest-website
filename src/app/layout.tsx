import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";

// Self-hosted fonts (no build-time or runtime dependency on Google Fonts).
const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  src: [
    { path: "./fonts/montserrat-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/montserrat-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/montserrat-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
});

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "Apex Pest Solutions | Kentucky's Premium Pest Control",
    template: "%s | Apex Pest Solutions",
  },
  description:
    "Premium pest control for Kentucky homes. Summit Shield three-zone protection, the best communication in Kentucky, and free re-services within 48 hours. Serving Central Kentucky and the Fort Knox community.",
  openGraph: {
    title: "Apex Pest Solutions | Kentucky's Premium Pest Control",
    description: "Top service, top communication. The pest company you never have to think about.",
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-charcoal">{children}</body>
    </html>
  );
}
