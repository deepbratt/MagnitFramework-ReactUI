import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";

const breakpoints = createBreakpoints({});
const { Harlequin } = Colors;

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "25px",
    margin: "0px",
    padding: "0px",
    width: "100%",
    paddingBottom: "50px",
  },
  grid: {
    margin: "0 4%",
  },
  underlined: {
    position: "relative",
    zIndex: 1,
    marginLeft: "10px",
    "&:after ": {
      position: "absolute",
      height: "17px",
      content: '""',
      left: 0,
      zIndex: -1,
      right: 0,
      color: "#000",
      backgroundColor: Harlequin,
      bottom: "5px",
      [breakpoints.down("xs")]: {
        height: "11px",
      },
    },
  },
  underlinedText: {
    position: "relative",
    zIndex: 1,
    marginLeft: "10px",
    "&:after ": {
      position: "absolute",
      height: "17px",
      content: '""',
      zIndex: -1,
      right: 0,
      color: "#000",
      width: "70px",
      backgroundColor: Harlequin,
      bottom: "5px",
      [breakpoints.down("sm")]: {
        height: "11px",
        width: "45px",
      },
    },
  },
}));
