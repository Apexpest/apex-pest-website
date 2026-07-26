"use client";

import { useState, useEffect } from "react";
import { nav } from "@/lib/site";
import type { ResolvedSite } from "@/lib/getSiteSettings";

export function MobileMenu({ settings }: { settings: ResolvedSite }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="fixed inset-x-0 top-[74px] bottom-0 z-50 overflow-y-auto bg-black/98 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-[18px] font-semibold text-white/90 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/get-a-quote"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-md bg-apex-green px-6 py-4 text-center font-display text-[16px] font-bold text-white"
            >
              Get My Free Inspection
            </a>
            <a
              href={settings.phoneHref}
              className="mt-3 rounded-md border border-white/25 px-6 py-4 text-center font-display text-[16px] font-bold text-white"
            >
              Call {settings.phone}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
