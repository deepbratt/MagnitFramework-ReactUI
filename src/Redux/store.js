import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "layoutReducer",
  storage: storage,
  whitelist: ["layoutReducer"], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, createLogger()];

const store = createStore(
  pReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const persistor = persistStore(store);

export { persistor, store };
