import { useLocation } from "react-router-dom";
import { icons, PRODUCTS } from "../../constants";
import RegularList from "../common/RegularList";
import ProductCard from "../common/cards/ProductCard";
import Btn from "../common/Btn";
const ShowCaseProducts = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex-1">
      <div className="mb-6">
        <p className="text-xl font-medium">
          {pathname.slice(1).replace("%20", " ")}
        </p>

        <div className="flex items-center mt-3 md:hidden gap-x-2">
          <Btn
            IconLeft={<img src={icons.funnel} alt="icon" />}
            text="Filter"
            IconRight={<img src={icons.arrow} />}
            containerStyle="flex-center gap-x-2 font-medium w-1/2 py-3 rounded-[8px]"
            btnVariant="outline"
          />
          <Btn
            IconLeft={<img src={icons.funnel} alt="icon" />}
            text="Sort by"
            IconRight={<img src={icons.arrow} />}
            containerStyle="flex-center gap-x-2 font-medium w-1/2 py-3 rounded-[8px]"
            btnVariant="outline"
          />
        </div>
      </div>

      <RegularList
        data={PRODUCTS["accessories"]}
        dataContainerStyle="gap-x-2 gap-y-4 flex flex-wrap justify-between"
        renderComponent={(products) => (
          <>
            {products.map((product) => (
              <ProductCard
                {...product}
                containerStyle="w-[calc(50%-4px)] lg:w-[calc(25%-6px)]"
              />
            ))}
          </>
        )}
      />
    </div>
  );
};

export default ShowCaseProducts;
