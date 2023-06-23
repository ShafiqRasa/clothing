export enum CATEGORIES_ACTION_TYPES {
  SET_CATEGORIES_START = "SET_CATEGORIES_START",
  SET_CATEGORIES_SUCCESS = "SET_CATEGORIES_SUCCESS",
  SET_CATEGORIES_FAILED = "SET_CATEGORIES_FAILED",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type categoryMap = {
  [key: string]: CategoryItem[];
};

export type initialState = {
  categories: category[];
  isLoading: boolean;
  error: Error | null;
};
