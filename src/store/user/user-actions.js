import { CreateAction } from "../../utils/reducer";
import { USER_ACTION_TYPES } from "./user-types";

export const setCurrentUser = (user) =>
  CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  CreateAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  CreateAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  CreateAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  CreateAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFieled = (error) =>
  CreateAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signOutUser = () => CreateAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  CreateAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFieled = (error) =>
  CreateAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);

export const signUpStart = (user) =>
  CreateAction(USER_ACTION_TYPES.SIGN_UP_START, user);

export const signUpSuccess = (user, additionalInfo) =>
  CreateAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalInfo });

export const signUpFiled = (error) =>
  CreateAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
