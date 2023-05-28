import DashboardLayout from "@/components/layout/dashboard-layout";
import NumberCard from "@/components/overview-components/number-card";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

import { Chart } from "primereact/chart";

import {
  faBug,
  faCalendar,
  faCircleInfo,
  faComment,
  faDashboard,
  faDownload,
  faEye,
  faFile,
  faFilter,
  faHeartPulse,
  faInfo,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NumbersContainer from "@/components/overview-components/numbers-container";
import ReviewsShower from "@/components/overview-components/reviews-shower";
import useLocalStorage from "use-local-storage";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const [localBugs, setLocalBugs] = useLocalStorage("bugs", {});
  const [localFeatures, setLocalFeatures] = useLocalStorage("features", {});
  const [localReviews, setLocalReviews] = useLocalStorage("reviews", {});

  useEffect(() => {
    const data = {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Sales",
          data: [540, 325, 702, 620],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <DashboardLayout>
      {/* total number of collected reviews and feedbacks */}
      {/* total score of satisfaction of the users */}
      {/* satisfaction score from the last version only */}
      {/* total number of bugs and features in top of each other */}
      {/* ############################################################# */}
      {/* use gpt to dsipaly what most recent feedbacks says about the usr app */}
      {/* ################################################################ */}
      {/* display recent feedbacks or top feedbacks */}
      {/* dipaly a chart that diplay the satisfaction of users aver time or over version */}
      {/* add other charts  */}

      <main className="mt-4">
        {/* numbers */}
        <NumbersContainer
          localReviews={localReviews}
          localFeatures={localFeatures}
          localBugs={localBugs}
        />

        <div className="mt-8 h-[400px] flex items-center gap-8 ">
          <div className="w-[65%] h-full border border-slate-200 shadow-lg p-8 rounded-md">
            <Chart
              className="w-full h-full"
              type="bar"
              data={chartData}
              options={chartOptions}
            />
          </div>

          {/* recent feedbacks */}
          <div className="w-[35%] h-full overflow-y-scroll border border-slate-200 shadow-lg px-4 py-8 rounded-md">
            <ReviewsShower />
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Dashboard;
