import { createStore, compose, applyMiddleware } from "redux";
import { loggerMiddleware } from "./middlerware/logger";
import { rootReducer } from "./root-reducer";
import createSagaMilddleware from "redux-saga";
import { rootSaga } from "./root-saga";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMilddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlerwares = [
  process.env.NODE_ENV !== "production" && loggerMiddleware,
  sagaMiddleware,
];
const composeEnhancer = compose(applyMiddleware(...middlerwares));

export const store = createStore(persistedReducer, undefined, composeEnhancer);

export const persiststor = persistStore(store);

sagaMiddleware.run(rootSaga);
