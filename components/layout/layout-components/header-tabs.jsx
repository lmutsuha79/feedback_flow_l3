import {
  faComment,
  faDashboard,
  faFile,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const HeaderTabs = () => {
  const router = useRouter();
  const isActive = (href) => {
    return router.pathname === href;
  };

  return (
    <div className="">
      <ul
        id="ul_of_header_tabs"
        className="flex w-fit items-center rounded-lg border"
      >
        <li
          className={`rounded-md text-base font-medium transition-colors flex items-center cursor-pointer border-r p-2 ${
            isActive("/dashboard")
              ? "active bg-main_dark text-white"
              : "bg-white text-main_dark"
          }`}
        >
          {" "}
          <Link href={"/dashboard"}>
            <FontAwesomeIcon icon={faDashboard} />
            <span className="ml-1">Overview</span>
          </Link>
        </li>
        <li
          className={`rounded-md text-base font-medium transition-colors flex items-center cursor-pointer border-r p-2 ${
            isActive("/dashboard/reviews")
              ? "active bg-main_dark text-white"
              : "bg-white text-main_dark"
          }`}
        >
          <Link href={"/dashboard/reviews"}>
            <FontAwesomeIcon icon={faComment} />
            <span className="ml-1">Reviews</span>
          </Link>
        </li>
        <li
          className={`rounded-md text-base font-medium transition-colors flex items-center cursor-pointer border-r p-2 ${
            isActive("/dashboard/report")
              ? "active bg-main_dark text-white"
              : "bg-white text-main_dark"
          }`}
        >
          <Link href={"/dashboard/report"}>
            <FontAwesomeIcon icon={faFile} />
            <span className="ml-1">Report</span>
          </Link>
        </li>
        <li
          className={`rounded-md text-base font-medium transition-colors flex items-center cursor-pointer border-r p-2 ${
            isActive("/dashboard/about")
              ? "active bg-main_dark text-white"
              : "bg-white text-main_dark"
          }`}
        >
          <Link href={"/dashboard/about"}>
            <FontAwesomeIcon icon={faQuestion} />
            <span className="ml-1">About</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTabs;
