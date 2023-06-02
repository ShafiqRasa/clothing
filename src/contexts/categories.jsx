import { createContext, useEffect, useReducer } from "react";
import { getDataFromDB } from "../utils/firebase/firebase-api.config";
import { CreatAction } from "../utils/reducer";
const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: "SET_CATEGORIES",
};
const INITIAL_STATE = {
  categories: {},
};
export const CategoriesContext = createContext({
  categories: {},
});

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      throw new Error(`Unhandled type ${type} in Categories's Reducer`);
  }
};
export const CategoriesProvider = ({ children }) => {
  const [{ categories }, dispatch] = useReducer(reducer, INITIAL_STATE);
  const value = { categories };

  const setCategories = (categories) =>
    dispatch(CreatAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories));

  useEffect(() => {
    const getData = async () => {
      const data = await getDataFromDB("categories");
      setCategories(data);
    };

    getData();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
