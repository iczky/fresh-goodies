import { useProductContext } from "@/hook/ProductsProvider";
import { useShoppingCart } from "@/hook/ShoopingCartProvider";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";
import { CircleMinus, CirclePlus, Minus, Plus } from "lucide-react";
import Image from "next/image";

const ItemsCart: React.FC<CartItem> = (props) => {
  const { products } = useProductContext();
  const { items, addItem, removeItem } = useShoppingCart();

  const currentProduct = products.find((i) => i.id === props.productId);
  const currentItem = items.find((i) => i.productId === props.productId);

  if (!currentProduct) {
    return <div className="">Error</div>;
  }

  const handleAdd = () => {
    const quantityToAdd = currentItem
      ? currentProduct.metadata / 1000
      : currentProduct.weight / 1000;
    addItem(currentProduct, quantityToAdd);
  };

  const handleMinus = () => {
    addItem(currentProduct, -(currentProduct.metadata.increment / 1000));
    if (currentItem?.quantity <= weight / 1000) {
      removeItem(currentProduct.id);
    }
  };

  const weight = (currentProduct.weight * props.quantity) / 1000;
  const price = currentProduct.price * weight * 1000;

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
              <Minus onClick={handleMinus} />
            </div>
            <p>{`${weight.toFixed(2)} kg`}</p>
            <div className="bg-card-bg rounded-full p-1">
              <Plus onClick={handleAdd} />
            </div>
          </div>
        </div>
      </div>
      <p className="self-end">{`$${price.toFixed(2)}`}</p>
    </div>
  );
};

export default ItemsCart;
