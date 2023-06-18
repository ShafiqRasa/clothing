import { CreateAction } from "../../utils/reducer";
import { CATEGORIES_ACTION_TYPES } from "./category-types";
import { getDataFromDB } from "../../utils/firebase/firebase-api.config";

export const setCategories = (categories) => {
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
};

export const fetchCategories = (categories) =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START, categories);

export const fetchCategorySuccess = (categories) =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FAILED, error);

/**
 * redux-observable and redux-saga redux middleware are similier to the redux-thunk middleware
 * Action creater function of redux-thunk Middleware is as below.
 * This is actually out thunk, it returns a function with receive a dispatch as a parameter, and based on the Async Call's response we are gonna dispatch different type of action
 *
 */

export const fetchCategoriesAsync = (dispatch) => {
  return async () => {
    dispatch(setCategories());
    try {
      const categories = await getDataFromDB("categories");
      dispatch(fetchCategorySuccess(categories));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error));
    }
  };
};
