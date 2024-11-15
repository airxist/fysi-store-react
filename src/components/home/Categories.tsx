import { CATEGORIES, icons } from "../../constants";
import Btn from "../common/Btn";
import CatProdCard from "../common/cards/CatProdCard";
import RegularList from "../common/RegularList";

const Categories = () => {
  return (
    <div className="mt-6 mb-8 padded">
      <RegularList
        data={CATEGORIES}
        renderComponent={(data) => (
          <>
            {data.map((category) => (
              <CatProdCard {...category} />
            ))}
          </>
        )}
        dataContainerStyle="mt-3 text-nowrap space-x-6 overflow-hidden overflow-x-scroll no-scrollbar"
        listHeader={() => (
          <div className="flex-apart">
            <p className="font-bold text-xl md:text-[28px]">Category</p>

            <div className="flex-center gap-x-10">
              <Btn
                IconLeft={() => (
                  <img src={icons.arrow} alt="arroe" className="size-full" />
                )}
                containerStyle="size-6 rounded-full"
              />
              <Btn
                IconLeft={() => (
                  <img src={icons.arrow} alt="arroe" className="size-full" />
                )}
                containerStyle="size-6 rounded-full"
              />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Categories;
