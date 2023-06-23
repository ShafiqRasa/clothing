import { CategoryItem } from "../categories/category-types";

export enum CART_ACTION_TYPES {
  SET_CART_ITEM = "SET_CART_ITEM",
  SET_IS_OPEN = "SET_IS_OPEN",
}

export type cartItem = CategoryItem & {
  quantity: number;
};

export type initialState = {
  cartItems: cartItem[];
  cartCount: number;
  totalPrice: number;
  isOpen?: boolean | null;
};
