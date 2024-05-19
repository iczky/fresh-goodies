"use client";

import Card from "@/components/Card";
import { useProductContext } from "@/hook/ProductsProvider";
import useProduct from "@/hook/useProduct";
import ToCartButton from "./ToCartButton";
import { useState } from "react";
import { useShoppingCart } from "@/hook/ShoopingCartProvider";

const CardWrapper = () => {
  const { products } = useProductContext();
  const { getTotalPrice } = useShoppingCart();
  const [currentPositionIndex, setCurrentPositionIndex] = useState<number>(0);

  const handleNextProduct = () => {
    setCurrentPositionIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const totalPrice = getTotalPrice();

  console.log(totalPrice);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 relative">
      {products.map((product, index) => (
        <Card key={product.id} {...product} />
      ))}
      <ToCartButton totalPrice={totalPrice} />
    </div>
  );
};

export default CardWrapper;
