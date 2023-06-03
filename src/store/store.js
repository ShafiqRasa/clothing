import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middlerwares = [logger];
const composeEnhancer = compose(applyMiddleware(...middlerwares));

export const store = createStore(rootReducer, undefined, composeEnhancer);
