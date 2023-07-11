import { CART_ACTION_TYPES } from "./cart-types";
import { CreateAction } from "../../utils/reducer";

export const setIsOpen = () => CreateAction(CART_ACTION_TYPES.SET_IS_OPEN);

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

const updateCartItemReducer = (cartItems) => {
  const cartCount = newCartCount(cartItems);
  const totalPrice = newTotalPrice(cartItems);
  const payload = {
    cartItems,
    cartCount,
    totalPrice,
  };

  return CreateAction(CART_ACTION_TYPES.SET_CART_ITEM, payload);
};
const addItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const itemExist = cartItems.find((item) => item.id === productToAdd.id);

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
  const itemExist = cartItems.find((item) => item.id === cartItemToRemove.id);

  // check if quantity is equal to 1, then remove that item from the cart
  if (itemExist.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

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
  cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addItem(cartItems, productToAdd);
  return updateCartItemReducer(newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeItem(cartItems, cartItemToRemove);
  return updateCartItemReducer(newCartItems);
};

export const directRemoveItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = directRemoveItem(cartItems, cartItemToRemove);
  return updateCartItemReducer(newCartItems);
};
