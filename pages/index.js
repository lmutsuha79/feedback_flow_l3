import DropdownMenuDemo from "@/components/ui/drop-down-menu";
import { useUser } from "@supabase/auth-helpers-react";

export default function Home() {
  const user = useUser();
  
  console.log(user?.email);
  return (
    <main>
      <h1>helllo wrold</h1>
      <DropdownMenuDemo />
    </main>
  );
}
