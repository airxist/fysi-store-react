// import React from "react";
import { callToAction } from "../../constants";

const CallToActionNav = () => {
  
  return (
    <nav className="lg:block">
      <ul className="flex items-center gap-x-[30px]">
        {callToAction.map(({ title, icon }) => {
          return (
            <li className="flex-center gap-x-1" key={title}>
              {icon && (
                <span>
                  <img src={icon} alt={title} />
                </span>
              )}

              <span className="hidden lg:inline">{title}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CallToActionNav;
