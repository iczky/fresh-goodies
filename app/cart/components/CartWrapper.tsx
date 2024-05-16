"use client";
import { useShoppingCart } from "@/hook/ShoopingCartProvider";
import ItemsCart from "./ItemsCart";

const CartWrapper = () => {
  const { items } = useShoppingCart();

  return (
    <>
      <h1>Cart</h1>
      <div className="flex flex-col">
        {items.map((item) => (
          <ItemsCart {...item} key={item.productId} />
        ))}
      </div>
    </>
  );
};

export default CartWrapper;
