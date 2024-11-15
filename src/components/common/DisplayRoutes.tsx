import { Link, useLocation } from "react-router-dom";
import IconWrapper from "./IconWrapper";
import { icons } from "../../constants";

const DisplayRoutes = () => {
  const { pathname } = useLocation();

  const routes = pathname.split("/").filter(Boolean);
  console.log(routes);

  return (
    <div className="hidden mt-5 mb-[52px] lg:flex items-center gap-x-2">
      <Link to="/">Home</Link>
      {routes.map((item) => {
        return (
          <>
            <IconWrapper
              icon={icons.arrow}
              containerStyle="size-4 -rotate-90"
            />
            <Link to="/">{item.replace("%20", " ")}</Link>
          </>
        );
      })}
    </div>
  );
};

export default DisplayRoutes;
