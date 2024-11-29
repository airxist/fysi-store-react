import { icons } from "../../constants";
import HorizontalNav from "./HorizontalNav";
import CallToActionNav from "./CallToActionNav";
import SearchInputField from "./SearchInputField";
import ToggleContent from "./_custom_ui/ToggleContent";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="hidden h-12 text-xs font-medium md:flex-apart md:block bg-custom-orange-900 padded text-forest_green-50">
        <p className="flex-center">
          <span>
            <img src={icons.call} alt="phone" />
          </span>
          +09112312345
        </p>

        <div className="divide-x-2 flex-center">
          <p className="pr-2">Get 50% Off on Selected Items</p>
          <Link to="/onboarding/vendor" className="pl-2">
            Sell on Fysi
          </Link>
        </div>

        <span />
      </div>

      <div className="flex items-center padded h-20 md:h-[92px] gap-x-10">
        <div className="flex-center gap-x-2">
          <MobileNav />

          <Logo color="dark" />
        </div>

        <div className="flex-1 flex-apart">
          <div className="flex items-center">
            <ToggleContent
              icon={icons.menu}
              dataContainerStyle="pt-2 pb-6 px-2 w-[194px]"
              data={[
                { title: "My Account", icon: icons.user },
                { title: "Order History", icon: icons.history },
              ]}
              containerStyle="hidden lg:block"
              listHeader={() => (
                <Link
                  to="/"
                  className="bg-forest_green-500 text-white rounded-[8px] w-full h-9 block flex-center mb-[14px] font-bold"
                >
                  Sign In
                </Link>
              )}
            />

            <HorizontalNav />
          </div>

          <SearchInputField
            containerStyle="border bg-[#F0F2F5] rounded-[6px] border-forest_green-300 h-9 hidden lg:flex-apart max-w-[347px] flex-1"
            placeHolder="Search Categories"
            inputStyle="bg-transparent ml-1 border-none outline-none text-sm"
            inputContainerStyle="flex items-center px-3 py-2"
            value=""
            handleSearch={() => {}}
            btnStyle="h-full rounded-[4px] px-4 py-2 text-sm"
          />

          <CallToActionNav />
        </div>
      </div>

      {/* <div className="mt-3 mb-8 padded md:hidden">
        <SearchInputField
          containerStyle="border bg-white rounded-[6px] border-[#D0D5DD] flex-center h-9"
          placeHolder="Search Categories"
          inputStyle="bg-transparent ml-1 border-none outline-none text-sm"
          inputContainerStyle="flex items-center px-3 py-2"
          value=""
          handleSearch={() => {}}
          btnStyle="h-full rounded-[4px] px-4 py-2 text-sm"
        />
      </div> */}
    </header>
  );
};

export default Header;
