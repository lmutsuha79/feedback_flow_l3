import { supabase } from "@/lib/supabaseClient";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import gplay from "google-play-scraper";

export default async (req, res) => {
  // get the current user
  const supabaseServerClient = createServerSupabaseClient({ req, res });
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  if (!user) {
    return res.status(401).json({ error: "no user found" });
  }

  // get the app id
  const { appId } = req.body;
  let new_row_id;
  try {
    // get all app info with web scraping
    const app_data = await gplay.app({ appId });

    // store the app id with the generated app id in the database
    const { data, error } = await supabase
      .from("apps")
      .insert({
        user_id: user.id,
        gplay_id: appId,
        info: JSON.stringify(app_data),
      })
      .select();

    new_row_id = data[0].id;

    if (error) {
      console.log(error);
      throw new Error(error.message);
    }
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ err });
  }

  // finally return the unique id of the app to the client

  res.status(200).json({ id: new_row_id });
};
