"use client";

import { useEffect, useRef, useState } from "react";
import { Container, Eyebrow } from "./ui";
import { zones } from "@/lib/site";

/**
 * Signature element: three-zone home cross-section.
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
  const zoneStyle = (i: number) => ({
    opacity: lit(i) ? 1 : 0.22,
    transition: "opacity 600ms ease",
  });

  // treatment-point markers per zone
  // Peak Line — siding, windows, doors, eaves, roofline (the whole structure)
  const peakPts = [
    [350, 150],
    [180, 250],
    [520, 250],
    [350, 208],
    [263, 321],
    [437, 321],
    [350, 391],
    [350, 426],
    [502, 400],
  ];
  // Foundation Line — foundation, seams, crawlspace vents
  const foundationPts = [
    [257, 462],
    [443, 462],
    [350, 498],
    [528, 496],
  ];
  // Property Line — the yard, beds, perimeter
  const propertyPts = [
    [110, 524],
    [300, 542],
    [470, 542],
    [655, 524],
  ];

  const Marker = ({ x, y, c }: { x: number; y: number; c: string }) => (
    <g>
      <circle cx={x} cy={y} r="10" fill={c} opacity="0.22" />
      <circle cx={x} cy={y} r="4.5" fill={c} />
      <circle cx={x} cy={y} r="1.6" fill="#0a1610" />
    </g>
  );

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
            way it&apos;s actually built — from the property line all the way up to the peak line.
          </p>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
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
          <div className="rounded-2xl border border-white/10 bg-[#0a1610] p-4 sm:p-6">
            <svg
              viewBox="0 0 772 600"
              width="100%"
              role="img"
              aria-label="Cross-section of a home showing the three Summit Shield protection zones: property line, foundation line and peak line"
              fontFamily="var(--font-display)"
            >
              <defs>
                <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1c3123" />
                  <stop offset="1" stopColor="#152720" />
                </linearGradient>
                <linearGradient id="roof" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#12251a" />
                  <stop offset="1" stopColor="#0d1c14" />
                </linearGradient>
              </defs>

              {/* faint mountain silhouette — echoes the logo */}
              <path
                d="M20 300 L150 190 L215 235 L300 150 L350 120 L420 205 L500 165 L560 210 L740 300 Z"
                fill="#6FA285"
                opacity="0.07"
              />

              {/* zone highlight bands */}
              <g style={zoneStyle(2)}>
                <rect x="0" y="70" width="772" height="360" fill="#C8892E" opacity="0.11" />
              </g>
              <g style={zoneStyle(1)}>
                <rect x="0" y="430" width="772" height="70" fill="#6FA285" opacity="0.15" />
              </g>
              <g style={zoneStyle(0)}>
                <rect x="0" y="500" width="772" height="100" fill="#6FA285" opacity="0.10" />
              </g>

              {/* ground / soil */}
              <rect x="0" y="500" width="772" height="100" fill="#06110b" />
              <line x1="0" y1="500" x2="772" y2="500" stroke="#6FA285" strokeOpacity="0.35" />
              {/* mulch bed */}
              <path d="M150 500 Q350 476 570 500 Z" fill="#26311f" opacity="0.7" />

              {/* ---- HOUSE ---- */}
              {/* foundation */}
              <rect x="180" y="430" width="340" height="70" fill="#223528" stroke="#6FA285" strokeOpacity="0.5" strokeWidth="1.5" />
              {/* crawlspace vents */}
              {[240, 333, 426].map((vx) => (
                <g key={vx}>
                  <rect x={vx} y="452" width="34" height="22" rx="2" fill="#0a1712" stroke="#6FA285" strokeOpacity="0.55" />
                  <line x1={vx + 4} y1="459" x2={vx + 30} y2="459" stroke="#6FA285" strokeOpacity="0.4" />
                  <line x1={vx + 4} y1="467" x2={vx + 30} y2="467" stroke="#6FA285" strokeOpacity="0.4" />
                </g>
              ))}

              {/* walls */}
              <rect x="198" y="250" width="304" height="180" fill="url(#wall)" stroke="#6FA285" strokeOpacity="0.55" strokeWidth="1.5" />
              {/* siding lines */}
              {[272, 294, 316, 338, 360, 382, 404].map((sy) => (
                <line key={sy} x1="198" y1={sy} x2="502" y2={sy} stroke="#6FA285" strokeOpacity="0.1" />
              ))}
              {/* weep holes along base of siding */}
              {[260, 350, 440].map((wx) => (
                <rect key={wx} x={wx - 4} y="424" width="8" height="4" fill="#0a1712" />
              ))}

              {/* windows */}
              {[230, 404].map((wx) => (
                <g key={wx}>
                  <rect x={wx} y="288" width="66" height="66" fill="#0a1712" stroke="#6FA285" strokeOpacity="0.55" strokeWidth="1.5" />
                  <line x1={wx + 33} y1="288" x2={wx + 33} y2="354" stroke="#6FA285" strokeOpacity="0.4" />
                  <line x1={wx} y1="321" x2={wx + 66} y2="321" stroke="#6FA285" strokeOpacity="0.4" />
                </g>
              ))}
              {/* door */}
              <rect x="328" y="352" width="44" height="78" fill="#0a1712" stroke="#6FA285" strokeOpacity="0.55" strokeWidth="1.5" />
              <rect x="335" y="360" width="30" height="30" fill="none" stroke="#6FA285" strokeOpacity="0.3" />
              <circle cx="365" cy="392" r="2" fill="#6FA285" />

              {/* utility penetration (pipe through wall) */}
              <line x1="502" y1="400" x2="524" y2="400" stroke="#6FA285" strokeOpacity="0.6" strokeWidth="4" />

              {/* roof */}
              <path d="M150 252 L350 138 L550 252 Z" fill="url(#roof)" stroke="#6FA285" strokeOpacity="0.6" strokeWidth="1.6" />
              {/* fascia / soffit under eaves */}
              <rect x="150" y="252" width="400" height="8" fill="#0d1c14" stroke="#6FA285" strokeOpacity="0.4" />
              {/* gable vent */}
              <path d="M330 214 L350 192 L370 214 Z" fill="#0a1712" stroke="#6FA285" strokeOpacity="0.55" />
              <line x1="337" y1="208" x2="363" y2="208" stroke="#6FA285" strokeOpacity="0.4" />

              {/* downspout */}
              <path d="M524 260 L524 492" stroke="#6FA285" strokeOpacity="0.5" strokeWidth="3" fill="none" />
              <path d="M512 492 L544 492 L538 500 L518 500 Z" fill="#223528" stroke="#6FA285" strokeOpacity="0.4" />

              {/* ---- ZONE MARKERS ---- */}
              <g style={zoneStyle(2)}>
                {peakPts.map(([x, y], k) => <Marker key={k} x={x} y={y} c="#C8892E" />)}
              </g>
              <g style={zoneStyle(1)}>
                {foundationPts.map(([x, y], k) => <Marker key={k} x={x} y={y} c="#6FA285" />)}
              </g>
              <g style={zoneStyle(0)}>
                {propertyPts.map(([x, y], k) => <Marker key={k} x={x} y={y} c="#ffffff" />)}
              </g>

              {/* ---- LEFT: zone number chips ---- */}
              {[
                { n: "03", y: 240, c: "#C8892E", i: 2 },
                { n: "02", y: 465, c: "#6FA285", i: 1 },
                { n: "01", y: 545, c: "#ffffff", i: 0 },
              ].map((z) => (
                <g key={z.n} style={zoneStyle(z.i)}>
                  <circle cx="34" cy={z.y} r="17" fill="none" stroke={z.c} strokeWidth="1.6" />
                  <text x="34" y={z.y + 5} textAnchor="middle" fill={z.c} fontWeight="800" fontSize="14">{z.n}</text>
                </g>
              ))}

              {/* ---- RIGHT: feature labels with leader lines ---- */}
              <g style={zoneStyle(2)} fill="#C8892E">
                <line x1="520" y1="250" x2="588" y2="228" stroke="#C8892E" strokeOpacity="0.5" />
                <text x="592" y="224" fontSize="14" fontWeight="700">Siding, windows, doors,</text>
                <text x="592" y="242" fontSize="14" fontWeight="700">eaves &amp; roofline</text>
              </g>
              <g style={zoneStyle(1)} fill="#6FA285">
                <line x1="528" y1="462" x2="590" y2="440" stroke="#6FA285" strokeOpacity="0.5" />
                <text x="594" y="436" fontSize="14" fontWeight="700">Foundation, seams</text>
                <text x="594" y="454" fontSize="14" fontWeight="700">&amp; crawlspace vents</text>
              </g>
              <g style={zoneStyle(0)} fill="#e9efe9">
                <line x1="470" y1="542" x2="590" y2="520" stroke="#ffffff" strokeOpacity="0.4" />
                <text x="594" y="516" fontSize="14" fontWeight="700">The yard, beds</text>
                <text x="594" y="534" fontSize="14" fontWeight="700">&amp; perimeter</text>
              </g>
            </svg>
            <p className="mt-3 text-center text-[12.5px] text-white/50">
              {interactive
                ? "Scroll to reveal each zone — or tap a zone to explore it."
                : "Tap a zone above to explore each layer."}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
