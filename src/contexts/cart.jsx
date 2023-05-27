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
const removeItem = (cartItems, cartItemToRemove) => {
  // find if cartItems contains cartItemToRemove
  const itemExist = cartItems.find((item) => item.id == cartItemToRemove.id);

  // check if quantity is equal to 1, then remove that item from the cart
  if (itemExist.quantity == 1)
    return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);

  // return back the cartItem with the reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
const directRemoveItem = (cartItems, cartItemToRemove) =>
  cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);

const initial = {
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  directRemoveItemFromCart: () => {},
  totalPrice: 0,
};
export const CartContext = createContext(initial);

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeItem(cartItems, cartItemToRemove));
  };

  const directRemoveItemFromCart = (cartItemToRemove) => {
    setCartItems(directRemoveItem(cartItems, cartItemToRemove));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity * currentItem.price,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    directRemoveItemFromCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
