import RegularList from "../common/RegularList";

const ProductDescription = ({
  category,
  productName,
  reviews,
  price,
  serialId,
  rating,
  description,
  features,
}: ProductProps) => {
  return (
    <div>
      <div className="pb-1 border-b">
        <h2 className="font-medium capitalize text-grey-800 md:text-[28px]">
          {category} <q className="text-[#0C111D] text-lg md:text-[28px]">{productName}</q>
        </h2>

        <div className="flex items-center text-xs gap-x-2 my-[10px]">
          <span>{rating}</span>
          <span className="text-grey-800">{reviews} reviews</span>
          <span>SKU: {serialId}</span>
        </div>

        <p className="font-bold text-forest_green-500">N{price}</p>
      </div>

      <div className="mt-4">
        <p className="text-xs text-[#0C111D] mb-5">{description}</p>

        <RegularList
          data={features}
          dataContainerStyle="flex items-center gap-x-1"
          renderComponent={(featuress) => {
            return (
              <>
                {featuress.map((feature) => (
                  <span className="text-xs bg-white border-2 border-forest_green-500 text-forest_green-600 flex-center py-2 px-4 rounded-[8px]">
                    {feature}
                  </span>
                ))}
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default ProductDescription;
