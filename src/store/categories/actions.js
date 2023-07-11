import { CreateAction } from "../../utils/reducer";
import { CATEGORIES_ACTION_TYPES } from "./types";

export const setCategories = (categories) =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START);
export const fetchCategoriesSuccess = (categories) =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FAILED, error);
