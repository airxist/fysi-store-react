const CatProdCard = ({
  productImage,
  title,
}: {
  productImage: string;
  title: string;
}) => {
  return (
    <div className="relative w-[189.14px] h-[231px] lg:w-[calc(100%/3)] lg:h-[304px] rounded-[8px] overflow-hidden inline-block">
      <img
        src={productImage}
        alt={title}
        className="object-cover object-center size-full"
      />

      <div className="text-white bg-forest_green-500 absolute bottom-0 left-0 py-[14px] px-4 rounded-es-[8px] rounded-se-[8px] font-semibold">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CatProdCard;
