/**
 * reducer method is going to goes through single item inside of an array,
 * and manipulate it according to our wishes
 */
export const categoriesSelector = (state) =>
  state.categories.categories.reduce((accumelator, category) => {
    const { title, items } = category;
    accumelator[title.toLowerCase()] = items;
    return accumelator;
  }, {});
