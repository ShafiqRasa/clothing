import { createSelector } from "reselect";
import { stateType } from "../store";
import { CategoryMap, initialStateType } from "./categories-slice";
/** using createSelector from reselect library we are gonna add memoization(catching) to our redux */
/**
 * reducer method is going to goes through single item inside of an array,
 * and manipulate it according to our wishes
 */

const selectCategoriesSelector = (state: stateType): initialStateType =>
  state.categories;

const selectCategories = createSelector(
  [selectCategoriesSelector],
  (categoriesSlice) => categoriesSlice.categories
);
export const categoriesSelector = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((accumelator, category) => {
      const { title, items } = category;
      accumelator[title.toLowerCase()] = items;
      return accumelator;
    }, {} as CategoryMap)
);
