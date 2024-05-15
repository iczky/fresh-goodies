"use client";

import Card from "@/components/Card";
import { useProductContext } from "@/hook/ProductsProvider";
import useProduct from "@/hook/useProduct";

const CardWrapper = () => {
  const { products } = useProductContext();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5">
      {products.map(({ imageUrl, name, price, weight, metadata }, index) => (
        <Card
          img={imageUrl}
          name={name}
          price={price}
          weight={weight}
          metadata={metadata}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardWrapper;
