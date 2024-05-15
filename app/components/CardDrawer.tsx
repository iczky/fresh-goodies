"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Metadata } from "@/types/product";
import Image from "next/image";

interface drawerProps {
  metadata: Metadata;
  imageUrl: string;
  name: string;
  children: JSX.Element;
}

const CardDrawer: React.FC<drawerProps> = ({
  metadata,
  imageUrl,
  name,
  children,
}) => {
  console.log(metadata);

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col gap-7 px-4 py-10">
          <div className="flex h-auto w-auto">
            <Image
              src={imageUrl}
              width={1000}
              height={1000}
              alt="Photo Jualan"
            />
          </div>
          <h2>{name}</h2>
          <p>In 100 grams</p>
          <div className="flex p-5 border-solid border-gray-400 border-2 rounded-lg">
            {/* <p>{`${metadata.calorie} calorie`}</p>
            <p>{`${metadata.proteins} proteins`}</p>
            <p>{`${metadata.fats} fats`}</p>
            <p>{`${metadata.carbs} carbs`}</p> */}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CardDrawer;
