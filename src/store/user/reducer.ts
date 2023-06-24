import { AnyAction } from "redux";
import { initialState } from "./user-types";
import {
  signInSuccess,
  signOutSuccess,
  signInFieled,
  signUpFiled,
  signOutFieled,
} from "./user-actions";

const INITIAL_STATE: initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): initialState => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload, error: null };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null, error: null };
  }

  if (
    signInFieled.match(action) ||
    signUpFiled.match(action) ||
    signOutFieled.match(action)
  ) {
    return { ...state, error: action.payload };
  }
  return state;
};
