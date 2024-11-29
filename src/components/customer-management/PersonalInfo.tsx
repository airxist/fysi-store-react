import { dummyCustomer, icons } from "../../constants";
import InputField from "../common/_form-inputs/InputField";
import TitleDescription from "../common/TitleDescription";
import UploadImage from "./UploadImage";

const PersonalInfo = () => {
  return (
    <div>
      <TitleDescription
        containerStyle="text-sm font-DMSansRegular"
        title="Personal Info"
        titleStyle="font-DMSansBold"
        description="Update your photo and personal details"
      />

      <div className="bg-white border rounded-[12px] border-gray-200 mt-8">
        <div className="p-6">
          <div className="lg:flex-center gap-x-6">
            <InputField
              containerStyle="lg:w-1/2"
              name="firstname"
              label="First Name"
              labelStyle="text-sm font-DMSansMedium"
              placeholder={dummyCustomer.name}
              inputContainerStyle="mt-1"
              inputStyle="border border-gray-300 shadow-sm rounded-[8px] px-[14px] py-[10px] outline-none size-full font-DMSansRegular"
            />

            <InputField
              containerStyle="lg:w-1/2 mt-6 lg:mt-0"
              name="lastname"
              label="Last Name"
              labelStyle="text-sm font-DMSansMedium"
              placeholder={dummyCustomer.name}
              inputContainerStyle="mt-1"
              inputStyle="border border-gray-300 shadow-sm rounded-[8px] px-[14px] py-[10px] outline-none size-full font-DMSansRegular"
            />
          </div>

          <InputField
            icon={icons.sms}
            containerStyle="mt-6"
            name="lastname"
            label="Email address"
            labelStyle="text-sm font-DMSansMedium"
            placeholder={dummyCustomer.email}
            inputContainerStyle="mt-1 border border-gray-300 shadow-sm rounded-[8px] px-[14px] py-[10px] outline-none flex items-center"
            inputStyle="border-none outline-none size-full font-DMSansRegular ml-2"
          />

          <UploadImage />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
