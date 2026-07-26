import Link from "next/link";

/** Apex three-peak mountain mark + wordmark. Uses currentColor for the peaks. */
export function Logo({
  className = "",
  sub = true,
}: {
  className?: string;
  sub?: boolean;
}) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`} aria-label="Apex Pest Solutions home">
      <svg width="34" height="26" viewBox="0 0 120 90" fill="none" aria-hidden="true">
        <path d="M4 82 L34 44 L46 58 L60 20 L74 50 L90 30 L116 82 Z" fill="currentColor" />
      </svg>
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
