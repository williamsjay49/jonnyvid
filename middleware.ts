import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth"; // Import your Better-Auth instance
import { headers } from "next/headers"; // To get request headers in middleware
import aj, { createMiddleware, detectBot, shield } from "./lib/arcjet";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If no session, redirect to sign-in page
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Otherwise, continue
  return NextResponse.next();
}
const validate = aj
  .withRule(
    shield({
      mode: "LIVE",
    })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"], // allow other bots if you want to.
    })
  );

export default createMiddleware(validate);
export const config = {
  // Apply middleware to all routes except listed ones
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};
