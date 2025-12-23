"use server";

import { cookies } from "next/headers";

const COOKIE = "asx_session";

export async function setSession() {
  cookies().set(COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // поставишь true на HTTPS
    path: "/",
  });
}

export async function clearSession() {
  cookies().set(COOKIE, "0", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
  });
}
