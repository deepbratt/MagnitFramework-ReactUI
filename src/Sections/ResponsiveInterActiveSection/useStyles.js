import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";
const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({
  root: { position: "relative", width:"100%", height:"100%"},

  middleImage: {
      width:"200px",
    cursor: "pointer",
    // position:"relative",
    "&:hover path:nth-of-type(1)": {
      fill: Colors.shineBlue,
    },
  },

}));

export default useStyles;
