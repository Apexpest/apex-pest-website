import Link from "next/link";
import Image from "next/image";

/** Apex mountain mark (exact logo, extracted to a transparent PNG) + wordmark. */
export function Logo({
  className = "",
  sub = true,
}: {
  className?: string;
  sub?: boolean;
}) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`} aria-label="Apex Pest Solutions home">
      <Image
        src="/apex-mountain.png"
        alt=""
        width={850}
        height={322}
        priority
        className="h-7 w-auto"
      />
      <span className="leading-none">
        <span className="font-display font-extrabold tracking-[0.06em] text-[19px] block">APEX</span>
        {sub && (
          <span className="font-display font-semibold tracking-[0.28em] text-[8px] text-summit-sage block mt-[3px]">
            PEST SOLUTIONS
          </span>
        )}
      </span>
    </Link>
  );
}
