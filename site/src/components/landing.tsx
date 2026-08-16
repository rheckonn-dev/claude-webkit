import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { PromiseRail } from "@/components/promise-rail";
import { Services } from "@/components/services";
import { Bylaw } from "@/components/bylaw";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { Closing } from "@/components/closing";
import { SiteFooter } from "@/components/site-footer";
import { business, copy, type Locale } from "@/lib/content";
import { SITE_URL } from "@/lib/metadata";

/**
 * Structured data. This is what lets Google show the opening hours, the service
 * area and the FAQ answers directly in the results — it matters more for a
 * local trade than almost anything else on the page.
 */
function StructuredData({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "@id": `${SITE_URL}/#business`,
        name: business.name,
        description: t.meta.description,
        url: lang === "en" ? SITE_URL : `${SITE_URL}/es`,
        inLanguage: t.htmlLang,
        telephone: `+${business.whatsapp}`,
        email: business.email,
        image: `${SITE_URL}/images/og.png`,
        logo: `${SITE_URL}/images/bluesky-logo.png`,
        priceRange: "$$",
        knowsLanguage: ["en", "es"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Calgary",
          addressRegion: "AB",
          addressCountry: "CA",
        },
        areaServed: business.areas.map((name) => ({ "@type": "City", name })),
        // Sunday is deliberately absent: it is by appointment only, and
        // publishing it as an open day would put "Open now" on a Sunday search.
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "18:00",
            closes: "21:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "10:00",
            closes: "21:00",
          },
        ],
        sameAs: business.social.map((s) => s.href),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.servicesHead.eyebrow,
          itemListElement: t.services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": lang === "en" ? `${SITE_URL}/#faq` : `${SITE_URL}/es#faq`,
        inLanguage: t.htmlLang,
        mainEntity: t.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export function Landing({ lang }: { lang: Locale }) {
  const t = copy[lang];
  return (
    <>
      <StructuredData lang={lang} />
      <SiteHeader lang={lang} t={t} />
      <main id="main" className="flex-1">
        <Hero t={t} />
        <PromiseRail t={t} />
        <Services t={t} />
        <Bylaw t={t} />
        <HowItWorks t={t} />
        <Faq t={t} />
        <Closing t={t} />
      </main>
      <SiteFooter lang={lang} t={t} />
    </>
  );
}
