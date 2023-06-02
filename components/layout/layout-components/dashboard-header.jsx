import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderTabs from "./header-tabs";
import { faCalendar, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useContext } from "react";
import { DashboardContext } from "@/pages/_app";

const DashboardHeader = () => {
  const { currentApp, setCurrentApp } = useContext(DashboardContext);

  function downloadJson() {
    // donwload all the feedbacks collected in json format
    const json = JSON.stringify(currentApp.info);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "feedbacks-file";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  }
  return (
    <div className="mx-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            priority={1}
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
              Download All Feedbacks (1000 Feedbacks)
            </span>
          </div>
          <Button
            onClick={downloadJson}
            className="flex items-center bg-main_dark hover:bg-secondary_dark"
          >
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
