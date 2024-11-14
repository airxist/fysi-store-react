import React from "react";
import { horizontalNav } from "../../constants";

const HorizontalNav = () => {
  return (
    <nav className="hidden ml-10 lg:block">
      <ul className="flex items-center gap-x-[30px]">
        {horizontalNav.map(({ title, icon }) => {
          return (
            <li className="flex-center gap-x-1">
              {title}{" "}
              {icon && (
                <span>
                  <img src={icon} alt={title} />
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HorizontalNav;
