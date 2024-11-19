import { useNavigate } from "react-router-dom";
import { icons } from "../../../constants";
import Btn from "../../common/Btn";
import IconWrapper from "../../common/IconWrapper";
import TitleDescription from "../../common/TitleDescription";

const Done = ({
  nextStep,
}: {
  nextStep?: () => void;
  prevStep?: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:w-[90%] mx-auto pt-32">
      <div>
        <IconWrapper icon={icons.tick} containerStyle="size-12 mx-auto" />
        <TitleDescription
          containerStyle="text-center mt-6"
          title="Email Verified"
          titleStyle="head-title"
          description="Your password has been successfully created"
          descriptionStyle="head-description"
        />
      </div>

      <div className="mt-8">
        <Btn
          text="Go to Home"
          containerStyle="w-full h-12 rounded-[8px] font-DMSansBold"
          onClick={() => navigate("/")}
        />

        <Btn
          text="Back to log in"
          containerStyle="w-full h-12 rounded-[8px] font-DMSansMedium flex-center text-sm gap-x-2 mt-8"
          onClick={nextStep}
          IconLeft={<img src={icons.direction} />}
          btnVariant="transparent"
        />
      </div>
    </div>
  );
};

export default Done;
