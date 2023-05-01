const ReviewCard = ({ review }) => {
      
  return (
    <div className="rounded-md border-slate-400 bg-blue_gray shadow-lg h-[360px] w-[250px]">
      <img
        src={review.userImage}
        alt={review.userName + "_image"}
        className="rounded-full w-[80px] h-[80px]"
      />
      <h3 className="text-lg font-medium text-main_dark">{review.userName}</h3>
    </div>
  );
};

export default ReviewCard;
