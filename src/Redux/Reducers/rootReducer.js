import { combineReducers } from "redux";
import userReducer from "./userReducer";
import layoutReducer from "./layoutReducer";

const rootReducer = combineReducers({
  userReducer,
  layoutReducer,
});

export default rootReducer;
