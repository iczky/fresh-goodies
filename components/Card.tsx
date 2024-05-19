"use client";

import CardDrawer from "@/app/components/CardDrawer";
import CardPriceChange from "@/app/components/CardPriceChange";
import { Metadata } from "@/types/product";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types/product";
import { useShoppingCart } from "@/hook/ShoopingCartProvider";

interface cardProps extends Product {}

const Card: React.FC<cardProps> = (props) => {
  const { price, name, weight, metadata, imageUrl, id } = props;
  const { addItem, getTotalPrice, removeItem, items } = useShoppingCart();

  // const priceCard = price * weight;

  // const [isShowCard, setIsShowCard] = useState<boolean>(false);
  const [weightCard, setWeightCard] = useState<number>(weight / 1000);
  const currentProduct = items.find((i) => i.productId === id);
  console.log(items, "itemssss");

  console.log(currentProduct, "Current product card");

  const handleAdd = () => {
    const quantityToAdd = currentProduct
      ? metadata.increment / 1000
      : weight / 1000;
    addItem(props, quantityToAdd);
  };

  const handleMinus = () => {
    addItem(props, -(metadata.increment / 1000));
    if (currentProduct?.quantity <= weight / 1000) {
      removeItem(id);
    }
  };

  return (
    <div className="px-4 py-4 rounded-lg bg-card-bg">
      <div className="flex flex-col gap-5">
        <div className="flex w-auto h-auto">
          <CardDrawer
            {...props}
            weightCard={currentProduct?.quantity}
            handleAdd={handleAdd}
            handleMinus={handleMinus}>
            <Image
              src={imageUrl}
              width={1000}
              height={1000}
              alt="Card Img"
              className="mix-blend-darken object-cover aspect-square"
            />
          </CardDrawer>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">{`$${price * weight}`}</h2>
          <p className="text-lg">{name}</p>
        </div>
        {currentProduct ? (
          <CardPriceChange
            weight={currentProduct.quantity}
            handleAdd={handleAdd}
            handleMinus={handleMinus}
            productId={id}
          />
        ) : (
          <div className="flex justify-between items-center">
            <p className="opacity-50">{`${weightCard.toFixed(2)} KG`}</p>
            <CirclePlus
              size={30}
              onClick={() => addItem(props, weight / 1000)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
