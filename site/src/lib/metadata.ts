import type { Metadata } from "next";
import { business, copy, type Locale } from "@/lib/content";

export const SITE_URL = "https://blueskymobile.ca";

/**
 * One metadata block per language. The `alternates.languages` entries are the
 * hreflang tags — they tell Google the two pages are the same content in
 * different languages, so a Spanish search surfaces /es rather than burying it
 * as a duplicate of the English page.
 */
export function metadataFor(lang: Locale): Metadata {
  const t = copy[lang];
  const path = lang === "en" ? "/" : "/es";

  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    keywords: [...t.meta.keywords],
    alternates: {
      canonical: path,
      languages: {
        "en-CA": "/",
        "es-CA": "/es",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "en" ? "en_CA" : "es_CA",
      alternateLocale: lang === "en" ? "es_CA" : "en_CA",
      url: `${SITE_URL}${path}`,
      siteName: business.name,
      title: t.meta.title,
      description: t.meta.description,
      images: [
        {
          url: "/images/og.png",
          width: 1200,
          height: 630,
          alt: t.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/images/og.png"],
    },
    robots: { index: true, follow: true },
  };
}
