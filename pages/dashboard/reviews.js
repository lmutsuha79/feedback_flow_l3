import DashboardLayout from "@/components/layout/dashboard-layout";
import { Spinner } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../_app";
import {
  turnOffLoadinScreen,
  turnOnLoadingScreen,
} from "@/util/loadingFunctions";
import useLocalStorage from "use-local-storage";
import TableReviews from "@/components/ui/table-reviews";
import { supabase } from "@/lib/supabaseClient";

const Reviews = () => {
  const { currentApp } = useContext(DashboardContext);
  const [reviews, setReviews] = useState([]);

  const [localReviews, setLocalReviews] = useLocalStorage("reviews", {});
  const [localBugs, setLocalBugs] = useLocalStorage("bugs", {});
  const [localFeatures, setLocalFeatures] = useLocalStorage("features", {});
  async function set_up_local_bugs() {
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
  }
  async function set_up_local_features() {
    try {
      const { data, error } = await supabase
        .from("features")
        .select("value")
        .eq("app_id", currentApp.id);
      if (error) {
        throw new Error(error);
      }
      if (data.length) {
        const features_arr = Object.values(data[0]?.value);

        setLocalFeatures({ appId: currentApp.id, features_arr });
      } else {
        setLocalFeatures({ appId: currentApp.id, features_arr: [] });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function getReviews() {
    turnOnLoadingScreen();
    await set_up_local_bugs();
    await set_up_local_features();

    // check if the local reviews is exist and coresponding to the current app
    if (
      localReviews?.appId === currentApp.id &&
      localReviews?.reviews?.length > 0
    ) {
      console.log("from the local storage");

      turnOffLoadinScreen();
      return localReviews.reviews;
    }

    // this part excute when no local reviews were found
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
