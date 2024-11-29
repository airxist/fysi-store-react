import { dummyCustomer, icons } from "../../constants";
import Btn from "../common/Btn";
import IconWrapper from "../common/IconWrapper";

const BillingAddress = () => {
  return (
    <div className="p-6 bg-white rounded-[8px] flex-1  mt-6 lg:mt-0">
      <header className="flex-apart">
        <h2 className="uppercase font-DMSansMedium">Billing Address</h2>

        <Btn
          IconLeft={<IconWrapper icon={icons.pencil} containerStyle="size-6" />}
          containerStyle=""
          btnVariant="transparent"
        />
      </header>

      <div className="border my-[14px] w-[95%]" />

      <div>
        <p className="font-DMSansRegular">{dummyCustomer.name}</p>
        <p className="text-sm font-DMSansRegular">{dummyCustomer.address}</p>
        <p className="text-sm font-DMSansRegular">{dummyCustomer.email}</p>
        <p className="text-sm font-DMSansRegular">{dummyCustomer.phone}</p>
      </div>
    </div>
  );
};

export default BillingAddress;
