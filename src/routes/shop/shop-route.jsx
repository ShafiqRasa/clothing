import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview";
import Category from "../category/Category";
import { getDataFromDB } from "../../utils/firebase/firebase-api.config";
import { setCategories } from "../../store/categories/categories-slice";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const categories = await getDataFromDB("categories");
      dispatch(setCategories(categories));
    };
    return getData;
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
