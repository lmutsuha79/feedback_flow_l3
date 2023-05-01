import ReviewRow from "./review-row";

const TableReviews = ({reviews}) => {
  return (
    <div>
      <div className="relative overflow-x-scroll shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                avatar
              </th>
              <th scope="col" className="px-6 py-3">
                username
              </th>
              <th scope="col" className="px-6 py-3">
                score
              </th>
              <th scope="col" className="px-6 py-3">
                text
              </th>
              <th scope="col" className="px-6 py-3">
                date
              </th>
              <th scope="col" className="px-6 py-3">
                version
              </th>
              <th scope="col" className="px-6 py-3">
                replay
              </th>
              <th scope="col" className="px-6 py-3">
                url
              </th>
            </tr>
          </thead>
          <tbody>
           
          {reviews.map((review, index) => (
                <ReviewRow
                  key={review.id}
                  review={review}
                  // setSelectedReviewIndex={setSelectedReviewIndex}
                  index={index}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableReviews;
