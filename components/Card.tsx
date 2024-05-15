"use client";

import CardPriceChange from "@/app/components/CardPriceChange";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface cardProps {
  img: string;
  price: number;
  name: string;
  weight: number;
}

const Card: React.FC<cardProps> = ({ img, price, name, weight }) => {
  const [priceCard, setPriceCard] = useState<number>(price * 1000);
  const [weightCard, setWeightCard] = useState<number>(weight / 1000);
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleClick = () => {
    setIsShow(true);
    setPriceCard((prev) => prev + price * 100);
    setWeightCard((prev) => prev + 0.1);
  };

  const handleClickMinus = () => {
    setPriceCard((prev) => prev - price * 100);
    setWeightCard((prev) => prev - 0.1);
  };

  return (
    <div className="px-4 py-4 rounded-lg bg-card-bg">
      <div className="flex flex-col gap-5">
        <div className="flex w-auto h-auto">
          <Image
            src={img}
            width={1000}
            height={1000}
            alt="Card Img"
            className="mix-blend-darken object-cover aspect-square"
          />
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
            handleAdd={handleClick}
            handleMinus={handleClickMinus}
          />
        ) : (
          <div className="flex justify-between items-center">
            <p className="opacity-50">{`${weightCard.toFixed(2)} KG`}</p>
            <CirclePlus size={30} onClick={handleClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
