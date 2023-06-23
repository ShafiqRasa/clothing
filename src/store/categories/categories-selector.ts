import { createSelector } from "reselect";
import { initialState, categoryMap } from "./category-types";
import { rootState } from "../store";
/**
 * reducer method is going to goes through single item inside of an array,
 * and manipulate it according to our wishes
 */
const selectCategoriesReducer = (state: rootState): initialState =>
  state.categories;

const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): categoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as categoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);
