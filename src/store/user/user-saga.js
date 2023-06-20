import { all, call, put, takeLatest } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./types";
import { getCurrentUser } from "../../utils/firebase/firebase-api.config";

import {
  signInSuccess,
  signInFieled,
  signUpSuccess,
  signUpFiled,
  signOutSuccess,
  signOutFieled,
} from "./actions";

import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-api.config";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-api.config";

import { userSignOut } from "../../utils/firebase/firebase-api.config";

/***** SECTION START *** check user session , if the user already authenticated or not! */
export function* getSnapShotFromUserAuth(userAuth, additionalInfo) {
  try {
    const userSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFieled(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapShotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFieled(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
/***** SECTION END *** check user session  */

/***** SECTION START *** sign in with google account */
export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapShotFromUserAuth, user);
    console.log(user);
  } catch (error) {
    yield put(signInFieled(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
/** SECTION END *** sign in with google accout */

/** SECTION START ** sign in with email and password */
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapShotFromUserAuth, user);
  } catch (error) {
    yield put(signInFieled(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}
/** SECTION END ** sign in with email and password */

/**** SECTIN START ** sign out user */
export function* signOutUser() {
  try {
    yield call(userSignOut);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFieled(error));
  }
}

export function* onSignOutUser() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutUser);
}
/**** SECTIN END ** sign out user */

/**** SECTIN START ** sign up user */
export function* signUpUser({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFiled(error));
  }
}

export function* signUpUserSuccess({ payload: { user, additionalInfo } }) {
  try {
    yield call(getSnapShotFromUserAuth, user, additionalInfo);
  } catch (error) {
    yield put(signUpFiled(error));
  }
}

export function* onSignUpUserSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signUpUserSuccess);
}

export function* onSignUpUser() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpUser);
}
/**** SECTIN END ** sign up user */

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutUser),
    call(onSignUpUser),
    call(onSignUpUserSuccess),
  ]);
}
