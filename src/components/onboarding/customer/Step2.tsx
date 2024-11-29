import StepLayout from "../../_layout/StepLayout";
import Btn from "../../common/Btn";
import InputField from "../../common/_form-inputs/InputField";
import OwnAnAccount from "../OwnAnAccount";

const Step2 = ({
  nextStep,
}: {
  nextStep?: () => void;
  prevStep?: () => void;
}) => {
  return (
    <form className="onboarding-form">
      <StepLayout
        title="Personal Details"
        description="We'd love to get to know you better! Please fill in a few details"
        logoContainerStyle=""
        headContainerStyle="mt-10"
      />
      <div className="mt-6 mb-8 space-y-5">
        <InputField
          labelStyle="text-sm font-DMSansMedium"
          name="userdetail"
          label="First Name"
          placeholder="airxistence"
          inputContainerStyle="h-14 "
          inputStyle="size-full font-DMSansRegular text-sm outline-none rounded-[6px] px-4 border border-[#D0D5DD]"
          value=""
        />
        <InputField
          labelStyle="text-sm font-DMSansMedium"
          name="password"
          label="Last Name"
          placeholder="betahandz"
          inputContainerStyle="h-14 "
          inputStyle="size-full font-DMSansRegular text-sm outline-none rounded-[6px] px-4 border border-[#D0D5DD]"
          value=""
        />
        <InputField
          labelStyle="text-sm font-DMSansMedium"
          type="password"
          name=""
          label="Phone Number"
          placeholder="your number"
          inputContainerStyle="h-14 "
          inputStyle="size-full font-DMSansRegular text-sm outline-none rounded-[6px] px-4 border border-[#D0D5DD]"
          value=""
        />
      </div>

      <div>
        <Btn
          text="Continue"
          containerStyle="w-full h-12 rounded-[8px] font-DMSansBold"
          onClick={nextStep}
        />

        <OwnAnAccount question="Already have an account" />
      </div>
    </form>
  );
};

export default Step2;
