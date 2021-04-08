const initialNewsState = {
  layoutType: "lg",
};
const layoutReducer = (state = initialNewsState, action) => {
  switch (action.type) {
    case TOGGLETYPE:
      return {
        ...state,
        layoutType: action.payload,
      };
    default:
      return state;
  }
};

export const TOGGLETYPE = "TOGGLETYPE";
export default layoutReducer;
