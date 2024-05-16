import { useProductContext } from "@/hook/ProductsProvider";
import { useShoppingCart } from "@/hook/ShoopingCartProvider";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";
import { CircleMinus, CirclePlus, Minus, Plus } from "lucide-react";
import Image from "next/image";

const ItemsCart: React.FC<CartItem> = (props) => {
  const { products } = useProductContext();

  const currentProduct = products.find((i) => i.id === props.productId);

  if (!currentProduct) {
    return <div className="">Error</div>;
  }

  return (
    <div className="flex px-4 py-6 justify-between items-center gap-3">
      <div className="flex h-auto w-auto">
        <Image
          src={currentProduct.imageUrl}
          width={100}
          height={100}
          alt="Photo"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">{currentProduct.name}</p>
        <div className="flex justify-between">
          <div className="flex justify-between items-center gap-3">
            <div className="bg-card-bg rounded-full p-1">
              <Minus />
            </div>
            <p>{`${currentProduct.weight * props.quantity} kg`}</p>
            <div className="bg-card-bg rounded-full p-1">
              <Plus />
            </div>
          </div>
        </div>
      </div>
      <p>{`$${currentProduct.price * props.quantity}`}</p>
    </div>
  );
};

export default ItemsCart;