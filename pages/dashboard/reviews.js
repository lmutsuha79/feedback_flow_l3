import DashboardLayout from "@/components/layout/dashboard-layout";
import { Table, Dropdown, Spinner } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../_app";
import { faAdd, faArrowDown, faArrowDown19, faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  turnOffLoadinScreen,
  turnOnLoadingScreen,
} from "@/util/loadingFunctions";
import ReviewRow from "@/components/ui/review-row";
import ReviewCard from "@/components/ui/review-card";
import useLocalStorage from "use-local-storage";

const Reviews = () => {
  const { currentApp } = useContext(DashboardContext);
  const [reviews, setReviews] = useState([]);

  const [localReviews, setLocalReviews] = useLocalStorage("reviews", {});

  async function getReviews() {
    turnOnLoadingScreen();

    // check if the local reviews is exist and coresponding to the current app
    if (localReviews?.appId === currentApp.id) {
      console.log("from the local storage");

      turnOffLoadinScreen();
      return localReviews.reviews;
    }
    // get the reviews from the db
    console.log("get reviews from db");
    const { gplay_id } = currentApp;
    const res = await fetch("/api/get-reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gplay_id,
      }),
    });
    const { reviews } = await res.json();
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
      {/* {reviews.length && (
       
      )} */}
      {reviews.length ? (
        <main className="h-[100vh] overflow-y-scroll">
          <div className="flex justify-end items-center gap-4">
            <span className="text-main_dark font-medium ">filter by:</span>
            <div className="bg-main_dark px-4 py-2 rounded-md">
              <Dropdown
                label={
                  <div className=" text-white flex items-center gap-2">
                    <span>new reviews first</span>
                    <FontAwesomeIcon icon={faArrowDownShortWide} />
                  </div>
                }
                inline={true}
                floatingArrow={true}
                arrowIcon={false}
              >
                <Dropdown.Item>new reviews first</Dropdown.Item>
                <Dropdown.Item>old reviews first</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>reviews without reply</Dropdown.Item>
                <Dropdown.Item>reviews that have a reply</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>

          <Table className="mt-8" striped={true}>
            <Table.Head>
              <Table.HeadCell>avatar</Table.HeadCell>
              <Table.HeadCell>username</Table.HeadCell>
              <Table.HeadCell>score</Table.HeadCell>
              <Table.HeadCell>text</Table.HeadCell>
              <Table.HeadCell>date</Table.HeadCell>
              <Table.HeadCell>version</Table.HeadCell>
              <Table.HeadCell>replay</Table.HeadCell>
              <Table.HeadCell>url</Table.HeadCell>
              {/* <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell> */}
            </Table.Head>
            <Table.Body className="divide-y">
              {reviews.map((review, index) => (
                <ReviewRow key={review.id} review={review} />
              ))}
            </Table.Body>
          </Table>
        </main>
      ) : (
        <div className="h-screen flex justify-center gap-4 pt-8">
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
