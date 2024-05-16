"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Metadata, Product } from "@/types/product";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CartWrapper from "../cart/components/CartWrapper";

interface drawerProps {
  children: JSX.Element;
}

const CartDrawer: React.FC<drawerProps> = ({ children }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <CartWrapper />
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
