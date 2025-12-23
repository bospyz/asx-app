"use server";
import { redirect } from "next/navigation";
import { setSession } from "@/lib/session";

export async function loginAction(formData: FormData) {
  const id = String(formData.get("identifier") ?? "").trim();
  const pw = String(formData.get("password") ?? "").trim();
  const next = String(formData.get("next") ?? "/app");
  if (!id || !pw) redirect(`/auth?err=missing&next=${encodeURIComponent(next)}`);
  setSession();
  redirect(next);
}
