import type { ResolvedSite } from "@/lib/getSiteSettings";

/** Sticky, thumb-reachable call + quote bar. Mobile only. #1 conversion path. */
export function MobileCallBar({ settings }: { settings: ResolvedSite }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] grid grid-cols-2 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] md:hidden">
      <a href={settings.phoneHref} className="bg-charcoal p-4 text-center font-display text-[14px] font-bold text-white">
        Call Us
      </a>
      <a href="/get-a-quote" className="bg-apex-green p-4 text-center font-display text-[14px] font-bold text-white">
        Free Inspection
      </a>
    </div>
  );
}
