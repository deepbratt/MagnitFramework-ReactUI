import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./Redux/Reducers/rootReducer";

const middleware = [thunk, createLogger()];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
