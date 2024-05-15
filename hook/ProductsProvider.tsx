import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "@/types/product";

interface ProductContextProps {
  products: Product[];
  loading: boolean;
  category: string[];
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/products");
        const data: Product[] = await response.json();
        const uniqueCategory = [
          ...new Set<string>(data.map((item) => item.category)),
        ];

        const categoriesArray = Array.from(uniqueCategory);

        setCategory(categoriesArray);
        setProducts(data);
      } catch (error) {
        console.log(error, "====================Error================");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, category }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export { ProductsProvider, useProductContext };
