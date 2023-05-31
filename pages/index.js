import DropdownMenuDemo from "@/components/ui/drop-down-menu";
import { faCode, faDashboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <header>
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
                  className="text-main_text hover:text-main_dark font-medium transition-colors"
                  href={"#"}
                >
                  Home
                </Link>
                <Link
                  className="text-main_text hover:text-main_dark font-medium transition-colors"
                  href={"#"}
                >
                  Features
                </Link>
                <Link
                  className="text-main_text hover:text-main_dark font-medium transition-colors"
                  href={"#"}
                >
                  Pricing
                </Link>
                <Link
                  className="text-main_text hover:text-main_dark font-medium transition-colors"
                  href={"#"}
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
      </header>
      <main>
        <div className="container">
          {/* hero section */}
          <section className="py-[100px]">
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                src={"/images/logo-black-mini.png"}
                alt="logo_feedback_flow"
                width={150}
                height={100}
                draggable="false"
                // className="h-[120px]"
              />
              <h2 className="text-4xl font-bold text-main_dark">
                Unlock the Power of Customers Feedbacks
              </h2>
              <div className="text-main_text text-lg">
                {/* Harness the Voice of Your Users to Elevate Your App's Success */}
                <p className="text-center">
                  Tap into the voice of your users. Analyze reviews, uncover
                  trends, and make data-driven decisions
                </p>
                <p className="text-center">
                  Enhance your app's performance, delight users, and achieve
                  sustainable growth in the competitive app market.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Button className="bg-main_dark hover:bg-main_dark hover:scale-105 transform transition-transform">
                  <Link className="space-x-2" href={"/dashboard"}>
                    {" "}
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faDashboard}
                    />
                    <span className="text-white">Get Started</span>
                  </Link>
                </Button>
                <Button
                  outline
                  className="border border-solid border-main_dark bg-white hover:bg-white hover:scale-105 transform transition-transform"
                  style={{ border: "1px solid black" }}
                >
                  <Link
                    target="__blank"
                    href={"https://github.com/lmutsuha79/feedback_flow_l3"}
                    className="space-x-2"
                  >
                    <FontAwesomeIcon className="text-main_dark" icon={faCode} />
                    <span className="text-main_dark">View on Github</span>
                  </Link>
                </Button>{" "}
              </div>
            </div>
          </section>


          
        </div>
      </main>
      <footer></footer>
    </>
  );
}
