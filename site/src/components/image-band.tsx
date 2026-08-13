import Image from "next/image";

/**
 * A full-bleed photograph used as a section break.
 * Height is capped in viewport units so a tall photo can't swallow a phone
 * screen, and the crop is driven by objectPosition rather than a fixed ratio.
 */
export function ImageBand({
  src,
  alt,
  position = "center",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  position?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[52vw] max-h-[560px] min-h-[220px] w-full overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
