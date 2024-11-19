import StepLayout from "../../_layout/StepLayout";
import Btn from "../../common/Btn";
import InputField from "../../common/_form-inputs/InputField";

const VendorStep3 = ({
  nextStep,
}: {
  nextStep?: () => void;
  prevStep?: () => void;
}) => {
  return (
    <form
      className="w-full md:w-[90%] mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <StepLayout
        title="Personal Information"
        description="Set up your password and provide your phone number"
        logoContainerStyle=""
        headContainerStyle="mt-10 text-center"
      />

      <div className="my-6 space-y-5">
        <InputField
          name="phone"
          placeholder="Phone number"
          inputContainerStyle="h-14"
          inputStyle="size-full font-DMSansRegular text-sm outline-none rounded-[6px] px-4 border border-[#D0D5DD]"
          value=""
        />
        <InputField
          type="password"
          name="password"
          placeholder="Your passowrd"
          inputContainerStyle="h-14"
          inputStyle="size-full font-DMSansRegular text-sm outline-none rounded-[6px] px-4 border border-[#D0D5DD]"
          value=""
        />
        <InputField
          type="password"
          name="password"
          placeholder="Your passowrd"
          inputContainerStyle="h-14"
          inputStyle="size-full font-DMSansRegular text-sm outline-none rounded-[6px] px-4 border border-[#D0D5DD]"
          value=""
        />
      </div>

      <Btn
        text="Next"
        containerStyle="w-full h-12 rounded-[8px] font-DMSansBold"
        onClick={nextStep}
      />
    </form>
  );
};

export default VendorStep3;
