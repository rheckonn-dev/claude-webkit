import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { PromiseRail } from "@/components/promise-rail";
import { Services } from "@/components/services";
import { Bylaw } from "@/components/bylaw";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { Closing } from "@/components/closing";
import { SiteFooter } from "@/components/site-footer";
import { business, faqs, services } from "@/lib/content";

/**
 * Structured data. This is what lets Google show the opening hours, the service
 * area and the FAQ answers directly in the results — it matters more for a
 * local trade than almost anything else on the page.
 */
function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "@id": "https://blueskymobile.ca/#business",
        name: business.name,
        description:
          "Mobile mechanic and waterless detailing serving Calgary and surrounding areas. Batteries, brakes, routine maintenance and detailing at your home or office.",
        url: "https://blueskymobile.ca",
        telephone: `+${business.whatsapp}`,
        email: business.email,
        image: "https://blueskymobile.ca/images/og.png",
        logo: "https://blueskymobile.ca/images/bluesky-logo.png",
        priceRange: "$$",
        knowsLanguage: ["en", "es"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Calgary",
          addressRegion: "AB",
          addressCountry: "CA",
        },
        areaServed: business.areas.map((name) => ({
          "@type": "City",
          name,
        })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "19:00",
          },
        ],
        sameAs: business.social.map((s) => s.href),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Mobile auto services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://blueskymobile.ca/#faq",
        mainEntity: faqs.map((f) => ({
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

export default function Home() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <PromiseRail />
        <Services />
        <Bylaw />
        <HowItWorks />
        <Faq />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}
