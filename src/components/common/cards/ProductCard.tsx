import React from "react";
import { icons } from "../../../constants";
import IconWrapper from "../IconWrapper";
import { Link } from "react-router-dom";

export interface ProductCardProps {
  productName?: string;
  productImage: string;
  price?: number;
  discount?: number;
  containerStyle: string;
  id?: number;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName = "Eco-Friendly Knitted Gown Low S...",
  productImage,
  price = 28000,
  discount = 15,
  containerStyle = "w-[224px] lg:w-[calc(100%/5)] min-h-[298px] select-none",
  id,
  category,
}) => {
  const discountedPrice = () => 3000;

  return (
    <Link
      to={`${productName}/?productId=${id}&productCategory=${category}`}
      className={`p-2 bg-white inline-block ${containerStyle}`}
    >
      <figure className="relative h-[208px]">
        <IconWrapper
          icon={icons.heart}
          containerStyle="absolute p-1 rounded-full top-2 right-2 size-6 bg-forest_green-50 flex-center"
        />

        <img
          src={productImage}
          alt={productName}
          className="object-cover object-center size-full rounded-[6px]"
        />

        <span className="absolute bg-[#E6ECE9] bottom-2 right-3 text-[#003E20] font-medium px-2 py-1 flex-center rounded-[8px]">
          -{discount}%
        </span>
      </figure>

      <div className="mt-3">
        <p className="text-xs line-clamp-1">{productName}</p>
        <p className="text-[18px] font-medium">₦{price}</p>
        {discount && <p className="line-through">₦{discountedPrice()}</p>}
      </div>
    </Link>
  );
};

export default ProductCard;
