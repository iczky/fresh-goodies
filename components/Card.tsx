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
  const { price, name, weight, metadata, imageUrl } = props;

  const { addItem } = useShoppingCart();

  const [priceCard, setPriceCard] = useState<number>(price * 1000);
  const [weightCard, setWeightCard] = useState<number>(weight / 1000);
  const [isShow, setIsShow] = useState<boolean>(false);

  // handle click should exist on cart's logic (addItem)
  // logic for the calculation of price and weight shoud exist on utils

  const handleAddToCart = () => {
    setIsShow(true);
    setPriceCard((prev) => prev + price * 100);
    setWeightCard((prev) => prev + 0.1);
    addItem(props, 100);
  };

  const handleClickMinus = () => {
    setPriceCard((prev) => prev - price * 100);
    setWeightCard((prev) => prev - 0.1);
  };

  return (
    <div className="px-4 py-4 rounded-lg bg-card-bg">
      <div className="flex flex-col gap-5">
        <div className="flex w-auto h-auto">
          <CardDrawer {...props} price={priceCard} weight={weightCard}>
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
          <h2 className="font-semibold text-xl">{`$${priceCard.toFixed(
            2
          )}`}</h2>
          <p className="text-lg">{name}</p>
        </div>
        {isShow ? (
          <CardPriceChange
            weight={weightCard}
            handleAdd={handleAddToCart}
            handleMinus={handleClickMinus}
          />
        ) : (
          <div className="flex justify-between items-center">
            <p className="opacity-50">{`${weightCard.toFixed(2)} KG`}</p>
            <CirclePlus size={30} onClick={handleAddToCart} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
