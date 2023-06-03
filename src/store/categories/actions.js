import { CreatAction } from "../../utils/reducer";
import { CATEGORIES_ACTION_TYPES } from "./types";
export const setCategories = (categories) =>
  CreatAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
