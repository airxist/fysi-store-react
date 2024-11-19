import { Route, Routes } from "react-router-dom";
import GeneralLayout from "../_layout/GeneralLayout";
import CustomerNav from "./CustomerNav";
import MyAccount from "./subpages/MyAccount";
import OrderHistory from "./subpages/OrderHistory";
import Inbox from "./subpages/Inbox";
import Reviews from "./subpages/Reviews";
import Settings from "./subpages/Settings";

const CustomerManagementHome = () => {
  return (
    <GeneralLayout>
      <section className="flex items-start pt-8 pb-20 padded gap-x-10">
        <CustomerNav />

        <Routes>
          <Route index element={<MyAccount />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </section>
    </GeneralLayout>
  );
};

export default CustomerManagementHome;
