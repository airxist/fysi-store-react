import RegularList from "../common/RegularList";
import { PRODUCT_ON_DEMAND } from "../../constants";
import ProductCard from "../common/cards/ProductCard";
import Btn from "../common/Btn";

const ProductOnDemand = () => {
  return (
    <div className="mt-6 mb-8 padded">
      <RegularList
        data={PRODUCT_ON_DEMAND}
        renderComponent={(products) => (
          <>
            {products.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </>
        )}
        dataContainerStyle="mt-3 text-nowrap space-x-6 overflow-hidden overflow-x-scroll no-scrollbar"
        listHeader={() => (
          <div className="flex-apart">
            <p className="font-bold text-xl md:text-[28px]">
              Products On Demand
            </p>

            <Btn text="See More" btnVariant="transparent" containerStyle="text-black" />
          </div>
        )}
      />
    </div>
  );
};

export default ProductOnDemand;
