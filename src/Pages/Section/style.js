import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/color.constants";

const { Harlequin } = Colors;
const LayoutStyle = makeStyles((theme) => ({
  root: {
    padding: "60px 0",
  },
  content: {
    position: "relative",
    margin: "0 8%",
    "& > img": {
      position: "absolute",
      height: "146px",
    },
  },
  sectionHeader: {
    marginBottom: "60px",
    color:"rgba(21, 27, 39, 1)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  subHeader: {
    color: "grey",
  },
  underlinedStyles: {
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
      [theme.breakpoints.down("xs")]: {
        height: "11px",
      },
    },
  },
  startQuote1: {
    left: "-8%",
    top: "9%",
    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
    },
  },
  startQuote2: {
    left: "1%",
    top: "9%",
    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
    },
  },
  endQuote1: {
    right: "-8%",
    bottom: "-3%",
    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
    },
  },
  endQuote2: {
    right: "1%",
    bottom: "-3%",
    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
    },
  },
  hightlightWords: {
    background: `linear-gradient(to top, ${Harlequin} 50%, transparent 50%)`,
  },
}));

export default LayoutStyle;
