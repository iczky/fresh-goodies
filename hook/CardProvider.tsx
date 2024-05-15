import { fetchDataProduct } from "@/lib/fetchData";
import { Product } from "@/types/product";
import {
  ReactNode,
  createContext,
  useContext,
  useDebugValue,
  useEffect,
  useState,
} from "react";

interface cardContextType {
  cardData: Product[];
}

const CardContext = createContext<cardContextType | undefined>(undefined);

const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cardData, setCardData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data: Product[] = await fetchDataProduct();

        setCardData(data);
      } catch (error) {
        console.log(error, "============ERROR=================");
      }
    };

    fetchProduct();
  }, []);

  return (
    <CardContext.Provider value={{ cardData }}>{children}</CardContext.Provider>
  );
};

const useCardContext = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCardContext must be used within a ProductProvider");
  }
  return context;
};

export { CardProvider, useCardContext };
