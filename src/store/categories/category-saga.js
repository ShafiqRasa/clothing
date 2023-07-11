import { all, call, put, takeLatest } from "redux-saga/effects";
import { CATEGORIES_ACTION_TYPES } from "./types";
import { getDataFromDB } from "../../utils/firebase/firebase-api.config";
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./actions";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getDataFromDB, "categories");
    // in Saga with put actually we're gonna dispatch the action
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCateogires() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCateogires)]);
}
