"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { business, nav } from "@/lib/content";
import { WhatsAppButton } from "@/components/whatsapp";

export function SiteHeader() {
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
      <div className="mx-auto flex max-w-[1160px] items-center gap-4 px-5 py-3 sm:px-8 lg:px-12">
        <a href="#main" className="flex shrink-0 items-center gap-3">
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
            <span className="cap text-[0.6rem] text-muted">
              {business.descriptor} · {business.city}
            </span>
          </span>
          <span className="sr-only">{business.name} — back to top</span>
        </a>

        <nav
          aria-label="Main"
          className="ml-auto hidden items-center gap-8 lg:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.9rem] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Wrapped rather than given `hidden` directly: the button's own base
            class sets `inline-flex`, and the two would collide in the cascade. */}
        <div className="ml-auto hidden lg:ml-8 lg:block">
          <WhatsAppButton tone="solid" className="min-h-[46px] px-5 py-3">
            WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="ml-auto flex h-11 w-11 cursor-pointer items-center justify-center border border-rule text-ink transition-colors hover:border-ink lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
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

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-rule bg-bone lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col px-5 sm:px-8">
            {nav.map((item) => (
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
              Message us on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
