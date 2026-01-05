"use client";

/**
 * Hero background: dark cyber grid + visible motion.
 * Pure CSS (GPU friendly), respects prefers-reduced-motion.
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#040404] to-black" />

      {/* Depth glows */}
      <div className="absolute -inset-40 opacity-[0.22] blur-[140px] hero-depth" />

      {/* Grid (two layers for parallax) */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 hero-grid hero-grid--fine" />

      {/* Moving light sweep */}
      <div className="absolute inset-0 hero-gridSweep" />

      {/* Soft scanlines */}
      <div className="absolute inset-0 pointer-events-none hero-scanlines opacity-[0.16] mix-blend-overlay" />

      {/* Film grain */}
      <div className="absolute inset-0 pointer-events-none hero-noise opacity-[0.10]" />

      {/* Vignette */}
      <div className="absolute inset-0 hero-vignette" />
    </div>
  );
}
