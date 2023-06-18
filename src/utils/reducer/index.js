/**
 * to optimize more our reducer,
 * we are gonna write a helper function to make our dispatch parameters dynamic
 *  */
export const CreateAction = (type, payload) => ({ type, payload });
