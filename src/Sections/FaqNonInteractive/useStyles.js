import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";
const breakpoints = createBreakpoints({});
const colors = Colors;
const useStyles = makeStyles((theme) => ({
  leftAlignment: {
    textAlign: "left",
    padding: "20px",
    background: `linear-gradient(#FFF, #FFF), 
        linear-gradient(to right, ${colors.coldBlue}, #FFF)`,
    backgroundOrigin: "padding-box, border-box",
    backgroundRepeat: "no-repeat" /* this is important */,
    border: "5px solid transparent",
  },
  rightAlignment: {
    textAlign: "right",
    padding: "20px",
    background: `linear-gradient(#FFF, #FFF), 
        linear-gradient(to left, ${colors.coldBlue}, #FFF)`,
    backgroundOrigin: "padding-box, border-box",
    backgroundRepeat: "no-repeat" /* this is important */,
    border: "5px solid transparent",
  },
}));

export default useStyles;
