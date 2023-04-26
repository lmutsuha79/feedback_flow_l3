import {
  createMiddlewareSupabaseClient,
  createServerSupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    //     verify that user is authenticated
    // We need to create a response and hand it to the supabase client to be able to modify the response headers.
    const res = NextResponse.next();
    // Create authenticated Supabase Client.
    const supabase = createMiddlewareSupabaseClient({ req, res });

    // Check if we have a session
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) {
      console.log("no uesr");
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    console.log("the user = ", session.user.email);
  }
  return NextResponse.next();
}
