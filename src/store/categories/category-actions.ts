import { CreateAction } from "../../utils/reducer";
import { CATEGORIES_ACTION_TYPES, category } from "./category-types";
import { ActionWithPayload, ActionWithoutPayload } from "../../utils/reducer";
import { withMatcher } from "../../utils/reducer";

export type FetchCategoriesStart =
  ActionWithoutPayload<CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START)
);

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.SET_CATEGORIES_SUCCESS,
  category[]
>;
export const fetchCategoriesSuccess = withMatcher(
  (categories: category[]): FetchCategoriesSuccess =>
    CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_SUCCESS, categories)
);

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FAILED,
  Error
>;
export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FAILED, error)
);
