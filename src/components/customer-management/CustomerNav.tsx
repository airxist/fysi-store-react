import { Link } from "react-router-dom";
import { customerNav } from "../../constants";
import IconWrapper from "../common/IconWrapper";
import RegularList from "../common/RegularList";

const CustomerNav = () => {
  return (
    <nav className="w-[15rem] bg-white min-h-[200px] hidden md:block">
      <ul>
        <RegularList
          data={customerNav}
          renderComponent={(navoptions) => {
            return (
              <>
                {navoptions.map((navItem) => {
                  return (
                    <li
                      key={navItem.title}
                      className="px-4 py-2 text-sm gap-x-2 h-9 font-inter hover:bg-forest_green-50"
                    >
                      <Link to={navItem.href} className="flex items-center">
                        <IconWrapper icon={navItem.icon} containerStyle="size-5 mr-3" />
                        {navItem.title}
                      </Link>
                    </li>
                  );
                })}
              </>
            );
          }}
        />
      </ul>
    </nav>
  );
};

export default CustomerNav;
