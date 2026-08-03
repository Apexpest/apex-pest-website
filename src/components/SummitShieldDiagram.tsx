/**
 * Static home cross-section with the five Summit Shield protected areas
 * highlighted and numbered. Pure presentational SVG — no animation, no 3D.
 * Shared by the homepage section and the Summit Shield page.
 */

const AREA_COLOR: Record<string, string> = { sage: "#6FA285", amber: "#C8892E" };

// numbered markers placed on the house, one group per point (order = zones order)
const MARKERS: { pts: [number, number][]; tone: "sage" | "amber" }[] = [
  { tone: "sage", pts: [[110, 548], [300, 560], [470, 560], [660, 548]] }, // 01 Property Line — yard
  { tone: "sage", pts: [[210, 470], [350, 486], [490, 470]] },             // 02 Foundation Line — perimeter band
  { tone: "sage", pts: [[263, 321], [437, 321], [350, 391]] },             // 03 Entry Points — windows & door
  { tone: "amber", pts: [[195, 250], [505, 250], [350, 176]] },            // 04 Peak Line — eaves & roofline
  { tone: "sage", pts: [[300, 340], [400, 386]] },                          // 05 Interior — rooms
];

export function SummitShieldDiagram({ caption }: { caption?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a1610] p-4 sm:p-6">
      <svg
        viewBox="0 0 772 620"
        width="100%"
        role="img"
        aria-label="Cross-section of a home with the five Summit Shield protected areas highlighted: property line, foundation line, entry points, peak line and interior"
        fontFamily="var(--font-display)"
      >
        <defs>
          <linearGradient id="ssWall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1c3123" />
            <stop offset="1" stopColor="#152720" />
          </linearGradient>
          <linearGradient id="ssRoof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#12251a" />
            <stop offset="1" stopColor="#0d1c14" />
          </linearGradient>
        </defs>

        {/* faint mountain silhouette — echoes the logo */}
        <path d="M20 300 L150 190 L215 235 L300 150 L350 120 L420 205 L500 165 L560 210 L740 300 Z" fill="#6FA285" opacity="0.07" />

        {/* highlighted protected areas (all shown) */}
        <rect x="0" y="70" width="772" height="190" fill="#C8892E" opacity="0.10" />
        <rect x="198" y="250" width="304" height="180" fill="#6FA285" opacity="0.08" />
        <rect x="150" y="430" width="440" height="72" fill="#6FA285" opacity="0.14" />
        <rect x="0" y="502" width="772" height="118" fill="#6FA285" opacity="0.09" />

        {/* ground / soil */}
        <rect x="0" y="502" width="772" height="118" fill="#06110b" />
        <line x1="0" y1="502" x2="772" y2="502" stroke="#6FA285" strokeOpacity="0.35" />
        <path d="M150 502 Q350 478 570 502 Z" fill="#26311f" opacity="0.7" />

        {/* foundation + crawlspace vents */}
        <rect x="180" y="430" width="340" height="72" fill="#223528" stroke="#6FA285" strokeOpacity="0.5" strokeWidth="1.5" />
        {[240, 333, 426].map((vx) => (
          <g key={vx}>
            <rect x={vx} y="452" width="34" height="22" rx="2" fill="#0a1712" stroke="#6FA285" strokeOpacity="0.55" />
            <line x1={vx + 4} y1="459" x2={vx + 30} y2="459" stroke="#6FA285" strokeOpacity="0.4" />
            <line x1={vx + 4} y1="467" x2={vx + 30} y2="467" stroke="#6FA285" strokeOpacity="0.4" />
          </g>
        ))}

        {/* walls + siding */}
        <rect x="198" y="250" width="304" height="180" fill="url(#ssWall)" stroke="#6FA285" strokeOpacity="0.55" strokeWidth="1.5" />
        {[272, 294, 316, 338, 360, 382, 404].map((sy) => (
          <line key={sy} x1="198" y1={sy} x2="502" y2={sy} stroke="#6FA285" strokeOpacity="0.1" />
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

        {/* roof + eaves + gable vent */}
        <path d="M150 252 L350 138 L550 252 Z" fill="url(#ssRoof)" stroke="#6FA285" strokeOpacity="0.6" strokeWidth="1.6" />
        <rect x="150" y="252" width="400" height="8" fill="#0d1c14" stroke="#6FA285" strokeOpacity="0.4" />
        <path d="M330 214 L350 192 L370 214 Z" fill="#0a1712" stroke="#6FA285" strokeOpacity="0.55" />
        <line x1="337" y1="208" x2="363" y2="208" stroke="#6FA285" strokeOpacity="0.4" />

        {/* downspout */}
        <path d="M524 260 L524 494" stroke="#6FA285" strokeOpacity="0.5" strokeWidth="3" fill="none" />

        {/* numbered markers */}
        {MARKERS.map((m, mi) =>
          m.pts.map(([x, y], k) => {
            const c = AREA_COLOR[m.tone];
            return (
              <g key={`${mi}-${k}`}>
                <circle cx={x} cy={y} r="12" fill={c} opacity="0.22" />
                <circle cx={x} cy={y} r="10" fill="none" stroke={c} strokeWidth="1.4" />
                <text x={x} y={y + 4} textAnchor="middle" fill={c} fontWeight="800" fontSize="11">
                  {String(mi + 1).padStart(2, "0")}
                </text>
              </g>
            );
          })
        )}
      </svg>
      {caption ? <p className="mt-3 text-center text-[13px] text-white/50">{caption}</p> : null}
    </div>
  );
}
