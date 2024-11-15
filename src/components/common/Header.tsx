// import React from "react";

import { icons } from "../../constants";
import Btn from "./Btn";
import HorizontalNav from "./HorizontalNav";
import InputField from "./InputField";
import CallToActionNav from "./CallToActionNav";

const Header = () => {
  return (
    <header>
      <div className="hidden h-12 text-xs font-medium md:flex-apart md:block bg-forest_green-700 padded text-forest_green-50">
        <p className="flex-center">
          <span>
            <img src={icons.call} alt="phone" />
          </span>
          +09112312345
        </p>

        <div className="divide-x-2 flex-center">
          <p className="pr-2">Get 50% Off on Selected Items</p>
          <p className="pl-2">Sell on Fysi</p>
        </div>

        <span />
      </div>

      <div className="flex items-center padded h-20 md:h-[92px] gap-x-10">
        <div className="flex-center gap-x-2">
          <Btn
            IconLeft={<img src={icons.menu} alt="menu" />}
            btnVariant="transparent"
            containerStyle="md:hidden"
          />

          <div className="font-bold flex-center">
            <img src={icons.bag} alt="bag" />
            <p className="text-[28px]">Fysi</p>
          </div>
        </div>

        <div className="flex-1 flex-apart">
          <div className="flex items-center">
            <Btn
              IconLeft={<img src={icons.menu} alt="menu" />}
              btnVariant="transparent"
              containerStyle="hidden lg:block"
            />

            <HorizontalNav />
          </div>

          <div className="border bg-[#F0F2F5] rounded-[6px] border-forest_green-300 h-9 hidden lg:flex-apart max-w-[347px] flex-1">
            <InputField
              icon={icons.search}
              placeholder="Search Categories"
              inputStyle="bg-transparent ml-1 border-none outline-none text-sm"
              inputContainerStyle="flex items-center px-3 py-2"
              value=""
              onChange={() => {}}
            />

            <Btn
              text="Search"
              containerStyle="h-full rounded-[4px] px-4 py-2 text-sm"
            />
          </div>

          <CallToActionNav />
        </div>
      </div>

      <div className="mt-3 mb-8 padded md:hidden">
        <div className="border bg-white rounded-[6px] border-[#D0D5DD] flex-center h-9">
          <InputField
            containerStyle="flex-1"
            icon={icons.search}
            placeholder="Search Categories"
            inputStyle="bg-transparent ml-1 border-none outline-none text-sm"
            inputContainerStyle="flex items-center px-3 py-2"
            value=""
            onChange={() => {}}
          />

          <Btn
            text="Search"
            containerStyle="h-full rounded-[4px] px-4 py-2 text-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
