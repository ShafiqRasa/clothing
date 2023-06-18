import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview";
import Category from "../category/Category";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/category-actions";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fun = fetchCategoriesAsync(dispatch);
    console.log(fun);
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
