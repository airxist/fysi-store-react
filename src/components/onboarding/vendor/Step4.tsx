import StepLayout from "../../_layout/StepLayout";
import InputField from "../../common/_form-inputs/InputField";
import InputSelect from "../../common/_form-inputs/InputSelect";
import VendorConfirmAccount from "../../common/modals/VendorConfirmAccount";

const VendorStep4 = ({
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
          labelStyle="text-sm font-DMSansMedium"
          name="phone"
          label="Account Type"
          placeholder="Phone number"
          inputContainerStyle="h-14"
          inputStyle="size-full font-DMSansRegular text-sm outline-none rounded-[6px] px-4 border border-[#D0D5DD]"
          value=""
        />
        <InputField
          labelStyle="text-sm font-DMSansMedium"
          label="Shop Name"
          name="password"
          placeholder="Your passowrd"
          inputContainerStyle="h-14"
          inputStyle="size-full font-DMSansRegular text-sm outline-none rounded-[6px] px-4 border border-[#D0D5DD]"
          value=""
        />
        <InputSelect
          label="Shipping Zone"
          labelStyle="text-sm font-DMSansMedium"
          placeholder="select your shipping zone"
          containerStyle=""
          inputContainerStyle="h-14 border border-[#D0D5DD] rounded-[6px] px-4 py-2"
          selectOptions={['Nigeria']}
          contentStyle="px-5 py-7"
          handleSelect={(option: string) => console.log(option)}
        />
        <InputSelect
          placeholder="How did you hear about us"
          containerStyle=""
          inputContainerStyle="h-14 border border-[#D0D5DD] rounded-[6px] px-4 py-2"
          selectOptions={['Nigeria']}
          contentStyle="px-5 py-7"
          handleSelect={(option: string) => console.log(option)}
        />
      </div>

      <VendorConfirmAccount nextStep={nextStep} />
    </form>
  );
};

export default VendorStep4;
