import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";

const { BlueRibbon, HarlequinRgb, Harlequin } = Colors;
const breakpoints = createBreakpoints({});

export const missionStyles = makeStyles((theme) => ({
  grid: {
    overflow: "hidden",
  },
  root: {
    backgroundColor: BlueRibbon,
    paddingTop: "20px",
    position: "relative",
  },
  card: {
    width: "30%",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    margin: "20px",
    cursor: "pointer",
    [breakpoints.only("md")]: {
      width: "30%",
    },
    [breakpoints.only("sm")]: {
      width: "40%",
    },
    [breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  card2: {
    width: "30%",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    margin: "20px",
    cursor: "pointer",
    [breakpoints.only("md")]: {
      width: "30%",
    },
    [breakpoints.only("sm")]: {
      width: "40%",
    },
    [breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  Icon: {
    width: "70px",
    filter: HarlequinRgb,
  },
  leftPattern: {
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: 0,
  },
  rightPattern: {
    position: "absolute",
    right: "0px",
    bottom: "0px",
  },
  underlined: {
    position: "relative",
    zIndex: 1,
    "&:after": {
      position: "absolute",
      height: "3px",
      content: '""',
      width: "100px",
      zIndex: -1,
      right: "38%",
      color: "#000",
      backgroundColor: Harlequin,
      [breakpoints.down("md")]: {
        right: "35%",
      },
      [breakpoints.down("sm")]: {
        right: "36%",
      },
      [breakpoints.down("sm")]: {
        right: "32%",
      },
    },
  },
}));
