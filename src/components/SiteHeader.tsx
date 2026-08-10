import { Logo } from "./Logo";
import { Button } from "./ui";
import { MobileMenu } from "./MobileMenu";
import { nav } from "@/lib/site";
import type { ResolvedSite } from "@/lib/getSiteSettings";

export function SiteHeader({ settings }: { settings: ResolvedSite }) {
  return (
    <>
      {/* light top strip — balances the dark header */}
      <div className="bg-stone-soft text-charcoal">
        <div className="mx-auto flex h-9 max-w-[1280px] items-center justify-between px-6 text-[12.5px]">
          <span className="hidden font-medium text-[#5a5a52] sm:block">
            Thorough, reliable pest control across Central Kentucky
          </span>
          <div className="flex items-center gap-4">
            <span className="hidden text-[#5a5a52] md:inline">Licensed &amp; insured in Kentucky</span>
            <span className="hidden text-summit-sage md:inline" aria-hidden="true">·</span>
            <a href={settings.phoneHref} className="font-display font-bold text-apex-green">
              {settings.phone}
            </a>
          </div>
        </div>
      </div>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md text-white">
      <div className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between px-6">
        <Logo className="shrink-0 text-white" />

        {/* Desktop nav — shown only when there's room (>=1280px) so labels never wrap */}
        <nav className="hidden items-center gap-[26px] xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[14.5px] font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop right group */}
        <div className="hidden items-center gap-4 xl:flex">
          <a href={settings.phoneHref} className="whitespace-nowrap font-display text-[14px] font-bold text-white">
            {settings.phone}
          </a>
          <Button href="/get-a-quote">Get My Free Inspection</Button>
        </div>

        {/* Mobile / tablet menu */}
        <MobileMenu settings={settings} />
      </div>
    </header>
    </>
  );
}
