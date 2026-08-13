import { business, routes, type Copy, type Locale } from "@/lib/content";
import { waHref } from "@/components/whatsapp";

export function SiteFooter({ lang, t }: { lang: Locale; t: Copy }) {
  const year = new Date().getFullYear();
  const other: Locale = lang === "en" ? "es" : "en";

  return (
    <footer className="bg-ink-soft text-muted-dark">
      <div className="mx-auto grid max-w-[1160px] gap-10 px-5 py-14 text-[0.9rem] sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12 lg:px-12">
        <div>
          <p className="mb-2 font-display text-[1.5rem] text-bone">
            {business.name}
          </p>
          <p className="max-w-[42ch]">
            {t.footer.blurb} {business.areas.slice(0, -1).join(", ")}{" "}
            {lang === "es" ? "y" : "and"} {business.areas.at(-1)}.
          </p>
          <ul className="mt-5 flex flex-wrap gap-6">
            {business.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-light underline-offset-4 hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="cap mb-4 text-gold-light">{t.footer.contact}</h2>
          <ul className="grid gap-2">
            <li>
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light underline-offset-4 hover:underline"
              >
                {t.footer.whatsapp} {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`tel:+${business.whatsapp}`}
                className="text-gold-light underline-offset-4 hover:underline"
              >
                {t.footer.call} {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="break-all text-gold-light underline-offset-4 hover:underline"
              >
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="cap mb-4 text-gold-light">{t.footer.hours}</h2>
          <ul className="grid gap-2">
            {t.footer.hoursRows.map((h) => (
              <li key={h.days}>
                {h.days}
                <br />
                <span className="text-bone">{h.time}</span>
              </li>
            ))}
            <li className="pt-1">
              <a
                href={routes[other]}
                hrefLang={other}
                lang={other}
                className="text-gold-light underline-offset-4 hover:underline"
              >
                {t.switchLabel}
              </a>
            </li>
          </ul>
        </div>

        <div className="grid gap-1.5 border-t border-white/10 pt-6 text-[0.8rem] lg:col-span-3">
          <p>
            © {year} {business.name}
          </p>
          <p>
            {t.footer.credit}{" "}
            <a
              href="https://tododeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
