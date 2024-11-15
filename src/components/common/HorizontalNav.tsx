// import React from "react";
import { horizontalNav } from "../../constants";
import ToggleContent from "./_custom_ui/ToggleContent";

const HorizontalNav = () => {
  return (
    <nav className="hidden ml-10 lg:block">
      <ul className="flex items-center gap-x-[30px]">
        {horizontalNav.map(({ title, icon, dataContainerStyle, data }) => {
          return (
            <li className="flex-center gap-x-1" key={title}>
              <ToggleContent
                label={title}
                icon={icon!}
                dataContainerStyle={dataContainerStyle}
                data={data}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HorizontalNav;
