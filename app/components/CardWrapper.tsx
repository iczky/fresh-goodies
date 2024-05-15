"use client";

import Card from "@/components/Card";
import useProduct from "@/hook/useProduct";

const CardWrapper = () => {
  const { products } = useProduct();

  return (
    <div className="grid grid-cols-2 gap-4 px-5">
      {products.map(({ imageUrl, name, price, weight }, index) => (
        <Card
          img={imageUrl}
          name={name}
          price={price}
          weight={weight}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardWrapper;
