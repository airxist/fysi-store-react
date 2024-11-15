import { Link } from "react-router-dom";
import { horizontalNav, icons } from "../../constants";
import { useToggle } from "../../lib/hooks/useToggle";
import Btn from "./Btn";
import Logo from "./Logo";
import IconWrapper from "./IconWrapper";

const MobileNav = () => {
  const { show, toggleOff, toggleOn } = useToggle();
  return (
    <nav>
      <Btn
        IconLeft={<img src={icons.menu} alt="menu" />}
        btnVariant="transparent"
        containerStyle="md:hidden"
        onClick={toggleOn}
      />

      {show && (
        <div className="fixed top-0 left-0 z-50 w-full h-screen px-4 overflow-y-scroll bg-forest_green-500 no-scrollbar py-7">
          <div className="flex-apart">
            <Logo />
            <Btn
              IconLeft={<img src={icons.plus} />}
              containerStyle="size-10 bg-white rounded-full rotate-45 flex-center"
              onClick={toggleOff}
            />
          </div>

          <div>
            {horizontalNav.map((item) => {
              console.log(item);
              return (
                <div className="mb-4 text-white" key={item.title}>
                  <p className="text-xl font-bold">{item.title}</p>
                  <div className="mt-2 space-y-2">
                    {item.data.map(({ title, href, icon }) => {
                      return (
                        <Link
                          to={href ?? "/"}
                          key={title}
                          className="flex items-center"
                          onClick={toggleOff}
                        >
                          {icon && (
                            <IconWrapper
                              icon={icon}
                              containerStyle="mr-2 bg-white size-5 rounded-full p-0.5"
                            />
                          )}
                          {title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
