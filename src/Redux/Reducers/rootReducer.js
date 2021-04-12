import { combineReducers } from "redux";
import userReducer from "./userReducer";
import layoutReducer from "./layoutReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  userReducer,
  layoutReducer,
  themeReducer,
});

export default rootReducer;
