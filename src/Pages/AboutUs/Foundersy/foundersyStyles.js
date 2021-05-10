import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";

const { MoonWhite , Harlequin} = Colors;
const breakpoints = createBreakpoints({});

export const FoundersyStyles = makeStyles((theme) => ({
  grid: {
    overflow: "hidden",
  },
  root: {
    backgroundColor: MoonWhite,
    paddingTop: "30px",
    marginTop: "50px",
    marginBottom: "50px"
  },
  card: {
    marginTop: "30px",
    paddingTop: "20px",
    width: "28%",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    margin: "10px",
    cursor: "pointer",
    [breakpoints.only("md")]: {
      width: "50%",
    },
    [breakpoints.only("sm")]: {
      width: "70%",
    },
    [breakpoints.down("xs")]: {
      width: "70%",
      height: "600px",
    },
  },
  dev: {
    paddingTop: "10px",
    paddingBottom: "10px",
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
      width: "194px",
      right: 0,
      backgroundColor: Harlequin,
      bottom: "5px",
      [breakpoints.down("sm")]: {
        height: "11px",
        width: "140px",
      },
    },
  },
}));
