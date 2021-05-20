import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";

const { BlueRibbon, HarlequinRgb, Harlequin } = Colors;
const breakpoints = createBreakpoints({});

export const missionStyles = makeStyles((theme) => ({
  grid: {
    overflow: "hidden",
  },
  root: {
    backgroundColor: BlueRibbon,
    paddingTop: "20px",
    width: "100%",
    position: "relative",
    display: "flex",
  },
  card: {
    zIndex: 1,
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    borderRadius: "5px",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    marginLeft: "20px",
    cursor: "pointer",
    [breakpoints.down("md")]: {
      width: "70%",
      height: "450px",
      marginLeft: "0px",
    },
    [breakpoints.down("xs")]: {
      height: "500px",
    },
  },
  card2: {
    zIndex: 1,
    height: "350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    borderRadius: "5px",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    marginRight: "20px",
    cursor: "pointer",
    [breakpoints.down("md")]: {
      width: "70%",
      height: "450px",
      marginRight: "0px",
    },
    [breakpoints.down("xs")]: {
      height: "550px",
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
    borderBottom: `3px solid ${Harlequin}`,
  
  },
}));
