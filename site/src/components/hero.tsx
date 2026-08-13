import Image from "next/image";
import { hero } from "@/lib/content";
import { WhatsAppButton } from "@/components/whatsapp";
import { ImageBand } from "@/components/image-band";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule bg-bone">
      {/* A single warm wash behind the badge, so the ivory has depth without a gradient banner. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-14rem] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-bone-deep/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-[900px] px-5 pt-14 pb-16 text-center sm:px-8 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
        <Image
          src="/images/bluesky-logo.png"
          alt="BlueSky Detailing and Cleaning"
          width={168}
          height={168}
          priority
          className="rise mx-auto mb-8 h-[104px] w-[104px] sm:mb-12 sm:h-[140px] sm:w-[140px] lg:h-[168px] lg:w-[168px]"
        />

        <p
          className="rise cap mb-7 text-gold-ink"
          style={{ animationDelay: "80ms" }}
        >
          {hero.eyebrow}
        </p>

        <h1
          className="rise mx-auto max-w-[15ch] text-hero text-ink"
          style={{ animationDelay: "140ms" }}
        >
          {hero.headlineLead}{" "}
          <span className="text-gold-ink">{hero.headlineAccent}</span>
        </h1>

        <p
          className="rise mx-auto mt-7 max-w-[54ch] text-lead text-muted sm:mt-9"
          style={{ animationDelay: "220ms" }}
        >
          {hero.sub}
        </p>

        <div
          className="rise mt-10 flex flex-wrap justify-center gap-3 sm:mt-12"
          style={{ animationDelay: "300ms" }}
        >
          <WhatsAppButton tone="solid">{hero.primaryCta}</WhatsAppButton>
          <a
            href="#services"
            className="inline-flex min-h-[52px] cursor-pointer items-center justify-center border border-rule px-7 py-3.5 text-cap font-medium tracking-[0.2em] text-ink uppercase transition-colors duration-200 hover:border-ink"
          >
            {hero.secondaryCta}
          </a>
        </div>

        <p
          className="rise mt-9 text-[0.85rem] text-muted"
          style={{ animationDelay: "380ms" }}
        >
          {hero.fine}
        </p>
      </div>

      {/* The photograph's own backdrop was colour-matched to the page ground,
          so it meets the bone above it without a visible seam. */}
      <div
        className="rise relative -mt-2 sm:-mt-4"
        style={{ animationDelay: "460ms" }}
      >
        <ImageBand
          src="/images/hero-fender.webp"
          alt="The polished front fender and headlight of a dark navy sedan, water beading across the paint"
          position="center 42%"
          priority
        />
      </div>
    </section>
  );
}
