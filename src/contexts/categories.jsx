import { createContext, useState, useEffect } from "react";
import { getDataFromDB } from "../utils/firebase/firebase-api.config";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories };

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
