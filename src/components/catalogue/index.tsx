import { useLocation } from "react-router-dom";
import GeneralLayout from "../_layout/GeneralLayout";
import DisplayRoutes from "../common/DisplayRoutes";
import MenuItem from "./MenuItem";
import ShowCaseProducts from "./ShowCaseProducts";

const Catalogue = () => {
  const location = useLocation();
  const routes = location.pathname.split("/").filter(Boolean);
  routes.forEach((item) => {
    console.log(item.replace("%20", " "));
  });
  return (
    <GeneralLayout>
      <div className="padded">
        <DisplayRoutes />

        <div className="flex items-start mb-20 gap-x-4">
          <MenuItem />
          <ShowCaseProducts />
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Catalogue;
