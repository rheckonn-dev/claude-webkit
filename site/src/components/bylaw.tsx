import Image from "next/image";
import { bylaw } from "@/lib/content";

/** Phrases worth pulling out of the paragraphs — the claim rests on these. */
const highlights = ["untreated", "nothing reaches the drain"];

function emphasise(text: string) {
  const hit = highlights.find((h) => text.includes(h));
  if (!hit) return text;
  const at = text.indexOf(hit);
  return (
    <>
      {text.slice(0, at)}
      <strong className="font-normal text-bone">{hit}</strong>
      {text.slice(at + hit.length)}
    </>
  );
}

export function Bylaw() {
  return (
    <section id="why" className="scroll-mt-24 bg-ink text-bone">
      <div className="mx-auto grid max-w-[1160px] gap-12 px-5 py-bay sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start lg:gap-20 lg:px-12">
        <div>
          <p className="cap mb-5 text-gold-light">{bylaw.eyebrow}</p>
          <h2 className="max-w-[12ch] text-h2 text-bone">{bylaw.heading}</h2>
          <div className="mt-8 space-y-6">
            {bylaw.paragraphs.map((p) => (
              <p key={p} className="max-w-[58ch] text-lead text-muted-dark">
                {emphasise(p)}
              </p>
            ))}
          </div>
        </div>

        <div>
          {/* Dry towel, dry paint, no bucket in frame — the claim, shown. */}
          <div className="relative mb-9 aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/waterless.webp"
              alt="A gloved hand drawing a dry microfibre towel across dusty navy paintwork, lifting the dirt without water"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
          </div>

          <dl className="grid">
            {bylaw.facts.map((f, i) => (
              <div
                key={f.value}
                className={
                  i === 0 ? "pb-7" : "border-t border-gold/40 py-7 last:pb-0"
                }
              >
                <dt className="mb-2 font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-none tabular-nums text-gold-light">
                  {f.value}
                </dt>
                <dd className="text-[0.875rem] leading-relaxed text-muted-dark">
                  {f.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
