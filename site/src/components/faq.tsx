import type { Copy } from "@/lib/content";

/**
 * Native <details>/<summary> — keyboard accessible, works with JavaScript off,
 * and costs nothing in bundle size. No accordion library needed.
 */
export function Faq({ t }: { t: Copy }) {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-rule bg-surface">
      <div className="mx-auto max-w-[1160px] px-5 py-bay sm:px-8 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <header className="mb-10 lg:mb-0">
          <p className="cap mb-5 text-gold-ink">{t.faqHead.eyebrow}</p>
          <h2 className="max-w-[16ch] text-h2 text-ink">{t.faqHead.heading}</h2>
        </header>

        <div className="border-b border-rule">
          {t.faqs.map((f) => (
            <details key={f.q} className="group border-t border-rule">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.05rem] text-ink transition-colors marker:content-none hover:text-gold-ink">
                <span className="font-display text-[1.2rem] leading-snug">{f.q}</span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="mt-1.5 h-4 w-4 shrink-0 text-gold transition-transform duration-200 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-[62ch] pb-7 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
