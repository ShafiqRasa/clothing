import { CreateAction } from "../../utils/reducer";
import { USER_ACTION_TYPES } from "./types";

export const setCurrentUser = (user) =>
  CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
