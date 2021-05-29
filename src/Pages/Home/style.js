import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";

const { blackColor } = Colors;
const HomeStyles = makeStyles(() => ({
  leftRoot: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  rightRoot: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  readMore: {
    cursor: "pointer",
    color: blackColor,
  },
  leftPattern: {
    position: "absolute",
    left: "-5%",
    bottom: "-10%",
    zIndex: 0,
  },
  rightPattern: {
    position: "absolute",
    right: "-10%",
    top: "-10%",
  },
}));

export default HomeStyles;
