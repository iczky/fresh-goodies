"use client";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
// import {
//   addItem as addCartItem,
//   removeItem as removeCartItem,
//   updateItemQuantity as updateCartItemQuantity,
//   getTotalPrice as calculateTotalPrice,
// } from "@/lib/cartUtils";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";
import { useProductContext } from "./ProductsProvider";

// Define the context interface
interface ShoppingCartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: number) => void;
  updateItemQuantity: (productId: number, quantity: number) => void;
  getTotalPrice: () => number;
}

// Create the context
const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
);

// Create the provider component
export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { products } = useProductContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/cart");
        const data: CartItem[] = await response.json();

        setItems(data);
      } catch (error) {
        console.log(error, "=======Error=========");
      }
    };
  }, []);

  const addItem = (product: Product, quantity: number) => {
    const newItem = { productId: product.id, quantity };

    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.productId === product.id
      );
      console.log(existingItem);
      if (existingItem !== undefined) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + quantity,
        };
        const updatedItems = prevItems.map((item) =>
          item.productId === product.id ? updatedItem : item
        );
        updateItemToDb(updatedItem);

        return updatedItems;
      } else {
        const updatedItems = [...prevItems, newItem];
        addItemToDb(newItem);
        return updatedItems;
      }
    });
  };

  const removeItem = (productId: number) => {
    setItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.productId !== productId)
    );
  };

  const updateItemQuantity = (productId: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.productId === productId
          ? {
              ...prevItem,
              quantity,
            }
          : prevItem
      )
    );
  };

  const getTotalPrice = () => {
    const eachTotal = items.map((each) => {
      const currentProduct = products.find((i) => i.id === each.productId);
      if (currentProduct) return each.quantity * currentProduct.price;
      return 0;
    });
    return eachTotal.reduce((total, item) => total + item);
  };

  const updateItemToDb = async (updatedItem: CartItem) => {
    try {
      await fetch("http://localhost:8080/cart/" + updatedItem.productId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...updatedItem, id: updatedItem.productId }),
      });
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const addItemToDb = async (updatedItem: CartItem) => {
    try {
      await fetch("http://localhost:8080/cart/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...updatedItem, id: updatedItem.productId }),
      });
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{ items, addItem, removeItem, updateItemQuantity, getTotalPrice }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Create a custom hook to use the shopping cart context
export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};
