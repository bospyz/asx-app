"use server";

import { cookies } from "next/headers";

const COOKIE = "asx_session";

export async function setSession() {
  // Добавляем await перед cookies()
  const cookieStore = await cookies();
  
  cookieStore.set(COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production", // Автоматически true на Vercel (HTTPS)
    path: "/",
  });
}

export async function clearSession() {
  // Добавляем await перед cookies()
  const cookieStore = await cookies();
  
  cookieStore.set(COOKIE, "0", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
}