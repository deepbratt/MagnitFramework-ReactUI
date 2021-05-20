import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";

const breakpoints = createBreakpoints({});
const { Harlequin } = Colors;
export const missionStyles = makeStyles((theme) => ({
  grid: {
    overflow: "hidden",
  },
  root: {
    width: "100%",
  },
  card2: {
    width: "17%",
    height: "400px",
    marginRight: "13px",
    transition: "all .25s linear",
    [breakpoints.only("md")]: {
      width: "30%",
    },
    [breakpoints.down("sm")]: {
      width: "70%",
      marginRight: "0px",
    },
  },
  devSec: {
    width: "80%",
    height: "200px",
    marginTop: "20px",
    padding: "20px 0px 0px 10px",
    textAlign: "left",
  },
  image: {
    display: "flex",
    justifyContent: "flex-end",
    width: "92%",
    [breakpoints.down("sm")]: {
      width: "86%",
    },
  },
  underlined: {
    position: "relative",
    zIndex: 1,
    marginLeft: "10px",
    "&:after ": {
      position: "absolute",
      height: "17px",
      content: '""',
      zIndex: -1,
      right: 0,
      width: "130px",
      backgroundColor: Harlequin,
      bottom: "5px",
      [breakpoints.down("sm")]: {
        width: "70px",
        height: "10px",
      },
      [breakpoints.down("md")]: {
        height: "10px",
      },
    },
  },
}));
