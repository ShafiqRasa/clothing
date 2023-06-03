import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";

/** root reducer is gonna combine all reducers in single place using combineReducer method from redux */
export const rootReducer = combineReducers({
  user: userReducer,
});
