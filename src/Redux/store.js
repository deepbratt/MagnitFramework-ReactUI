import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";
import { loadState, saveState } from "../Redux/localStorage";

const middleware = [thunk, createLogger()];
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// To persist state and restore it after refresh
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
