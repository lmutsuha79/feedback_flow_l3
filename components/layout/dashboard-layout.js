import { Button, Modal, Tooltip } from "flowbite-react";
import ProfileDropDown from "./layout-components/profile-drop-down";
import SelectAppDropDown from "./layout-components/select-app-drop";
import TopNav from "./layout-components/top-nav";
import { useUser } from "@supabase/auth-helpers-react";

const DashboardLayout = (props) => {
  console.log("the dashboard layout is rendered");

  const user = useUser();

  if (user) {
    return (
      <>
        {/* {isLoadingScreen && <LoadingScreen />} */}
        <div className=" container pt-4">
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
