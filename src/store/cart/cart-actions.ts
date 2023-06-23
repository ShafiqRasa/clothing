import { CART_ACTION_TYPES, cartItem, initialState } from "./cart-types";
import {
  CreateAction,
  ActionWithoutPayload,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer";
import { CategoryItem } from "../categories/category-types";

export const setIsOpen = withMatcher(
  (): ActionWithoutPayload<CART_ACTION_TYPES.SET_IS_OPEN> =>
    CreateAction(CART_ACTION_TYPES.SET_IS_OPEN)
);

const newCartCount = (cartItems: cartItem[]) => {
  return (
    cartItems &&
    cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0)
  );
};

const newTotalPrice = (cartItems: cartItem[]) => {
  return (
    cartItems &&
    cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity * currentItem.price,
      0
    )
  );
};

export type UpdateCartItemReducer = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEM,
  initialState
>;
export const updateCartItemReducer = withMatcher(
  (cartItems: cartItem[]): UpdateCartItemReducer => {
    const cartCount = newCartCount(cartItems);
    const totalPrice = newTotalPrice(cartItems);
    const payload = {
      cartItems,
      cartCount,
      totalPrice,
    };

    return CreateAction(CART_ACTION_TYPES.SET_CART_ITEM, payload);
  }
);
const addItem = (
  cartItems: cartItem[],
  productToAdd: CategoryItem
): cartItem[] => {
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
  cartItems: cartItem[],
  cartItemToRemove: cartItem
): cartItem[] => {
  // find if cartItems contains cartItemToRemove
  const itemExist = cartItems.find((item) => item.id == cartItemToRemove.id);

  // check if quantity is equal to 1, then remove that item from the cart
  if (itemExist && itemExist.quantity == 1)
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
const directRemoveItem = (
  cartItems: cartItem[],
  cartItemToRemove: cartItem
): cartItem[] =>
  cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);

export const addItemToCart = (
  cartItems: cartItem[],
  productToAdd: cartItem
) => {
  const newCartItems = addItem(cartItems, productToAdd);
  return updateCartItemReducer(newCartItems);
};

export const removeItemFromCart = (
  cartItems: cartItem[],
  cartItemToRemove: cartItem
) => {
  const newCartItems = removeItem(cartItems, cartItemToRemove);
  return updateCartItemReducer(newCartItems);
};

export const directRemoveItemFromCart = (
  cartItems: cartItem[],
  cartItemToRemove: cartItem
) => {
  const newCartItems = directRemoveItem(cartItems, cartItemToRemove);
  return updateCartItemReducer(newCartItems);
};
