import { createStore, compose, applyMiddleware } from "redux";
import { loggerMiddleware } from "./middlerware/logger";
import { rootReducer } from "./root-reducer";
import createSagaMilddleware from "redux-saga";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMilddleware();

const middlerwares = [
  process.env.NODE_ENV !== "production" && loggerMiddleware,
  sagaMiddleware,
];
const composeEnhancer = compose(applyMiddleware(...middlerwares));

export const store = createStore(rootReducer, undefined, composeEnhancer);

sagaMiddleware.run(rootSaga);
