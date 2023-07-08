import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { itemType } from "../categories/categories-slice";

export type cartItemType = itemType & {
  quantity: number;
};
type initialStateType = {
  cartItems: cartItemType[];
  cartCount: Number;
  totalPrice: Number;
  isOpen: Boolean;
};
const initialState: initialStateType = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
  isOpen: false,
};

const addItem = (cartItems: cartItemType[], productToAdd: cartItemType) => {
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

const removeItem = (
  cartItems: cartItemType[],
  cartItemToRemove: cartItemType
) => {
  // find if cartItems contains cartItemToRemove
  const itemExist = cartItems.find((item) => item.id === cartItemToRemove.id);

  // check if quantity is equal to 1, then remove that item from the cart
  if (itemExist) {
    if (itemExist.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
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
) => cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsOpen(state) {
      state.isOpen = !state.isOpen;
    },
    addItemToCart(state, action: PayloadAction<cartItemType>) {
      state.cartItems = addItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action: PayloadAction<cartItemType>) {
      state.cartItems = removeItem(state.cartItems, action.payload);
    },
    directRemoveItemFromCart(state, action: PayloadAction<cartItemType>) {
      state.cartItems = directRemoveItem(state.cartItems, action.payload);
    },
  },
});

export const {
  setIsOpen,
  addItemToCart,
  removeItemFromCart,
  directRemoveItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
