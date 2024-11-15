import { Route, Routes } from "react-router-dom";
import GeneralLayout from "../_layout/GeneralLayout";
import DisplayRoutes from "../common/DisplayRoutes";
import CatalogueIndex from "./sub-pages/CatalogueIndex";
import ProductInfo from "./sub-pages/ProductInfo";

const Catalogue = () => {
  return (
    <GeneralLayout>
      <div className="padded">
        <DisplayRoutes />

        <Routes>
          <Route index element={<CatalogueIndex />} />
          <Route path="/:id" element={<ProductInfo />} />
        </Routes>
      </div>
    </GeneralLayout>
  );
};

export default Catalogue;
