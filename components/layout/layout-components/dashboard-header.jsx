import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderTabs from "./header-tabs";
import { faCalendar, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Button } from "flowbite-react";
import Image from "next/image";

const DashboardHeader = () => {
  return (
    <div className="mx-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image  
            src={"/images/logo-black.png"}
            width={130}
            height={130}
            alt="logo"
          />
          <h2 className="text-4xl font-bold text-main_dark">Dashboard</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center ">
            <FontAwesomeIcon className="text-main_dark" icon={faCalendar} />
            <span className="ml-2 text-main_dark">
              Jan 20, 2023 - Feb 09, 2023
            </span>
          </div>
          <Button className="flex items-center bg-main_dark hover:bg-secondary_dark">
            <FontAwesomeIcon icon={faDownload} />
            <span className="ml-1">Download</span>
          </Button>
        </div>
      </div>

      <HeaderTabs />
    </div>
  );
};

export default DashboardHeader;
