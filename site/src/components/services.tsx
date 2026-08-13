import { services } from "@/lib/content";
import { WhatsAppButton } from "@/components/whatsapp";

/** Bold one phrase inside the paragraph without hand-writing markup in content.ts. */
function withEmphasis(body: string, phrase: string) {
  const at = body.indexOf(phrase);
  if (at === -1) return body;
  return (
    <>
      {body.slice(0, at)}
      <strong className="font-medium text-ink">{phrase}</strong>
      {body.slice(at + phrase.length)}
    </>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-bay">
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-12">
        <header className="mb-12 lg:mb-16">
          <p className="cap mb-5 text-gold-ink">What we do</p>
          <h2 className="max-w-[18ch] text-h2 text-ink">
            Four things, done properly.
          </h2>
          <p className="mt-6 max-w-[56ch] text-lead text-muted">
            A short list done well beats a long list done badly. If a job is
            outside what we do, we&rsquo;ll say so and point you somewhere
            honest.
          </p>
        </header>

        <div className="border-b border-rule">
          {services.map((s) => (
            <article
              key={s.id}
              className="grid gap-5 border-t border-rule py-9 lg:grid-cols-[1fr_1.35fr_auto] lg:gap-14 lg:py-12"
            >
              <h3 className="max-w-[14ch] text-h3 text-ink">{s.title}</h3>

              <div>
                <p className="max-w-[58ch] text-muted">
                  {withEmphasis(s.body, s.emphasis)}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-1.5 text-[0.85rem] text-muted">
                  {s.items.map((item) => (
                    <li key={item} className="relative pl-3.5">
                      <span
                        aria-hidden="true"
                        className="absolute top-[0.72em] left-0 h-[5px] w-[5px] bg-gold"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:pt-1">
                <WhatsAppButton
                  tone="outline"
                  withIcon={false}
                  message={s.waMessage}
                  className="min-h-[46px] px-5 py-3 whitespace-nowrap"
                >
                  Ask about this
                </WhatsAppButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
