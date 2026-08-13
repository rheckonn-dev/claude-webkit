import type { Copy } from "@/lib/content";
import { ImageBand } from "@/components/image-band";

export function HowItWorks({ t }: { t: Copy }) {
  return (
    <section id="how" className="scroll-mt-24">
      <ImageBand
        src="/images/driveway.webp"
        alt={t.imageAlt.driveway}
        position="center 58%"
      />

      <div className="mx-auto max-w-[1160px] px-5 py-bay sm:px-8 lg:px-12">
        <header className="mb-12 lg:mb-16">
          <p className="cap mb-5 text-gold-ink">{t.stepsHead.eyebrow}</p>
          <h2 className="max-w-[18ch] text-h2 text-ink">{t.stepsHead.heading}</h2>
        </header>

        {/* Numbered because the order genuinely matters — this is a sequence, not a list. */}
        <ol className="grid border-t border-rule lg:grid-cols-3">
          {t.steps.map((s, i) => (
            <li
              key={s.title}
              className={
                i === 0
                  ? "border-b border-rule py-8 lg:border-b-0 lg:pr-8"
                  : "border-b border-rule py-8 lg:border-b-0 lg:border-l lg:px-8 lg:last:pr-0"
              }
            >
              <p className="cap mb-4 text-gold-ink tabular-nums">
                {t.stepLabel} {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-2.5 text-[1.6rem] text-ink">{s.title}</h3>
              <p className="max-w-[38ch] text-[0.9rem] leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="border-t border-rule" />
      </div>
    </section>
  );
}
