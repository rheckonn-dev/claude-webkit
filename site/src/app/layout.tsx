import type { Metadata } from "next";
import { Marcellus, Jost } from "next/font/google";
import { business } from "@/lib/content";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const title = `${business.name} — Mobile Auto Service in Calgary`;
const description =
  "Mobile mechanic and detailing in Calgary. Batteries, brakes, maintenance and waterless detailing at your home or office. Book on WhatsApp. English y español.";

export const metadata: Metadata = {
  metadataBase: new URL("https://blueskymobile.ca"),
  title,
  description,
  keywords: [
    "mobile mechanic Calgary",
    "mobile auto detailing Calgary",
    "waterless car wash Calgary",
    "mobile battery replacement Calgary",
    "mobile brake repair Calgary",
    "mecánico a domicilio Calgary",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://blueskymobile.ca",
    siteName: business.name,
    title,
    description,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: `${business.name} — Calgary's auto shop comes to you`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${marcellus.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bone text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-5 focus:py-3 focus:text-bone"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
