import { createContext, useReducer, useEffect } from "react";
const CART_ACTION_TYPES = {
  SET_CART_ITEM: "SET_CART_ITEM",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_TOTAL_PRICE: "SET_TOTAL_PRICE",
  SET_IS_OPEN: "SET_IS_OPEN",
};
const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
  isOpen: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPES.SET_CART_COUNT:
      return { ...state, cartCount: payload };
    case CART_ACTION_TYPES.SET_TOTAL_PRICE:
      return { ...state, totalPrice: payload };
    case CART_ACTION_TYPES.SET_IS_OPEN:
      return { ...state, isOpen: !state.isOpen };
    default:
      throw new Error(`Unhandled type ${type} in Cart's Reducer`);
  }
};

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
  const [{ cartItems, cartCount, totalPrice, isOpen }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );

  const addItemToCart = (productToAdd) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEM,
      payload: addItem(cartItems, productToAdd),
    });
  };

  const newCartCount = () => {
    const newCartCount = cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
    dispatch({ type: CART_ACTION_TYPES.SET_CART_COUNT, payload: newCartCount });
  };

  const newTotalPrice = () => {
    const total = cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity * currentItem.price,
      0
    );
    dispatch({ type: CART_ACTION_TYPES.SET_TOTAL_PRICE, payload: total });
  };
  const removeItemFromCart = (cartItemToRemove) =>
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEM,
      payload: removeItem(cartItems, cartItemToRemove),
    });

  const directRemoveItemFromCart = (cartItemToRemove) =>
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEM,
      payload: directRemoveItem(cartItems, cartItemToRemove),
    });

  const setIsOpen = () => dispatch({ type: CART_ACTION_TYPES.SET_IS_OPEN });

  useEffect(() => {
    newCartCount();
  }, [cartItems]);

  useEffect(() => {
    newTotalPrice();
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
