// Creating a new supabase server client object (e.g. in API route):
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
// import type { Database } from "types_db";

export default async (req, res) => {
  const supabaseServerClient = createServerSupabaseClient({ req, res });
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  res.status(200).json({ name: user?.email ?? "" });
};
