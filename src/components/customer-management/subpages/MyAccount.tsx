import BillingAddress from "../BillingAddress";
import ShowMe from "../ShowMe";

const MyAccount = () => {
  return (
    <>
      <div className="flex-1 lg:flex gap-x-6">
        <ShowMe />
        <BillingAddress />
      </div>
    </>
  );
};

export default MyAccount;
