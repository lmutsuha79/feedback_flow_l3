import {
  faBug,
  faComment,
  faFilter,
  faHeartPulse,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberCard from "./number-card";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";

const NumbersContainer = ({ localBugs, localReviews, localFeatures }) => {
  const [sentimentCounter, setSentimentCounter] = useState({
    good: 0,
    bad: 0,
    natural: 0,
  });
  useEffect(() => {
    let good = 0;
    let bad = 0;
    let natural = 0;
    localReviews.reviews.forEach((review) => {
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
    setSentimentCounter({ good, bad, natural });
  }, [localReviews]);

  return (
    <div className="grid grid-cols-4 gap-8">
      <NumberCard title={"Feedbacks Collected"} icon={faComment}>
        <div className="">
          <span className="font-bold text-4xl text-main_dark">
            {"+" + localReviews.reviews.length}
          </span>
          <span className="block text-main_text font-normal mt-1">
            Feedback and reviews
          </span>
        </div>
      </NumberCard>

      <NumberCard title={"Users Satisfaction"} icon={faHeartPulse}>
        <div className="flex justify-between items-center">
          <div className="flex ">
            <span className="font-bold text-3xl text-main_dark">
              {Math.floor(
                (sentimentCounter.good * 100) / localReviews.reviews.length
              ) + "%"}
            </span>
            <span className="text-4xl">😍</span>
          </div>
          <div className="text-main_text text-sm">
            <ul>
              <li>😍 {sentimentCounter.good}</li>
              <li>😞 {sentimentCounter.bad}</li>
              <li>😐 {sentimentCounter.natural}</li>
            </ul>
          </div>
        </div>{" "}
      </NumberCard>

      <NumberCard title={"Collections"} icon={faFilter}>
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            {" "}
            <span className="font-bold text-2xl text-main_dark">
              {localBugs.bugs_arr.length + " Bugs"}
            </span>
            <FontAwesomeIcon size="xl" icon={faBug} />
          </div>
          <div className="flex gap-2 items-center">
            {" "}
            <span className="font-bold text-2xl text-main_dark">
              {localFeatures.features_arr.length + " Features"}
            </span>
            <FontAwesomeIcon size="xl" icon={faLightbulb} />
          </div>
        </div>
      </NumberCard>

      {/* <NumberCard title={"App Info Summary"} icon={faCircleInfo}>
            <ul className="">
              <li className="flex gap-1 items-center">
                <span className="text-main_dark font-medium">Title:</span>
                <span className="text-main_text text-sm">
                  Sleep Cycle: Sleep Tracker
                </span>
              </li>
              <li className="flex gap-1 items-center">
                <span className="text-main_dark font-medium">App_id:</span>
                <span className="text-main_text text-sm">com.northcube.sleepcycle</span>
              </li>
              <li className="flex gap-1 items-center">
                <span className="text-main_dark font-medium">Installs:</span>
                <span className="text-main_text text-sm">13780129</span>
              </li>
              <li className="flex gap-1 items-center">
                <span className="text-main_dark font-medium">ScoreText:</span>
                <span className="text-main_text text-sm">4.4</span>
              </li>
            </ul>
          </NumberCard> */}
    </div>
  );
};

export default NumbersContainer;
