import { Shell } from "@/components/Shell";
import Link from "next/link";
import { AppClient } from "./ui";
export default function AppPage(){
  return (
    <Shell title="Platform" right={<Link className="btn" href="/">Exit</Link>}>
      <AppClient />
    </Shell>
  );
}
