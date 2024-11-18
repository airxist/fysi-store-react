import { images } from "../../constants";
import GeneralLayout from "../_layout/GeneralLayout";
import Btn from "../common/Btn";
import IconWrapper from "../common/IconWrapper";

const NotFound = () => {
  return (
    <GeneralLayout>
      <section className="pt-10 pb-5 padded">
        <div>
          <p className="text-2xl text-center font-DMSansRegular">Ooops!</p>

          <IconWrapper
            icon={images.notFound}
            containerStyle="size-full h-fit mt-10 mb-5 mx-auto w-fit"
            iconStyle="object-contain object-center"
          />

          <Btn
            text="Go to Home Page"
            containerStyle=" rounded-[8px] w-[190x] py-4 px-7 font-DMSansBold mx-auto block mt-11"
          />
        </div>
      </section>
    </GeneralLayout>
  );
};

export default NotFound;
