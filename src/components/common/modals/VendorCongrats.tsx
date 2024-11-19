import { icons } from "../../../constants";
import IconWrapper from "../IconWrapper";
import TitleDescription from "../TitleDescription";

const VendorCongrats = () => {
  return (
    <>
      <IconWrapper
        icon={icons.doneCorrect}
        containerStyle="mx-auto size-[200px]"
      />

      <TitleDescription
        containerStyle="text-center"
        title="Congratulations"
        titleStyle="font-DMSansMedium text-2xl"
        description="Your Shop is ready"
        descriptionStyle="font-DMSansRegular text-[#8D8484]"
      />
    </>
  );
};

export default VendorCongrats;
