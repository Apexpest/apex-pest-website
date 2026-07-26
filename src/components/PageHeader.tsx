import Link from "next/link";
import { Container, Eyebrow } from "./ui";

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="bg-[radial-gradient(120%_120%_at_80%_0%,#1a3a28_0%,#0d0d0d_60%)] text-white">
      <Container className="py-16 lg:py-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5 text-[13px] text-white/55">
            {crumbs.map((c, i) => (
              <span key={i}>
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">{c.label}</Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="px-2">/</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-3 max-w-[820px] font-display text-[clamp(30px,4.2vw,50px)] font-extrabold">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-[640px] text-[18px] text-white/75">{intro}</p>}
      </Container>
    </section>
  );
}
