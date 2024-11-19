import { Link } from "react-router-dom";
import IconWrapper from "../common/IconWrapper";

const InboxItem = ({
  date,
  title,
  message,
  productImage,
  productName,
}: {
  date: string;
  title: string;
  message: string;
  productImage?: string;
  productName?: string;
}) => {
  return (
    <div className="p-2 border-b lg:py-6 lg:px-8">
      <div className="flex-apart">
        <p className="font-DMSansMedium">{date}</p>
        {productImage && <Link to="/">View Details</Link>}
      </div>

      <div className="text-sm font-DMSansRegular text-[#475467] mt-[30px]">
        <h2>{title}</h2>
        <p>{message}</p>

        {productImage && (
          <div className="px-4 py-2 bg-white border-[0.5px] border-forest_green-700 rounded-[8px] mt-6 flex items-start">
            <IconWrapper icon={productImage} containerStyle="w-[142px] h-[130px] rounded-[8px] overflow-hidden" />
            <p className="ml-6 text-sm font-DMSansRegular">{productName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InboxItem;
