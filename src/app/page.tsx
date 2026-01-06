"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { WaveHero } from "@/components/WaveHero";
import { Header } from "@/components/Header";
import { HeroBackground } from "@/components/HeroBackground";
import { ContactForm } from "@/components/ContactForm";

export default function HomePage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#000] text-white selection:bg-[#CCFD03] selection:text-black overflow-x-hidden font-ibm">
      {/* GRID OVERLAY */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Header />

      <main className="relative">
        {/* HERO */}
        <section className="relative flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 min-h-[100svh]">
          {/* Background layers */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 grayscale opacity-25 md:opacity-30">
              <WaveHero />
            </div>
            <HeroBackground />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-[1400px]">
            {/* Status bar */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 bg-[#CCFD03] text-black text-[9px] sm:text-[10px] font-bold px-3 py-1 mb-5 sm:mb-6 uppercase tracking-tighter border-b-4 border-r-4 border-black">
              <span>Status: Active</span>
              <span className="opacity-60">|</span>
              <span>Threat_Level: High</span>
              <span className="opacity-60 hidden xs:inline">|</span>
              <span className="font-ibm xs:inline">SYST_TIME: {time || "00:00:00"}</span>
            </div>

            {/* Title */}
            <h1 className="font-pixel uppercase leading-[0.82] md:leading-[0.78] mb-6 sm:mb-8 text-[clamp(2.6rem,12vw,14rem)]">
              Trust <br />
              <span className="text-[#CCFD03]">Is Dead.</span>
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start border-t border-[#CCFD03] pt-6 sm:pt-8">
              <div className="lg:col-span-7">
                <p className="max-w-2xl text-white/80 text-base sm:text-lg md:text-2xl leading-snug md:leading-tight">
                  Forensic-grade verification for the age of synthetic deception.
                  We secure the boundary between human and machine — across calls,
                  meetings and enterprise comms.
                </p>

                <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                  <Link
                    href="#contact"
                    className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase text-xs sm:text-sm hover:bg-[#CCFD03] transition-all text-left border-b-4 border-r-4 border-gray-400 active:border-0"
                  >
                    Request_Executive_Briefing
                  </Link>

                  <Link
                    href="#platform"
                    className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase text-xs sm:text-sm border border-[#CCFD03]/30 hover:border-[#CCFD03] hover:text-[#CCFD03] transition-all text-left"
                  >
                    Explore_Platform_Core
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <TerminalBox
                  title="SYSTEM_NOTES"
                  lines={[
                    "• Deployment: ON_PREM / PRIVATE_CLOUD",
                    "• Outputs: SOC/SIEM, FraudOps, Compliance",
                    "• Mode: Real-time + Post-call",
                    "• Goal: Low false positives (enterprise)",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* KPI */}
        <section className="py-16 sm:py-20 bg-[#CCFD03] text-black">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black border-y border-black">
              <BigNumber value="$16B" label="Global Fraud Loss (est.)" />
              <BigNumber value="3.1s" label="Voice Cloning Speed (demo)" />
              <BigNumber value="99.9%" label="Target Accuracy (enterprise)" />
            </div>
            <div className="px-6 mt-6 text-[10px] uppercase tracking-widest">
            </div>
          </div>
        </section>

        {/* PLATFORM */}
        <section
          id="platform"
          className="scroll-mt-28 sm:scroll-mt-32 py-20 sm:py-28 px-4 sm:px-6 max-w-[1400px] mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="text-[11px] uppercase tracking-widest text-white/60 mb-4">
                01. PLATFORM
              </div>
              <h2 className="text-4xl sm:text-5xl font-pixel uppercase text-[#CCFD03] leading-none mb-6">
                Platform_Core
              </h2>
              <p className="text-white/50 leading-relaxed">
                Unified infrastructure layer for post-truth environments.
                Designed for institutions — not consumers.
              </p>

              <div className="mt-8 border-t border-[#CCFD03]/30 pt-6 text-[11px] uppercase tracking-widest text-white/60">
                OUTPUTS
                <div className="mt-3 space-y-2 text-white/60 normal-case text-sm">
                  <div>{`> Unified Trust Score (0–100)`}</div>
                  <div>{`> Attack classification + confidence`}</div>
                  <div>{`> Forensic artifacts for investigations`}</div>
                  <div>{`> Audit logs (compliance)`}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <BrutalCard
                title="Signal_Ingestion"
                desc="Securely ingest calls & meetings across enterprise comms."
                items={["VoIP/PSTN", "Live Streams", "Recordings", "API Gateways"]}
              />
              <BrutalCard
                title="AI_Analysis"
                desc="Detect synthetic voice and anomalous behavior in real-time."
                items={[
                  "Deepfake Detection",
                  "Replay Detection",
                  "Acoustic Risk",
                  "Behavioral Signals",
                ]}
              />
              <BrutalCard
                title="Trust_Scoring"
                desc="Unify signals into one operational decision score."
                items={[
                  "Trust Score (0–100)",
                  "Policy Thresholds",
                  "Low-FP Ensemble",
                  "Explainable Indicators",
                ]}
              />
              <BrutalCard
                title="Enterprise_Integration"
                desc="Route alerts into real enterprise workflows."
                items={["SOC/SIEM", "FraudOps", "CRM/CTI", "Ticketing + Audit"]}
              />
            </div>
          </div>

          {/* Integration strip */}
          <div className="mt-8 sm:mt-10 border border-[#CCFD03]/25 p-5 sm:p-6 bg-[#050505]">
            <div className="text-[11px] uppercase tracking-widest text-[#CCFD03] font-bold">
              COMPATIBILITY_LAYER
            </div>
            <div className="mt-3 text-white/60 text-sm leading-relaxed">
              Designed to complement leading enterprise platforms (voice security, SOC stacks, comms tools) — ASX
              plugs into existing infrastructure instead of replacing it.
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          id="products"
          className="scroll-mt-28 sm:scroll-mt-32 py-20 sm:py-28 px-4 sm:px-6 bg-[#050505] border-y border-[#CCFD03]/20"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="text-[11px] uppercase tracking-widest text-white/60 mb-4">
              02. MODULES
            </div>
            <h2 className="text-4xl sm:text-5xl font-pixel uppercase text-[#CCFD03] leading-none mb-8 sm:mb-10">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <ModuleCard
                className="lg:col-span-6"
                title="Voice_Deepfake_Defense"
                desc="Detect synthetic voice, impersonation and replay attacks."
                bullets={[
                  "Real-time call & meeting protection",
                  "Classification + confidence",
                  "Designed for low false positives",
                ]}
              />
              <ModuleCard
                className="lg:col-span-6"
                title="Identity_Trust_Scoring"
                desc="Unified score combining voice, behavior and context."
                bullets={[
                  "Trust score per interaction (0–100)",
                  "Policies, thresholds, scenarios",
                  "SOC/FraudOps-ready signals",
                ]}
              />
              <ModuleCard
                className="lg:col-span-7"
                title="Forensic_Investigation_Layer"
                desc="Evidence-grade artifacts and reports for IR teams."
                bullets={[
                  "Timeline reconstruction",
                  "Exportable case reports",
                  "Audit-friendly traces",
                ]}
              />
              <ModuleCard
                className="lg:col-span-5"
                title="Enterprise_Deployments"
                desc="On-prem/private cloud + integrations + SLA."
                bullets={[
                  "On-prem/private cloud patterns",
                  "SOC/SIEM + ticketing connectors",
                  "Audit logs + compliance outputs",
                ]}
              />
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section
          id="usecases"
          className="scroll-mt-28 sm:scroll-mt-32 py-20 sm:py-28 px-4 sm:px-6 max-w-[1400px] mx-auto"
        >
          <div className="text-[11px] uppercase tracking-widest text-white/60 mb-4">
            03. USECASES
          </div>
          <h2 className="text-4xl sm:text-5xl font-pixel uppercase text-[#CCFD03] leading-none mb-8 sm:mb-10">
            Where_It_Runs
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <SectorCard
              className="lg:col-span-5"
              title="Banking_Finance"
              desc="Prevent vishing and synthetic identity fraud in contact centers."
              bullets={[
                "Impersonation via calls",
                "Account takeover",
                "Executive voice spoofing",
              ]}
            />
            <SectorCard
              className="lg:col-span-4"
              title="Government"
              desc="Defend officials and sensitive workflows from AI-driven deception."
              bullets={[
                "Impersonation of officials",
                "Sensitive commands over voice",
                "Investigation outputs",
              ]}
            />
            <SectorCard
              className="lg:col-span-3"
              title="Telecom_Enterprise"
              desc="Stop fraud at scale across comms and internal operations."
              bullets={[
                "Fraud at scale",
                "Social engineering vectors",
                "SOC-ready alerting",
              ]}
            />
          </div>
        </section>

        {/* RESEARCH */}
        <section
          id="research"
          className="scroll-mt-28 sm:scroll-mt-32 py-20 sm:py-28 px-4 sm:px-6 bg-black border-y border-[#CCFD03]/20"
        >
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-widest text-white/60 mb-4">
                04. RSRCH
              </div>
              <h2 className="text-4xl sm:text-5xl font-pixel uppercase text-[#CCFD03] leading-none mb-6">
                Threat_Intel
              </h2>
              <p className="text-white/50 leading-relaxed">
                The moat is insight. ASX builds a living taxonomy of AI-voice fraud patterns and publishes
                executive-grade briefings for institutions.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="#contact"
                  className="bg-white text-black px-6 py-4 font-bold uppercase text-xs sm:text-sm hover:bg-[#CCFD03] transition-all text-left border-b-4 border-r-4 border-gray-400 active:border-0"
                >
                  Request_Threat_Brief
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-4 font-bold uppercase text-xs sm:text-sm border border-[#CCFD03]/30 hover:border-[#CCFD03] hover:text-[#CCFD03] transition-all text-left"
                >
                  Ask_For_Whitepaper
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <IntelCard tag="BRIEF" title="Executive Summary" desc="Attack vectors + defensive posture." />
              <IntelCard tag="TAXONOMY" title="Cloning • Replay • Impersonation" desc="Indicators + controls." />
              <IntelCard tag="FIELD" title="Regional Patterns" desc="Language-driven fraud signals (CIS/MENA)." />
              <IntelCard tag="OPS" title="SOC Playbook" desc="Operationalize alerts + investigations." />
            </div>
          </div>
        </section>

     

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-28 sm:scroll-mt-32 py-20 sm:py-28 px-4 sm:px-6 bg-[#050505] border-t border-[#CCFD03]/20"
        >
          <div className="max-w-[900px] mx-auto">
            <div className="text-[11px] uppercase tracking-widest text-white/60 mb-4">
              06. CONTACT
            </div>

            <h2 className="text-4xl sm:text-5xl font-pixel uppercase text-[#CCFD03] leading-none mb-6">
              Request_Access
            </h2>

            <p className="text-white/50 leading-relaxed mb-10">
              Enterprise programs start with a structured briefing and a scoped pilot. We support on-prem/private cloud deployments
              and integrate with SOC/SIEM workflows.
            </p>

            {/* REAL WORKING FORM */}
            <ContactForm />

            <div className="mt-10 border border-[#CCFD03]/25 p-6 bg-black">
              <div className="text-[11px] uppercase tracking-widest text-[#CCFD03] font-bold">
                DEPLOYMENT_CAPABILITIES
              </div>
              <div className="mt-3 text-white/60 text-sm leading-relaxed">
                On-prem • Private cloud • SOC/SIEM • Audit logs • SLA • Policy thresholds
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#111] border-t-2 border-[#CCFD03] py-10 px-6 text-[12px]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="text-3xl font-pixel text-[#CCFD03] mb-4">ASX.</div>
            <p className="text-white/30 tracking-widest">© 2024 TERMINAL_ACCESS_ONLY</p>
          </div>
          <div className="text-left md:text-right text-[#CCFD03]">
            SYST_TIME: {time || "00:00:00"} <br />
            LOC: ALMATY_KAZAKHSTAN
          </div>
        </div>
      </footer>

    </div>
  );
}

/* Components */

function BigNumber({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-8 sm:p-10 group hover:bg-black hover:text-[#CCFD03] transition-all cursor-default">
      <div className="text-6xl sm:text-7xl md:text-8xl font-pixel leading-none mb-4">{value}</div>
      <div className="uppercase tracking-[0.3em] font-bold text-xs">{label}</div>
    </div>
  );
}

function BrutalCard({
  title,
  desc,
  items,
}: {
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <div className="border border-[#CCFD03]/30 p-5 sm:p-6 bg-[#050505] hover:border-[#CCFD03] transition-colors">
      <h3 className="text-lg sm:text-xl font-pixel text-[#CCFD03] mb-3 uppercase">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-4">{desc}</p>
      <ul className="space-y-2 text-sm text-white/60">
        {items.map((i) => (
          <li key={i}>{`> ${i}`}</li>
        ))}
      </ul>
    </div>
  );
}

function ModuleCard({
  className = "",
  title,
  desc,
  bullets,
}: {
  className?: string;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className={`${className} border border-[#CCFD03]/25 p-6 sm:p-7 bg-black hover:border-[#CCFD03] transition-colors`}>
      <div className="text-[11px] uppercase tracking-widest text-white/60">MODULE</div>
      <h3 className="mt-3 text-xl sm:text-2xl font-pixel uppercase text-[#CCFD03]">{title}</h3>
      <p className="mt-3 text-white/50 text-sm leading-relaxed">{desc}</p>
      <ul className="mt-5 space-y-2 text-sm text-white/60">
        {bullets.map((b) => (
          <li key={b}>{`> ${b}`}</li>
        ))}
      </ul>
      <div className="mt-6 border-t border-[#CCFD03]/20 pt-4 text-[11px] uppercase tracking-widest text-white/60">
        Access via briefing
      </div>
    </div>
  );
}

function SectorCard({
  className = "",
  title,
  desc,
  bullets,
}: {
  className?: string;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className={`${className} border border-[#CCFD03]/25 p-6 sm:p-7 bg-[#050505] hover:border-[#CCFD03] transition-colors`}>
      <div className="text-[11px] uppercase tracking-widest text-white/60">SECTOR</div>
      <h3 className="mt-3 text-xl sm:text-2xl font-pixel uppercase text-[#CCFD03]">{title}</h3>
      <p className="mt-3 text-white/50 text-sm leading-relaxed">{desc}</p>
      <ul className="mt-5 space-y-2 text-sm text-white/60">
        {bullets.map((b) => (
          <li key={b}>{`> ${b}`}</li>
        ))}
      </ul>
    </div>
  );
}

function IntelCard({ tag, title, desc }: { tag: string; title: string; desc: string }) {
  return (
    <div className="border border-[#CCFD03]/20 p-6 bg-[#050505] hover:border-[#CCFD03] transition-colors">
      <div className="text-[11px] uppercase tracking-widest text-[#CCFD03] font-bold">{tag}</div>
      <div className="mt-3 text-white text-base sm:text-lg">{title}</div>
      <div className="mt-2 text-white/50 text-sm leading-relaxed">{desc}</div>
      <div className="mt-5 border-t border-[#CCFD03]/20 pt-4 text-[11px] uppercase tracking-widest text-white/60">
        Request via briefing
      </div>
    </div>
  );
}

function BrutalPanel({
  className = "",
  title,
  desc,
  children,
}: {
  className?: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${className} border border-[#CCFD03]/25 p-6 sm:p-7 bg-black`}>
      <h3 className="text-xl sm:text-2xl font-pixel uppercase text-[#CCFD03]">{title}</h3>
      <p className="mt-2 text-white/50 text-sm leading-relaxed">{desc}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function TerminalBox({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="border border-[#CCFD03]/25 bg-black">
      <div className="px-5 py-3 border-b border-[#CCFD03]/20 text-[11px] uppercase tracking-widest text-[#CCFD03] font-bold">
        {title}
      </div>
      <div className="p-5 text-sm text-white/60 space-y-2">
        {lines.map((l) => (
          <div key={l}>{`> ${l}`}</div>
        ))}
      </div>
    </div>
  );
}
