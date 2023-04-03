import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default withClerkMiddleware(() => {
  console.log("testing");
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!static|.*\\..*|_next|favicon.ico).*)", "/"],
};
