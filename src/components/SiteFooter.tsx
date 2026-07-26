import { Logo } from "./Logo";
import { Container } from "./ui";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import type { ResolvedSite } from "@/lib/getSiteSettings";

const company = [
  { label: "Service Areas", href: "/locations" },
  { label: "Pest Library", href: "/pests" },
  { label: "Summit Shield", href: "/the-apex-standard/summit-shield" },
  { label: "The Apex Promise", href: "/the-apex-standard/apex-promise" },
  { label: "Our Team", href: "/the-apex-standard/our-team" },
  { label: "Military & PCS", href: "/the-apex-standard/military" },
  { label: "Careers", href: "/careers" },
];

export function SiteFooter({ settings }: { settings: ResolvedSite }) {
  return (
    <footer className="bg-black pb-[120px] pt-16 text-[14px] text-white/60 md:pb-16">
      <Container>
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="mb-4 text-white" />
            <p className="max-w-[280px]">
              Peak protection for Kentucky homes. Proudly serving the Fort Knox community and
              Central Kentucky.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-white">Services</h4>
            {services.slice(0, 6).map((s) => (
              <a key={s.slug} href={`/pest-control/${s.slug}`} className="block py-[5px] hover:text-white">{s.title}</a>
            ))}
          </div>
          <div>
            <h4 className="mb-4 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-white">Company</h4>
            {company.map((c) => (
              <a key={c.href} href={c.href} className="block py-[5px] hover:text-white">{c.label}</a>
            ))}
          </div>
          <div>
            <h4 className="mb-4 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-white">Get in touch</h4>
            <a href={settings.phoneHref} className="block py-[5px] hover:text-white">{settings.phone}</a>
            <a href={`mailto:${settings.email}`} className="block py-[5px] hover:text-white">{settings.email}</a>
            <a href="/get-a-quote" className="block py-[5px] hover:text-white">Get a Free Quote</a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[12.5px] text-white/45">
          <span>© {new Date().getFullYear()} {site.name} · KDA License #{settings.licenseNumber} · Licensed &amp; insured in Kentucky</span>
          <span>
            <a href="/privacy" className="hover:text-white">Privacy</a> ·{" "}
            <a href="/terms" className="hover:text-white">Terms</a> ·{" "}
            <a href="/accessibility" className="hover:text-white">Accessibility</a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
