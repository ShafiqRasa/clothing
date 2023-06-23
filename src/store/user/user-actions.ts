import {
  CreateAction,
  withMatcher,
  ActionWithPayload,
  ActionWithoutPayload,
} from "../../utils/reducer";
import { USER_ACTION_TYPES } from "./user-types";
import {
  userType,
  additionalInfoType,
} from "../../utils/firebase/firebase-api.config";
import { User } from "firebase/auth";

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  User
>;
export const setCurrentUser = withMatcher(
  (user: User): SetCurrentUser =>
    CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

export type CheckUserSession =
  ActionWithoutPayload<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export const checkUserSession = withMatcher(
  (): CheckUserSession => CreateAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export type GoogleSignInStart =
  ActionWithoutPayload<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => CreateAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;
export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    CreateAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  userType
>;
export const signInSuccess = withMatcher(
  (user: userType & { id: string }): SignInSuccess =>
    CreateAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export type SignInField = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;
export const signInFieled = withMatcher(
  (error: Error): SignInField =>
    CreateAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export type SignOutUser =
  ActionWithoutPayload<USER_ACTION_TYPES.SIGN_OUT_START>;
export const signOutUser = withMatcher(
  (): SignOutUser => CreateAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export type SignOutSuccess =
  ActionWithoutPayload<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export const signOutSuccess = withMatcher(
  (): SignOutSuccess => CreateAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export type SignOutField = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;
export const signOutFieled = withMatcher(
  (error: Error): SignOutField =>
    CreateAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  userType
>;
export const signUpStart = withMatcher(
  (user: userType): SignUpStart =>
    CreateAction(USER_ACTION_TYPES.SIGN_UP_START, user)
);

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalInfo: additionalInfoType }
>;
export const signUpSuccess = withMatcher(
  (user: User, additionalInfo: additionalInfoType): SignUpSuccess =>
    CreateAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalInfo })
);

export type SignUpField = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;
export const signUpFiled = withMatcher(
  (error: Error): SignUpField =>
    CreateAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);
