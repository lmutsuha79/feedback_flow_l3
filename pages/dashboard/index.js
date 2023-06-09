import DashboardLayout from "@/components/layout/dashboard-layout";

import { useState, useEffect } from "react";

import NumbersContainer from "@/components/overview-components/numbers-container";
import ReviewsShower from "@/components/overview-components/reviews-shower";
import useLocalStorage from "use-local-storage";
import GptOverView from "@/components/overview-components/gpt-overview";
import ChartSentiments from "@/components/overview-components/chart-sentiments";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const [localBugs, setLocalBugs] = useLocalStorage("bugs", {});
  const [localFeatures, setLocalFeatures] = useLocalStorage("features", {});
  const [localReviews, setLocalReviews] = useLocalStorage("reviews", {});

  const [sentimentCounter, setSentimentCounter] = useState({
    good: 0,
    bad: 0,
    natural: 0,
  });
  useEffect(() => {
    let good = 0;
    let bad = 0;
    let natural = 0;
    localReviews?.reviews?.forEach((review) => {
      if (review.sentiment === 0) {
        natural += 1;
      }
      if (review.sentiment > 0) {
        good += 1;
      }
      if (review.sentiment < 0) {
        bad += 1;
      }
    });
    console.log("seting sentimenta");

    setSentimentCounter({ good, bad, natural });
  }, [localReviews]);

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

    // console.log(
    //   localReviews?.reviews
    //     .slice(0, 100)
    //     .map((review) => review.text)
    //     .join(",\n")
    // );
  }, []);
  return (
    <DashboardLayout>
      <main className="mt-4">
        {/* numbers */}
        <NumbersContainer
          localReviews={localReviews}
          localFeatures={localFeatures}
          localBugs={localBugs}
          sentimentCounter={sentimentCounter}
        />
        {console.log(sentimentCounter)}

        <div className="mt-8 h-[500px] overflow-scroll flex items-center gap-8 ">
          <div className="w-[60%] h-full border border-slate-200 shadow-lg p-8 rounded-md">
            {/* <EmotionCircleChart sentimentCounter={sentimentCounter} /> */}
            <ChartSentiments sentimentCounter={sentimentCounter} />
          </div>

          {/* recent feedbacks */}
          <div className="w-[40%] h-full  border border-slate-200 shadow-lg px-4 py-8 rounded-md">
            <ReviewsShower localReviews={localReviews} />
          </div>
        </div>

        <GptOverView />
      </main>
    </DashboardLayout>
  );
};

export default Dashboard;
