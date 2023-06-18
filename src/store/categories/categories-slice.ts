import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type itemType = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};
export type categoriesType = {
  title: string;
  items: itemType[];
};
export type initialStateType = {
  categories: categoriesType[];
};
const initialState: initialStateType = {
  categories: [],
};
export type CategoryMap = {
  [key: string]: itemType[];
};
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<categoriesType[]>) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
