import { createContext, useReducer } from "react";
const CART_ACTION_TYPES = {
  SET_CART_ITEM: "SET_CART_ITEM",
  SET_IS_OPEN: "SET_IS_OPEN",
};
const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
  isOpen: false,
};

/**
 * reducer function should only update the state,
 * other complix logic should be somewhere else
 * for enhancement of reliability and readibility of our codes!
 * */
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return { ...state, ...payload };
    case CART_ACTION_TYPES.SET_IS_OPEN:
      return { ...state, isOpen: !state.isOpen };
    default:
      throw new Error(`Unhandled type ${type} in Cart's Reducer`);
  }
};

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
  const [{ cartItems, cartCount, totalPrice, isOpen }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );

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

  const newCartCount = (cartItems) => {
    return cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
  };

  const newTotalPrice = (cartItems) => {
    return cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity * currentItem.price,
      0
    );
  };
  const addItemToCart = (productToAdd) => {
    const newCartItems = addItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeItem(cartItems, cartItemToRemove);
    updateCartItemReducer(newCartItems);
  };

  const directRemoveItemFromCart = (cartItemToRemove) => {
    const newCartItems = directRemoveItem(cartItems, cartItemToRemove);
    updateCartItemReducer(newCartItems);
  };

  const setIsOpen = () => dispatch({ type: CART_ACTION_TYPES.SET_IS_OPEN });

  const updateCartItemReducer = (cartItems) => {
    const cartCount = newCartCount(cartItems);
    const totalPrice = newTotalPrice(cartItems);
    const payload = {
      cartItems,
      cartCount,
      totalPrice,
    };
    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEM, payload });
  };
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
