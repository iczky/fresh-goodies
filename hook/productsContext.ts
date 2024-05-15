import { Product } from "@/types/product";
import { createContext } from "react";

interface ProductContextProps {
  products: Product[];
  loading: boolean;
  category: string[];
}

const ProductContext = createContext<ProductContextProps>({
  products: [],
  loading: false,
  category: [],
});

export default ProductContext;
