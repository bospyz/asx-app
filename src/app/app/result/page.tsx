import Link from "next/link";
import { Shell } from "@/components/Shell";
import { ResultClient } from "./ui";

export default function ResultPage() {
  return (
    <Shell title="Result" right={<div className="flex gap-3"><Link className="btn" href="/app">Analyze new</Link><Link className="btn" href="/">Exit</Link></div>}>
      <ResultClient />
    </Shell>
  );
}
