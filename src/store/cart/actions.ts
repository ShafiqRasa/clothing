import { CART_ACTION_TYPES } from "./types";
import { CreateAction } from "../../utils/reducer/reducer-utils";
import { cartItemType } from "./cart-slice";

export const setIsOpen = () =>
  CreateAction(CART_ACTION_TYPES.SET_IS_OPEN, null);

const newCartCount = (cartItems: cartItemType[]) => {
  return cartItems.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );
};

const newTotalPrice = (cartItems: cartItemType[]) => {
  return cartItems.reduce(
    (total, currentItem) => total + currentItem.quantity * currentItem.price,
    0
  );
};

const updateCartItemReducer = (cartItems: cartItemType[]) => {
  const cartCount = newCartCount(cartItems);
  const totalPrice = newTotalPrice(cartItems);
  const payload = {
    cartItems,
    cartCount,
    totalPrice,
  };

  return CreateAction(CART_ACTION_TYPES.SET_CART_ITEM, payload);
};
const addItem = (cartItems: cartItemType[], productToAdd: cartItemType) => {
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

const removeItem = (
  cartItems: cartItemType[],
  cartItemToRemove: cartItemType
) => {
  // find if cartItems contains cartItemToRemove
  const itemExist = cartItems.find((item) => item.id == cartItemToRemove.id);

  // check if quantity is equal to 1, then remove that item from the cart
  if (itemExist) {
    if (itemExist.quantity == 1) {
      return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
    }
  }

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
const directRemoveItem = (
  cartItems: cartItemType[],
  cartItemToRemove: cartItemType
) => cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);

export const addItemToCart = (
  cartItems: cartItemType[],
  productToAdd: cartItemType
) => {
  const newCartItems = addItem(cartItems, productToAdd);
  return updateCartItemReducer(newCartItems);
};

export const removeItemFromCart = (
  cartItems: cartItemType[],
  cartItemToRemove: cartItemType
) => {
  const newCartItems = removeItem(cartItems, cartItemToRemove);
  return updateCartItemReducer(newCartItems);
};

export const directRemoveItemFromCart = (
  cartItems: cartItemType[],
  cartItemToRemove: cartItemType
) => {
  const newCartItems = directRemoveItem(cartItems, cartItemToRemove);
  return updateCartItemReducer(newCartItems);
};
