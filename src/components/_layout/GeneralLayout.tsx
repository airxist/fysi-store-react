import Footer from "../common/Footer";
import Header from "../common/Header";
import Subscribe from "../common/Subscribe";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Subscribe />
      <Footer />
    </>
  );
};

export default GeneralLayout;
