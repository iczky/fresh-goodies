"use client";

import Card from "@/components/Card";
import { useProductContext } from "@/hook/ProductsProvider";
import useProduct from "@/hook/useProduct";

const CardWrapper = () => {
  const { products } = useProductContext();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 relative">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      <ToCartButton />
    </div>
  );
};

export default CardWrapper;
