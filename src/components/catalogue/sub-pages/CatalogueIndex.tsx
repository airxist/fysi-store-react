import MenuItem from "../MenuItem";
import ShowCaseProducts from "../ShowCaseProducts";

const CatalogueIndex = () => {
  return (
    <div className="flex items-start mb-20 gap-x-4">
      <MenuItem />
      <ShowCaseProducts />
    </div>
  );
};

export default CatalogueIndex;
