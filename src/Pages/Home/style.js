import { makeStyles } from "@material-ui/core";
import {Colors} from "../../Theme/color.constants"

const {blackColor} = Colors
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
  readMore:{
    cursor: "pointer",
    color: blackColor

  }
}));

export default HomeStyles;
