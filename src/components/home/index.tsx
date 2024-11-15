// import React from "react";
import GeneralLayout from "../_layout/GeneralLayout";
import Categories from "./Categories";
import Hero from "./Hero";
import HotDeals from "./HotDeals";
import NewIns from "./NewIns";
import ProductOnDemand from "./ProductOnDemand";
import Services from "./Services";
import Sustainability from "./Sustainability";

const HomePage = () => {
  return (
    <GeneralLayout>
      <Hero />
      <Services />
      <Categories />
      <ProductOnDemand />
      <HotDeals />
      <Sustainability />
      <NewIns />
    </GeneralLayout>
  );
};

export default HomePage;
