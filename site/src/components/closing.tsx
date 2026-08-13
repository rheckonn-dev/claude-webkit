import { business, closing } from "@/lib/content";
import { WhatsAppButton } from "@/components/whatsapp";

export function Closing() {
  return (
    <section className="bg-ink text-bone">
      <div className="mx-auto max-w-[900px] px-5 py-bay text-center sm:px-8">
        <h2 className="mx-auto max-w-[16ch] text-h2 text-bone">
          {closing.heading}
        </h2>
        <p className="mx-auto mt-7 max-w-[46ch] text-lead text-muted-dark">
          {closing.body}
        </p>
        <div className="mt-11 flex flex-wrap justify-center gap-3">
          <WhatsAppButton tone="gold">{business.phoneDisplay}</WhatsAppButton>
          <a
            href={`mailto:${business.email}`}
            className="inline-flex min-h-[52px] cursor-pointer items-center justify-center border border-gold/55 px-7 py-3.5 text-cap font-medium tracking-[0.2em] text-gold-light uppercase transition-colors duration-200 hover:bg-gold/12"
          >
            Email instead
          </a>
        </div>
      </div>
    </section>
  );
}
