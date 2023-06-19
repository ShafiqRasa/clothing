import { CreateAction } from "../../utils/reducer";
import { CATEGORIES_ACTION_TYPES } from "./types";
import { getDataFromDB } from "../../utils/firebase/firebase-api.config";

export const setCategories = (categories) =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

const fetchCategoriesStart = () =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START);
const fetchCategoriesSuccess = (categories) =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_SUCCESS, categories);

const fetchCategoriesFailed = (error) =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categories = await getDataFromDB("categories");
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
