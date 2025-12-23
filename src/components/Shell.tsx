import Link from "next/link";
export function Shell({ title, right, children }:{title:string; right?:React.ReactNode; children:React.ReactNode;}) {
  return (
    <div className="min-h-screen">
      <header className="px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="mono text-sm tracking-widest text-white/80">
            <Link href="/">ASX</Link><span className="text-white/35"> //</span>{" "}
            <span className="text-white/55">{title}</span>
          </div>
          <div className="flex items-center gap-3">{right}</div>
        </div>
        <div className="mt-4 hr" />
      </header>
      <main className="px-6 pb-16"><div className="mx-auto w-full max-w-5xl">{children}</div></main>
    </div>
  );
}
