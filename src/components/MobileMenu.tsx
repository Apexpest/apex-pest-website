"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { nav } from "@/lib/site";
import type { ResolvedSite } from "@/lib/getSiteSettings";

export function MobileMenu({ settings }: { settings: ResolvedSite }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const panel =
    open && mounted
      ? createPortal(
          <div className="xl:hidden">
            {/* backdrop */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[90] bg-black/60"
            />
            {/* drawer */}
            <div className="fixed inset-y-0 right-0 z-[100] flex w-[86%] max-w-[360px] flex-col bg-white shadow-2xl">
              <div className="flex h-[74px] shrink-0 items-center justify-between border-b border-[#e4e1d8] px-6">
                <span className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-md text-charcoal hover:bg-black/5"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-4" aria-label="Mobile">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-[#e4e1d8] py-4 font-display text-[18px] font-semibold text-charcoal hover:text-apex-green"
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
                  className="mt-3 rounded-md border border-charcoal/25 px-6 py-4 text-center font-display text-[16px] font-bold text-charcoal"
                >
                  Call {settings.phone}
                </a>
              </nav>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/10"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      {panel}
    </div>
  );
}
