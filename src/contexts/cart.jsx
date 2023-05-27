import { createContext, useState, useEffect } from "react";

const addItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const itemExist = cartItems.find((item) => item.id == productToAdd.id);

  // if product is found, then increment the quantity
  if (itemExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  // if product is not found, added for the first time
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const initial = {
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
};
export const CartContext = createContext(initial);

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems(addItem(cartItems, productToAdd));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = { isOpen, setIsOpen, cartItems, addItemToCart, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
