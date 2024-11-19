import { Route, Routes } from "react-router-dom";
import Customer from "./subpages/Customer";
import Vendor from "./subpages/Vendor";

const OnboardingPage = () => {
  return (
    <Routes>
      <Route index element={<Customer />} />
      <Route path="/vendor" element={<Vendor />} />
    </Routes>
  );
};

export default OnboardingPage;
