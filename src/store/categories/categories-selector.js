import { createSelector } from "reselect";
/** using createSelector from reselect library we are gonna add memoization(catching) to our redux */
/**
 * reducer method is going to goes through single item inside of an array,
 * and manipulate it according to our wishes
 */
const selectCategoriesSelector = (state) => state.categories;

const selectCategories = createSelector(
  [selectCategoriesSelector],
  (categoriesSlice) => categoriesSlice.categories
);
export const categoriesSelector = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((accumelator, category) => {
      const { title, items } = category;
      accumelator[title.toLowerCase()] = items;
      return accumelator;
    }, {})
);
