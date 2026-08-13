import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 py-bay">
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-12">
        <header className="mb-12 lg:mb-16">
          <p className="cap mb-5 text-gold-ink">How it works</p>
          <h2 className="max-w-[18ch] text-h2 text-ink">
            Three steps, no forms.
          </h2>
        </header>

        {/* Numbered because the order genuinely matters — this is a sequence, not a list. */}
        <ol className="grid border-t border-rule lg:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={
                i === 0
                  ? "border-b border-rule py-8 lg:border-b-0 lg:pr-8"
                  : "border-b border-rule py-8 lg:border-b-0 lg:border-l lg:px-8 lg:last:pr-0"
              }
            >
              <p className="cap mb-4 text-gold-ink tabular-nums">
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-2.5 text-[1.6rem] text-ink">{s.title}</h3>
              <p className="max-w-[38ch] text-[0.9rem] leading-relaxed text-muted">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="border-t border-rule" />
      </div>
    </section>
  );
}
