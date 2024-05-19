import { useShoppingCart } from "@/hook/ShoopingCartProvider";
import { CircleMinus, CirclePlus } from "lucide-react";

interface cardChangeProps {
  productId: number;
  weight: number;
  handleAdd: () => void;
  handleMinus: () => void;
}

const CardPriceChange: React.FC<cardChangeProps> = ({
  weight,
  handleAdd,
  handleMinus,
  productId,
}) => {
  const { items } = useShoppingCart();

  const currentItem = items.find((i) => i.productId === productId);
  const weightInDisplay = currentItem && currentItem.quantity * weight;

  return (
    <div className="flex justify-between items-center">
      <CircleMinus
        className="text-white"
        fill="black"
        size={40}
        onClick={handleMinus}
      />
      <p className="opacity-50 text-sm">{`${weightInDisplay.toFixed(2)} KG`}</p>
      <CirclePlus
        fill="black"
        className="text-white"
        size={40}
        onClick={handleAdd}
      />
    </div>
  );
};

export default CardPriceChange;
