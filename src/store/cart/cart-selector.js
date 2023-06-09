import { createSelector } from "reselect";

export const cartSelector = (state) => state.cart;

const selectCartReducer = createSelector(
  [cartSelector],
  (cartSlice) => cartSlice.cartItems
);

export const newCartCount = createSelector([selectCartReducer], (cartItems) =>
  cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0)
);

export const newTotalPrice = createSelector([selectCartReducer], (cartItems) =>
  cartItems.reduce(
    (total, currentItem) => total + currentItem.quantity * currentItem.price,
    0
  )
);
