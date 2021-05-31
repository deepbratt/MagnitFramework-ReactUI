import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
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
    right: "150%",
    top: "50%",
    transform: `translate(0%, -50%)`,
    width: "100%",
  },
  leftTop: {
    position: "absolute",
    right: "98%",
    top: "2%",
    transform: `translate(-50%, -57%)`,
    width: "100%",
  },
  leftBottom: {
    position: "absolute",
    right: "37%",
    bottom: "0%",
    transform: `translate(-50%, 57%)`,
    width: "100%",
  },
  rightMid: {
    position: "absolute",
    left: "45%",
    top: "50%",
    transform: `translate(100%, -50%)`,
    width: "100%",
  },
  rightTop: {
    position: "absolute",
    left: "109%",
    top: "0%",
    transform: `translate(0%, -55%)`,
    width: "100%",
  },
  rightBottom: {
    position: "absolute",
    left: "109%",
    bottom: "0%",
    transform: `translate(0%, 55%)`,
    width: "100%",
  },
}));

export default useStyles;
