import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "ghostDark" | "white";
  className?: string;
};

const base =
  "inline-flex items-center gap-2 font-display font-bold text-[14px] tracking-[0.02em] px-[26px] py-[15px] rounded-md border-[1.5px] transition-colors duration-150";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-apex-green text-white border-transparent hover:bg-[#215838]",
  white: "bg-white text-apex-green border-transparent hover:bg-stone-soft",
  ghost: "bg-transparent text-white border-white/35 hover:border-white",
  ghostDark: "bg-transparent text-charcoal border-charcoal/25 hover:border-charcoal",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children, tone = "sage" }: { children: ReactNode; tone?: "sage" | "green" }) {
  return (
    <span className={`eyebrow ${tone === "sage" ? "text-summit-sage" : "text-apex-green"}`}>
      {children}
    </span>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1180px] px-8 ${className}`}>{children}</div>;
}
