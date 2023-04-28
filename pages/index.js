import DropdownMenuDemo from "@/components/ui/drop-down-menu";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  const handleLogout = async () => {
    const { err } = await supabaseClient.auth.signOut();
    if (err) {
      console;
      return;
    }
    console.log("user logged out");
    router.push("/auth/login");
  };

  return (
    <main>
      <h1>helllo wrold</h1>
      <div>is loading = {}</div>
      <button onClick={handleLogout}>logout</button>
      <DropdownMenuDemo />
      <div>
        <Link href={"/dashboard"}>go dashboard</Link>
      </div>
    </main>
  );
}
