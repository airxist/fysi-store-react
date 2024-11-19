// import React from "react";
import { Link } from "react-router-dom";
import { callToAction } from "../../constants";

const CallToActionNav = () => {
  return (
    <nav className="lg:block">
      <ul className="flex items-center gap-x-[30px]">
        {callToAction.map(({ title, icon, href }) => {
          return (
            <li key={title}>
              <Link to={href} className="flex-center gap-x-1">
                {icon && (
                  <span>
                    <img src={icon} alt={title} />
                  </span>
                )}

                <span className="hidden lg:inline">{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CallToActionNav;
