import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { mapSentimentToEmoji } from "@/util/mapSentimentToEmoji.js";

const ReviewsShower = ({ localReviews }) => {
  return (
    <>
      <header>
        <h3 className="text-main_dark font-medium text-xl">Recent Feedbacks</h3>
        <span className="text-main_text font">
          The last 5 feedbacks collected 
        </span>
      </header>
      <ul className="mt-2 space-y-4">
        {localReviews?.reviews?.slice(0, 5)?.map((review) => (
          <li key={review.id} className="flex justify-between  items-center border border-slate-200 p-2 shadow-md transform hover:scale-105 transition-transform ">
            <div className="flex gap-4 items-center">
              <Image
                src={review.userImage}
                alt="user_img"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-main_dark font-medium">{review.userName}</span>
                <span className="text-main_text text-sm w-[280px] whitespace-nowrap overflow-hidden text-ellipsis	">
                  {review.text}
                </span> 
              </div>
            </div>
            <span className="text-2xl text-main_dark">
              {mapSentimentToEmoji(review.sentiment) + review.sentiment}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsShower;
