import React from "react";
import StepLayout from "../../_layout/StepLayout";
import Btn from "../../common/Btn";

import { OnboardingFormChildProps } from "../OnboardingForm";

const Step3: React.FC<OnboardingFormChildProps> = ({ nextStep }) => {
  return (
    <form
      className="onboarding-form"
      onSubmit={(e) => e.preventDefault()}
    >
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
        </p>
      </div>
    </form>
  );
};

export default Step3;
