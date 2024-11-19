import StepLayout from "../../_layout/StepLayout";
import Btn from "../../common/Btn";
import InputField from "../../common/_form-inputs/InputField";
import InputSelect from "../../common/_form-inputs/InputSelect";

const VendorStep1 = ({
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
        descriptionStyle="text-center"
        description="Set up your shop by completing the following details"
        logoContainerStyle=""
        headContainerStyle="mt-10"
      />

      <div className="mt-6 mb-8 space-y-5">
        <InputSelect
          label="Country"
          labelStyle="text-sm font-DMSansMedium"
          placeholder="Choose Your country"
          containerStyle=""
          inputContainerStyle="h-14 border border-[#D0D5DD] rounded-[6px] px-4 py-2"
          selectOptions={["Nigeria"]}
          contentStyle="px-5 py-7"
          handleSelect={(option: string) => console.log(option)}
        />

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
      </div>

      <Btn
        text="Next"
        containerStyle="w-full h-12 rounded-[8px] font-DMSansBold"
        onClick={nextStep}
      />
    </form>
  );
};

export default VendorStep1;
