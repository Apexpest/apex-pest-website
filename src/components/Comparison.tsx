import { Container, Eyebrow } from "./ui";
import { comparison } from "@/lib/site";

function Cross() {
  return <span className="font-bold text-[#c14b4b]" aria-label="No">✕</span>;
}
function Tick() {
  return <span className="font-bold text-apex-green" aria-hidden="true">✓ </span>;
}

export function Comparison() {
  return (
    <section className="py-[92px]">
      <Container>
        <div className="mx-auto mb-[54px] max-w-[720px] text-center">
          <Eyebrow tone="green">The difference</Eyebrow>
          <h2 className="mt-3.5 font-display text-[clamp(28px,3.6vw,42px)] font-extrabold text-charcoal">
            DIY vs. typical pest control vs. Apex
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-xl bg-white shadow-[0_1px_0_#e4e1d8]">
            <thead>
              <tr>
                <th className="border-b border-[#ece9e1] p-[17px_20px] text-left" />
                {comparison.columns.map((c, i) => (
                  <th
                    key={c}
                    className={`border-b border-[#ece9e1] p-[17px_20px] text-left font-display text-[13px] font-bold uppercase tracking-[0.06em] ${
                      i === 2 ? "text-apex-green" : "text-[#8a8a80]"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((r) => (
                <tr key={r.feature}>
                  <td className="border-b border-[#ece9e1] p-[17px_20px] text-[15px] font-semibold text-charcoal">{r.feature}</td>
                  <td className="border-b border-[#ece9e1] p-[17px_20px] text-[15px]">{r.diy ? <Tick /> : <Cross />}</td>
                  <td className="border-b border-[#ece9e1] p-[17px_20px] text-[15px] text-[#5a5a52]">{r.typical}</td>
                  <td className="border-b border-[#ece9e1] bg-apex-green/[0.06] p-[17px_20px] text-[15px] font-semibold text-apex-green">
                    <Tick />
                    {r.apex}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
