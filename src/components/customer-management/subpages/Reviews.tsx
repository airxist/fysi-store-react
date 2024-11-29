import MyReviews from "../MyReviews";

const Reviews = () => {
  return (
    <div className="flex-1 bg-white">
      <header className="px-4 pt-6 pb-3 border-b">
        <h2 className="text-2xl font-DMSansMedium">Reviews (49)</h2>
      </header>

      <MyReviews />
    </div>
  );
};

export default Reviews;
