import { Route, Routes } from "react-router-dom";
import GeneralLayout from "../_layout/GeneralLayout";
import ReturnPage from "./subpages/Return";
import Report from "./subpages/Report";
import Faq from "./subpages/Faq";
import Contact from "./subpages/Contact";

const Support = () => {
  return (
    <GeneralLayout>
      <Routes>
        <Route index element={<ReturnPage />} />
        <Route path="/report" element={<Report />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </GeneralLayout>
  );
};

export default Support;
