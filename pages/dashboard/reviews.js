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

const Reviews = () => {
  // create a new state called selectedFilters makes it empaty initially
  // then when user select an item from the list of filters in the UI the state changes and the slected filter added to the list of filters
  // then every time the state changes I call the method of filter

  // the method of filter
  // ######################
  // this mehtod is used to update the reviews list and than updates the UI
  // the method get the parameters of the filter from the selectedFilters state

  const { currentApp } = useContext(DashboardContext);
  const [reviews, setReviews] = useState([]);

  const [localReviews, setLocalReviews] = useLocalStorage("reviews", {});

  async function getReviews() {
    turnOnLoadingScreen();

    // check if the local reviews is exist and coresponding to the current app
    if (
      localReviews?.appId === currentApp.id &&
      localReviews?.reviews?.length > 0
    ) {
      console.log("from the local storage");

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
    console.log(reviews);
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
    console.log(reviews);
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
