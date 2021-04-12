import TOGGLE_DARKTHEME from "./action.constants"
export const switcheroo  = (value) => ({
    type: TOGGLE_DARKTHEME ,
    payload: value
  });