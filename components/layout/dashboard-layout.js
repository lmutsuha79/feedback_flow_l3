import ProfileDropDown from "./layout-components/profile-drop-down";
import SelectAppDropDown from "./layout-components/select-app-drop";
import TopNav from "./layout-components/top-nav";
import { useUser } from "@supabase/auth-helpers-react";
import { notify } from "@/pages/_app";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
  turnOffLoadinScreen,
  turnOnLoadingScreen,
} from "@/util/loadingFunctions";
import DashboardHeader from "./layout-components/dashboard-header";

const DashboardLayout = ({ children }) => {
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
    turnOnLoadingScreen();
    const { data, error } = await supabase
      .from("apps")
      .select("*")
      .eq("user_id", user?.id);
    if (error) {
      console.log(error);
    }
    // console.log(data);
    setAppsOfUser(() => data);
    turnOffLoadinScreen();
  }

  if (user) {
    return (
      <>
        <div className="container pt-4 h-screen">
          <div className=" shadow-xl  border-slate-200 rounded-md h-full">
            <nav className="h-[64px] border">
              <div className="p-2 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <SelectAppDropDown
                    apps_of_user={apps_of_user}
                    selectedAppIndex={selectedAppIndex}
                    setSelectedAppIndex={setSelectedAppIndex}
                  />

                  <TopNav />
                </div>

                <ProfileDropDown userInfo={user.user_metadata} />
              </div>
            </nav>
            <DashboardHeader />

            <main className="py-4 px-8">{children}</main>
          </div>
        </div>
      </>
    );
  }
};

export default DashboardLayout;
