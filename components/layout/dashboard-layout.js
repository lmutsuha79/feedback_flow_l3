import { Button, Modal, Tooltip } from "flowbite-react";
import ProfileDropDown from "./layout-components/profile-drop-down";
import SelectAppDropDown from "./layout-components/select-app-drop";
import TopNav from "./layout-components/top-nav";

const DashboardLayout = (props) => {
  return (
    <div className="container pt-4">
      <div className="border border-slate-200 rounded-md">
        <header className="h-[64px]">
          <div className="p-2 flex items-center justify-between">
            <SelectAppDropDown />

            <TopNav />

            <ProfileDropDown />
          </div>
        </header>
      </div>
    </div>
  );
};

export default DashboardLayout;
