import { Link, useLocation } from "react-router-dom";
import IconWrapper from "./IconWrapper";
import { icons } from "../../constants";

const RouteLink = ({ link }: { link: string }) => {
  return (
    <>
      <IconWrapper icon={icons.arrow} containerStyle="size-4 -rotate-90" />
      <Link to="/">{link.replace(/%20/gi, " ")}</Link>
    </>
  );
};

const DisplayRoutes = () => {
  const { pathname } = useLocation();

  const routes = pathname.split("/").filter(Boolean);

  return (
    <div className="mt-5 mb-7 md:mb-[52px] flex items-center gap-x-0.5 lg:gap-x-2">
      <Link to="/">Home</Link>
      {routes.map((item, index) => (
        <RouteLink key={index} link={item} />
      ))}
    </div>
  );
};

export default DisplayRoutes;
