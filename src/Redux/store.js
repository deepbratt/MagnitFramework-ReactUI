import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  blackList: ["userReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const middleware = [thunk, createLogger()];

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const persistor = persistStore(store);
export { persistor, store };
