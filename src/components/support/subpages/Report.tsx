import { useState } from "react";
import Btn from "../../common/Btn";
import InputField from "../../common/_form-inputs/InputField";
import InputSelect from "../../common/_form-inputs/InputSelect";
import { issueType, resolution } from "../../../constants";

const Report = () => {
  const [reportData, setReportData] = useState({
    name: "",
    email: "",
    issue: "",
    order: "",
    product: "",
    description: "",
    resolution: "",
    addititional: "",
  });
  return (
    <section className="pt-12 padded pb-9">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="md:py-6 md:px-9 md:bg-white md:border-[0.6px] border-forest_green-500 rounded-[8px] space-y-4"
      >
        <InputField
          label="Name"
          labelStyle="text-sm font-DMSansMedium"
          placeholder="Enter your name"
          containerStyle=""
          inputContainerStyle="h-14 border border-[#D0D5DD] rounded-[6px]"
          inputStyle="size-full rounded-[6px] px-4 py-2"
          value={reportData.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setReportData({ ...reportData, name: e.target.value })
          }
        />

        <InputField
          label="Email Address"
          labelStyle="text-sm font-DMSansMedium"
          placeholder="Enter your name"
          containerStyle=""
          inputContainerStyle="h-14 border border-[#D0D5DD] rounded-[6px]"
          inputStyle="size-full rounded-[6px] px-4 py-2"
          value={reportData.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setReportData({ ...reportData, email: e.target.value })
          }
        />

        <InputSelect
          label="Issue Type"
          labelStyle="text-sm font-DMSansMedium"
          placeholder="Choose an issue type"
          containerStyle="relative"
          inputContainerStyle="h-14 border border-[#D0D5DD] rounded-[6px] px-4 py-2 bg-white"
          selectOptions={issueType}
          contentStyle="px-5 py-7"
          handleSelect={(option: string) => console.log(option)}
        />

        <InputField
          label="Order Number"
          labelStyle="text-sm font-DMSansMedium"
          placeholder="Please enter the order number related to the issue"
          containerStyle=""
          inputContainerStyle="h-14 border border-[#D0D5DD] rounded-[6px]"
          inputStyle="size-full rounded-[6px] px-4 py-2"
          value={reportData.order}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setReportData({ ...reportData, order: e.target.value })
          }
        />

        <InputField
          label="Product Name"
          labelStyle="text-sm font-DMSansMedium"
          placeholder="Please specify product name if applicable"
          containerStyle=""
          inputContainerStyle="h-14 border border-[#D0D5DD] rounded-[6px]"
          inputStyle="size-full rounded-[6px] px-4 py-2"
          value={reportData.product}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setReportData({ ...reportData, product: e.target.value })
          }
        />

        <InputField
          label="Description of the issue"
          labelStyle="text-sm font-DMSansMedium"
          placeholder="Please describe the issue in detail"
          containerStyle=""
          inputContainerStyle="h-14 border border-[#D0D5DD] rounded-[6px]"
          inputStyle="size-full rounded-[6px] px-4 py-2"
          value={reportData.description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setReportData({ ...reportData, description: e.target.value })
          }
        />

        <InputSelect
          label="Preferred Resolution"
          labelStyle="text-sm font-DMSansMedium"
          placeholder="Choose a preferred resolution"
          containerStyle=""
          inputContainerStyle="h-14 border border-[#D0D5DD] rounded-[6px] px-4 py-2"
          selectOptions={resolution}
          contentStyle="px-5 py-7"
          handleSelect={(option: string) => console.log(option)}
        />

        <InputField
          label="Additional Comments"
          labelStyle="text-sm font-DMSansMedium"
          placeholder="Any additional information you would like to provide"
          containerStyle=""
          inputContainerStyle="h-14 border border-[#D0D5DD] rounded-[6px]"
          inputStyle="size-full rounded-[6px] px-4 py-2"
          value={reportData.addititional}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setReportData({ ...reportData, addititional: e.target.value })
          }
        />

        <Btn
          text="Submit"
          containerStyle="h-14 rounded-[8px] w-full font-DMSansMedium"
        />
      </form>
    </section>
  );
};

export default Report;
