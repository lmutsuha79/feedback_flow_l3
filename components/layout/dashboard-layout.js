import { Button, Modal, Tooltip } from "flowbite-react";
import ProfileDropDown from "./layout-components/profile-drop-down";
import SelectAppDropDown from "./layout-components/select-app-drop";
import TopNav from "./layout-components/top-nav";
import { useUser } from "@supabase/auth-helpers-react";
import LoadingScreen from "../ui/loading-screen";
import { useState } from "react";

const DashboardLayout = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();

  if (user) {
    return (
      <>
        {isLoading && <LoadingScreen />}
        <div
          className={isLoading ? "blur-sm container pt-4" : "container pt-4"}
        >
          <div className="border border-slate-200 rounded-md">
            <header className="h-[64px]">
              <div className="p-2 flex items-center justify-between">
                <SelectAppDropDown />

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
