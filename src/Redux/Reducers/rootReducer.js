import { combineReducers } from "redux";
import userReducer from "./userReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  userReducer,
  themeReducer
});

export default rootReducer;
