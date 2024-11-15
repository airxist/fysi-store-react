import RegularList from "../common/RegularList";
import { customerReviews, icons } from "../../constants";
import IconWrapper from "../common/IconWrapper";
import Btn from "../common/Btn";

const Reviews = () => {
  return (
    <RegularList
      listHeader={() => (
        <div className="mt-4">
          <h2 className="font-bold text-[28px]">Customers Feedback</h2>
        </div>
      )}
      listFooter={() => (
        <Btn
          IconLeft={<img src={icons.plus} alt="plus" />}
          containerStyle="flex-center gap-x-1 rounded-[8px] py-2 px-3"
          btnVariant="secondary"
          text="Leave a review"
        />
      )}
      data={customerReviews}
      dataContainerStyle="divide-y-2 w-full max-w-[740px]"
      renderComponent={(reviews) => {
        return (
          <>
            {reviews.map((review) => (
              <div className="py-4" key={review.reviewMessage}>
                <div className="flex-apart">
                  <div className="flex gap-x-3">
                    <IconWrapper
                      icon={review?.image}
                      containerStyle="size-10 rounded-full bg-[#FFE7CC]"
                    />
                    <div>
                      <p className="text-xs font-bold md:text-base">
                        {review?.name || "User name"}
                      </p>
                      <p className="text-sm">{review?.rating}</p>
                    </div>
                  </div>

                  <span className="text-[10px]">2 mins ago</span>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-grey-800">
                    {review.reviewMessage}
                  </p>
                </div>
              </div>
            ))}
          </>
        );
      }}
    />
  );
};

export default Reviews;
