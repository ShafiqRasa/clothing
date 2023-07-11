import { createStore, compose, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { loggerMiddleware } from "./middlerware/logger";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const middlerwares = [loggerMiddleware, thunk];
const composeEnhancer = compose(applyMiddleware(...middlerwares));

export const store = createStore(rootReducer, undefined, composeEnhancer);
