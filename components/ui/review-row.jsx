import { Rating, Table } from "flowbite-react";
import Image from "next/image";

const ReviewRow = ({ review }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<Rating.Star key={i} filled={i < review.score} />);
  }

  return (
    <>
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <Image
            width={32}
            height={32}
            src={review.userImage}
            alt={review.userName + "_image"}
            className="rounded-full w-8 h-8"
          />
        </th>
        <td className="px-6 py-4">{review.userName}</td>
        <td className="px-6 py-4">
          {" "}
          <Rating>{stars}</Rating>
        </td>
        <td className="px-6 py-4">{review.text}</td>
        <td className="px-6 py-4">{review.date}</td>
        <td className="px-6 py-4">{review.version}</td>
        <td className="px-6 py-4">
          {review.replyText ? review.replyText : "no replay text"}
        </td>
        <td className="px-6 py-4 text-right">
          <a
            href={review.url}
            target="__blank"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            go_to_url
          </a>
        </td>
      </tr>
    </>
  );
};

export default ReviewRow;
