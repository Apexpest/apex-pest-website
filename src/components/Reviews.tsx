import { Container, Eyebrow } from "./ui";
import { reviews } from "@/lib/reviews";

function Stars() {
  return (
    <div className="mb-4 text-alert-amber" aria-label="5 out of 5 stars">
      {"★★★★★"}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="bg-black py-[92px] text-white">
      <Container>
        <div className="mx-auto mb-[54px] max-w-[720px] text-center">
          <Eyebrow>What Kentucky homeowners say</Eyebrow>
          <h2 className="mt-3.5 font-display text-[clamp(28px,3.6vw,42px)] font-extrabold">
            Five-star service, in their words
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.author} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <Stars />
              <blockquote className="text-[15.5px] leading-relaxed text-white/80">“{r.quote}”</blockquote>
              <figcaption className="mt-5 font-display text-[14px] font-bold text-summit-sage">
                {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-[14px] text-white/55">
          Read more on{" "}
          <a href="https://www.facebook.com/Apexpestky/" className="text-summit-sage underline-offset-4 hover:underline">
            Facebook
          </a>{" "}
          and{" "}
          <a href="https://www.instagram.com/apex_pest_ky/" className="text-summit-sage underline-offset-4 hover:underline">
            Instagram
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
