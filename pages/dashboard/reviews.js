import DashboardLayout from "@/components/layout/dashboard-layout";
import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../_app";
import {
  turnOffLoadinScreen,
  turnOnLoadingScreen,
} from "@/util/loadingFunctions";
import ReviewRow from "@/components/ui/review-row";
import ReviewCard from "@/components/ui/review-card";

const Reviews = () => {
  const { currentApp } = useContext(DashboardContext);
  const [reviews, setReviews] = useState([]);

  async function getReviews() {
    turnOnLoadingScreen();
    const { gplay_id } = currentApp;
    const res = await fetch("/api/get-reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gplay_id,
      }),
    });
    const { reviews } = await res.json();
    turnOffLoadinScreen();

    return reviews;
  }
  useEffect(() => {
    if (currentApp) {
      const reviews = getReviews().then((reviews) => setReviews(reviews));
    }
  }, [currentApp]);

  useEffect(() => {
    console.log(reviews);
  }, [reviews]);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);

  return (
    <DashboardLayout>
      {reviews.length && (
        <main className="h-[100vh] overflow-y-scroll">
          {/*  */}
          {/* <ReviewCard review={reviews[selectedReviewIndex]} /> */}

          <Table  className="" striped={true}>
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
                <ReviewRow
                  key={review.id}
                  review={review}
                  // setSelectedReviewIndex={setSelectedReviewIndex}
                  // index={index}
                />
              ))}
            </Table.Body>
          </Table>
        </main>
      )}
    </DashboardLayout>
  );
};

export default Reviews;
