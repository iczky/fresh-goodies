// import { Product } from "@/types/product";
// import { CartItem } from "@/types/cart"; // Import your CartItem type

// // Function to add an item to the cart
// export const addItem = (product: Product, quantity: number): CartItem[] => {
//   const existingItem = items.find((item) => item.productId.id === product.id);
//   if (existingItem) {
//     return items.map((item) =>
//       item.productId.id === product.id
//         ? { ...item, quantity: item.quantity + quantity }
//         : item
//     );
//   }
//   return [...items, { productId: product, quantity }];
// };

// // Function to remove an item from the cart
// export const removeItem = (
//   items: CartItem[],
//   productId: number
// ): CartItem[] => {
//   return items.filter((item) => item.productId.id !== productId);
// };

// // Function to update the quantity of an item in the cart
// export const updateItemQuantity = (
//   items: CartItem[],
//   productId: number,
//   quantity: number
// ): CartItem[] => {
//   return items.map((item) =>
//     item.productId.id === productId ? { ...item, quantity } : item
//   );
// };

// // Function to get the total price of the items in the cart
// export const getTotalPrice = (items: CartItem[]): number => {
//   return items.reduce(
//     (total, item) => total + item.productId.price * item.quantity,
//     0
//   );
// };
