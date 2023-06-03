import { CART_ACTION_TYPES } from "./types";
const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
  isOpen: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return { ...state, ...payload };
    case CART_ACTION_TYPES.SET_IS_OPEN:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
