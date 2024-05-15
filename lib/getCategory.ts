import { Product } from "@/types/product";

export const getCategory = async () => {
  const response = await fetch("http://localhost:8080/products");
  const data: Product[] = await response.json();

  const uniqueCategory = [
    ...new Set<string>(data.map((item) => item.category)),
  ];
  return uniqueCategory;
};
