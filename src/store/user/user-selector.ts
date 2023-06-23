import { createSelector } from "reselect";
import { initialState } from "./user-types";
import { rootState } from "../store";

export const selectUserReducer = (state: rootState): initialState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
