import { icons, images } from "../../constants";
import Overlay from "./Overlay";
import SearchInputField from "./SearchInputField";

const Subscribe = () => {
  return (
    <div className="h-[410px] md:h-[527px] relative">
      <img
        src={images.palm}
        alt="subscribe"
        className="object-cover object-center size-full"
      />

      <Overlay containerStyle="bg-forest_green-300/30 flex items-center justify-end padded">
        <div className="bg-forest_green-400 w-full max-w-[615px] min-h-[329px] md:min-h-[226px] rounded-[8px] px-5 py-10 md:px-10">
          <p className="text-xl font-bold text-forest_green-50">
            Subscribe to our newsletter
          </p>

          <div className="mt-7">
            <p className="text-xl text-forest_green-50">
              Be the first to know about exclusive offers, eco-tips, and new
              arrivals!
            </p>

            <SearchInputField
            icon={icons.sms}
              containerStyle=" md:flex mt-5 max-w-[347px] flex-1"
              placeHolder="Your Email"
              inputStyle="bg-transparent ml-1 border-none outline-none text-sm"
              inputContainerStyle="bg-[#F0F2F5] rounded-[6px] flex items-center px-3 py-2"
              value=""
              handleSearch={() => {}}
              btnStyle="h-full rounded-[4px] px-4 py-2 text-sm mt-2 md:mt-0 w-full md:w-fit"
              btnText="Subscribe"
            />
          </div>
        </div>
      </Overlay>
    </div>
  );
};

export default Subscribe;
