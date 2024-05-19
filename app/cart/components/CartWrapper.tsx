"use client";
import { useShoppingCart } from "@/hook/ShoopingCartProvider";
import ItemsCart from "./ItemsCart";

const CartWrapper = () => {
  const { items, getTotalPrice } = useShoppingCart();

  const totalPrice = getTotalPrice().toFixed(2);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="px-4 font-bold text-2xl">Cart</h1>
      <div className="flex flex-col">
        {items.map((item) => (
          <ItemsCart {...item} key={item.productId} />
        ))}
      </div>
      <div className="px-5 py-3 flex justify-between bg-black mx-8 mb-10 text-white rounded-full">
        <p>Check Out</p>
        <p>{`$${totalPrice}`}</p>
      </div>
    </div>
  );
};

export default CartWrapper;
