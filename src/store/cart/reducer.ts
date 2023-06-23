import { initialState } from "./cart-types";
import { AnyAction } from "redux";
import { setIsOpen, updateCartItemReducer } from "./cart-actions";

const INITIAL_STATE: initialState = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
  isOpen: false,
};

export const cartReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): initialState => {
  if (updateCartItemReducer.match(action)) {
    const { payload } = action;
    return { ...state, ...payload };
  }

  if (setIsOpen.match(action)) {
    return { ...state, isOpen: !state.isOpen };
  }
  return state;
};
