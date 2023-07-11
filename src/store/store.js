import { createStore, compose, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleware } from "./middlerware/logger";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const persistConfiguation = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfiguation, rootReducer);

const middlerwares = [loggerMiddleware, thunk];
const composeEnhancer = compose(applyMiddleware(...middlerwares));

export const store = createStore(persistedReducer, undefined, composeEnhancer);

export const persistor = persistStore(store);
