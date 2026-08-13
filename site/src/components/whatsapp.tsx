import { business } from "@/lib/content";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6a11 11 0 0 1-4.2-3.9c-.6-.9-.9-1.7-.9-2.4 0-.7.3-1.3.7-1.7.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2 0 .4-.1.5l-.4.5c-.1.2-.3.3-.1.6.3.5.9 1.3 1.6 1.9.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3v1.1Z" />
    </svg>
  );
}

/** Build a wa.me link, optionally opening the chat with the message pre-typed. */
export function waHref(message?: string) {
  const base = `https://wa.me/${business.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Tones are a closed set on purpose. Passing colour utilities through
 * `className` collides with these base classes at equal specificity, and the
 * generated stylesheet order — not the class attribute order — decides the
 * winner. Add a tone here instead of overriding one from outside.
 */
type Tone = "solid" | "outline" | "onInk" | "gold";

const tones: Record<Tone, string> = {
  solid:
    "bg-ink text-bone border-ink hover:bg-ink-soft active:translate-y-px",
  outline:
    "bg-transparent text-ink border-rule hover:border-ink active:translate-y-px",
  onInk:
    "bg-transparent text-gold-light border-gold/55 hover:bg-gold/12 active:translate-y-px",
  gold:
    "bg-gold-light text-ink border-gold-light hover:bg-gold hover:border-gold active:translate-y-px",
};

export function WhatsAppButton({
  children,
  message,
  tone = "solid",
  withIcon = true,
  className = "",
}: {
  children: React.ReactNode;
  message?: string;
  tone?: Tone;
  withIcon?: boolean;
  className?: string;
}) {
  return (
    <a
      href={waHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2.5 border px-7 py-3.5 text-cap font-medium tracking-[0.2em] uppercase transition-colors duration-200 ${tones[tone]} ${className}`}
    >
      {withIcon && <WhatsAppIcon className="h-4 w-4 shrink-0" />}
      {children}
    </a>
  );
}
