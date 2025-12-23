import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/app")) {
    const session = req.cookies.get("asx_session")?.value;
    if (session !== "1") {
      const url = req.nextUrl.clone();
      url.pathname = "/auth";
      url.searchParams.set("next", req.nextUrl.pathname);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
export const config = { matcher: ["/app/:path*"] };
