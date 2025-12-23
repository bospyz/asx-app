"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AppClient() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [over, setOver] = useState(false);

  async function analyze() {
    if (!file) return;
    setBusy(true);
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/api/analyze", { method: "POST", body: fd });
      const json = await res.json();
      sessionStorage.setItem("asx_last_result", JSON.stringify(json));
      router.push("/app/result");
    } catch (e) {
      console.error(e);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-20 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Метка без фона, только текст */}
      <div className="mono text-[10px] tracking-[0.4em] text-white/30 uppercase">
        ASX // Forensic_Unit // Detection_Only
      </div>
      
      <h1 className="mt-8 text-5xl md:text-7xl font-light tracking-tighter text-white">
        Upload <br /> 
        <span className="italic">Evidence.</span>
      </h1>

      <div
        className={`relative mt-16 transition-all duration-500 ease-out 
          ${over ? "opacity-100 translate-y-[-4px]" : "opacity-40"}`}
        onDragEnter={(e) => { e.preventDefault(); setOver(true); }}
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={(e) => { e.preventDefault(); setOver(false); }}
        onDrop={(e) => { 
          e.preventDefault(); 
          setOver(false); 
          setFile(e.dataTransfer.files?.[0] ?? null); 
        }}
      >
        {/* Вместо рамки - просто пустое пространство с текстом */}
        <label className="group cursor-pointer block">
          <div className="mono text-sm tracking-widest text-white mb-4">
            {over ? "[ DROP_FILE_NOW ]" : "DRAG_AUDIO_OR_CLICK"}
          </div>
          <div className="text-[10px] mono text-white/20 uppercase tracking-[0.2em]">
            Supported: Lossless_WAV, MP3, M4A
          </div>
          <input 
            type="file" 
            accept="audio/*" 
            className="hidden" 
            onChange={(e) => setFile(e.target.files?.[0] ?? null)} 
          />
        </label>

        {/* Индикатор прогресса (только линия, без обводки контейнера) */}
        {busy && (
          <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
            <div className="w-1/3 h-full bg-white animate-[loading_1.5s_infinite_ease-in-out]" />
          </div>
        )}
      </div>

      {/* Выбранный файл */}
      <div className="mt-20 flex items-end justify-between border-b border-white/5 pb-4">
        <div className="space-y-1">
          <div className="mono text-[9px] text-white/20 uppercase tracking-widest">Selected_Payload</div>
          <div className="mono text-sm text-white transition-all">
            {file ? file.name : "NO_FILE_DETECTED"}
          </div>
        </div>
        
        {file && !busy && (
          <button 
            onClick={() => setFile(null)}
            className="mono text-[9px] text-white/30 hover:text-white transition-colors uppercase tracking-widest"
          >
            [ Clear ]
          </button>
        )}
      </div>

      {/* Кнопка: чистый ч/б инверт */}
      <button 
        className={`mt-12 w-full py-6 text-[11px] font-bold uppercase tracking-[0.4em] transition-all duration-500
          ${!file || busy 
            ? "text-white/10 cursor-not-allowed" 
            : "bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white"
          }`}
        disabled={!file || busy} 
        onClick={analyze}
      >
        {busy ? "PROCESSING_DATA..." : "START_ANALYSIS"}
      </button>

      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}