import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { superbase } from "@/lib/supabaseClient";
export default async (req, res) => {
  const supabaseServerClient = createServerSupabaseClient({ req, res });
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();
  // if (!user) {
  //   res.status(401).json((err) => "no user found");
  // }
  console.log(user);
  res.status(200).json({ name: user?.email ?? "" });
};
