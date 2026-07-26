import { Logo } from "./Logo";
import { Button } from "./ui";
import { nav } from "@/lib/site";
import type { ResolvedSite } from "@/lib/getSiteSettings";

export function SiteHeader({ settings }: { settings: ResolvedSite }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md text-white">
      <div className="mx-auto flex h-[74px] max-w-[1180px] items-center justify-between px-8">
        <Logo className="text-white" />
        <nav className="hidden items-center gap-[30px] lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-[14.5px] font-medium text-white/80 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={settings.phoneHref} className="hidden font-display text-[14px] font-bold text-white md:block">
            {settings.phone}
          </a>
          <Button href="/get-a-quote">Get My Free Inspection</Button>
        </div>
      </div>
    </header>
  );
}
