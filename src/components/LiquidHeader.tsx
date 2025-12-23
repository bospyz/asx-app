"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export function LiquidHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setGlow({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  return (
    <div className="sticky top-0 z-50 px-4 pt-4">
      <div
        ref={ref}
        onPointerMove={onMove}
        className={[
          "mx-auto max-w-6xl",
          "rounded-[22px] border",
          "px-4 py-3 md:px-5",
          "transition-all duration-300",
          scrolled ? "border-white/15 bg-black/45 backdrop-blur-xl" : "border-white/12 bg-black/30 backdrop-blur-lg",
        ].join(" ")}
        style={{
          boxShadow: scrolled
            ? "0 10px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)"
            : "0 8px 24px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
          backgroundImage: `radial-gradient(600px 200px at ${glow.x}% ${glow.y}%, rgba(76,125,255,0.22), transparent 60%)`,
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="mono text-sm tracking-widest text-white/85"
              style={{ textShadow: "0 0 18px rgba(76,125,255,0.22)" }}
            >
              ASX
            </div>
            <div className="hidden md:block text-xs text-white/45">
              Detection • Verification • Investigation
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3 text-sm text-white/70">
            <Link className="hidden md:inline hover:text-white" href="/#use-cases">
              Use cases
            </Link>
            <Link className="hidden md:inline hover:text-white" href="/#how">
              How it works
            </Link>
            <Link className="hidden md:inline hover:text-white" href="/security">
              Security
            </Link>

            <Link
              href="/auth"
              className="btn btn-primary"
              style={{
                borderRadius: 16,
                padding: "10px 14px",
              }}
            >
              Try Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
