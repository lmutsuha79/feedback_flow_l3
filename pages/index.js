import { useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";

export default function Home() {
  const user = useUser();
  console.log(user);
  return (
    <main>
      <h1>helllo wrold</h1>
    </main>
  );
}
