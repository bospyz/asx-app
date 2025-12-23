"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { WaveHero } from "@/components/WaveHero";

export default function HomePage() {
  // Фикс для гидратации динамических данных (времени)
  const [time, setTime] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="noise min-h-screen bg-[#020202] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden scroll-smooth">
      
      {/* HEADER */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-10 py-6 md:py-8 flex justify-between items-center mix-blend-difference">
        <div className="text-xl md:text-2xl font-black tracking-tighter cursor-pointer">ASX.</div>
        <div className="hidden md:flex gap-10 lg:gap-12 text-[10px] mono uppercase tracking-[0.4em] text-white/40">
          <Link href="#protocol" className="hover:text-blue-500 transition-all italic">01 // Protocol</Link>
          <Link href="#infrastructure" className="hover:text-blue-500 transition-all italic">02 // Infra</Link>
          <Link href="/auth" className="text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">
            Access_Terminal
          </Link>
        </div>
        {/* Mobile Menu Icon (Placeholder) */}
        <div className="md:hidden text-[10px] mono text-blue-500">Menu_v.1</div>
      </nav>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-6 py-20">
          <div className="absolute inset-0 z-0">
            <WaveHero />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_95%)]" />
          </div>

          <div className="relative z-10 text-center w-full max-w-[1400px]">
            {/* Improved Status Bar */}
            <div className="group relative inline-flex items-center gap-3 md:gap-4 mb-8 md:mb-12 px-4 md:px-6 py-2 md:py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-3xl overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full animate-scan" />
              <div className="flex items-center gap-2 md:gap-3 border-r border-white/10 pr-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
                </span>
                <span className="mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">Live</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/40">Node: <span className="text-white/70">ASX_772</span></span>
                <span className="mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/40 hidden sm:inline">Lat: <span className="text-blue-500/80">12ms</span></span>
              </div>
            </div>

            {/* Title with Responsive Clamp */}
            <h1 className="text-[clamp(2.5rem,12vw,12rem)] leading-[0.85] md:leading-[0.8] font-black tracking-[-0.06em] uppercase italic">
              <span className="block overflow-hidden pb-2">
                <span className="block animate-reveal">Trust is</span>
              </span>
              <span className="block overflow-hidden stroke-text">
                <span className="block animate-reveal [animation-delay:0.2s]">Collapsing.</span>
              </span>
            </h1>

            <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 animate-fade-in-delayed px-4">
              <p className="max-w-md text-sm md:text-lg text-white/40 font-light leading-relaxed text-center md:text-left border-l-0 md:border-l border-white/10 md:pl-6">
                Forensic-grade verification for the age of synthetic deception. 
                Securing the boundary between human and machine.
              </p>
              <Link href="/auth" className="w-full md:w-auto group relative px-10 md:px-14 py-5 md:py-7 bg-white text-black text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                <span className="relative z-10">Start Investigation</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </section>

        {/* --- KPI SECTION --- */}
        <section id="protocol" className="py-32 md:py-64 px-6 md:px-10 bg-black relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <BigNumber value="$16B" label="Yearly Fraud Loss" />
            <BigNumber value="3.1s" label="Cloning Speed" />
            <BigNumber value="99.9%" label="Accuracy" />
          </div>
        </section>

        {/* --- BENTO INFRA --- */}
        <section id="infrastructure" className="py-24 md:py-40 px-4 md:px-10 max-w-[1700px] mx-auto">
          <h2 className="text-5xl md:text-[10rem] font-black tracking-tighter italic mb-16 md:mb-24">INFRA.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
            <BentoCard size="md:col-span-2 md:row-span-2" title="Banking" desc="Anti-vishing protocols for global financial networks." />
            <BentoCard size="md:col-span-2" title="Forensics" desc="Court-ready digital signatures." />
            <BentoCard size="md:col-span-1" title="Gov" desc="National security layers." />
            <BentoCard size="md:col-span-1" title="Media" desc="Provenance tracking." />
          </div>
        </section>

        {/* --- FINAL CTA SECTION --- */}
        <section className="py-40 md:py-60 px-6 text-center bg-[#050505]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-12">READY TO DEPLOY <br/> REALITY?</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="px-12 py-6 bg-blue-600 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors">Get API Key</button>
              <button className="px-12 py-6 border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">Contact Defense</button>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 bg-black py-12 md:py-20 px-6 md:px-10">
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-black mb-6">ASX.</div>
            <p className="text-white/20 text-sm max-w-xs leading-relaxed">
              Decentralized forensic verification unit. <br/> Built for the post-truth era.
            </p>
          </div>
          <div className="space-y-4">
            <div className="mono text-[10px] text-blue-500 uppercase tracking-widest font-bold">Protocol</div>
            <div className="flex flex-col gap-2 text-sm text-white/40 underline-offset-4">
              <Link href="#" className="hover:underline hover:text-white">Whitepaper</Link>
              <Link href="#" className="hover:underline hover:text-white">API Docs</Link>
              <Link href="#" className="hover:underline hover:text-white">Forensic Unit</Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="mono text-[10px] text-white/40 uppercase tracking-widest">System_Time</div>
            <div className="text-xl mono text-white/60">{time || "00:00:00"}</div>
            <div className="text-[10px] mono text-white/20">STATUS: ALL_SYSTEMS_GO</div>
          </div>
        </div>
        <div className="max-w-[1700px] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
          <div className="text-[9px] mono text-white/10 uppercase tracking-widest">© 2025 ASX GLOBAL DEFENSE. ALL RIGHTS RESERVED.</div>
          <div className="text-[9px] mono text-white/10 uppercase tracking-widest hover:text-blue-500 cursor-pointer transition-colors">Privacy_Policy // Terms_of_Service</div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.15);
          color: transparent;
        }
        @keyframes reveal {
          0% { transform: translateY(110%) skewY(7deg); opacity: 0; }
          100% { transform: translateY(0) skewY(0); opacity: 1; }
        }
        .animate-reveal {
          animation: reveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-delayed {
          opacity: 0;
          animation: fadeIn 2s ease-out 0.8s forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// Вспомогательные компоненты
function BigNumber({ value, label }: { value: string; label: string }) {
  return (
    <div className="group border-l border-white/5 pl-6 md:pl-0 md:border-l-0">
      <div className="text-6xl md:text-[9rem] font-black tracking-tighter transition-all group-hover:text-blue-500 duration-500">
        {value}
      </div>
      <div className="h-[1px] w-full bg-white/10 my-4 md:my-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
      </div>
      <div className="mono text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-white/20">{label}</div>
    </div>
  );
}

function BentoCard({ size, title, desc }: { size?: string; title: string; desc: string }) {
  return (
    <div className={`${size || ""} group p-8 md:p-12 border border-white/5 bg-[#080808] hover:bg-[#0a0a0a] transition-all duration-500 flex flex-col justify-between min-h-[300px] md:min-h-[350px]`}>
      <div>
        <h3 className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-6 md:mb-8 italic">/// {title}</h3>
        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">{desc}</p>
      </div>
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors self-end">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </div>
  );
}