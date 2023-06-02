import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const LandingPageNav = ({ active }) => {
  return (
    <nav className="px-8 py-4">
      {/* logo */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Image
            src={"/images/logo-black-mini.png"}
            alt="logo_feedback_flow"
            width={100}
            height={50}
            draggable="false"
            // className="h-[120px]"
          />
          <div className="space-x-4">
            <Link
              className={`${
                active === "home" ? "text-main_dark" : "text-main_text"
              } hover:text-main_dark font-medium transition-colors`}
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="text-main_text hover:text-main_dark font-medium transition-colors"
              href={"/#features"}
            >
              Features
            </Link>
            <Link
              className="text-main_text hover:text-main_dark font-medium transition-colors"
              href={"/#pricing"}
            >
              Pricing
            </Link>
            <Link
              className={`${
                active === "about" ? "text-main_dark" : "text-main_text"
              } hover:text-main_dark font-medium transition-colors`}
              href={"/about"}
            >
              About
            </Link>
          </div>
        </div>

        <Button className="bg-main_dark hover:bg-main_dark hover:scale-105 transform transition-transform">
          <Link className="space-x-2" href={"/dashboard"}>
            <FontAwesomeIcon className="text-white" icon={faDashboard} />
            <span className="text-white">Get Started</span>
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default LandingPageNav;
