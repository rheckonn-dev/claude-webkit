import { copy, type Locale } from "@/lib/content";
import { marcellus, jost } from "@/lib/fonts";
import "@/app/globals.css";

/**
 * The html/body shell. There is no app/layout.tsx — each language has its own
 * root layout inside a route group, which is what lets <html lang> actually
 * differ between the English and Spanish pages instead of lying on one of them.
 */
export function RootShell({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  const t = copy[lang];
  return (
    <html
      lang={t.htmlLang}
      className={`${marcellus.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bone text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-5 focus:py-3 focus:text-bone"
        >
          {t.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
