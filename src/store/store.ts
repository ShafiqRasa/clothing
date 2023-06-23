import { createStore, compose, applyMiddleware, Middleware } from "redux";
import { loggerMiddleware } from "./middlerware/logger";
import { rootReducer } from "./root-reducer";
import createSagaMilddleware from "redux-saga";
import { rootSaga } from "./root-saga";

export type rootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMilddleware();

const middlerwares = [
  process.env.NODE_ENV !== "production" && loggerMiddleware,
  sagaMiddleware,
].filter((middlerware): middlerware is Middleware => Boolean(middlerware));
const composeEnhancer = compose(applyMiddleware(...middlerwares));

export const store = createStore(rootReducer, undefined, composeEnhancer);

sagaMiddleware.run(rootSaga);
