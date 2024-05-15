import { Product } from "@/types/product";
import { useEffect, useState } from "react";

const useProduct = () => {
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
        setCategory(uniqueCategory);
        setProducts(data);
      } catch (error) {
        console.log(error, "====================Error================");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    products,
    loading,
    category,
  };
};

export default useProduct;
