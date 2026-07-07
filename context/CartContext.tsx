"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type CartItem = {
  id: number;
  slug: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
};

type CartContextType = {
  cart: CartItem[];

  addToCart: (item: CartItem) => void;

  removeFromCart: (id: number, size: string) => void;

  increaseQuantity: (id: number, size: string) => void;

  decreaseQuantity: (id: number, size: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart

  useEffect(() => {
    const savedCart = localStorage.getItem("elare-cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart

  useEffect(() => {
    localStorage.setItem("elare-cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (p) =>
          p.id === item.id &&
          p.size === item.size
      );

      if (existing) {
        return prev.map((p) =>
          p.id === item.id &&
          p.size === item.size
            ? {
                ...p,
                quantity: p.quantity + item.quantity,
              }
            : p
        );
      }

      return [...prev, item];
    });
  };

  // Remove

  const removeFromCart = (
    id: number,
    size: string
  ) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size
          )
      )
    );
  };

  // Increase

  const increaseQuantity = (
    id: number,
    size: string
  ) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease

  const decreaseQuantity = (
    id: number,
    size: string
  ) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id &&
          item.size === size
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear Cart

const clearCart = () => {
  setCart([]);
};

  return (
    <CartContext.Provider
value={{
  cart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
}}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}