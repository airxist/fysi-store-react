import { useSearchParams } from "react-router-dom";
import MenuItem from "../MenuItem";
import ShowCaseProducts from "../ShowCaseProducts";

const CatalogueIndex = () => {
  const query = useSearchParams();
  console.log(query);
  return (
    <div className="flex items-start mb-20 gap-x-4">
      <MenuItem />
      <ShowCaseProducts />
    </div>
  );
};

export default CatalogueIndex;
