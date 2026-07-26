"use client";

import { useEffect, useRef, useState } from "react";
import { Container, Eyebrow } from "./ui";
import { zones } from "@/lib/site";

/**
 * Signature element: three-zone elevation diagram.
 * Desktop: zones light in sequence as the section scrolls through the viewport.
 * Reduced motion: all zones lit (static, fully readable).
 * Mobile / keyboard: zones are buttons — tap to reveal each.
 */
export function SummitShield() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(2);
      return;
    }
    setInteractive(true);
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // progress: 0 when section top hits 75% of viewport, 1 near center
        const p = (vh * 0.85 - rect.top) / (rect.height * 0.6);
        const clamped = Math.max(0, Math.min(1, p));
        setActive(Math.min(2, Math.floor(clamped * 3.001)));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lit = (i: number) => i <= active;

  return (
    <section id="summit-shield" className="bg-forest-green py-[92px] text-white" ref={ref}>
      <Container>
        <div className="mx-auto mb-[54px] max-w-[720px] text-center">
          <Eyebrow>The Apex Standard</Eyebrow>
          <h2 className="mt-3.5 font-display text-[clamp(28px,3.6vw,42px)] font-extrabold">
            Summit Shield™ — Three-Zone Elevation Defense
          </h2>
          <p className="mt-4 text-[18px] text-white/70">
            Most companies spray a band around your foundation and leave. We protect your home the
            way it&apos;s actually built — from the ground line all the way up to the ridge line.
          </p>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Zone list — also the tap-through control */}
          <div>
            {zones.map((z, i) => {
              const amber = z.tone === "amber";
              return (
                <button
                  key={z.no}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={lit(i)}
                  className={`mb-4 block w-full rounded-r-[10px] border-l-[3px] px-[22px] py-5 text-left transition-all duration-500 ${
                    amber ? "border-alert-amber" : "border-summit-sage"
                  } ${lit(i) ? "bg-white/[0.06] opacity-100" : "bg-white/[0.02] opacity-45"}`}
                >
                  <span className={`font-display text-[13px] font-extrabold tracking-[0.1em] ${amber ? "text-alert-amber" : "text-summit-sage"}`}>
                    ZONE {z.no} · {z.name.toUpperCase()}
                  </span>
                  <span className="mt-1 mb-[7px] block font-display text-[20px] font-bold text-white">{z.headline}</span>
                  <span className="block text-[14.5px] text-white/70">{z.body}</span>
                </button>
              );
            })}
          </div>

          {/* Diagram */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <svg viewBox="0 0 460 420" width="100%" role="img" aria-label="Cross-section of a home showing three protection zones from ground line to ridge line">
              <rect x="0" y="360" width="460" height="60" fill="#0d1f15" />
              <line x1="0" y1="360" x2="460" y2="360" stroke="#6FA285" strokeOpacity="0.4" />
              <rect x="120" y="200" width="220" height="160" fill="#1B1B1B" stroke="#3a5c48" strokeWidth="1.5" />
              <path d="M100 200 L230 96 L360 200 Z" fill="#152b1e" stroke="#3a5c48" strokeWidth="1.5" />
              <path d="M195 128 L230 96 L268 128 L245 140 L230 132 L215 140 Z" fill="#6FA285" opacity="0.5" />
              <rect x="150" y="240" width="42" height="42" fill="#0d1f15" stroke="#3a5c48" />
              <rect x="268" y="240" width="42" height="42" fill="#0d1f15" stroke="#3a5c48" />
              <rect x="210" y="300" width="40" height="60" fill="#0d1f15" stroke="#3a5c48" />

              {/* Ridge (zone 3) */}
              <g style={{ opacity: lit(2) ? 1 : 0.15, transition: "opacity 500ms" }}>
                <rect x="70" y="150" width="320" height="66" fill="#C8892E" opacity="0.1" />
                <text x="384" y="176" fill="#C8892E" fontFamily="var(--font-display)" fontWeight="700" fontSize="12">RIDGE</text>
                <text x="384" y="192" fill="#C8892E" fontFamily="var(--font-display)" fontWeight="700" fontSize="12">LINE</text>
                <circle cx="150" cy="196" r="5" fill="#C8892E" />
                <circle cx="230" cy="150" r="5" fill="#C8892E" />
                <circle cx="310" cy="196" r="5" fill="#C8892E" />
              </g>
              {/* Structure (zone 2) */}
              <g style={{ opacity: lit(1) ? 1 : 0.15, transition: "opacity 500ms" }}>
                <rect x="70" y="228" width="320" height="96" fill="#6FA285" opacity="0.12" />
                <text x="384" y="272" fill="#6FA285" fontFamily="var(--font-display)" fontWeight="700" fontSize="12">STRUCT.</text>
                <text x="384" y="288" fill="#6FA285" fontFamily="var(--font-display)" fontWeight="700" fontSize="12">LINE</text>
                <circle cx="192" cy="261" r="5" fill="#6FA285" />
                <circle cx="268" cy="261" r="5" fill="#6FA285" />
                <circle cx="340" cy="300" r="5" fill="#6FA285" />
                <circle cx="120" cy="300" r="5" fill="#6FA285" />
              </g>
              {/* Ground (zone 1) */}
              <g style={{ opacity: lit(0) ? 1 : 0.15, transition: "opacity 500ms" }}>
                <rect x="40" y="336" width="380" height="42" fill="#ffffff" opacity="0.08" />
                <text x="384" y="352" fill="#ffffff" fontFamily="var(--font-display)" fontWeight="700" fontSize="12">GROUND</text>
                {[110, 180, 230, 290, 355].map((cx) => (
                  <circle key={cx} cx={cx} cy="360" r="5" fill="#fff" />
                ))}
              </g>
            </svg>
            <p className="mt-2 text-center text-[12.5px] text-white/50">
              {interactive ? "Scroll to reveal each zone — or tap a zone above." : "Tap a zone above to explore each layer."}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
