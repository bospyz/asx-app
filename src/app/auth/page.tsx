"use client";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { loginAction } from "./actions";

export default function AuthPage({ searchParams }: { searchParams?: { err?: string; next?: string } }) {
  const err = searchParams?.err;
  const next = searchParams?.next ?? "/app";

  return (
    <Shell 
      title="Terminal_Auth" 
      right={
        <Link className="mono text-[9px] uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity" href="/">
          [ Exit_Session ]
        </Link>
      }
    >
      <div className="relative min-h-[85vh] flex items-center justify-center p-6 bg-[#020202]">
        
        {/* Сверхтонкая сетка (только точки на пересечениях) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        <div className="relative z-10 w-full max-w-sm">
          <div className="bg-transparent relative overflow-hidden">
            
            {/* Заголовок без украшательств */}
            <div className="mb-12 space-y-2">
              <div className="mono text-[9px] text-white/20 uppercase tracking-[0.5em]">System_Access_v4</div>
              <h1 className="text-4xl font-light tracking-tighter uppercase text-white">Identity</h1>
            </div>

            {err === "missing" && (
              <div className="mb-8 border-l border-white py-1 pl-4 mono text-[10px] text-white uppercase tracking-widest">
                Error: Credentials_Required
              </div>
            )}

            <form action={loginAction} className="space-y-8">
              <input type="hidden" name="next" value={next} />
              
              <div className="group space-y-1">
                <label className="mono text-[8px] uppercase tracking-[0.3em] text-white/20 group-focus-within:text-white transition-colors">
                  Login_Identifier
                </label>
                <input 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm mono outline-none focus:border-white transition-all placeholder:text-white/5" 
                  name="identifier" 
                  placeholder="ID_NULL" 
                  required
                />
              </div>

              <div className="group space-y-1">
                <label className="mono text-[8px] uppercase tracking-[0.3em] text-white/20 group-focus-within:text-white transition-colors">
                  Security_Hash
                </label>
                <input 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm mono outline-none focus:border-white transition-all placeholder:text-white/5" 
                  type="password" 
                  name="password" 
                  placeholder="****"
                  required
                />
              </div>

              <button 
                className="w-full border border-white/10 py-5 mono text-[10px] uppercase tracking-[0.4em] text-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-500" 
                type="submit"
              >
                Execute_Auth
              </button>
            </form>

            <div className="mt-16 flex justify-between items-center opacity-10">
              <div className="mono text-[7px] uppercase tracking-widest">Enc_AES_256</div>
              <div className="mono text-[7px] uppercase tracking-widest italic">Authorized_Personnel_Only</div>
            </div>
          </div>

          {/* Технический код по углам */}
          <div className="absolute -top-20 -left-10 hidden lg:block mono text-[7px] text-white/5 uppercase vertical-rl">
            0x00214 // root_access // secure_layer
          </div>
        </div>
      </div>
    </Shell>
  );
}