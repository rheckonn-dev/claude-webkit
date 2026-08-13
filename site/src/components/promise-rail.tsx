import type { Copy } from "@/lib/content";

export function PromiseRail({ t }: { t: Copy }) {
  return (
    <section className="border-b border-rule bg-surface">
      <div className="mx-auto grid max-w-[1160px] px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-4 lg:gap-10 lg:px-12">
        {t.promises.map((p, i) => (
          <div
            key={p.title}
            className={
              i === 0
                ? "py-5 first:pt-0 lg:border-l-0 lg:py-0 lg:pl-0"
                : "border-t border-rule py-5 lg:border-t-0 lg:border-l lg:py-0 lg:pl-7"
            }
          >
            <h2 className="mb-1 font-display text-[1.3rem] text-ink">{p.title}</h2>
            <p className="text-[0.9rem] leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
