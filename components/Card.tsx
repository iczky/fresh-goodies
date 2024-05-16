"use client";

import CardDrawer from "@/app/components/CardDrawer";
import CardPriceChange from "@/app/components/CardPriceChange";
import { Metadata } from "@/types/product";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types/product";
import { useShoppingCart } from "@/hook/ShoopingCartProvider";

interface cardProps extends Product {
  isShow: boolean;
  onToggleShow: (show: boolean) => void;
}

const Card: React.FC<cardProps> = (props) => {
  const { price, name, weight, metadata, imageUrl, isShow, onToggleShow, id } =
    props;

  const [isShowCard, setIsShowCard] = useState<boolean>(false);
  const [priceCard, setPriceCard] = useState<number>(price * weight);
  const [weightCard, setWeightCard] = useState<number>(weight / 1000);

  const { addItem, getTotalPrice, removeItem } = useShoppingCart();

  // handle click should exist on cart's logic (addItem)
  // logic for the calculation of price and weight shoud exist on utils

  const weightInKg = weight / 1000;
  const handleAddToCart = () => {
    if (weightInKg === weightCard && !isShowCard) {
      const initialQuantity = weightCard;

      addItem(props, initialQuantity);
      setIsShowCard(true);
      onToggleShow(true);
    } else if (isShowCard || weightCard > weightInKg) {
      const initialQuantity = metadata.increment / 1000;

      addItem(props, initialQuantity);
      setPriceCard((prevPrice) => prevPrice + price * 100);
      setWeightCard((prevWeight) => prevWeight + 0.1);
    } else {
      removeItem(id);
      setIsShowCard(false);
      onToggleShow(false);
    }
  };

  const handleClickMinus = () => {
    if (weightCard > weightInKg) {
      const reduceQuantity = -0.1;
      addItem(props, reduceQuantity);
      setPriceCard((prevPrice) => prevPrice - price * 100);
      setWeightCard((prevWeight) => prevWeight - 0.1);
    } else {
      removeItem(id);
      setIsShowCard(false);
      onToggleShow(false);
    }
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
        {isShowCard ? (
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
