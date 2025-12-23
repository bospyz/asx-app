"use client";
import { useEffect, useState } from "react";

export function ResultClient() {
  const [r, setR] = useState<any>(null);
  useEffect(()=>{ try{ setR(JSON.parse(sessionStorage.getItem("asx_last_result") || "null")); }catch{} },[]);
  if (!r) return <div className="mt-10 panel p-6">No result found. Run an analysis first.</div>;

  const pct = Math.round((r.syntheticProbability ?? 0) * 100);
  return (
    <div className="mt-10 panel p-6">
      <div className="mono text-sm text-white/70">ASX ANALYSIS RESULT</div>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div><div className="mono text-sm text-white/55">Synthetic Probability</div><div className="mt-2 text-5xl font-semibold">{pct}%</div></div>
        <div><div className="mono text-sm text-white/55">Risk Level</div><div className="mt-2 text-3xl font-semibold">{r.riskLevel}</div></div>
        <div><div className="mono text-sm text-white/55">Trust Score™</div><div className="mt-2 text-3xl font-semibold">{r.trustScore}</div></div>
      </div>
      <div className="mt-8 hr" />
      <div className="mt-6 mono text-sm text-white/70">Analysis ID: {r.analysisId}</div>
      <div className="mt-2 mono text-sm text-white/70">Timestamp: {r.timestamp}</div>
      <div className="mt-6 small">Probabilistic output. Detection only.</div>
    </div>
  );
}
