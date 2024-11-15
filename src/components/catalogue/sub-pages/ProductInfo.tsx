import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { constructQuery } from "../../../lib/utils";
import { PRODUCTS } from "../../../constants";
import IconWrapper from "../../common/IconWrapper";
import ProductDescription from "../ProductDescription";
import ProductCta from "../ProductCta";
import Reviews from "../Reviews";
import NewIns from "../../home/NewIns";

const ProductInfo = () => {
  const { search } = useLocation();
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    const { productCategory, productId } = constructQuery(search);

    const product = PRODUCTS[productCategory].find(
      (product) => product.id === Number(productId)
    );
    setProduct(product ?? null);
  }, []);

  return (
    <section className="pb-14">
      <div className="md:flex gap-x-[14px]">
        <IconWrapper
          containerStyle="w-full h-[275px] md:h-[457px] md:w-1/2 border-[0.5px] rounded-[8px] overflow-hidden"
          icon={product?.productImage ?? "default"}
        />

        <div className="mt-[14px] md:mt-0 md:w-1/2 max-w-[543px]">
          <ProductDescription
            productName={product?.productName ?? "product name"}
            category={product?.category ?? "default"}
            reviews={product?.reviews ?? 3}
            rating={product?.rating ?? 3}
            price={product?.price ?? 3}
            serialId={product?.serialId ?? "default"}
            description={product?.description ?? "default"}
            features={product?.features ?? []}
          />

          <ProductCta />
        </div>
      </div>

      <Reviews />

      <NewIns />
    </section>
  );
};

export default ProductInfo;
