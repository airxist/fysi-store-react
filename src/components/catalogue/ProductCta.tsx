import { icons } from "../../constants";
import Btn from "../common/Btn";
import IconWrapper from "../common/IconWrapper";

const ProductCta = () => {
  return (
    <div className="flex flex-col w-full gap-3 my-6 md:flex-row ">
      <div className="border bg-[#F9FAFB] border-grey-600 text-forest_green-500 rounded-[8px] px-4 py-[13px] w-[127px] flex-center gap-x-[30px]">
        <span>-</span>

        <output>1</output>

        <span>+</span>
      </div>

      <div className="flex gap-x-4 md:flex-1">
        <Btn
          IconLeft={<img src={icons.cartWhite} alt="icon" className="mr-2" />}
          containerStyle="flex-1 h-12 rounded-[8px] flex-center"
          text="Add to Cart"
        />

        <IconWrapper
          icon={icons.heartWhite}
          containerStyle="size-[50px] rounded-full bg-forest_green-100 p-3"
        />
      </div>
    </div>
  );
};

export default ProductCta;
