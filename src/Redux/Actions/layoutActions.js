import { TOGGLETYPE } from "../Reducers/layoutReducer";

export const ToggleType = (layoutType) => {
  return {
    type: TOGGLETYPE,
    payload: layoutType,
  };
};

export default {
  ToggleType,
};
