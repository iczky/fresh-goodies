"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Metadata, Product } from "@/types/product";
import { ArrowRight, Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CartDrawer from "./CartDrawer";
import { useShoppingCart } from "@/hook/ShoopingCartProvider";

interface drawerProps extends Product {
  children: JSX.Element;
  weightCard: number | undefined;
  handleAdd: () => void;
  handleMinus: () => void;
}

const CardDrawer: React.FC<drawerProps> = ({
  children,
  imageUrl,
  name,
  metadata,
  price,
  weight,
  weightCard,
  handleAdd,
  handleMinus,
}) => {
  const { getTotalPrice } = useShoppingCart();

  const totalPrice = getTotalPrice().toFixed(2);
  const weightDrawer = weightCard && weightCard.toFixed(2);

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col gap-3 px-4 py-10">
          <div className="flex h-auto w-auto">
            <Image
              src={imageUrl}
              width={1000}
              height={1000}
              alt="Photo Jualan"
            />
          </div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="font-semibold">In 100 grams</p>
          <div className="flex p-5 border-solid border-gray-200 border-2 rounded-lg justify-between font-bold">
            <div className="flex flex-col items-center justify-center gap-2">
              <p>{metadata.calorie}</p>
              <p className="font-light">calorie</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <p>{metadata.proteins}</p>
              <p className="font-light">proteins</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <p>{metadata.fats}</p>
              <p className="font-light">fats</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <p>{metadata.carbs}</p>
              <p className="font-light">carbs</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="py-4 px-2 flex justify-between bg-card-bg rounded-full basis-[80%]">
              <Minus onClick={handleMinus} />
              <p>{`${weightDrawer} kg`}</p>
              <Plus onClick={handleAdd} />
            </div>
            <div className="p-4 rounded-full bg-card-bg">
              <Heart />
            </div>
          </div>
          <CartDrawer>
            <div className="flex justify-between px-6 py-4 text-white bg-black rounded-full font-semibold text-xl">
              <p>To cart</p>
              <p>{`$${totalPrice}`}</p>
            </div>
          </CartDrawer>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CardDrawer;
