import { createSelector } from "reselect";
/**
 * reducer method is going to goes through single item inside of an array,
 * and manipulate it according to our wishes
 */
const selectCategoriesReducer = (state) => state.categories;

const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
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

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);
