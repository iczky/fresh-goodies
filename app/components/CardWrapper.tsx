"use client";

import Card from "@/components/Card";
import { useProductContext } from "@/hook/ProductsProvider";
import useProduct from "@/hook/useProduct";
import ToCartButton from "./ToCartButton";
import { useState } from "react";

const CardWrapper = () => {
  const { products } = useProductContext();
  const [isShow, setIsShow] = useState(false);

  const handleToggleShow = (show: boolean) => {
    setIsShow(show);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 relative">
      {products.map((product) => (
        <Card
          key={product.id}
          {...product}
          isShow={isShow}
          onToggleShow={handleToggleShow}
        />
      ))}
      {isShow && <ToCartButton />}
    </div>
  );
};

export default CardWrapper;
