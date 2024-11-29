import { Route, Routes } from "react-router-dom";
import Customer from "./subpages/Customer";
import Vendor from "./subpages/Vendor";
import Login from "./subpages/Login";

const OnboardingPage = () => {
  return (
    <Routes>
      <Route index element={<Customer />} />
      <Route path="/vendor" element={<Vendor />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default OnboardingPage;
