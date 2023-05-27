import DashboardLayout from "@/components/layout/dashboard-layout";
import { Table, Dropdown, Spinner } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../_app";
import {
  faArrowDown,
  faArrowDownShortWide,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  turnOffLoadinScreen,
  turnOnLoadingScreen,
} from "@/util/loadingFunctions";
import ReviewRow from "@/components/ui/review-row";
import useLocalStorage from "use-local-storage";
import ScoreStepsRange from "@/components/ui/score-steps-range";
import TableReviews from "@/components/ui/table-reviews";
import { supabase } from "@/lib/supabaseClient";
import mergeArrays from "@/util/merge-array-without-duplication";

const Reviews = () => {
  const { currentApp } = useContext(DashboardContext);
  const [reviews, setReviews] = useState([]);

  const [localReviews, setLocalReviews] = useLocalStorage("reviews", {});
  const [localBugs, setLocalBugs] = useLocalStorage("bugs", {});

  async function getReviews() {
    turnOnLoadingScreen();

    // check if the local reviews is exist and coresponding to the current app
    if (
      localReviews?.appId === currentApp.id &&
      localReviews?.reviews?.length > 0
    ) {
      console.log("from the local storage");
      try {
        console.log('checking if local bugs are updated with db bugs')
        const { data, error } = await supabase
          .from("bugs")
          .select("value")
          .eq("app_id", currentApp.id);
        if (error) {
          throw new Error(error);
        }
        if (data.length) {
          const bugs_arr = Object.values(data[0]?.value);

          setLocalBugs({ appId: currentApp.id, bugs_arr });
        } else {
          setLocalBugs({ appId: currentApp.id, bugs_arr: [] });
        }
      } catch (error) {
        console.log(error);
      }
      turnOffLoadinScreen();
      return localReviews.reviews;
    }
    // get the reviews from the server
    console.log("get reviews from server");
    const { gplay_id } = currentApp;
    const res = await fetch("/api/get-reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gplay_id,
      }),
    });
    const { reviews } = await res.json();
    // get the bugs reviews from the db
    try {
      const { data, error } = await supabase
        .from("bugs")
        .select("value")
        .eq("app_id", currentApp.id);
      if (error) {
        throw new Error(error);
      }
      if (data.length) {
        const bugs_arr = Object.values(data[0]?.value);

        setLocalBugs({ appId: currentApp.id, bugs_arr });
      } else {
        setLocalBugs({ appId: currentApp.id, bugs_arr: [] });
      }
    } catch (error) {
      console.log(error);
    }

    // store the new reviews to the local storage
    setLocalReviews({ appId: currentApp.id, reviews });
    turnOffLoadinScreen();
    return reviews;
  }
  useEffect(() => {
    if (currentApp) {
      getReviews().then((reviews) => setReviews(reviews));
    }
  }, [currentApp]);

  useEffect(() => {
    // console.log(reviews);
  }, [reviews]);

  return (
    <DashboardLayout>
      {reviews.length ? (
        <TableReviews reviews={reviews} />
      ) : (
        <div className=" flex justify-center gap-4 pt-8">
          <Spinner
            className="fill-main_dark"
            color="in"
            aria-label="Info spinner example"
          />{" "}
          <span className="text-main_dark">Loading the reviews ...</span>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Reviews;
