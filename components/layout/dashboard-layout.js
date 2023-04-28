import ProfileDropDown from "./layout-components/profile-drop-down";
import SelectAppDropDown from "./layout-components/select-app-drop";
import TopNav from "./layout-components/top-nav";
import { useUser } from "@supabase/auth-helpers-react";
import { notify } from "@/pages/_app";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const DashboardLayout = (props) => {
  console.log("re rendering dashboard");
  const user = useUser();
  const [apps_of_user, setAppsOfUser] = useState([]);
  const [selectedAppIndex, setSelectedAppIndex] = useState(0);
  useEffect(() => {
    if (user) {
      getAppsByUser();
    }
  }, [user, selectedAppIndex]);

  // console.log("the dashboard layout is rendered");

  async function getAppsByUser() {
    // console.log("the user id ", user);
    const { data, error } = await supabase
      .from("apps")
      .select("*")
      .eq("user_id", user?.id);
    if (error) {
      console.log(error);
    }
    // console.log(data);
    setAppsOfUser(() => data);
  }

  if (user) {
    return (
      <>
        <div className=" container pt-4">
          <div className="border border-slate-200 rounded-md">
            <header className="h-[64px]">
              <div className="p-2 flex items-center justify-between">
                <SelectAppDropDown
                  apps_of_user={apps_of_user}
                  selectedAppIndex={selectedAppIndex}
                  setSelectedAppIndex={setSelectedAppIndex}
                />

                <TopNav />

                <ProfileDropDown userInfo={user.user_metadata} />
              </div>
            </header>
          </div>
        </div>
      </>
    );
  }
};

export default DashboardLayout;
