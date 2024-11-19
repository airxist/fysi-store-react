import { Navigate, Route, Routes } from "react-router-dom";
import CustomerManagementHome from "../customer-management";
import AdminManagementHome from "../admin-management";
import VendorManagementHome from "../vendor-management";

const Private = () => {
  const user = { name: "airxist" };
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return (
      <Routes>
        <Route path="/admin/management/*" element={<AdminManagementHome />} />
        <Route
          path="/customer/management/*"
          element={<CustomerManagementHome />}
        />
        <Route path="/vendor/management/*" element={<VendorManagementHome />} />
      </Routes>
    );
  }
};

export default Private;
