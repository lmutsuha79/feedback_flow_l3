import Footer from "@/components/landing-page-comp/footer";
import HowItWorksGridItem from "@/components/landing-page-comp/how-it-work-grid-item";
import LandingPageNav from "@/components/landing-page-comp/landing-page-nav";
import DropdownMenuDemo from "@/components/ui/drop-down-menu";
import {
  faCode,
  faDashboard,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
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
        <LandingPageNav active={"home"} />
      </header>
      <main>
        {/* hero section */}
        <section className="py-[120px]">
          <div className="container">
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
          </div>
        </section>

        {/* how it works section */}
        <section>
          <div className="container">
            <header>
              <h2 className="text-4xl font-bold text-main_dark text-center">
                How It Work's
              </h2>
            </header>

            <div className="">
              <HowItWorksGridItem
                is_img_right={true}
                title={"Regestring The App"}
                img="/images/how_it_works/register_app.gif"
              >
                <pre className="whitespace-pre-line text-main_text">
                  {`Begin by registering the app you want to collect feedback from.
Provide the app ID to uniquely identify the app.
The app ID can usually be found in the app's Google Play Store URL or developer console.`}
                </pre>
              </HowItWorksGridItem>

              <HowItWorksGridItem
                is_img_right={false}
                title={"Collecting The Data:"}
                img="/images/how_it_works/collect_data.gif"
              >
                <pre className="whitespace-pre-line text-main_text">
                  {`Once your app is registered, our application collects the latest customer reviews and ratings from the Google Play Store.
We fetch a comprehensive set of reviews to ensure a representative sample of user feedback.
The collected data includes text reviews, ratings, and other relevant metadata associated with each review.`}
                </pre>
              </HowItWorksGridItem>
              <HowItWorksGridItem
                is_img_right={true}
                title={"Analyzing Data:"}
                img="/images/how_it_works/analyse_data.gif"
              >
                <pre className="whitespace-pre-line text-main_text">
                  {`After collecting Data, our powerful analysis engine goes to work.
We employ advanced sentiment analysis techniques to determine the sentiment of each review, whether positive, negative, or neutral.
This analysis provides you with valuable insights into customer sentiment, satisfaction, and the key areas of improvement for your app.`}
                </pre>
              </HowItWorksGridItem>
              <HowItWorksGridItem
                is_img_right={false}
                title={"Displaying Data:"}
                img="/images/how_it_works/display_data.gif"
              >
                <pre className="whitespace-pre-line text-main_text">
                  {`Our user-friendly dashboard presents the collected and analyzed data in a clear and intuitive manner.
Key metrics and insights are prominently displayed, giving you an instant overview of customer sentiment and satisfaction.
Interactive charts and graphs help visualize trends, enabling you to make data-driven decisions quickly.
Filter and sort options allow you to focus on specific time periods or aspects of customer feedback.
The dashboard provides actionable insights to identify areas for improvement in your app.`}
                </pre>
              </HowItWorksGridItem>
            </div>
          </div>
        </section>

        {/* discover our Feedbacks Ai Summary tool */}
        <section className="mt-[50px] bg-main_dark">
          <div className="container flex items-strat">
            <Image
              src="/images/how_it_works/Ai.gif"
              alt="out_ai_tool"
              width={500}
              height={500}
            />
            <div className="pt-20 space-y-4">
              <h2 className="text-3xl font-medium text-white">
                Discover our New AI-Powered Sentiment Summary Feature!
              </h2>
              <pre className="text-white whitespace-pre-line">
                {`Experience the future of user feedback analysis with our AI-powered tool.
Quickly and effortlessly gain insights into what users are saying about your app.
Our advanced AI technology analyzes feedback in seconds, giving you valuable information to improve user satisfaction.
Stay ahead of the competition and make data-driven decisions with ease.`}
              </pre>
              <Button
                outline
                className="border border-solid border-main_dark bg-white hover:bg-white hover:scale-105 transform transition-transform"
                style={{ border: "1px solid black" }}
              >
                <Link href={"/dashboard/report"} className="space-x-2">
                  <FontAwesomeIcon className="text-main_dark" icon={faRobot} />
                  <span className="text-main_dark">Try Now</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* <section>
          <div className="container">
            
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
