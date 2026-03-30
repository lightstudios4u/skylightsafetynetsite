import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Redirect non-www to www
  if (host === "skylightsafety.net") {
    const url = request.nextUrl.clone();
    url.host = "www.skylightsafety.net";
    url.protocol = "https";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
