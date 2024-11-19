import StepLayout from "../../_layout/StepLayout";
import Btn from "../../common/Btn";
import InputField from "../../common/_form-inputs/InputField";

const VendorStep2 = ({ nextStep }: { nextStep?: () => void }) => {
  return (
    <form
      className="w-full md:w-[90%] mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <StepLayout
        descriptionStyle="text-center"
        description="Set up your shop by completing the following details"
        logoContainerStyle=""
        headContainerStyle="mt-10"
      />

      <div className="mt-6 mb-20 space-y-5">
        <InputField
          labelStyle="text-sm font-DMSansMedium"
          type="email"
          name="password"
          label="E-mail Address"
          placeholder="airxist@gmail.com"
          inputContainerStyle="h-14"
          inputStyle="size-full font-DMSansRegular text-sm outline-none rounded-[6px] px-4 border border-[#D0D5DD]"
          value=""
        />

        <InputField
          labelStyle="text-sm font-DMSansMedium"
          name="userdetail"
          placeholder="otp digit sent to you"
          inputContainerStyle="h-14 "
          inputStyle="size-full font-DMSansRegular text-sm outline-none rounded-[6px] px-4 border border-[#D0D5DD]"
          value=""
        />
      </div>

      <div>
        <Btn
          text="Verify"
          containerStyle="w-full h-12 rounded-[8px] font-DMSansBold"
          onClick={nextStep}
        />

        <Btn
          text="Resend Code"
          containerStyle="w-full h-12 rounded-[8px] font-DMSansBold mt-7 border-custom-orange-700"
          onClick={nextStep}
          btnVariant="outline"
        />
      </div>
    </form>
  );
};

export default VendorStep2;
