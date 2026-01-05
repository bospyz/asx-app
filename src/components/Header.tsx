"use client";

import Link from "next/link";
import React, { useState } from "react";

const nav = [
  { href: "#platform", label: "01. PLATFORM" },
  { href: "#products", label: "02. MODULES" },
  { href: "#usecases", label: "03. USECASES" },
  { href: "#research", label: "04. RSRCH" },
  { href: "#experience", label: "05. TEAM" },
  { href: "#contact", label: "06. CONTACT" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 py-4 flex justify-between items-center border-b border-[#CCFD03]/20 bg-black/80 backdrop-blur-md">
      <div className="text-xl sm:text-2xl font-pixel tracking-tighter text-[#CCFD03]">
        <Link href="/">ASX_SYSTEMS</Link>
      </div>

      <div className="hidden lg:flex gap-7 text-[11px] uppercase tracking-widest items-center">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="hover:text-[#CCFD03] transition-colors">
            {n.label}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-[#CCFD03] text-black px-4 py-2 font-bold hover:bg-white transition-all border-b-4 border-r-4 border-black"
        >
          GET_ACCESS
        </a>
      </div>

      {/* Mobile */}
      <button
        className="lg:hidden text-[11px] uppercase tracking-widest border border-[#CCFD03]/30 px-3 py-2 hover:border-[#CCFD03]"
        onClick={() => setOpen((s) => !s)}
        type="button"
      >
        MENU
      </button>

      {open && (
        <div className="lg:hidden absolute top-[64px] left-0 right-0 bg-black border-b border-[#CCFD03]/20">
          <div className="px-4 py-4 grid grid-cols-1 gap-3 text-[11px] uppercase tracking-widest">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 px-2 border border-[#CCFD03]/15 hover:border-[#CCFD03]/60 hover:text-[#CCFD03]"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-3 px-3 bg-[#CCFD03] text-black font-bold border-b-4 border-r-4 border-black"
            >
              GET_ACCESS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
