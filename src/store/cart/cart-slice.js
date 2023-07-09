import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
  isOpen: false,
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

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setIsOpen(state) {
      state.isOpen = !state.isOpen;
    },
    addItemToCart(state, action) {
      state.cartItems = addItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeItem(state.cartItems, action.payload);
    },
    directRemoveItemFromCart(state, action) {
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

// (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEM:
//       return { ...state, ...payload };
//     case CART_ACTION_TYPES.SET_IS_OPEN:
//       return { ...state, isOpen: !state.isOpen };
//     default:
//       return state;
//   }
// };
