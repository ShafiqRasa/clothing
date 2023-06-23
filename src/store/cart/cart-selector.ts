import { initialState } from "./cart-types";
import { rootState } from "../store";
export const cartSelector = (state: rootState): initialState => state.cart;
