import { useShoppingCart } from "@/hook/ShoopingCartProvider";
import CartDrawer from "./CartDrawer";

const ToCartButton: React.FC<{ totalPrice: number }> = ({ totalPrice }) => {
  return (
    <CartDrawer>
      <div className="px-5">
        <div className="fixed bottom-[3%] flex justify-between p-4 rounded-full bg-black text-white w-4/5">
          <p>Cart</p>
          <p>{`$${totalPrice.toFixed(2)}`}</p>
        </div>
      </div>
    </CartDrawer>
  );
};

export default ToCartButton;
