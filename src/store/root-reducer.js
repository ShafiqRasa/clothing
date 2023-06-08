import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-slice";
import { categoriesReducer } from "./categories/categories-slice";
import { cartReducer } from "./cart/reducer";

/** root reducer is gonna combine all reducers in single place using combineReducer method from redux */
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
