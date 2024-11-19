// import { Link } from "react-router-dom";
import StepLayout from "../../_layout/StepLayout";
import Btn from "../../common/Btn";

const Step3 = ({ nextStep }: { nextStep?: () => void }) => {
  return (
    <form className="w-full md:w-[90%] mx-auto" onSubmit={(e) => e.preventDefault()}>
      <StepLayout
        title="Verify your email address"
        titleStyle="text-center md:text-start"
        description="We have sent a verification code to airxist@gmail.com"
        descriptionStyle="text-center md:text-start"
        logoContainerStyle=""
        headContainerStyle="mt-10"
      />

      <div className="mt-6 mb-8 space-y-5"></div>

      <div>
        <Btn
          text="Continue"
          containerStyle="w-full h-12 rounded-[8px] font-DMSansBold"
          onClick={nextStep}
        />

        <p className="mt-5 text-sm text-center font-DMSansRegular">
          Didn't receive the verification code? It might take a moment. You can
          request a new code in 60 seconds
          {/* <Link to="/login" className="font-DMSansBold text-custom-orange-700">
            Log in
          </Link> */}
        </p>
      </div>
    </form>
  );
};

export default Step3;
