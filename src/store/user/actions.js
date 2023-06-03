import { CreatAction } from "../../utils/reducer";
import { USER_ACTION_TYPES } from "./types";

export const setCurrentUser = (user) =>
  CreatAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
