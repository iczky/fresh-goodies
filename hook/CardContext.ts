import { Product } from "@/types/product";
import { createContext } from "react";

interface CardContextProps {
  cardData: Product[];
}

const CardContext = createContext<CardContextProps>({
  cardData: [],
});

export default CardContext;
