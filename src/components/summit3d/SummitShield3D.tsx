"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const HouseScene = dynamic(() => import("./HouseScene"), {
  ssr: false,
  loading: () => <Placeholder label="Loading 3D model…" />,
});

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-[420px] w-full items-center justify-center rounded-2xl border border-white/10 bg-[#0a1610] sm:h-[520px]">
      <p className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white/40">{label}</p>
    </div>
  );
}

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

/** Lazy-mounts the 3D scene only when scrolled near view, and only if WebGL is available. */
export function SummitShield3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [webgl, setWebgl] = useState<boolean | null>(null);

  useEffect(() => {
    setWebgl(hasWebGL());
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // No WebGL → render nothing (the zone cards below carry all the info).
  if (webgl === false) return null;

  return <div ref={ref}>{inView ? <HouseScene /> : <Placeholder label="3D home model" />}</div>;
}
