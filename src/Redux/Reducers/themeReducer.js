import TOGGLE_DARKTHEME from "../Actions/themeActions/action.constants"

const themeReducer = (state = {lightThemeEnabled: "LIGHT"}, action) => {
  switch (action.type) {
    case TOGGLE_DARKTHEME:
      return {  lightThemeEnabled: action.payload };

    default:
      return state;
  }
}


export default themeReducer