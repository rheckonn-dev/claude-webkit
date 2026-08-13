"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { business, routes, type Copy, type Locale } from "@/lib/content";
import { WhatsAppButton } from "@/components/whatsapp";

function LangSwitch({
  lang,
  t,
  className = "",
}: {
  lang: Locale;
  t: Copy;
  className?: string;
}) {
  const other: Locale = lang === "en" ? "es" : "en";
  return (
    <a
      href={routes[other]}
      hrefLang={other}
      lang={other}
      title={t.switchTo}
      className={`inline-flex min-h-[44px] cursor-pointer items-center border border-rule px-3.5 text-cap font-medium tracking-[0.16em] text-muted uppercase transition-colors hover:border-ink hover:text-ink ${className}`}
    >
      {t.switchLabel}
    </a>
  );
}

export function SiteHeader({ lang, t }: { lang: Locale; t: Copy }) {
  const [open, setOpen] = useState(false);

  // Close on Escape, and stop the page scrolling behind the open panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bone/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1160px] items-center gap-3 px-5 py-3 sm:gap-4 sm:px-8 lg:px-12">
        <a href={routes[lang]} className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/bluesky-logo.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[1.2rem] text-ink">
              {business.shortName}
            </span>
            {/* Hidden on phones: in Spanish this line is half again as long and it
                was pushing the header off screen. */}
            <span className="cap hidden truncate text-[0.6rem] text-muted sm:block">
              {t.descriptor} · {business.city}
            </span>
          </span>
          <span className="sr-only">{business.name}</span>
        </a>

        <nav
          aria-label={t.nav[0].label}
          className="ml-auto hidden items-center gap-7 xl:flex"
        >
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.9rem] whitespace-nowrap text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Wrapped rather than given `hidden` directly: the button's own base
            class sets `inline-flex`, and the two would collide in the cascade. */}
        <div className="ml-auto hidden items-center gap-2 xl:ml-7 xl:flex">
          <LangSwitch lang={lang} t={t} />
          <WhatsAppButton tone="solid" className="min-h-[46px] px-5 py-3">
            WhatsApp
          </WhatsAppButton>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:hidden">
          <LangSwitch lang={lang} t={t} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 cursor-pointer items-center justify-center border border-rule text-ink transition-colors hover:border-ink"
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-rule bg-bone xl:hidden">
          <nav className="flex flex-col px-5 sm:px-8">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-4 font-display text-h3 text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="px-5 py-6 sm:px-8">
            <WhatsAppButton tone="solid" className="w-full">
              {t.hero.primaryCta}
            </WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
