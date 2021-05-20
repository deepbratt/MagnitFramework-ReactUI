import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";
const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({
  root: { position: "relative", width:"100%", height:"100%"},
  wrapper: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: `translate(-50%, -50%)`,
  },
  middleImage: {
      width:"200px",
    cursor: "pointer",
    // position:"relative",
    "&:hover path:nth-of-type(1)": {
      fill: Colors.shineBlue,
    },
  },
  leftPath: {
    position: "absolute",
    left: "-20%",
    top: "50%",
    transform: `translate(-50%, -50%)`,
    width: "110px",
    height: "auto",
  },
  rightPath: {
    position: "absolute",
    right: "-20%",
    top: "50%",
    transform: `translate(50%, -50%)`,
    width: "110px",
    height: "auto",
  },
  leftMid: {
    position: "absolute",
    right: "270%",
    top: "50%",
    transform: `translate(0%, -50%)`,
    width: "100%",
  },
  leftTop: {
    position: "absolute",
    right: "180%",
    top: "0",
    transform: `translate(-50%, -50%)`,
    width: "100%",
  },
  leftBottom: {
    position: "absolute",
    right: "180%",
    bottom: "0%",
    transform: `translate(-50%, 50%)`,
    width: "100%",
  },
  rightMid: {
    position: "absolute",
    left: "20%",
    top: "50%",
    transform: `translate(100%, -50%)`,
    width: "100%",
  },
  rightTop: {
    position: "absolute",
    left: "80%",
    top: "0%",
    transform: `translate(0%, -50%)`,
    width: "100%",
  },
  rightBottom: {
    position: "absolute",
    left: "80%",
    bottom: "0%",
    transform: `translate(0%, 50%)`,
    width: "100%",
  },
}));

export default useStyles;
